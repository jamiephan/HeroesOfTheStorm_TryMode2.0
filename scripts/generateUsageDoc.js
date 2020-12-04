/* eslint-disable max-len */
/* eslint-disable no-useless-catch */
/* eslint-disable no-underscore-dangle */
const fs = require('fs');
const MarkDowner = require('./helper/Markdowner');

const jsonFile = './(10)trymemode.stormmap/base.stormdata/Modules/doc.json';

if (!fs.existsSync(jsonFile)) {
  console.log(`Unable to find JSON file ${jsonFile}`);
  process.exit(1);
}

const jsonRawData = fs.readFileSync(jsonFile, { encoding: 'utf8' });
let jsonData;

try {
  jsonData = JSON.parse(jsonRawData);
} catch (e) {
  throw e;
}

const markdowner = new MarkDowner();

// Header
markdowner.addH1 = jsonData._metadata.MDTitle;
markdowner.addRaw = `<sup>*(Generated from [doc.json](${jsonFile}) at ${new Date().toGMTString()})*</sup>`;
markdowner.addRaw = jsonData._metadata.MDDescription;
markdowner.addRaw = 'The commands documentation sits on each library. Please see below:';

markdowner.addH1 = 'Libraries';
// Generate Table
markdowner.addTable = {
  headers: ['Library Name', 'File Name', 'Library ID', 'Library Description'],
  data: jsonData.libraries.map((l) => [
    l._metadata.libraryName,
    l._metadata.libraryFile,
    l._metadata.libraryId,
    l._metadata.libraryDescription,
  ]),
};

// Each of them
jsonData.libraries.forEach((library) => {
  markdowner.addH1 = `${library._metadata.libraryName} Library (\`${library._metadata.libraryFile}\`):`;

  markdowner.addRaw = library._metadata.libraryDescription;
  if (library._metadata.overrideMarkdown) {
    markdowner.addRaw = library._metadata.overrideMarkdownContent;
  } else {
    // Commands Generate
    // markdowner.addH2 = 'Commands';
    library.commands.forEach((command) => {
      const title = `(\`${command.command}\` | \`${command.shortCommand}\`)`;
      const titleparam = ` ${command.parameters.map((p) => (p.required ? `\`<${p.name}>\`` : `\`[${p.name}]\``)).join(' ')}`;
      markdowner.addH2 = title + titleparam;
      markdowner.addH4 = 'Description: ';
      markdowner.addRaw = command.description;

      //   Param section
      if (Object.prototype.hasOwnProperty.call(command, 'parameters') && command.parameters instanceof Array) {
        markdowner.addH4 = 'Parameters:';
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
      //   Example section
      if (Object.prototype.hasOwnProperty.call(command, 'examples') && command.examples instanceof Array) {
        markdowner.addH4 = 'Examples:';
        command.examples.forEach((e) => {
          markdowner.addCode = `> ${e.command}`;
          markdowner.addCode = `\t(${e.description})`;
        });
      }
    });
  }
  markdowner.addLine = 1;
});

markdowner.save(jsonData._metadata.tagetMarkdownFile);
