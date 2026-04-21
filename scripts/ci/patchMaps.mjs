import os from "node:os";
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { parseStringPromise as XMLParser, Builder } from "xml2js";
import {
  Archive,
  MPQ_FILE_REPLACEEXISTING,
  MPQ_FILE_COMPRESS,
} from "@jamiephan/stormlib";


const S2MA_REPO_URL = "https://github.com/jamiephan/HeroesOfTheStorm_S2MA.git";
const AI_REPO_URL = "https://github.com/jamiephan/HeroesOfTheStorm_AIMaps.git";

const tempDir = path.join(os.tmpdir(), "trymode20-ci");
const outputDir = process.env.OUTPUT_DIR
  ? path.resolve(process.env.OUTPUT_DIR)
  : path.join(tempDir, "output");
const mapRepoDir = path.join(tempDir, "map_repo");
const aiRepoDir = path.join(tempDir, "ai_repo");

// ensure the temp directory exists
await fs.promises.mkdir(tempDir, { recursive: true });
await fs.promises.mkdir(outputDir, { recursive: true });

// Build the trymode20.stormmap
const archive = new Archive();
archive.create(path.join(outputDir, "trymode20.stormmap"), {
  maxFileCount: 8000,
});

const sourceDir = "(10)trymemode.stormmap";
const files = (
  await Promise.all(
    (await fs.promises.readdir(sourceDir, { recursive: true })).map(
      async (f) => ({
        f,
        isFile: (await fs.promises.stat(path.join(sourceDir, f))).isFile(),
      }),
    ),
  )
)
  .filter(({ isFile }) => isFile)
  .map(({ f }) => f)
  .toSorted((a, b) => a.localeCompare(b));

for (const relativePath of files) {
  archive.addFile(path.join(sourceDir, relativePath), relativePath);
}

// Finalize the archive
archive.compact();
archive.close();

// console.log(files);

// --- Step 2: Clone map repositories ---
console.log("\n=== Cloning map repositories ===");
execSync(`git clone "${S2MA_REPO_URL}" "${mapRepoDir}"`, {stdio: "inherit"});
execSync(`git clone "${AI_REPO_URL}" "${aiRepoDir}"`, {stdio: "inherit"});

// --- Step 3: Copy the 5v5 maps from ai_repo/maps/5v5 to the map_repo/maps directory and rename as "<map_name>.stormmap" to "<map_name> AI.stormmap" ---
console.log("\n=== Copying 5v5 maps from AI repo to Map repo ===");
const aiMapsDir = path.join(aiRepoDir, "maps", "5v5");
const mapRepoMapsDir = path.join(mapRepoDir, "maps");
await fs.promises.mkdir(mapRepoMapsDir, { recursive: true });

const aiMapFiles = (await fs.promises.readdir(aiMapsDir)).filter((f) =>
  f.endsWith(".stormmap"),
);
await Promise.all(
  aiMapFiles.map(async (file) => {
    const sourcePath = path.join(aiMapsDir, file);
    const destFileName = file.replace(".stormmap", " AI.stormmap");
    const destPath = path.join(mapRepoMapsDir, destFileName);
    await fs.promises.copyFile(sourcePath, destPath);
    console.log(`Copied ${file} to ${destFileName}`);
  }),
);

console.log("\n=== Done ===");

// Loop through the files in the map_repo/maps directory and print their names
console.log("\n=== Final maps in map_repo/maps ===");
const finalMapFiles = (await fs.promises.readdir(mapRepoMapsDir)).filter((f) =>
  f.endsWith(".stormmap"),
);

