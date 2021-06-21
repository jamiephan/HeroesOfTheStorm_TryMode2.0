const stormExtract = require('storm-extract');
const fs = require('fs');
const rimraf = require('rimraf');

// const path = process.argv[2];
const path = '/mnt/d/Program Files/Heroes of the Storm/';
if (path == undefined) {
  throw 'Please specify the path for Heroes of the Storm installation folder: npm run buildmimic /path/to/hots';
}
const outputDirName = 'ModuleMimicLibs';

if (fs.existsSync(`${__dirname}/temp/`)) {
  rimraf.sync(fs.realpathSync(`${__dirname}/temp/`));
}
fs.mkdirSync(`${__dirname}/temp/`);

if (fs.existsSync(`${__dirname}/../(10)trymemode.stormmap/base.stormdata/${outputDirName}/`)) {
  rimraf.sync(fs.realpathSync(`${__dirname}/../(10)trymemode.stormmap/base.stormdata/${outputDirName}/`));
}
fs.mkdirSync(`${__dirname}/../(10)trymemode.stormmap/base.stormdata/${outputDirName}/`);

const savePath = fs.realpathSync(`${__dirname}/../(10)trymemode.stormmap/base.stormdata/${outputDirName}/`);
const tempPath = fs.realpathSync(`${__dirname}/temp/`);

