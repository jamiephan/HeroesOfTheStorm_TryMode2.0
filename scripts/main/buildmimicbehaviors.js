/* eslint-disable require-jsdoc */
const XMLParser = require('xml2js').parseString;
const fs = require('fs');
const path = require('path');
const HeroesFiles = require('./helper/HeoresFileWalker');
const autoXMLinclude = require('./helper/autoXMLinclude');

const XMLFiles = HeroesFiles.ReadEach(HeroesFiles.AllXMLs);

const idPrefix = 'MB';

let finalXML = '<?xml version="1.0" encoding="us-ascii"?>\n\n';
finalXML += '<!-- ======================================================== -->\n';
finalXML += '<!-- This file is generated via "npm run buildmimicbehaviors" -->\n';
finalXML += '<!-- ======================================================== -->\n';
finalXML += '<!-- It will find all <CBehaviorBuff> and map to a <CBehaviorAbility>, -->\n';
// eslint-disable-next-line max-len
finalXML += '<!-- This allows to toggle on/off a behavior with the extra item on the hotkey bar. -->\n';
// eslint-disable-next-line max-len
finalXML += `<!-- To prevent collision, all Mimic Behaviors id will have prefixed "${idPrefix}" -->\n`;
finalXML += '\n';
finalXML += `<!-- To use the item, simply add "${idPrefix}" before a BehaviorBuff's id -->\n`;
finalXML += `<!-- such as "PermaBlind" to "${idPrefix}Permablind" -->\n`;
// eslint-disable-next-line max-len
finalXML += '<!-- And add the behavior to selected units, such as with chat command "addbehavior" (adb MBPermaBlind). -->\n';
finalXML += '\n<Catalog>\n';