const SPECIAL_INCLUDE_XML = files.filter((x) =>
  ["base.stormdata/Includes.xml"].some((prefix) =>
    x.toLowerCase().startsWith(prefix.toLowerCase().replace(/\//g, path.sep)),
  ),
)[0];

const SPECIAL_GAMEDATA_XML = files.filter((x) =>
  ["base.stormdata/GameData.xml"].some((prefix) =>
    x.toLowerCase().startsWith(prefix.toLowerCase().replace(/\//g, path.sep)),
  ),
)[0];

const baseFiles = files
  // Whitelist dir
  // base.stormassets/**/*
  // base.stormdata/Mods/**/*
  // base.stormdata/ModuleMimicLibs/**/*
  // base.stormdata/Modules/**/*
  // base.stormdata/LibTryMeMode.galaxy
  .filter((x) =>
    [
      "base.stormassets",
      "base.stormdata/mods",
      "base.stormdata/modulemimiclibraries",
      "base.stormdata/modules",
      "base.stormdata/libtrymemode.galaxy",
    ].some((prefix) =>
      x.toLowerCase().startsWith(prefix.toLowerCase().replace(/\//g, path.sep)),
    ),
  );


for (const file of finalMapFiles) {
  console.log(`Patching ${file}`);

  // Copy the .stormmap file to the output directory
  const sourcePath = path.join(mapRepoMapsDir, file);
  const destPath = path.join(outputDir, file);
  await fs.promises.copyFile(sourcePath, destPath);

  // Open the .stormmap file as an archive
  const mapPath = path.join(outputDir, file);
  const mapArchive = new Archive();
  mapArchive.open(mapPath);

  // 1. Patch the MapScript.galaxy file

  // Read the MapScript.galaxy file from the archive
  const mapScriptContent = mapArchive
    .readFileAsString("MapScript.galaxy")
    .toString();

  // Modify the following content:
  // 1.1. Find the line `"include "TriggerLibs/SupportLib"` then insert the line `include "LibTryMeMode"` immediately after it
  // 1.2. Find the line `libSprt_InitLib();` then insert the line `    libTRYM_InitLib();` immediately after it
  // 1.3. Replace `libStEx_InitLib();` with `//libStEx_InitLib();`

  const modifiedMapScriptContent = mapScriptContent
    .replace(
      /include "TriggerLibs\/SupportLib"/,
      `include "TriggerLibs/SupportLib"\ninclude "LibTryMeMode"`,
    )
    .replace(
      /libSprt_InitLib\(\);/,
      `libSprt_InitLib();\n    libTRYM_InitLib();`,
    )
    .replace(/libStEx_InitLib\(\);/, `//libStEx_InitLib();`);

  // Write the modified MapScript.galaxy back to the archive. Save to template file first, then add to archive with MPQ_FILE_REPLACEEXISTING flag
  const tempMapScriptPath = path.join(tempDir, `MapScript_${file}.galaxy`);
  await fs.promises.writeFile(tempMapScriptPath, modifiedMapScriptContent);

  mapArchive.addFile(tempMapScriptPath, "MapScript.galaxy", {
    flags: MPQ_FILE_REPLACEEXISTING,
  });

  await fs.promises.rm(tempMapScriptPath);

  // 2. For each file in basedir, copy to the root of the archive, and overwrite if already exists. Use the MPQ_FILE_REPLACEEXISTING flag to ensure it overwrites existing files.

  for (const baseFile of baseFiles) {
    mapArchive.addFile(path.join(sourceDir, baseFile), baseFile, {
      flags: MPQ_FILE_REPLACEEXISTING | MPQ_FILE_COMPRESS,
    });
  }

  // 3. Special case for Includes.xml and GameData.xml: if they exist in the archive, patch them with the version from the source directory. Use xml2js to parse and modify the XML files
  for (const specialFile of [SPECIAL_INCLUDE_XML, SPECIAL_GAMEDATA_XML]) {
    if (mapArchive.hasFile(specialFile)) {
      console.log(` >> Special Case: Patching ${specialFile} in ${file}`);
      const archiveXml = await XMLParser(
        mapArchive.readFileAsString(specialFile),
      );
      const trymodeXml = await XMLParser(
        await fs.promises.readFile(path.join(sourceDir, specialFile), "utf-8"),
      );

      if (specialFile === SPECIAL_INCLUDE_XML) {
        archiveXml?.Includes?.Path.push(...(trymodeXml?.Includes?.Path ?? []));
      } else if (specialFile === SPECIAL_GAMEDATA_XML) {
        archiveXml?.Includes?.Catalog.push(
          ...(trymodeXml?.Includes?.Catalog ?? []),
        );
      } else {
        throw new Error(`Unknown special file: ${specialFile}`);
      }

      const builder = new Builder();
      const modifiedXmlContent = builder.buildObject(archiveXml);

      const tempXmlPath = path.join(
        tempDir,
        `temp_${file}_${path.basename(specialFile)}`,
      );
      await fs.promises.writeFile(tempXmlPath, modifiedXmlContent);

      mapArchive.addFile(tempXmlPath, specialFile, {
        flags: MPQ_FILE_REPLACEEXISTING,
      });

      await fs.promises.rm(tempXmlPath);
    } else {
      mapArchive.addFile(path.join(sourceDir, specialFile), specialFile, {
        flags: MPQ_FILE_REPLACEEXISTING,
      });
    }
  }

  // Finalize the archive
  mapArchive.compact();

  mapArchive.close();
}
