import fs from "fs";
import path from "path";
import appRoot from "app-root-path";
import { logger } from "../utils/index.js";

const LOGGER = logger("buildUsageDoc");

const SORT_COMMANDS = true;
const SHOW_EXTRA_TOC = false;

class Markdowner {
  constructor() {
    this.result = "";
  }
  set addH1(text) { this.result += `# ${text}\n`; }
  set addH2(text) { this.result += `## ${text}\n`; }
  set addH3(text) { this.result += `### ${text}\n`; }
  set addH4(text) { this.result += `#### ${text}\n`; }
  set addH5(text) { this.result += `##### ${text}\n`; }
  set addH6(text) { this.result += `###### ${text}\n`; }
  set addRaw(md) { this.result += `${md}\n\n`; }
  set addRawMD(md) { this.result += md; }
  set addCode(code) { this.result += `    ${code}\n`; }
  set addLine(n) { for (let i = 0; i < n; i++) this.result += "---\n"; }
  set addEmptyLine(n) { for (let i = 0; i < n; i++) this.result += "\n"; }
  set addTable(options) {
    this.result += `|${options.headers.join("|")}|\n`;
    this.result += `|${options.headers.map(() => "-").join("|")}|`;
    options.data.forEach((d) => { this.result += `\n|${d.join("|")}|`; });
    this.result += "\n";
  }
  save(location) {
    fs.writeFileSync(location, this.result, { encoding: "utf8" });
    LOGGER.info(`Saved usage doc to ${location}`);
  }
}

