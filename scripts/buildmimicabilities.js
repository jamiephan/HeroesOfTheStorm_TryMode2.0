/* eslint-disable require-jsdoc */
const XMLParser = require('xml2js').parseString;
const fs = require('fs');
const HeroesFiles = require('./helper/HeoresFileWalker');
const autoXMLinclude = require('./helper/autoXMLinclude');

require('dotenv').config();
require('./helper/envValidator').check();

const XMLFiles = HeroesFiles.ReadEach(HeroesFiles.AllXMLs);


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

    Object.keys(catalog).forEach((k) => {
      if (!Array.isArray(catalog[k])) return;

      finalXML += '\n<!-- ///////////////////////////////////-->\n';
      finalXML += `<!-- Start Abilities in {${obj.fileName}}-->\n`;
      finalXML += '<!-- ///////////////////////////////////-->\n';
      catalog[k].forEach((a) => {
        try {
          const name = a.$.id;
          if (name === undefined) return;
          const requirement = a.CmdButtonArray[0].$.Requirements;
          const face = a.CmdButtonArray[0].$.DefaultButtonFace || name;
          const verb = a.CmdButtonArray[0].$.index || 'Execute';

          finalXML += `    <CBehaviorAbility id="M${name}">\n`;
          if (!(requirement === undefined)) {
            // eslint-disable-next-line max-len
            finalXML += `        <!-- Requirement Behavior Detected. Please add the behavior: ${requirement} -->\n`;
          }
          // eslint-disable-next-line max-len
          finalXML += `        <Buttons Face="${face}" Type="AbilCmd" AbilCmd="${name},${verb}" Behavior="${name}" />\n`;
          finalXML += '    </CBehaviorAbility>\n';
          console.log(`Added Ability: ${name}, face: ${face}, req: ${requirement}`);
        } catch (e) {
          console.log(`Error when adding ability from ${obj.fileName}`);
        }
      });
      finalXML += '<!-- ///////////////////////////////////-->\n';
      finalXML += `<!-- End Abilities in {${obj.fileName}}-->\n`;
      finalXML += '<!-- ///////////////////////////////////-->\n';
    });
  });
});

finalXML += '</Catalog>\n';
fs.writeFileSync(
  process.env.TOOLS_MIMC_ABILITY_XML_GENERATION_LOCATION,
  finalXML,
  { encoding: 'utf8' },
);
autoXMLinclude();
