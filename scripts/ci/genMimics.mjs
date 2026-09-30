import { execFileSync, execSync } from "node:child_process";
import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseDotenv } from "dotenv";

const PROJECT_ROOT = fileURLToPath(new URL("../../", import.meta.url));
const ENV_EXAMPLE_PATH = path.join(PROJECT_ROOT, ".env.example");
const ENV_PATH = path.join(PROJECT_ROOT, ".env");
const CACHE_DIR_NAME = "trymode20_online_casc_cache";
const GIT_PATHS = ["*.xml", "*.galaxy"];

export function getUsVersionsName(versionsContents) {
  const lines = versionsContents.split(/\r?\n/);
  const headerIndex = lines.findIndex((line) => {
    const columns = line
      .split("|")
      .map((column) => column.split("!")[0].trim().toLowerCase());
    return columns.includes("region") && columns.includes("versionsname");
  });

  if (headerIndex === -1) {
    throw new Error("Could not find Region and VersionsName columns in versions file.");
  }

  const headers = lines[headerIndex]
    .split("|")
    .map((column) => column.split("!")[0].trim().toLowerCase());
  const regionIndex = headers.indexOf("region");
  const versionsNameIndex = headers.indexOf("versionsname");
  const usRow = lines.slice(headerIndex + 1).find((line) => {
    const columns = line.split("|");
    return columns[regionIndex]?.trim().toLowerCase() === "us";
  });

  if (!usRow) {
    throw new Error('Could not find the "us" region in versions file.');
  }

  const versionsName = usRow.split("|")[versionsNameIndex]?.trim();
  if (!versionsName) {
    throw new Error('The "us" region has no VersionsName in versions file.');
  }

  return versionsName;
}

async function configureEnv() {
  if (!existsSync(ENV_PATH)) {
    if (!existsSync(ENV_EXAMPLE_PATH)) {
      throw new Error("Neither .env nor .env.example exists in the project root.");
    }
    await fs.rename(ENV_EXAMPLE_PATH, ENV_PATH);
  }

  let contents = await fs.readFile(ENV_PATH, "utf8");
  const onlineModePattern =
    /^[ \t]*(?:export[ \t]+)?TOOLS_USE_CASC_ONLINE_MODE[ \t]*=[^\r\n]*/m;

  if (onlineModePattern.test(contents)) {
    contents = contents.replace(
      onlineModePattern,
      "TOOLS_USE_CASC_ONLINE_MODE=true",
    );
  } else {
    const lineEnding = contents.includes("\r\n") ? "\r\n" : "\n";
    const separator = contents.endsWith("\n") ? "" : lineEnding;
    contents += `${separator}TOOLS_USE_CASC_ONLINE_MODE=true${lineEnding}`;
  }

  await fs.writeFile(ENV_PATH, contents);
  return parseDotenv(contents);
}

function runBuild() {
  execSync("npm run build:allmimic", {
    cwd: PROJECT_ROOT,
    stdio: "inherit",
  });
}

async function commitGeneratedChanges(version) {
  const status = execFileSync(
    "git",
    [
      "status",
      "--porcelain=v1",
      "--no-renames",
      "--untracked-files=all",
      "--",
      ...GIT_PATHS,
    ],
    { cwd: PROJECT_ROOT, encoding: "utf8" },
  );

  if (!status.trim()) {
    console.log("No changed .xml or .galaxy files to commit.");
    return;
  }

  execFileSync("git", ["add", "--all", "--", ...GIT_PATHS], {
    cwd: PROJECT_ROOT,
    stdio: "inherit",
  });
  execFileSync(
    "git",
    [
      "-c",
      "user.name=github-actions[bot]",
      "-c",
      "user.email=41898282+github-actions[bot]@users.noreply.github.com",
      "commit",
      "--only",
      "-m",
      `ci: Updated mimics to ${version}`,
      "--",
      ...GIT_PATHS,
    ],
    { cwd: PROJECT_ROOT, stdio: "inherit" },
  );
}

async function main() {
  const env = await configureEnv();
  process.env.TOOLS_USE_CASC_ONLINE_MODE = "true";
  runBuild();

  const cacheDirName =
    process.env.TOOLS_CASC_ONLINE_MODE_CACHE_DIR_NAME ||
    env.TOOLS_CASC_ONLINE_MODE_CACHE_DIR_NAME ||
    CACHE_DIR_NAME;
  const tempDir = process.env.TMP || os.tmpdir();
  const versionsPath = path.join(tempDir, cacheDirName, "versions");
  const versionsContents = await fs.readFile(versionsPath, "utf8");
  const version = getUsVersionsName(versionsContents);

  console.log(`US game version: ${version}`);
  await commitGeneratedChanges(version);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await main();
}