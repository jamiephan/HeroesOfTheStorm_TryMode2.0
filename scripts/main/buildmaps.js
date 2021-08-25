/* eslint-disable max-len */
const fetch = require('node-fetch');
const fs = require('fs-extra');
const AdmZip = require('adm-zip');
const tmp = require('tmp');
const { execSync } = require('child_process');
const path = require('path');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const mpqEditorUrl = 'http://www.zezula.net/download/mpqeditor_en.zip';

(async () => {
  const temp = tmp.dirSync({
    unsafeCleanup: true,
  });
  // const temp = { name: 'C:/Users/jamie/AppData/Local/Temp/fake_temp' };

  console.log('Downloading and Extracting MPQEditor...');
  new AdmZip(await (await fetch(mpqEditorUrl)).buffer())
    .extractEntryTo('x64/MPQEditor.exe', `${temp.name}`);

  console.log('Cloning Map Repo...');
  execSync(`git clone https://github.com/jamiephan/HeroesOfTheStorm_S2MA ${temp.name}/map_repo`);

  const mpqEditor = `${temp.name}/x64/MPQEditor.exe`;

  const executeMPQScript = async (script) => {
    const scriptContent = script.join('\n');
    const tempScript = tmp.fileSync({ unsafeCleanup: true });
    fs.writeFileSync(tempScript.name, scriptContent, { encoding: 'utf8' });
    execSync(`${mpqEditor} /console "${tempScript.name.replace(/\\/g, '/')}"`);
    await delay(100);
    console.log(`${mpqEditor} /console "${tempScript.name.replace(/\\/g, '/')}"`);
    tempScript.removeCallback();
  };

  // Basically mimic the GH action, coz I forgot how to do it lol

  fs.copySync(path.resolve('./(10)trymemode.stormmap/base.stormassets'), `${temp.name}/data/base.stormassets`);
  fs.copySync(path.resolve('./(10)trymemode.stormmap/base.stormdata'), `${temp.name}/data/base.stormdata`);
  fs.removeSync(`${temp.name}/data/base.stormdata/ai`);
  fs.removeSync(`${temp.name}/data/base.stormdata/cutscenes`);
  fs.removeSync(`${temp.name}/data/base.stormdata/gamedata`);
  fs.removeSync(`${temp.name}/data/base.stormdata/ui`);

  const maps = fs.readdirSync(`${temp.name}/map_repo/maps`)
    .filter((m) => m.toLowerCase().endsWith('.stormmap'))
    .forEach(async (map) => {
      const mapPath = `${temp.name}/map_repo/maps/${map}`;
      console.log(`Patching MapScript.galaxy in ${map}`);

      // Temp Working Path for this map
      const tempWork = tmp.dirSync();
      await executeMPQScript([`extract "${mapPath.replace(/\\/g, '/')}" MapScript.galaxy "${tempWork.name.replace(/\\/g, '/')}"`]);
      const orignalMapScriptContent = fs.readFileSync(`${tempWork.name}/MapScript.galaxy`);
      console.log(orignalMapScriptContent);

      console.log(tempWork.name);

      console.log(map);
    });

  console.log(temp.name);
  // executeMPQScript(['asd', 'asdasd', 'lol']);
  // execSync(mpqEditor);

  // temp.removeCallback();
})();