XMLFiles.forEach((obj) => {
  XMLParser(obj.fileData, (err, result) => {
    const catalog = result.Catalog;
    if (catalog === undefined || catalog === null) {
      return;
    }
    Object.keys(catalog)
      .filter((x) => !/^CBehaviorBuff/i.test(x))
      .forEach((k) => {
        delete catalog[k];
      });
    if (Object.keys(catalog).length === 0 && catalog.constructor === Object) {
      return;
    }

    finalXML += '\n<!-- ///////////////////////////////////-->\n';
    finalXML += `<!-- Start Behaviors in {${obj.fileName}}-->\n`;
    finalXML += '<!-- ///////////////////////////////////-->\n';
    Object.keys(catalog).forEach((k) => {
      if (!Array.isArray(catalog[k])) return;

      catalog[k].forEach((a) => {
        try {
          const name = a.$.id;
          if (name === undefined) return;

          const behaviorAbilID = `${idPrefix}${name}`;
          const abilBehaviorID = `${behaviorAbilID}_AbilBehavior`;
          const behaviorBuffMapperID = `${behaviorAbilID}_Mapper`;
          const buttonFaceOnID = `${behaviorAbilID}_ToggleOn`;
          const buttonFaceOffID = `${behaviorAbilID}_ToggleOff`;
          // eslint-disable-next-line max-len
          const buttonOnIcon = 'Assets\\Textures\\btn-command-holdposition.dds';
          // eslint-disable-next-line max-len
          const buttonOffIcon = 'Assets\\Textures\\hud_btn_bg_ability_cancel.dds';

          finalXML += `    <!--   // Start Behavior Mapping for ${name} (${behaviorAbilID}) -->\n`;
          // CBehaviorAbility

          finalXML += `    <CBehaviorAbility id="${behaviorAbilID}">\n`;
          // eslint-disable-next-line max-len
          finalXML += `        <Buttons Face="${buttonFaceOnID}" Type="AbilCmd" AbilCmd="${abilBehaviorID},On" />\n`;
          // eslint-disable-next-line max-len
          finalXML += `        <Buttons Face="${buttonFaceOffID}" Type="AbilCmd" AbilCmd="${abilBehaviorID},Off" />\n`;
          finalXML += '    </CBehaviorAbility>\n';

          // On/Off Buttons Faces
          finalXML += `    <CButton id="${buttonFaceOnID}" parent="StormButtonParent">\n`;
          finalXML += `        <Icon value="${buttonOnIcon}" />\n`;
          finalXML += '    </CButton>\n';
          finalXML += `    <CButton id="${buttonFaceOffID}" parent="StormButtonParent">\n`;
          finalXML += `        <Icon value="${buttonOffIcon}" />\n`;
          finalXML += '    </CButton>\n';

          // CAbilBehavior
          finalXML += `    <CAbilBehavior id="${abilBehaviorID}">\n`;
          finalXML += '        <Flags index="Toggle" value="1" />\n';
          finalXML += '        <Flags index="Transient" value="1" />\n';
          finalXML += `        <BehaviorArray value="${name}" />\n`;
          // eslint-disable-next-line max-len
          finalXML += `        <CmdButtonArray index="On" DefaultButtonFace="${buttonFaceOnID}" />\n`;
          // eslint-disable-next-line max-len
          finalXML += `        <CmdButtonArray index="Off" DefaultButtonFace="${buttonFaceOffID}" />\n`;
          finalXML += '    </CAbilBehavior>\n';

          // CBehaviorBuff Mapper
          // This can also display the duration but also remove the art and animation of the behavior buff.
          // Change CAbilBehavior.BehaviorArray to ${behaviorBuffMapperID} instead for using it

          // finalXML += `    <CBehaviorBuff id="${behaviorBuffMapperID}" parent="${name}">\n`;
          // finalXML += '        <InfoFlags index="AlwaysUseGameText" value="1" />\n';
          // finalXML += '        <BehaviorCategories index="Restorable" value="1" />\n';
          // finalXML += '        <BuffFlags index="UpdateDurationWhileDisabled" value="1" />\n';
          // finalXML += '        <DisplayDuration index="Self" value="1" />\n';
          // finalXML += '        <DisplayDuration index="Ally" value="1" />\n';
          // finalXML += '        <DisplayDuration index="Neutral" value="1" />\n';
          // finalXML += '        <DisplayDuration index="Enemy" value="1" />\n';
          // finalXML += '    </CBehaviorBuff>\n';

          finalXML += `    <!--   // End Behavior Mapping for ${name} (${behaviorAbilID}) -->\n\n`;

          console.log('Mapped Behavior', name, 'to', behaviorAbilID);
        } catch (e) {
          console.log(`Error when adding behavior from ${obj.fileName}`);
        }
      });
    });
    finalXML += '<!-- ///////////////////////////////////-->\n';
    finalXML += `<!-- End Behaviors in {${obj.fileName}}-->\n`;
    finalXML += '<!-- ///////////////////////////////////-->\n';
  });
});

finalXML += '</Catalog>\n';

console.log('===================');

// if parent dir of TOOLS_MIMC_BEHAVIOR_XML_GENERATION_LOCATION does not exist
// As fs.writeFile() will throw not found error if the parent dir does not exist.
if (!fs.existsSync(path.dirname(process.env.TOOLS_MIMC_BEHAVIOR_XML_GENERATION_LOCATION))) {
  fs.mkdirSync(
    path.dirname(process.env.TOOLS_MIMC_BEHAVIOR_XML_GENERATION_LOCATION), {
      recursive: true,
    },
  );
  // eslint-disable-next-line max-len
  console.log(`Created directory: ${path.dirname(process.env.TOOLS_MIMC_BEHAVIOR_XML_GENERATION_LOCATION)}`);
}

fs.writeFileSync(
  process.env.TOOLS_MIMC_BEHAVIOR_XML_GENERATION_LOCATION,
  finalXML,
  { encoding: 'utf8' },
);

console.log(`Created file: ${process.env.TOOLS_MIMC_BEHAVIOR_XML_GENERATION_LOCATION}`);
console.log('===================');
autoXMLinclude();
