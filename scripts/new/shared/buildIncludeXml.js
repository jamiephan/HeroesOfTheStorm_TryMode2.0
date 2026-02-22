import { glob } from "glob";
import fs from "fs";
import xml2js from "xml2js";

const buildXml = () => {
  // Get all XML files under ModDir
  const xmlFiles = glob
    .sync(`${process.env.TOOLS_XML_MODS_DIR}/**/*.xml`, {
      nodir: true,
    })

    // Remove the prefix path for each file
    .map((file) =>
      `./${file}`
        .replace(/\\/g, "/")
        .replace(`${process.env.TOOLS_GAMEDATA_DIR.replace(/\\/g, "/")}/`, ""),
    );

  // Sort the XML files by file name
  xmlFiles.sort((a, b) => a.localeCompare(b));

  // Check if there is any XML file
  if (xmlFiles.length === 0) {
    console.log("Cannot find any XML files.");
    return false;
  }

  // Generate XML file
  const xmlObj = {
    Includes: {
      Catalog: [],
    },
  };

  for (const xmlFile of xmlFiles) {
    xmlObj.Includes.Catalog.push({
      $: {
        path: xmlFile,
      },
    });
  }

  const builder = new xml2js.Builder();
  const xml = builder.buildObject(xmlObj);

  console.log(xml);
  // Write to mainXML
  fs.writeFile(process.env.TOOLS_XML_MAIN_XML_PATH, xml, (error) => {
    if (error) {
      console.log(error);
    }
    console.log(
      `Successfully generate XML file: ${process.env.TOOLS_XML_MAIN_XML_PATH}`,
    );
  });
};

export default buildXml;
