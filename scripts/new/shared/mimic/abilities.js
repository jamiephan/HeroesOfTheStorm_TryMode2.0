import heroesFileExtract from "../../utils/heroesFileExtract.js";

import { parseString as XMLParser } from "xml2js";
import fs from "fs";
import path from "path";
import buildXml from "../buildIncludeXml.js";

const TAB = level => "    ".repeat(level);

export default () => {
  const extractedFiles = heroesFileExtract({ search: /^mods.*\.xml$/ });

  const ID_PREFIX = "M";

  let finalXML = '<?xml version="1.0" encoding="UTF-8"?>\n\n';
  finalXML +=
    "<!-- ======================================================== -->\n";
  finalXML +=
    '<!-- This file is generated via "npm run build:mimicabilities" -->\n';
  finalXML +=
    "<!-- ======================================================== -->\n";
  finalXML +=
    "<!-- It will find all <CAbil*> and map to a <CBehaviorAbility>, -->\n";
  finalXML +=
    "<!-- That enabled most abilities to be added with behavior, as an item like ice block. -->\n";
  finalXML +=
    '<!-- To prevent collision, all Mimic Abilities\' id will have prefixed "M" -->\n';
  finalXML +=
    "<!-- Some Abilities required a specific behavior to be unlocked, which will shown next to the ability below. -->\n";
  finalXML += '<!-- Such as "Ultimate1Unlocked" for ultimates -->\n';
  finalXML += "<!-- Please also manually add the behavior to the units. -->\n";
  finalXML +=
    '\n<Catalog xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="https://raw.githubusercontent.com/jamiephan/HeroesOfTheStorm_Gamedata/master/xsd/latest.xsd">\n';

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
        .filter((x) => !/^CAbil/i.test(x))
        .forEach((k) => {
          delete catalog[k];
        });
      if (Object.keys(catalog).length === 0 && catalog.constructor === Object) {
        return;
      }

      finalXML += "\n"
      finalXML += `${TAB(1)}<!-- ///////////////////////////////////-->\n`;
      finalXML += `${TAB(1)}<!-- Start Abilities in {${obj.fileName}}-->\n`;
      finalXML += `${TAB(1)}<!-- ///////////////////////////////////-->\n`;
      Object.keys(catalog).forEach((k) => {
        if (!Array.isArray(catalog[k])) return;

        catalog[k].forEach((a) => {
          try {
            const name = a.$.id;
            const parent = Object.prototype.hasOwnProperty.call(a.$, "parent")
              ? a.$.parent
              : null;
            if (name === undefined) return;

            let requirement;
            let face;
            let verb;

            if (Array.isArray(a.CmdButtonArray)) {
              // Have CmdButtonArray
              requirement = a.CmdButtonArray[0].$.Requirements;
              face = a.CmdButtonArray[0].$.DefaultButtonFace || name;
              verb = a.CmdButtonArray[0].$.index || "Execute";
            } else {
              verb = "Execute";
              face = parent || name;
            }
            finalXML += `${TAB(1)}<CBehaviorAbility id="${ID_PREFIX}${name}">\n`;
            if (!(requirement === undefined)) {
              finalXML += `${TAB(2)}<!-- ↓ Requirement Behavior Detected. Please add the behavior: ${requirement} ↓ -->\n`;
            }

            finalXML += `${TAB(2)}<Buttons Face="${face}" Type="AbilCmd" AbilCmd="${name},${verb}" Behavior="${name}" />\n`;
            finalXML += `${TAB(1)}</CBehaviorAbility>\n`;

            console.log(
              `Generated Ability: ${name}`,
              `\t\tButton Face: ${face}`,
              `\t\tVerb: ${verb}`,
              `\t\tRequirement: ${requirement === undefined ? "None" : requirement}`,
              `\t\tPrefixed Id: ${ID_PREFIX}${name}`,
            );
          } catch (e) {
            console.log(
              `Error when adding ability from ${obj.fileName}`,
              e.message,
            );
          }
        });
      });
      finalXML += `${TAB(1)}<!-- ///////////////////////////////////-->\n`;
      finalXML += `${TAB(1)}<!-- End Abilities in {${obj.fileName}}-->\n`;
      finalXML += `${TAB(1)}<!-- ///////////////////////////////////-->\n`;
    });
  });

  finalXML += "</Catalog>\n";

  console.log("===================");

  // if parent dir of TOOLS_MIMC_ABILITY_XML_GENERATION_LOCATION does not exist
  // As fs.writeFile() will throw not found error if the parent dir does not exist.
  if (
    !fs.existsSync(
      path.dirname(process.env.TOOLS_MIMC_ABILITY_XML_GENERATION_LOCATION),
    )
  ) {
    fs.mkdirSync(
      path.dirname(process.env.TOOLS_MIMC_ABILITY_XML_GENERATION_LOCATION),
      {
        recursive: true,
      }, 
    );

    console.log(
      `Created directory: ${path.dirname(process.env.TOOLS_MIMC_ABILITY_XML_GENERATION_LOCATION)}`,
    );
  }

  fs.writeFileSync(
    process.env.TOOLS_MIMC_ABILITY_XML_GENERATION_LOCATION,
    finalXML,
    { encoding: "utf8" },
  );

  console.log(
    `Created file: ${process.env.TOOLS_MIMC_ABILITY_XML_GENERATION_LOCATION}`,
  );
  console.log("===================");
  buildXml();
};
