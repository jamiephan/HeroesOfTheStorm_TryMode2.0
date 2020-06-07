const fs = require('fs');

require('./helper/envValidator').check();


const mapDirName = '(10)trymemode.stormmap';
// eslint-disable-next-line max-len
const targetPathParent = `${process.env.HEROES_OF_THE_STORM_INSTALL_LOCATION}/maps/heroes/singleplayermaps`;
const targetPathFull = `${targetPathParent}/${mapDirName}`;

const sourcePath = fs.realpathSync(`./${mapDirName}/`);

// Seems a map already exist
if (fs.existsSync(targetPathFull)) {
  console.log(`Seems the file/folder ${targetPathFull} aleady existed.`);
  process.exit();
}

// Recursivly create folder in HEROES_OF_THE_STORM_INSTALL_LOCATION/maps/heroes/singleplayermaps
if (!fs.existsSync(targetPathParent)) {
  fs.mkdirSync(targetPathParent, {
    recursive: true,
  });
}

fs.symlink(`${sourcePath}`, `${targetPathFull}`, 'dir', (e) => {
  if (e) throw e;
  console.log(`Created Symbol Link ${sourcePath} <==> ${targetPathFull}`);
  console.log('Now try to restart the game and launch Try Me Mode!');
  console.log('You dont need to restart the game everytime. just once for the installation.');
  console.log('>You might need to re-enter try mode once for the loading screen image to change');
});
