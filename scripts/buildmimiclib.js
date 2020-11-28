const fs = require('fs');
const HeroesFiles = require('./helper/HeoresFileWalker');

const regex = /^mods\/heroesdata\.stormmod\/base\.stormdata\/triggerlibs\/[a-zA-Z1-9_]{0,}.galaxy/i;

const files = HeroesFiles.ReadEach(regex);

const LibsToBeMimic = [
  //   'AILib',
  'GameDataHelperLib',
  'GameLib',
  'HeroesLib',
  'MapMechanicsLib',
  'SoundLib',
  'StartingExperienceLib',
  'SupportLib',
  'UILib',
];

const mimicify = (fileData, headerData, LibName) => {
  // TODO: Modify chat message commands and the checks
  console.log(`[Log] ${LibName}.galaxy: Modifying ${LibName}.galaxy`);
  // Main Modification

  let mimicData = fileData;

  // Replace Cheat Check
  mimicData = mimicData.replace(/GameCheatsEnabled\(c\_gameCheatCategoryDevelopment\)/g, 'true');
  console.log(`[Log] ${LibName}.galaxy: Replaced "GameCheatsEnabled(c__gameCheatCategoryDevelopment)" to "true"`);

  // Replace Debug Check
  mimicData = mimicData.replace(/libCore_gv_dEBUGDebuggingEnabled/g, 'true');
  console.log(`[Log] ${LibName}.galaxy: Replaced "libCore_gv_dEBUGDebuggingEnabled" to "true"`);

  // Fix GameLib's libCore_gv_dEBUGDebuggingEnabled = GameCheatsEnabled(c_gameCheatCategoryDevelopment);
  mimicData = mimicData.replace('true = true', '');
  console.log(`[Log] ${LibName}.galaxy: Removed "true = true" from previous conflicts`);

  // Get the LibId
  const LibId = mimicData.match(/^void\ lib[a-zA-Z1-9]{0,}_InitLib\ \(\)/igm)[0]
    .match(/lib[a-zA-Z1-9]{0,}/ig)[0];
  console.log(`[Log] ${LibName}.galaxy: Found Library ID: ${LibId}`);

  // Replace Library Header Name
  mimicData = mimicData.replace(new RegExp(`TriggerLibs/${LibName}_h`, 'g'),
    `${process.env.TOOLS_MIMIC_LIBRARY_IMPORT_PREFIX}Mimic${LibName}_h`);
  console.log(`[Log] ${LibName}.galaxy: Replaced Library Header Name ${LibName}_h to Mimic${LibName}_h`);
  // mimicData = mimicData.replace(new RegExp(`${LibName}_h`, 'g'), `Mimic${LibName}_h`);

  // Replace Library Name
  mimicData = mimicData.replace(new RegExp(`${LibId}`, 'g'), `Mimic${LibName}`);
  console.log(`[Log] ${LibName}.galaxy: Replaced Library Name ${LibId} to Mimic${LibName}`);

  // Replace TriggerDebugOutput With a Mimic Version
  mimicData = mimicData.replace(/TriggerDebugOutput\(/g, 'MimicTriggerDebugOutput(');
  console.log(`[Log] ${LibName}.galaxy: Replaced TriggerDebugOutput with a mimicked one.`);

  // Replace Event Chat Message with appended prefix "m"
  let chatCommands = mimicData.match(/TriggerAddEventChatMessage(.*)/gim);
  if (chatCommands !== null) {
    chatCommands = chatCommands.map((x) => x.split('"')[1]);
    chatCommands.forEach((c) => {
      mimicData = mimicData.replace(new RegExp(`"${c}"`, 'g'), `"m${c}"`);
      // Single quote
      mimicData = mimicData.replace(new RegExp(`'${c}'`, 'g'), `'m${c}'`);
      console.log(`[Log] ${LibName}.galaxy: Replaced Chat Command "${c}" with "m${c}"`);
    });
  } else {
    console.log(`[Log] ${LibName}.galaxy: Does not have any chat commands`);
  }

  /**
 * COMMENT OUT GAME LIB
 * MimicTriggerDebugOutput(2, TextExpressionAssemble("Param/Expression/lib_Game_B600485F"), false)
 * THIS IS FUCKING ANNOYING
 */

  // Header Modification

  let mimicHeader = headerData;

  // Replace Library Name
  mimicHeader = mimicHeader.replace(new RegExp(LibId, 'g'), `Mimic${LibName}`);
  console.log(`[Log] ${LibName}_h.galaxy: Replaced All function and variable names to "Mimic${LibName}"`);

  return [mimicData, mimicHeader];
};

// const mimicLibs = {};

LibsToBeMimic.forEach((Lib) => {
  const mainRegex = new RegExp(`${Lib.toLowerCase()}.galaxy`, 'i');
  const headerRegex = new RegExp(`${Lib.toLowerCase()}_h.galaxy`, 'i');

  const mainFileContent = files.filter((x) => mainRegex.test(x.fileName))[0].fileData;
  const headerFileContent = files.filter((x) => headerRegex.test(x.fileName))[0].fileData;

  const mimicData = mimicify(mainFileContent, headerFileContent, Lib);

  const modifiedMainFileContent = mimicData[0];
  const modifiedHeaderFileContent = mimicData[1];

  fs.writeFileSync(`${process.env.TOOLS_MIMIC_LIBRARY_SAVE_LOCATION}/Mimic${Lib}.galaxy`,
    modifiedMainFileContent,
    { encoding: 'utf8' });

  fs.writeFileSync(`${process.env.TOOLS_MIMIC_LIBRARY_SAVE_LOCATION}/Mimic${Lib}_h.galaxy`,
    modifiedHeaderFileContent,
    { encoding: 'utf8' });
});
