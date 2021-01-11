/* eslint-disable require-jsdoc */
const xml2js = require('xml2js');
const fs = require('fs');
const path = require('path');
const HeroesFiles = require('./HeoresFileWalker');
const autoXMLinclude = require('./autoXMLinclude');

module.exports = (configParam) => {
  const config = {
    filesSearchRegex: HeroesFiles.AllXMLs,
    catalogTypeRegex: /^CAbilEffectTarget/i,
    saveLocation: './default.xml',
    generation: {
      header: {
        generatedCommand: 'npm run xxxx',
        description: 'Completely devoid of any description whatsoever.',
      },
      pre: null,
      main: (type, xmlData) => ({ [type]: xmlData }),
    },
    ...configParam,
  };

  // ================= Generation of file =================

  // xml2js.Builder() does not allow to add comments...
  const builder = new xml2js.Builder({
    rootName: 'Catalog',
    xmldec: {
      version: '1.0',
      encoding: 'us-ascii',
      standalone: false,
    },
  });

  const mainObj = {};

  if (!(config.generation.pre === null || typeof config.generation.pre === 'undefined')) {
    config.generation.pre.forEach((o) => {
      const key = Object.keys(o);
      if (Array.isArray(o[key])) {
        // Entry is an array
        o[key].forEach((o1) => {
          if (mainObj[key] === undefined) mainObj[key] = [];
          mainObj[key].push(o1);
        });
      } else {
        if (mainObj[key] === undefined) mainObj[key] = [];
        mainObj[key].push(o[key]);
      }
    });
  }

  HeroesFiles
    .ReadEach(config.filesSearchRegex)
    .forEach((file) => {
      xml2js.parseString(file.fileData, (error, result) => {
        if (error) throw error;

        // Main <Catalog> data
        const catalog = result.Catalog;
        if (catalog === undefined || catalog === null) return;

        // Read of the entry, such as <CBehaviorBuff>, <CAbilEffectInstant> ...
        Object.entries(catalog)
          .forEach((entries) => {
          // e.g BehaviorBuff
            const catalogType = entries[0];
            // Does not match type
            if (!config.catalogTypeRegex.test(catalogType)) return;

            entries[1].forEach((entry) => {
              const catalogEntry = entry.$.id;
              if (catalogEntry === undefined || catalogEntry === null) return;

              // Returned function
              const obj = config.generation.main(catalogType, entry);

              if (obj === undefined || obj === null || !Array.isArray(obj)) return;

              obj.forEach((o) => {
                const key = Object.keys(o);
                if (Array.isArray(o[key])) {
                  // Entry is an array
                  o[key].forEach((o1) => {
                    if (mainObj[key] === undefined) mainObj[key] = [];
                    mainObj[key].push(o1);
                  });
                } else {
                  if (mainObj[key] === undefined) mainObj[key] = [];
                  mainObj[key].push(o[key]);
                }
              });
            });
          });
      });
    });

  let finalXML = builder.buildObject(mainObj);

  // Inject Comments into the built XML, since builder does not support adding comments

  finalXML = finalXML.split('\n');

  let { description } = config.generation.header;

  if (typeof description === 'string') {
    description = description.split('\n');
  }

  finalXML[0] = `${finalXML[0]}

<!-- ======================================================== -->
<!-- This file is generated via "${config.generation.header.generatedCommand}" -->
<!-- ======================================================== -->
${description
    .map((d) => `<!-- ${d} -->`)
    .join('\n')
}
`;
  finalXML = finalXML.join('\n');

  console.log('===================');

  // Check if parent directory exist
  if (!fs.existsSync(path.dirname(config.saveLocation))) {
    fs.mkdirSync(
      path.dirname(config.saveLocation), {
        recursive: true,
      },
    );
    console.log(`Created directory: ${path.dirname(config.saveLocation)}`);
  }

  // Save file
  fs.writeFileSync(
    config.saveLocation,
    finalXML,
    { encoding: 'utf8' },
  );

  console.log(`Created file: ${config.saveLocation}`);
  console.log('===================');

  // Generate XML
  autoXMLinclude();
};