const buildUsageDoc = () => {
  const jsonFile = path.join(
    appRoot.path,
    "docs/gen/usage.json",
  );

  if (!fs.existsSync(jsonFile)) {
    LOGGER.error(`Unable to find JSON file: ${jsonFile}`);
    process.exit(1);
  }

  const jsonData = JSON.parse(fs.readFileSync(jsonFile, { encoding: "utf8" }));

  if (SORT_COMMANDS) {
    jsonData.libraries.forEach((l) => {
      if (!l._metadata.overrideMarkdown) {
        l.commands = l.commands.sort((a, b) =>
          a.command < b.command ? -1 : a.command > b.command ? 1 : 0,
        );
      }
    });
  }

  const md = new Markdowner();

  // Header
  md.addRawMD = "[◁ Back to Home](index.md)";
  md.addEmptyLine = 1;
  md.addRaw = '<a name="meta-top"></a>';
  md.addH1 = jsonData._metadata.MDTitle;
  md.addRaw = `<sup>*(Generated from [usage.json](https://github.com/jamiephan/HeroesOfTheStorm_TryMode2.0/blob/master/docs/gen/usage.json) at ${new Date().toGMTString()})*</sup>`;
  if (Array.isArray(jsonData._metadata.MDDescription)) {
    md.addRaw = jsonData._metadata.MDDescription.join("\n");
  } else {
    md.addRaw = jsonData._metadata.MDDescription;
  }

  md.addRaw = '<a name="meta-libraries"></a>';
  md.addH2 = "📚 Libraries";

  md.addEmptyLine = 1;
  md.addTable = {
    headers: ["Library Name", "File Name", "Library ID", "Library Description"],
    data: jsonData.libraries.map((l) => [
      l._metadata.libraryName,
      l._metadata.libraryFile,
      l._metadata.libraryId,
      l._metadata.libraryDescription,
    ]),
  };
  md.addEmptyLine = 1;

  // TOC
  md.addRaw = '<a name="meta-toc"></a>';
  md.addH2 = "🧾 Table of Contents";
  jsonData.libraries.forEach((library) => {
    md.addRaw = `- 📙 [${library._metadata.libraryName}](#lib-${library._metadata.libraryId})`;
    if (!library._metadata.overrideMarkdown) {
      library.commands.forEach((command) => {
        md.addRaw = `  - 💭 [Command: \`${command.command}\`](#cmd-${command.command})${command.uiAvailable ? " (✔ UI)" : ""}`;
        if (SHOW_EXTRA_TOC) {
          md.addRaw = `    - [✏ Description](#cmd-${command.command}-description)`;
          md.addRaw = `    - [⚙ Parameters](#cmd-${command.command}-parameters)`;
          md.addRaw = `    - [🔧 Examples](#cmd-${command.command}-examples)`;
          md.addRaw = `    - [🖼 UI Availability](#cmd-${command.command}-uiAvailability)`;
        }
      });
    } else if (SHOW_EXTRA_TOC) {
      md.addRaw = `  - [Description](#lib-${library._metadata.libraryId}-description)`;
    }
  });

  // Each Library
  jsonData.libraries.forEach((library) => {
    md.addEmptyLine = 1;
    md.addRaw = `<a name="lib-${library._metadata.libraryId}"></a>`;
    md.addH2 = `📙 ${library._metadata.libraryName} Library (\`${library._metadata.libraryFile}\`):`;
    md.addRaw = library._metadata.libraryDescription;

    if (library._metadata.overrideMarkdown) {
      md.addEmptyLine = 1;
      md.addRaw = `<a name="lib-${library._metadata.libraryId}-description"></a>`;
      if (Array.isArray(library._metadata.overrideMarkdownContent)) {
        md.addRaw = library._metadata.overrideMarkdownContent.join("\n");
      } else {
        md.addRaw = library._metadata.overrideMarkdownContent;
      }
      md.addRaw = "";
      md.addRaw = "[\\[Return to Table of Contents 🧾\\]](#meta-toc)";
      md.addRaw = "[\\[Return to Top ⬆\\]](#meta-top)";
    } else {
      library.commands.forEach((command) => {
        md.addEmptyLine = 1;
        md.addRaw = `<a name="cmd-${command.command}"></a>`;

        const title = `(\`${command.command}\` | \`${command.shortCommand}\`)`;
        const titleparam = ` ${command.parameters.map((p) => (p.required ? `\`<${p.name}>\`` : `\`[${p.name}]\``)).join(" ")}`;
        md.addH2 = title + titleparam;

        md.addEmptyLine = 1;
        md.addRaw = `<a name="cmd-${command.command}-description"></a>`;
        md.addH3 = "✏ Description: ";
        if (Array.isArray(command.description)) {
          md.addRaw = command.description.join("\n");
        } else {
          md.addRaw = command.description;
        }

        if (Array.isArray(command.parameters)) {
          md.addEmptyLine = 1;
          md.addRaw = `<a name="cmd-${command.command}-parameters"></a>`;
          md.addH3 = "⚙ Parameters:";
          if (command.parameters.length === 0) {
            md.addCode = "None";
          } else {
            command.parameters.forEach((p) => {
              md.addCode = p.required ? `<${p.name}>` : `[${p.name}]`;
              md.addCode = `\tRequired:\t${p.required}`;
              md.addCode = `\tType:\t\t${p.type}`;
              md.addCode = `\tUsage:\t\t${p.description}`;
              if (!p.required) md.addCode = `\tDefault:\t${p.defaultValue}`;
            });
          }
        }

        if (Array.isArray(command.examples)) {
          md.addEmptyLine = 1;
          md.addRaw = `<a name="cmd-${command.command}-examples"></a>`;
          md.addH3 = "🔧 Examples:";
          command.examples.forEach((e) => {
            md.addCode = `> ${e.command.replace("{shortCommand}", command.shortCommand).replace("{command}", command.command)}`;
            md.addCode = `\t(${e.description})`;
          });
        }

        if (typeof command.uiAvailable === "boolean") {
          md.addEmptyLine = 1;
          md.addRaw = `<a name="cmd-${command.command}-uiAvailability"></a>`;
          md.addH3 = "🖼 UI Availability:";
          if (command.uiAvailable) {
            md.addRaw = `- ✔ **Yes.** Use the command \`${command.command}ui\` or \`${command.shortCommand}ui\` to toggle the UI counterpart of this command.`;
          } else {
            md.addRaw = "- ❌ **Not Implemented**";
          }
        }

        md.addRaw = "";
        md.addRaw = "[\\[Return to Table of Contents 🧾\\]](#meta-toc)";
        md.addRaw = "[\\[Return to Top ⬆\\]](#meta-top)";
      });
    }
    md.addLine = 1;
  });

  md.save(jsonData._metadata.tagetMarkdownFile);
};

export default buildUsageDoc;
