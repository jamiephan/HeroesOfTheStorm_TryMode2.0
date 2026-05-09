import fs from "fs";
import path from "path";
import appRoot from "app-root-path";
import { logger } from "../utils/index.js";

const LOGGER = logger("buildUsageDoc");

const SORT_COMMANDS = true;

class Markdowner {
  constructor() {
    this.result = "";
  }
  set addH1(text) { this.result += `\n# ${text}\n`; }
  set addH2(text) { this.result += `\n## ${text}\n`; }
  set addH3(text) { this.result += `\n### ${text}\n`; }
  set addH4(text) { this.result += `\n#### ${text}\n`; }
  set addH5(text) { this.result += `\n##### ${text}\n`; }
  set addH6(text) { this.result += `\n###### ${text}\n`; }
  set addRaw(md) { this.result += `${md}\n`; }
  set addRawMD(md) { this.result += md; }
  set addCode(code) { this.result += `    ${code}\n`; }
  set addLine(n) { for (let i = 0; i < n; i++) this.result += "\n---\n"; }
  set addEmptyLine(n) { for (let i = 0; i < n; i++) this.result += "\n"; }
  set addTable(options) {
    this.result += `|${options.headers.join("|")}|\n`;
    this.result += `|${options.headers.map(() => "-").join("|")}|`;
    options.data.forEach((d) => { this.result += `\n|${d.join("|")}|`; });
    this.result += "\n";
  }
  save(location) {
    // ensure directory exists
    const dir = path.dirname(location);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(location, this.result, { encoding: "utf8" });
    LOGGER.info(`Saved usage doc to ${location}`);
  }
}

const getLongContent = (content) => {
  if (Array.isArray(content)) {
    return content.join("\n");
  }
  return content;
};

const buildUsageDoc = () => {

  // Clear usage folder
   const usageOutputDir = path.join(appRoot.path, "docs/usage");
   if (fs.existsSync(usageOutputDir)) {
     fs.rmSync(usageOutputDir, { recursive: true, force: true });
     LOGGER.info(`Cleared existing usage output directory: ${usageOutputDir}`);
   }
   fs.mkdirSync(usageOutputDir, { recursive: true });

  const jsonFile = path.join(
    appRoot.path,
    "docs/gen/usage.json",
  );

  if (!fs.existsSync(jsonFile)) {
    LOGGER.error(`Unable to find JSON file: ${jsonFile}`);
    process.exit(1);
  }

  const {
    _metadata: {
      title: mainTitle,
      description: mainDescription,
      file: mainFile,
    },
    libraries,
  } = JSON.parse(fs.readFileSync(jsonFile, { encoding: "utf8" }));

  if (SORT_COMMANDS) {
    libraries.forEach((l) => {
      if (l.commands && Array.isArray(l.commands)) {
        l.commands = l.commands.sort((a, b) =>
          a.command < b.command ? -1 : a.command > b.command ? 1 : 0,
        );
      }
    });
  }

  const md = new Markdowner();

  // Header
  md.addRawMD = "---"
  md.addEmptyLine = 1
  md.addRaw = "title: Usage"
  md.addRaw = "nav_order: 2"
  md.addRaw = `last_modified_date: ${new Date().toGMTString()}`
  md.addRawMD = "---"
  md.addEmptyLine = 1

  md.addH1 = mainTitle;
  md.addRaw = getLongContent(mainDescription);

  // Library Table glance
  md.addH2 = "📚 Libraries";
  md.addEmptyLine = 1
  md.addTable = {
    headers: ["Library Name", "File Name", "Library ID", "Library Description"],
    data: libraries.map((l) => [
      l._metadata.title,
      l._metadata.name,
      l._metadata.id,
      l._metadata.description,
    ]),
  };

  // Each Library
  libraries.forEach(({
    _metadata: {
      title: libTitle,
      name: libName,
      // id: libId,
      description: libDescription,
      overrideContent: libOverrideContent,
      file: libFile,
    },
    commands
  }, i) => {

    // Each library get its own markdown instance, of a seperate file.

    const libMd = new Markdowner();

    libMd.addRawMD = "---"
    libMd.addEmptyLine = 1
    libMd.addRaw = "title: " + `📚 ${libTitle} Library`
    libMd.addRaw = "nav_order: " + i
    libMd.addRaw = `last_modified_date: ${new Date().toGMTString()}`
    libMd.addRaw = "parent: Usage"
    libMd.addRawMD = "---"


    libMd.addEmptyLine = 1
    libMd.addH1 = `📚 ${libTitle} Library (\`${libName}\`):`;
    libMd.addRaw = "{: .no_toc }";
    libMd.addRaw = getLongContent(libDescription);

    if (libOverrideContent) {
      libMd.addRaw = getLongContent(libOverrideContent);
    } else {
      // Use command models to generate content for the library.

      // TOC
      libMd.addRaw = "- Table of Contents";
      libMd.addRaw = "{:toc}";
      libMd.addLine = 1

      commands.forEach((command) => {

        libMd.addH2 = `💭 Command: \`${command.command}\`` + (command.uiAvailable ? " (✔ UI)" : "");

        // Syntax
        libMd.addH3 = "🔍 Syntax:"
        libMd.addRaw = "{: .no_toc }"
        libMd.addRaw = `(\`${command.command}\` | \`${command.shortCommand}\`) ${command.parameters.map((p) => (p.required ? `\`<${p.name}>\`` : `\`[${p.name}]\``)).join(" ")}`;

        // Description
        libMd.addH3 = "✏ Description: ";
        libMd.addRaw = "{: .no_toc }"
        libMd.addRaw = getLongContent(command.description);

        // Parameters
        if (Array.isArray(command.parameters)) {
          libMd.addH3 = "⚙ Parameters:";
          libMd.addRaw = "{: .no_toc }";
          if (command.parameters.length === 0) {
            libMd.addCode = "None";
          } else {
            command.parameters.forEach((p) => {
              libMd.addCode = p.required ? `<${p.name}>` : `[${p.name}]`;
              libMd.addCode = `\tRequired:\t${p.required}`;
              libMd.addCode = `\tType:\t\t${p.type}`;
              libMd.addCode = `\tUsage:\t\t${p.description}`;
              if (!p.required) libMd.addCode = `\tDefault:\t${p.defaultValue}`;
            });
          }
        }

        // Examples
        if (Array.isArray(command.examples)) {
          libMd.addH3 = "🔧 Examples:";
          libMd.addRaw = "{: .no_toc }";
          command.examples.forEach((e) => {
            libMd.addCode = `> ${e.command.replace("{shortCommand}", command.shortCommand).replace("{command}", command.command)}`;
            libMd.addCode = `\t(${e.description})`;
          });
        }

        // Ui Availability
        if (typeof command.uiAvailable === "boolean") {
          libMd.addH3 = "🖼 UI Availability:";
          libMd.addRaw = "{: .no_toc }";
          if (command.uiAvailable) {
            libMd.addRaw = `- ✔ **Yes.** Use the command \`${command.command}ui\` or \`${command.shortCommand}ui\` to toggle the UI counterpart of this command.`;
          } else {
            libMd.addRaw = "- ❌ **Not Implemented**";
          }
        }
      });
    }

    libMd.save(libFile);

  });

  md.save(mainFile);
};

export default buildUsageDoc;
