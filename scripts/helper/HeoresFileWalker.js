const stormExtract = require('storm-extract');
const tmp = require('tmp');
const fs = require('fs');
const path = require('path');

require('./envValidator').check();

const preEnvChecker = () => {
  const requiredNodeVersion = 10;
  const requiredPlatform = 'linux';

  if (requiredNodeVersion !== parseInt(process.versions.node.split('.')[0], 10)) {
    // eslint-disable-next-line max-len
    throw new Error('This tool currently only supports node 10.x.x; Note: If you switch node version after npm install, you will need to re-run npm install again.');
  }

  if (process.platform !== requiredPlatform) {
    throw new Error('This tool currently only supports Linux / WSL.');
  }
};

preEnvChecker();


/**
 * Return a list of file contents that based on the filtered regex.
 * @param {RegExp} regex Regex to test the file name during file searching
 * @returns {Array} An array of found files, with the name and its content: {[{fileName: "", fileData: ""}, ...]}
 */
const ReadEach = (regex) => {
  if (!(regex instanceof RegExp)) {
    throw new Error('regex is not an instance of RegExp. Did you pass in a Regex?');
  }
  const files = [];

  const temp = tmp.dirSync({
    unsafeCleanup: true,
  });
  console.log('Searching for Heroes of the Storm files, This will take a while...');
  const CASCFiles = stormExtract.listFiles(process.env.HEROES_OF_THE_STORM_INSTALL_LOCATION)
    .filter((file) => regex.test(file));
  console.log(`Extracting Files to temp directory (${temp.name})`);
  stormExtract.extractFiles(
    process.env.HEROES_OF_THE_STORM_INSTALL_LOCATION,
    temp.name,
    CASCFiles,
  );

  CASCFiles.forEach((file) => {
    const fileData = fs.readFileSync(fs.realpathSync(`${temp.name}/${file}`), {
      encoding: 'utf8',
    });
    files.push({
      fileName: file,
      fileData,
    });
  });

  console.log(`Removed Tempoary Extraction Folder (${temp.name})`);
  temp.removeCallback();

  return files;
};


/**
 *
 * @param {RegExp} regex Regex to test the file name during the CASC search.
 * @param {String} location The location to save the files. Can be full or relative path.
 * @param {Boolean} preserveStructure Set to preserve the original structure or not. If false, it will attempt to put all searched files in the same directory. **This may cause data overwritten!**
 */
const SaveEach = (regex, location, preserveStructure = true) => {
  if (!(regex instanceof RegExp)) {
    throw new Error('regex is not an instance of RegExp. Did you pass in a Regex?');
  }
  const parsedLocation = path.resolve(location);
  if (!fs.existsSync(parsedLocation)) {
    fs.mkdirSync(parsedLocation, {
      recursive: true,
    });
  }

  if (preserveStructure) {
    console.log('Searching for Heroes of the Storm files, This will take a while...');
    const CASCFiles = stormExtract.listFiles(process.env.HEROES_OF_THE_STORM_INSTALL_LOCATION)
      .filter((file) => regex.test(file));
    console.log(`Extracting Files to directory (${parsedLocation})`);
    stormExtract.extractFiles(
      process.env.HEROES_OF_THE_STORM_INSTALL_LOCATION,
      parsedLocation,
      CASCFiles,
    );
  } else {
    const temp = tmp.dirSync({
      unsafeCleanup: true,
    });
    console.log('Searching for Heroes of the Storm files, This will take a while...');
    const CASCFiles = stormExtract.listFiles(process.env.HEROES_OF_THE_STORM_INSTALL_LOCATION)
      .filter((file) => regex.test(file));
    console.log(`Extracting Files to temp directory (${temp.name})`);
    stormExtract.extractFiles(
      process.env.HEROES_OF_THE_STORM_INSTALL_LOCATION,
      temp.name,
      CASCFiles,
    );

    console.log(`Copying all files to single directory (${parsedLocation})`);
    for (let i = 0; i < CASCFiles.length; i++) {
      const file = CASCFiles[i];
      const filename = file.split('/')[file.split('/').length - 1];
      fs.copyFileSync(`${temp.name}/${file}`, `${parsedLocation}/${filename}`);
    }

    console.log(`Removed Tempoary Extraction Folder (${temp.name})`);
    temp.removeCallback();
  }
};

module.exports.ReadEach = ReadEach;
module.exports.SaveEach = SaveEach;

// Predefined Regex
module.exports.AllXMLs = /\.xml$/i;
module.exports.AllS2MAs = /mods\/core.stormmod\/base.stormdata\/DepotCache\/.*?.s2ma$/i;
module.exports.AllDataFiles = /\.(xml|txt|storm[a-zA-Z]{0,}|galaxy)$/i;
