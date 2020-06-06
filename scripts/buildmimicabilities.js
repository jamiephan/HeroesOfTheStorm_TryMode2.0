/* eslint-disable require-jsdoc */
const XMLParser = require('xml2js').parseString;
const fs = require('fs');
const path = require('path');
const HeroesFiles = require('./helper/HeoresFileWalker');
const autoXMLinclude = require('./helper/autoXMLinclude');

const XMLFiles = HeroesFiles.ReadEach(HeroesFiles.AllXMLs);

const idPrefix = 'M';


let finalXML = '<?xml version="1.0" encoding="us-ascii"?>\n\n';
finalXML += '<!-- ======================================================== -->\n';
finalXML += '<!-- This file is generated via "npm run buildmimicabilities" -->\n';
finalXML += '<!-- ======================================================== -->\n';
finalXML += '<!-- It will find all <CAbil*> and map to a <CBehaviorAbility>, -->\n';
// eslint-disable-next-line max-len
finalXML += '<!-- That enabled most abilities to be added with behavior, as an item like ice block. -->\n';
finalXML += '<!-- To prevent collision, all Mimic Abilties\'s id will have prefixed "M" -->\n';
// eslint-disable-next-line max-len
finalXML += '<!-- Some Abilites required a specific behavior to be unlocked, which will shown next to the ability below. -->\n';
finalXML += '<!-- Such as "Ultimate1Unlocked" for ultimates -->\n';
finalXML += '<!-- Please also manually add the behavior to the units. -->\n';
finalXML += '\n<Catalog>\n';

XMLFiles.forEach((obj) => {
  XMLParser(obj.fileData, (err, result) => {
    const catalog = result.Catalog;
    if (catalog === undefined || catalog === null) {
      return;
    }
    Object.keys(catalog)
      .filter((x) => !/^CAbil/i.test(x))
      .forEach((k) => {
        delete catalog[k];
      });
    if (Object.keys(catalog).length === 0 && catalog.constructor === Object) {
      return;
    }

    finalXML += '\n<!-- ///////////////////////////////////-->\n';
    finalXML += `<!-- Start Abilities in {${obj.fileName}}-->\n`;
    finalXML += '<!-- ///////////////////////////////////-->\n';
    Object.keys(catalog).forEach((k) => {
      if (!Array.isArray(catalog[k])) return;

      catalog[k].forEach((a) => {
        try {
          const name = a.$.id;
          if (name === undefined) return;
          const requirement = a.CmdButtonArray[0].$.Requirements;
          const face = a.CmdButtonArray[0].$.DefaultButtonFace || name;
          const verb = a.CmdButtonArray[0].$.index || 'Execute';

          finalXML += `    <CBehaviorAbility id="${idPrefix}${name}">\n`;
          if (!(requirement === undefined)) {
            // eslint-disable-next-line max-len
            finalXML += `        <!-- Requirement Behavior Detected. Please add the behavior: ${requirement} -->\n`;
          }
          // eslint-disable-next-line max-len
          finalXML += `        <Buttons Face="${face}" Type="AbilCmd" AbilCmd="${name},${verb}" Behavior="${name}" />\n`;
          finalXML += '    </CBehaviorAbility>\n';
          // eslint-disable-next-line max-len
          console.log(
            `Generated Ability: ${name}`,
            `\tButton Face: ${face}`,
            `\tVerb: ${verb}`,
            `\tRequirement: ${requirement === undefined ? 'None' : requirement}`,
            `\tPrefixed Id: ${idPrefix}${name}`,
          );
        } catch (e) {
          console.log(`Error when adding ability from ${obj.fileName}`);
        }
      });
    });
    finalXML += '<!-- ///////////////////////////////////-->\n';
    finalXML += `<!-- End Abilities in {${obj.fileName}}-->\n`;
    finalXML += '<!-- ///////////////////////////////////-->\n';
  });
});

finalXML += '</Catalog>\n';

console.log('===================');

// if parent dir of TOOLS_MIMC_ABILITY_XML_GENERATION_LOCATION does not exist
// As fs.writeFile() will throw not found error if the parent dir does not exist.
if (!fs.existsSync(path.dirname(process.env.TOOLS_MIMC_ABILITY_XML_GENERATION_LOCATION))) {
  fs.mkdirSync(
    path.dirname(process.env.TOOLS_MIMC_ABILITY_XML_GENERATION_LOCATION), {
      recursive: true,
    },
  );
  // eslint-disable-next-line max-len
  console.log(`Created directory: ${path.dirname(process.env.TOOLS_MIMC_ABILITY_XML_GENERATION_LOCATION)}`);
}

fs.writeFileSync(
  process.env.TOOLS_MIMC_ABILITY_XML_GENERATION_LOCATION,
  finalXML,
  { encoding: 'utf8' },
);

console.log(`Created file: ${process.env.TOOLS_MIMC_ABILITY_XML_GENERATION_LOCATION}`);
console.log('===================');
autoXMLinclude();