String.prototype.replaceAll = function (search, replacement) {
  const target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

if (!fs.existsSync(tempPath)) {
  fs.mkdirSync(tempPath);
}

const extractFilesArr = [
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

const extractFilesCASCPath = extractFilesArr.map(
  (l) => `mods/heroesdata.stormmod/base.stormdata/TriggerLibs/${l}.galaxy`,
);
const extractFilesCASCPathH = extractFilesArr.map(
  (l) => `mods/heroesdata.stormmod/base.stormdata/TriggerLibs/${l}_h.galaxy`,
);
console.log('Extracting all Galaxy Files');
stormExtract.extractFiles(path, tempPath, extractFilesCASCPath);
console.log(' -> done');

console.log('Extracting all Galaxy Header Files');
stormExtract.extractFiles(path, tempPath, extractFilesCASCPathH);
console.log(' -> done');

for (let i = 0; i < extractFilesArr.length; i++) {
  const libname = extractFilesArr[i];
  const files = [
    `mods/heroesdata.stormmod/base.stormdata/TriggerLibs/${libname}.galaxy`,
    `mods/heroesdata.stormmod/base.stormdata/TriggerLibs/${libname}_h.galaxy`,
  ];
  console.log(`Reading ${libname}.galaxy and ${libname}_h.galaxy`);
  let libcontent = fs.readFileSync(`${tempPath}/${files[0]}`, 'utf8');
  let libcontenth = fs.readFileSync(`${tempPath}/${files[1]}`, 'utf8');
  console.log(' -> done');

  console.log(`Finding abbreviation of ${libname}.galaxy and ${libname}_h.galaxy`);
  const abbr = libcontent
    .split('\n')
    .filter((l) => /^void lib[a-zA-Z]{4,4}_InitLib \(\) \{/s.test(l))[0]
    .split('_')[0]
    .replace('void ', '');
  console.log(` -> ${abbr}`);

  console.log(`Modifying ${libname}.galaxy and ${libname}_h.galaxy`);
  libcontent = libcontent.replaceAll(abbr, `Mimic${libname}`);
  libcontent = libcontent.replaceAll('!((libCore_gv_dEBUGDebuggingEnabled == true))', 'false');
  libcontent = libcontent.replaceAll('!((GameCheatsEnabled(c_gameCheatCategoryDevelopment) == true))', 'false');
  libcontent = libcontent.replaceAll('TriggerDebugOutput', 'MimicTriggerDebugOutput');
  libcontent = libcontent.replaceAll('MimicTriggerDebugOutputEnable', 'TriggerDebugOutputEnable');

  libcontentR = libcontent.split('\n');

  for (let j = 0; j < libcontentR.length; j++) {
    let line = libcontentR[j];
    if (
      /TriggerAddEventChatMessage\([a-zA-Z0-9_]{0,}\, c_playerAny, "[a-zA-Z0-9\_\-\ ]{0,}", (true|false)\);/s.test(line)
    ) {
      const cmdWithQuote = line.split(',')[2];
      const cmd = cmdWithQuote.split('"')[1];
      libcontentR[j] = line.replace(cmdWithQuote, ` "m${cmd}"`);
    }

    if (/if .*?StringWord\(EventChatMessage\(false\), 1\) .*?= "[a-zA-Z0-9_\- ]{0,}".*? \{/s.test(line)) {
      const cmd1 = line.split('"')[1];
      libcontentR[j] = line.replace(cmd1, `m${cmd1}`);
    }
    if (/if .*?StringWord\(lv_.*?, 1\) .*?= "[a-zA-Z0-9_\- ]{0,}".*? \{/s.test(line)) {
      const cmd4 = line.split('"')[1];
      libcontentR[j] = line.replace(cmd4, `m${cmd4}`);
    }

    if (
      /if.*?StringWord\(EventChatMessage\(false\), 1\) .*= "[a-zA-Z0-9_\- ]{0,}"\) .*.* \(StringWord\(EventChatMessage\(false\), 1\) .*.* "[a-zA-Z0-9_\- ]{0,}".*? {/s.test(
        line,
      )
    ) {
      const cmd2 = line.split('"')[1];
      const cmd3 = line.split('"')[3];
      line = line.replace(cmd2, `m${cmd2}`);
      line = line.replace(cmd3, `m${cmd3}`);
      libcontentR[j] = line;
    }
    if (/if.*?GameCheatsEnabled\(c_gameCheatCategoryDevelopment\) == true.*? {/s.test(line)) {
      libcontentR[j] = line.replace('true', 'false');
    }
    if (/if \(auto.*_val == "ult[0-9]"\) {/s.test(line)) {
      libcontentR[j] = line.replace(line.split('"')[1], `m${line.split('"')[1]}`);
    }

    // Add a message when lib loaded
    if (/Mimic.*_InitTriggers\(\);/s.test(line)) {
      libcontentR[
        j
      ] = line += `\n\tUIDisplayMessage(PlayerGroupAll(), c_messageAreaDebug, StringToText("${libname} Mimic Lib Initialized"));`;
    }
  }

  libcontent = libcontentR.join('\n');

  libcontent = libcontent.replaceAll(
    `include "TriggerLibs/${libname}_h"`,
    `include "${outputDirName}/Mimic${libname}_h"`,
  );
  libcontenth = libcontenth.replaceAll(abbr, `Mimic${libname}`);
  console.log(' -> done');

  console.log(`Saving modified ${libname}.galaxy and ${libname}_h.galaxy to ${savePath}`);
  fs.writeFileSync(`${savePath}/Mimic${libname}.galaxy`, libcontent, { encoding: 'utf8' });
  fs.writeFileSync(`${savePath}/Mimic${libname}_h.galaxy`, libcontenth, { encoding: 'utf8' });
  console.log(' -> done');

  console.log('\n\r');
}

console.log('Removing Tempoary File Path');
rimraf.sync(tempPath);
console.log(' -> done');

console.log('Generating Loader File');

let loadercontent = `include "${outputDirName}/MimicTriggerDebugOutput"\n`;
for (let i = 0; i < extractFilesArr.length; i++) {
  const file = extractFilesArr[i];
  loadercontent += `include "${outputDirName}/Mimic${file}"\n`;
}

loadercontent += `
//--------------------------------------------------------------------------------------------------
// Library: Mimic Lib Loader
//--------------------------------------------------------------------------------------------------
// Validating: templates

// External Library Initialization
void libMICL_InitLibraries() {
    libMTDO_InitLib();
`;
for (let i = 0; i < extractFilesArr.length; i++) {
  const file = extractFilesArr[i];
  loadercontent += `    Mimic${file}_InitLib();\n`;
}
loadercontent += `}

//--------------------------------------------------------------------------------------------------
// Library Initialization
//--------------------------------------------------------------------------------------------------
bool libMICL_InitLib_completed = false;

void libMICL_InitLib () {
    if (libMICL_InitLib_completed) {
        return;
    }

    libMICL_InitLib_completed = true;

    libMICL_InitLibraries();

    // Need to change to debug mode before MapInit Event is called
    libCore_gv_dEBUGDebuggingEnabled = true;
    
    UIDisplayMessage(PlayerGroupAll(), c_messageAreaDebug, StringToText("Mimic Lib Loader Initialized"));
}
`;
console.log(' -> done');
console.log('Saving Generated Loader file');
fs.writeFileSync(`${savePath}/MimicLibsLoader.galaxy`, loadercontent, { encoding: 'utf8' });
console.log(' -> done');

console.log('Generating MimicTriggerDebugOutput File');
const mtdo = `include "TriggerLibs/NativeLib"

//--------------------------------------------------------------------------------------------------
// Library: Mimic TriggerDebugOutput
//--------------------------------------------------------------------------------------------------
// Validating: templates

// Function Declarations
void MimicTriggerDebugOutput (int lp_uselessInt, text lp_outputText, bool lp_uselessBool);

//--------------------------------------------------------------------------------------------------
// Library: Mimic TriggerDebugOutput
//--------------------------------------------------------------------------------------------------
// Validating: templates

// External Library Initialization
void libMTDO_InitLibraries () {
    libNtve_InitVariables();
}

// Variable Initialization
bool libMTDO_InitVariables_completed = false;

void libMTDO_InitVariables() {
    if (libMTDO_InitVariables_completed) {
        return;
    }

    libMTDO_InitVariables_completed = true;
}


// Functions
void MimicTriggerDebugOutput (int lp_uselessInt, text lp_outputText, bool lp_uselessBool) {
    // Automatic Variable Declarations
    // Implementation
    UIDisplayMessage(PlayerGroupAll(), c_messageAreaSubtitle, lp_outputText);
}

//--------------------------------------------------------------------------------------------------
// Library Initialization
//--------------------------------------------------------------------------------------------------
bool libMTDO_InitLib_completed = false;

void libMTDO_InitLib () {
    if (libMTDO_InitLib_completed) {
        return;
    }

    libMTDO_InitLib_completed = true;

    libMTDO_InitLibraries();
    libMTDO_InitVariables();
    UIDisplayMessage(PlayerGroupAll(), c_messageAreaDebug, StringToText("MimicTriggerDebugOutput Lib Initialized"));
}
`;
console.log(' -> done');
console.log('Saving MimicTriggerDebugOutput file');
fs.writeFileSync(`${savePath}/MimicTriggerDebugOutput.galaxy`, mtdo, {
  encoding: 'utf8',
});
console.log(' -> done');
console.log('');
console.log('==============================================');
console.log('');
console.log('All Done! The Mimic libs have been generated and modified. The changes includes:');
console.log('');
console.log('    -> Modifying to !((GameCheatsEnabled(c_gameCheatCategoryDevelopment) == false))');
console.log('       So that it always return true to bypass dev build check');
console.log('');
console.log('    -> Append "m" before any chat commands (TriggerAddEventChatMessage) and their checks');
console.log('       Which will prevent most of the conflict to the main lib.');
console.log('       For example swapping hero command: sh -> msh');
console.log('       For example spawn QA Cheats panel: -devcheats -> m-devcheats');
console.log('');
console.log('    -> Replace The variables, triggers, etc, prefix with Mimic[LibFileName]');
console.log('       This will prevent name conflict and code duplicates.');
console.log('       For example: libSprt_gt_ToggleCheatsDialog -> MimicSupportLib_gt_ToggleCheatsDialog');
console.log('');
console.log('    -> Replace TriggerDebugOutput() with a custom MimicTriggerDebugOutput()');
console.log('       This allows to output useful messages without the Trigger Output Window.');
console.log(`       Note: The code is located at ${outputDirName}/TriggerDebugOutput.galaxy `);
console.log('');
console.log('    -> Force enable debug mode: libCore_gv_dEBUGDebuggingEnabled = true;');
console.log('       This allows to use some debug-only functions.');
console.log(`       Note: The code is located at ${outputDirName}/TriggerDebugOutput.galaxy `);
console.log('');
console.log('==============================================');
console.log('');
console.log('IGNORE BELOW IF YOU ARE USING THE CUSTOM TRY MODE MAP FROM JAMIEPHAN');
console.log('');
console.log('If you want to use all of the mimic libs in you map or lib, do the following:');
console.log('');
console.log(`1. Copy the whole directory in ${savePath}`);
console.log('2. And save it to /Path/To/Your/MapOrLib/base.stormdata/');
console.log(`3. Which will look like this: /Path/To/Your/MapOrLib/base.stormdata/${outputDirName}`);
console.log('4. In the galaxy file (either from MapScript.galaxy, or your own Lib)');
console.log('5. Open the .galaxy with a text editor and find the last line of include "XXXXX"');
console.log(`6. Add the following code after the last line: include "${outputDirName}/MimicLibsLoader"`);
console.log('7. Then, locate a function named XXXX_InitLibraries() (XXXX should be the ID if the your lib)');
console.log('    (If you are editing MapScript.galaxy, it should only have InitLibs() instead.)');
console.log('8. Inside the function, Append the code: libMICL_InitLib();');
console.log(
  '9. After, open the map and see does the "Initialized" message popup for each Lib without error and you are done',
);
console.log('');
console.log('If you would like to only include certain mimic libs, do the following:');
console.log('');
console.log('1. Copy previous step 1 - 5');
console.log('2. Copy and add the code:');
console.log(`    include "${outputDirName}/MimicTriggerDebugOutput"`);
console.log('3. After, you can add your desired mimic libs:');
for (let i = 0; i < extractFilesArr.length; i++) {
  const file = extractFilesArr[i];
  console.log(`\n    include "${outputDirName}/${file}"`);
}
console.log('');
console.log('4. Then, locate a function named XXXX_InitLibraries() (XXXX should be the ID of the your lib)');
console.log('    (If you are editing MapScript.galaxy, it should only have InitLibs() instead.)');
console.log('5. Copy and add the code to the last line of the function:');
console.log('    libMTDO_InitLib();');
console.log('6. Inside the function, Append the codes corresponding to your choices above');
console.log('    Note: This requires percision and fail to do so will not able to load the map properly:');
for (let i = 0; i < extractFilesArr.length; i++) {
  const file = extractFilesArr[i];
  console.log(`\n    Mimic${file}_InitLib();`);
}
