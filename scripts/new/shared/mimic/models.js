import fs from "fs";
import path from "path";
import { parseString as XMLParser } from "xml2js";

import { TAB, heroesFileExtract, logger } from "../../utils/index.js";
import buildXml from "../buildIncludeXml.js";

const LOGGER = logger("mimicmodels");

export default () => {
  const ID_PREFIX = "UN";
  heroesFileExtract.queue("mimicmodels", /^mods.*\.xml$/, (extractedFiles) => {
    let finalXML = '<?xml version="1.0" encoding="UTF-8"?>\n\n';
    finalXML +=
      "<!-- ======================================================== -->\n";
    finalXML +=
      '<!-- This file is generated via "npm run build:mimicmodels" -->\n';
    finalXML +=
      "<!-- ======================================================== -->\n";
    finalXML += "<!-- It will find all <CModel*> and map to a <CUnit>, -->\n";
    finalXML += "<!-- That allow a model to be spawned as a Unit. -->\n";
    finalXML += `<!-- To prevent collision, all Mimic Models Unit's id will have prefixed "${ID_PREFIX}" -->\n`;
    finalXML +=
      '\n<Catalog xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="https://raw.githubusercontent.com/jamiephan/HeroesOfTheStorm_Gamedata/master/xsd/latest.xsd">\n';
    // 1. Add the dummy unit (Need to put on top before all the mapped units, otherwise the reference will be broken)
    finalXML += `${TAB(1)}<!-- Dummy Parent Unit for mimic model to inherit from -->\n`;
    finalXML += `${TAB(1)}<CUnit id="${ID_PREFIX}_t" parent="StormHero">\n`;
    finalXML += `${TAB(2)}<BehaviorArray Link="PermaInvulnerable"/>\n`;
    finalXML += `${TAB(2)}<WeaponArray Link="FootmanMinion"/>\n`;
    finalXML += `${TAB(1)}</CUnit>\n`;

    const MODELS = [];
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
          .filter((x) => !/^CModel/i.test(x))
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
        finalXML += `${TAB(1)}<!-- Start Models in {${obj.fileName}}-->\n`;
        finalXML += `${TAB(1)}<!-- ///////////////////////////////////-->\n`;
        Object.keys(catalog).forEach((k) => {
          if (!Array.isArray(catalog[k])) return;

          catalog[k].forEach((a) => {
            const id = a.$.id;
            if (!id) return;
            // 2. Add a dummy CUnit
            finalXML += `${TAB(1)}<CUnit id="${ID_PREFIX}${id}" parent="${ID_PREFIX}_t" />\n`;
            MODELS.push(id);
            LOGGER.info(
              `Mapped Model ${id} to Unit ${ID_PREFIX}${id} in file ${obj.fileName}.`,
            );
          });
        });
        finalXML += `${TAB(1)}<!-- ///////////////////////////////////-->\n`;
        finalXML += `${TAB(1)}<!-- End Models in {${obj.fileName}}-->\n`;
        finalXML += `${TAB(1)}<!-- ///////////////////////////////////-->\n`;
      });
    });

    // 3. Add CActorUnit for each model at the end of the file to prevent reference broken
    // (Moved actorunit below CUnit so the XMl file is much easier to read)
    finalXML += "\n";
    finalXML += `${TAB(1)}<!-- ///////////////////////////////////-->\n`;
    finalXML += `${TAB(1)}<!-- Start CActorUnit for all Models -->\n`;
    finalXML += `${TAB(1)}<!-- ///////////////////////////////////-->\n`;
    MODELS.forEach((id) => {
      finalXML += `${TAB(1)}<CActorUnit id="${ID_PREFIX}${id}" parent="GenericUnitStandard" unitName="${ID_PREFIX}${id}">\n`;
      finalXML += `${TAB(2)}<Model value="${id}" />\n`;
      finalXML += `${TAB(1)}</CActorUnit>\n`;
    });
    finalXML += `${TAB(1)}<!-- ///////////////////////////////////-->\n`;
    finalXML += `${TAB(1)}<!-- End CActorUnit for all Models -->\n`;
    finalXML += `${TAB(1)}<!-- ///////////////////////////////////-->\n`;

    finalXML += "</Catalog>\n";

    LOGGER.info("===================");

    // if parent dir of TOOLS_MIMC_MODEL_XML_GENERATION_LOCATION does not exist
    // As fs.writeFile() will throw not found error if the parent dir does not exist.
    if (
      !fs.existsSync(
        path.dirname(process.env.TOOLS_MIMC_MODEL_XML_GENERATION_LOCATION),
      )
    ) {
      fs.mkdirSync(
        path.dirname(process.env.TOOLS_MIMC_MODEL_XML_GENERATION_LOCATION),
        {
          recursive: true,
        },
      );

      LOGGER.info(
        `Created directory: ${path.dirname(process.env.TOOLS_MIMC_MODEL_XML_GENERATION_LOCATION)}`,
      );
    }

    fs.writeFileSync(
      process.env.TOOLS_MIMC_MODEL_XML_GENERATION_LOCATION,
      finalXML,
      { encoding: "utf8" },
    );

    LOGGER.info(
      `Created file: ${process.env.TOOLS_MIMC_MODEL_XML_GENERATION_LOCATION}`,
    );
    LOGGER.info("===================");
    buildXml();
  });
};
