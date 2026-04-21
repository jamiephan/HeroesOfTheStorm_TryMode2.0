import fs from "fs";
import path from "path";

import { heroesFileExtract, logger } from "../../utils/index.js";

const LOGGER = logger("mimiclib");

const LIBS_TO_BE_MIMIC = [
  //   'AILib',
  "GameDataHelperLib",
  "GameLib",
  "HeroesLib",
  "MapMechanicsLib",
  "SoundLib",
  "StartingExperienceLib",
  "SupportLib",
  "UILib",
];

/**
 * Transform a galaxy library file (main + header) into a "mimic" version.
 * Replaces cheat/debug checks, renames library identifiers, prefixes chat commands, etc.
 */
const mimicify = (fileData, headerData, LibName) => {
  LOGGER.info(`${LibName}.galaxy: Modifying ${LibName}.galaxy`);

  let mimicData = fileData;

  // Replace Cheat Check
  mimicData = mimicData.replace(
    /GameCheatsEnabled\(c_gameCheatCategoryDevelopment\)/g,
    "true",
  );
  LOGGER.info(
    `${LibName}.galaxy: Replaced "GameCheatsEnabled(c__gameCheatCategoryDevelopment)" to "true"`,
  );

  // Replace Debug Check
  mimicData = mimicData.replace(/libCore_gv_dEBUGDebuggingEnabled/g, "true");
  LOGGER.info(
    `${LibName}.galaxy: Replaced "libCore_gv_dEBUGDebuggingEnabled" to "true"`,
  );

  // Fix GameLib's libCore_gv_dEBUGDebuggingEnabled = GameCheatsEnabled(c_gameCheatCategoryDevelopment);
  mimicData = mimicData.replace("true = true", "");
  LOGGER.info(
    `${LibName}.galaxy: Removed "true = true" from previous conflicts`,
  );

  // Get the LibId
  const LibId = mimicData
    .match(/^void lib[a-zA-Z1-9]{0,}_InitLib \(\)/gim)[0]
    .match(/lib[a-zA-Z1-9]{0,}/gi)[0];
  LOGGER.info(`${LibName}.galaxy: Found Library ID: ${LibId}`);

  // Replace Library Header Name
  mimicData = mimicData.replace(
    new RegExp(`TriggerLibs/${LibName}_h`, "g"),
    `${process.env.TOOLS_MIMIC_LIBRARY_IMPORT_PREFIX}Mimic${LibName}_h`,
  );
  LOGGER.info(
    `${LibName}.galaxy: Replaced Library Header Name ${LibName}_h to Mimic${LibName}_h`,
  );

  // Replace Library Name
  mimicData = mimicData.replace(new RegExp(`${LibId}`, "g"), `Mimic${LibName}`);
  LOGGER.info(
    `${LibName}.galaxy: Replaced Library Name ${LibId} to Mimic${LibName}`,
  );

  // Replace TriggerDebugOutput With a Mimic Version
  mimicData = mimicData.replace(
    /TriggerDebugOutput\(/g,
    "MimicTriggerDebugOutput(",
  );
  LOGGER.info(
    `${LibName}.galaxy: Replaced TriggerDebugOutput with a mimicked one.`,
  );

  // Replace Event Chat Message with appended prefix "m"
  let chatCommands = mimicData.match(/TriggerAddEventChatMessage(.*)/gim);
  if (chatCommands !== null) {
    chatCommands = chatCommands.map((x) => x.split('"')[1]);
    chatCommands.forEach((c) => {
      mimicData = mimicData.replace(new RegExp(`"${c}"`, "g"), `"m${c}"`);
      // Single quote
      mimicData = mimicData.replace(new RegExp(`'${c}'`, "g"), `'m${c}'`);
      LOGGER.info(
        `${LibName}.galaxy: Replaced Chat Command "${c}" with "m${c}"`,
      );
    });
  } else {
    LOGGER.info(`${LibName}.galaxy: Does not have any chat commands`);
  }

  // Header Modification
  let mimicHeader = headerData;

  // Replace Library Name
  mimicHeader = mimicHeader.replace(new RegExp(LibId, "g"), `Mimic${LibName}`);
  LOGGER.info(
    `${LibName}_h.galaxy: Replaced All function and variable names to "Mimic${LibName}"`,
  );

  return [mimicData, mimicHeader];
};

export default () => {
  const searchRegex =
    /^mods(\\|\/)heroesdata\.stormmod(\\|\/)base\.stormdata(\\|\/)triggerlibs(\\|\/)[a-zA-Z0-9_-]{0,}.galaxy$/i;

  heroesFileExtract.queue("mimiclib", searchRegex, (extractedFiles) => {
    const saveLocation = process.env.TOOLS_MIMIC_LIBRARY_SAVE_LOCATION;

    // Ensure the save directory exists
    if (!fs.existsSync(saveLocation)) {
      fs.mkdirSync(saveLocation, { recursive: true });
      LOGGER.info(`Created directory: ${saveLocation}`);
    }

    // Convert Buffer fileData to string for text processing
    const files = extractedFiles.map((f) => ({
      fileName: f.fileName,
      fileData:
        typeof f.fileData === "string"
          ? f.fileData
          : f.fileData.toString("utf8"),
    }));

    LIBS_TO_BE_MIMIC.forEach((Lib) => {
      const mainRegex = new RegExp(`${Lib.toLowerCase()}.galaxy`, "i");
      const headerRegex = new RegExp(`${Lib.toLowerCase()}_h.galaxy`, "i");

      const mainFile = files.find((x) => mainRegex.test(x.fileName));
      const headerFile = files.find((x) => headerRegex.test(x.fileName));

      if (!mainFile) {
        LOGGER.error(`Could not find main file for library: ${Lib}`);
        return;
      }
      if (!headerFile) {
        LOGGER.error(`Could not find header file for library: ${Lib}`);
        return;
      }

      const [modifiedMain, modifiedHeader] = mimicify(
        mainFile.fileData,
        headerFile.fileData,
        Lib,
      );

      fs.writeFileSync(
        path.join(saveLocation, `Mimic${Lib}.galaxy`),
        modifiedMain,
        { encoding: "utf8" },
      );

      fs.writeFileSync(
        path.join(saveLocation, `Mimic${Lib}_h.galaxy`),
        modifiedHeader,
        { encoding: "utf8" },
      );

      LOGGER.info(`Saved Mimic${Lib}.galaxy and Mimic${Lib}_h.galaxy`);
    });

    LOGGER.info("===================");
    LOGGER.info(`All mimic libraries saved to: ${saveLocation}`);
    LOGGER.info("===================");
  });
};
