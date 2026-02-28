import fs from "fs";
import path from "path";
import { parseString as XMLParser } from "xml2js";

import { TAB, heroesFileExtract, logger } from "../../utils/index.js";
import buildXml from "../buildIncludeXml.js";

const LOGGER = logger("mimicbehaviors");

export default () => {
  const ID_PREFIX = "MB";
  heroesFileExtract.queue("mimicbehaviors", /^mods.*\.xml$/, (extractedFiles) => {
    let finalXML = '<?xml version="1.0" encoding="UTF-8"?>\n\n';
    finalXML +=
      "<!-- ======================================================== -->\n";
    finalXML +=
      '<!-- This file is generated via "npm run build:mimicbehaviors" -->\n';
    finalXML +=
      "<!-- ======================================================== -->\n";
    finalXML +=
      "<!-- It will find all <CBehaviorBuff> and map to a <CBehaviorAbility>, -->\n";
    finalXML +=
      "<!-- This allows to toggle on/off a behavior with the extra item on the hotkey bar. -->\n";
    finalXML += `<!-- To prevent collision, all Mimic Behaviors id will have prefixed "${ID_PREFIX}" -->\n`;
    finalXML += `<!-- To use the item, simply add "${ID_PREFIX}" before a BehaviorBuff's id -->\n`;
    finalXML += `<!-- such as "PermaBlind" to "${ID_PREFIX}PermaBlind" -->\n`;
    finalXML += `<!-- And add the behavior to selected units, such as with chat command "addbehavior" (adb ${ID_PREFIX}PermaBlind). -->\n`;
    finalXML +=
      '\n<Catalog xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="https://raw.githubusercontent.com/jamiephan/HeroesOfTheStorm_Gamedata/master/xsd/latest.xsd">\n';

    const buttonOnIcon = "Assets\\Textures\\btn-command-holdposition.dds";
    const buttonOffIcon = "Assets\\Textures\\hud_btn_bg_ability_cancel.dds";

    finalXML += `${TAB(1)}<!-- Dummy CButton On/Off for button icon -->\n`;
    finalXML += `${TAB(1)}<CButton id="${ID_PREFIX}_btn_on" parent="StormButtonParent">\n`;
    finalXML += `${TAB(2)}<Icon value="${buttonOnIcon}" />\n`;
    finalXML += `${TAB(1)}</CButton>\n`;
    finalXML += `${TAB(1)}<CButton id="${ID_PREFIX}_btn_off" parent="StormButtonParent">\n`;
    finalXML += `${TAB(2)}<Icon value="${buttonOffIcon}" />\n`;
    finalXML += `${TAB(1)}</CButton>\n`;

    extractedFiles.forEach((obj) => {
      XMLParser(obj.fileData, (err, result) => {
        const catalog = result.Catalog;
        if (
          catalog === undefined ||
          catalog === null ||
          typeof catalog !== "object" /* Empty Catalog*/
        ) {
          return;
        }

        Object.keys(catalog)
          .filter((x) => !/^CBehaviorBuff/i.test(x))
          .forEach((k) => {
            delete catalog[k];
          });
        if (
          Object.keys(catalog).length === 0 &&
          catalog.constructor === Object
        ) {
          return;
        }

        finalXML += "\n";
        finalXML += `${TAB(1)}<!-- ///////////////////////////////////-->\n`;
        finalXML += `${TAB(1)}<!-- Start Behaviors in {${obj.fileName}}-->\n`;
        finalXML += `${TAB(1)}<!-- ///////////////////////////////////-->\n`;
        Object.keys(catalog).forEach((k) => {
          if (!Array.isArray(catalog[k])) return;

          catalog[k].forEach((a) => {
            try {
              const id = a.$.id;
              if (!id) return;

              const behaviorAbilID = `${ID_PREFIX}${id}`;
              const abilBehaviorID = `${behaviorAbilID}_AbilBehavior`;

              // CBehaviorAbility
              finalXML += `${TAB(1)}<CBehaviorAbility id="${behaviorAbilID}">\n`;
              finalXML += `${TAB(2)}<Buttons Face="${ID_PREFIX}_btn_on" Type="AbilCmd" AbilCmd="${abilBehaviorID},On" />\n`;
              finalXML += `${TAB(2)}<Buttons Face="${ID_PREFIX}_btn_off" Type="AbilCmd" AbilCmd="${abilBehaviorID},Off" />\n`;
              finalXML += `${TAB(1)}</CBehaviorAbility>\n`;

              // CAbilBehavior
              finalXML += `${TAB(1)}<CAbilBehavior id="${abilBehaviorID}">\n`;
              finalXML += `${TAB(2)}<Flags index="Toggle" value="1" />\n`;
              finalXML += `${TAB(2)}<Flags index="Transient" value="1" />\n`;
              finalXML += `${TAB(2)}<BehaviorArray value="${id}" />\n`;
              finalXML += `${TAB(2)}<CmdButtonArray index="On" DefaultButtonFace="${ID_PREFIX}_btn_on" />\n`;
              finalXML += `${TAB(2)}<CmdButtonArray index="Off" DefaultButtonFace="${ID_PREFIX}_btn_off" />\n`;
              finalXML += `${TAB(1)}</CAbilBehavior>\n`;

              LOGGER.info(`Mapped Behavior ${id} to ${behaviorAbilID}`);
            } catch (e) {
              LOGGER.error(
                `Error when adding behavior from ${obj.fileName}`,
                e.message,
              );
            }
          });
        });
        finalXML += `${TAB(1)}<!-- ///////////////////////////////////-->\n`;
        finalXML += `${TAB(1)}<!-- End Behaviors in {${obj.fileName}}-->\n`;
        finalXML += `${TAB(1)}<!-- ///////////////////////////////////-->\n`;
      });
    });

    finalXML += "</Catalog>\n";

    LOGGER.info("===================");

    // if parent dir of TOOLS_MIMC_BEHAVIOR_XML_GENERATION_LOCATION does not exist
    // As fs.writeFile() will throw not found error if the parent dir does not exist.
    if (
      !fs.existsSync(
        path.dirname(process.env.TOOLS_MIMC_BEHAVIOR_XML_GENERATION_LOCATION),
      )
    ) {
      fs.mkdirSync(
        path.dirname(process.env.TOOLS_MIMC_BEHAVIOR_XML_GENERATION_LOCATION),
        {
          recursive: true,
        },
      );

      LOGGER.info(
        `Created directory: ${path.dirname(process.env.TOOLS_MIMC_BEHAVIOR_XML_GENERATION_LOCATION)}`,
      );
    }

    fs.writeFileSync(
      process.env.TOOLS_MIMC_BEHAVIOR_XML_GENERATION_LOCATION,
      finalXML,
      { encoding: "utf8" },
    );

    LOGGER.info(
      `Created file: ${process.env.TOOLS_MIMC_BEHAVIOR_XML_GENERATION_LOCATION}`,
    );
    LOGGER.info("===================");
    buildXml();
  });
};
