/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
const fs = require('fs');
const MarkDowner = require('./helper/Markdowner');

const jsonFile = './(10)trymemode.stormmap/base.stormdata/Modules/doc.json';

const sortCommands = true;
const showExtraTOC = false;

if (!fs.existsSync(jsonFile)) {
  console.log(`Unable to find JSON file ${jsonFile}`);
  process.exit(1);
}

const jsonRawData = fs.readFileSync(jsonFile, { encoding: 'utf8' });

const jsonData = JSON.parse(jsonRawData);

// Sort the commands
if (sortCommands) {
  jsonData.libraries.forEach((l) => {
    if (!l._metadata.overrideMarkdown) {
      // eslint-disable-next-line no-param-reassign
      l.commands = l.commands.sort((a, b) => {
        if (a.command < b.command) return -1;
        if (a.command > b.command) return 1;
        return 0;
      });
    }
  });
}

const markdowner = new MarkDowner();

// Header
markdowner.addRaw = '<a name="meta-top"></a>';
markdowner.addH1 = jsonData._metadata.MDTitle;
markdowner.addRaw = `<sup>*(Generated from [doc.json](${jsonFile}) at ${new Date().toGMTString()})*</sup>`;
if (Array.isArray(jsonData._metadata.MDDescription)) {
  markdowner.addRaw = jsonData._metadata.MDDescription.join('\n');
} else {
  markdowner.addRaw = jsonData._metadata.MDDescription;
}

markdowner.addRaw = '<a name="meta-libraries"></a>';
markdowner.addH1 = '📚 Libraries';

// Table Generation
markdowner.addTable = {
  headers: ['Library Name', 'File Name', 'Library ID', 'Library Description'],
  data: jsonData.libraries.map((l) => [
    l._metadata.libraryName,
    l._metadata.libraryFile,
    l._metadata.libraryId,
    l._metadata.libraryDescription,
  ]),
};

// TOC
markdowner.addRaw = '<a name="meta-toc"></a>';
markdowner.addH1 = '🧾 Table of Contents';
jsonData.libraries.forEach((library) => {
  markdowner.addRaw = `- 📙 [${library._metadata.libraryName}](#lib-${library._metadata.libraryId})`;
  if (!library._metadata.overrideMarkdown) {
    library.commands.forEach((command) => {
      markdowner.addRaw = `  - 💭 [Command: \`${command.command}\`](#cmd-${command.command})${command.uiAvailable ? ' (✔ UI)' : ''}`;
      if (showExtraTOC) {
        markdowner.addRaw = `    - [✏ Description](#cmd-${command.command}-description)`;
        markdowner.addRaw = `    - [⚙ Parameters](#cmd-${command.command}-parameters)`;
        markdowner.addRaw = `    - [🔧 Examples](#cmd-${command.command}-examples)`;
        markdowner.addRaw = `    - [🖼 UI Availability](#cmd-${command.command}-uiAvailability)`;
      }
    });
  } else if (showExtraTOC) {
    markdowner.addRaw = `  - [Description](#lib-${library._metadata.libraryId}-description)`;
  }
});

// Each of the Library
jsonData.libraries.forEach((library) => {
  markdowner.addRaw = `<a name="lib-${library._metadata.libraryId}"></a>`;
  markdowner.addH1 = `📙 ${library._metadata.libraryName} Library (\`${library._metadata.libraryFile}\`):`;

  markdowner.addRaw = library._metadata.libraryDescription;
  if (library._metadata.overrideMarkdown) {
    markdowner.addRaw = `<a name="lib-${library._metadata.libraryId}-description"></a>`;
    if (Array.isArray(library._metadata.overrideMarkdownContent)) {
      // Multi-line support
      markdowner.addRaw = library._metadata.overrideMarkdownContent.join('\n');
    } else {
      markdowner.addRaw = library._metadata.overrideMarkdownContent;
    }
    markdowner.addRaw = '';
    markdowner.addRaw = '[\\[Return to Table of Contents 🧾\\]](#meta-toc)';
    markdowner.addRaw = '[\\[Return to Top ⬆\\]](#meta-top)';
  } else {
    // Commands Generate
    library.commands.forEach((command) => {
      markdowner.addRaw = `<a name="cmd-${command.command}"></a>`;
      // Description Section
      const title = `(\`${command.command}\` | \`${command.shortCommand}\`)`;
      const titleparam = ` ${command.parameters.map((p) => (p.required ? `\`<${p.name}>\`` : `\`[${p.name}]\``)).join(' ')}`;
      markdowner.addH2 = title + titleparam;
      markdowner.addRaw = `<a name="cmd-${command.command}-description"></a>`;
      markdowner.addH4 = '✏ Description: ';
      if (Array.isArray(command.description)) {
        markdowner.addRaw = command.description.join('\n');
      } else {
        markdowner.addRaw = command.description;
      }

      // Param section
      if (Object.prototype.hasOwnProperty.call(command, 'parameters') && command.parameters instanceof Array) {
        markdowner.addRaw = `<a name="cmd-${command.command}-parameters"></a>`;
        markdowner.addH4 = '⚙ Parameters:';
        if (command.parameters.length === 0) {
          markdowner.addCode = 'None';
        } else {
          command.parameters.forEach((p) => {
            markdowner.addCode = (p.required ? `<${p.name}>` : `[${p.name}]`);
            markdowner.addCode = `\tRequired:\t${p.required}`;
            markdowner.addCode = `\tType:\t\t${p.type}`;
            markdowner.addCode = `\tUsage:\t\t${p.description}`;
            if (!p.required) {
              markdowner.addCode = `\tDefault:\t${p.defaultValue}`;
            }
          });
        }
      }

      // Example section
      if (Object.prototype.hasOwnProperty.call(command, 'examples') && command.examples instanceof Array) {
        markdowner.addRaw = `<a name="cmd-${command.command}-examples"></a>`;
        markdowner.addH4 = '🔧 Examples:';
        command.examples.forEach((e) => {
          markdowner.addCode = `> ${e.command.replace('{shortCommand}', command.shortCommand).replace('{command}', command.command)}`;
          markdowner.addCode = `\t(${e.description})`;
        });
      }

      // UI Availability Section
      if (Object.prototype.hasOwnProperty.call(command, 'uiAvailable') && typeof command.uiAvailable === 'boolean') {
        markdowner.addRaw = `<a name="cmd-${command.command}-uiAvailability"></a>`;
        markdowner.addH4 = '🖼 UI Availability:';
        if (command.uiAvailable) {
          markdowner.addRaw = `- ✔ **Yes.** Use the command \`${command.command}ui\` or \`${command.shortCommand}ui\` to toggle the UI counterpart of this command.`;
        } else {
          markdowner.addRaw = '- ❌ **Not Implemented**';
        }
      }

      markdowner.addRaw = '';
      markdowner.addRaw = '[\\[Return to Table of Contents 🧾\\]](#meta-toc)';
      markdowner.addRaw = '[\\[Return to Top ⬆\\]](#meta-top)';
      // =====
    });
  }
  markdowner.addLine = 1;
});

markdowner.save(jsonData._metadata.tagetMarkdownFile);
