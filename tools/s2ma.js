const stormExtract = require('storm-extract');
const fs = require('fs');
const rimraf = require('rimraf');

// const path = process.argv[2];
const path = '/mnt/d/Program Files/Heroes of the Storm/';
if (path == undefined) {
  throw 'Please specify the path for Heroes Of The Storm installation folder: npm run s2ma /path/to/hots';
}
const outputDirName = 's2ma';

if (fs.existsSync(__dirname + '/s2matemp/')) {
  rimraf.sync(fs.realpathSync(__dirname + '/s2matemp/'));
}
fs.mkdirSync(__dirname + '/s2matemp/');

if (fs.existsSync(__dirname + '/../' + outputDirName + '/')) {
  rimraf.sync(fs.realpathSync(__dirname + '/../' + outputDirName + '/'));
}
fs.mkdirSync(__dirname + '/../' + outputDirName + '/');

const savePath = fs.realpathSync(__dirname + '/../' + outputDirName + '/');
const tempPath = fs.realpathSync(__dirname + '/s2matemp/');

// Extract DepotCache

// This process is retard
console.log('Searching for .s2ma files. This may take a long time.');
var aFiles = stormExtract.listFiles(path);
aFiles = aFiles
  .map(l => (/mods\/core.stormmod\/base.stormdata\/DepotCache\/.*?.s2ma/s.test(l) ? l : undefined))
  .filter(l => !!l);
console.log(' ->done');

console.log('Extracting *.s2ma ');
stormExtract.extractFiles(path, tempPath, aFiles);
console.log(' ->done');

const aFilesname = [];
console.log('Copying all *.s2ma to 1 directory');
for (let i = 0; i < aFiles.length; i++) {
  const file = aFiles[i];
  const filename = file.split('/')[file.split('/').length - 1];
  aFilesname.push(filename);
  fs.writeFileSync(`${savePath}/${filename}`, fs.readFileSync(`${tempPath}/${file}`));
}
console.log(' ->done');

console.log('Deleting Temp Directory');
rimraf.sync(tempPath);
console.log(' ->done');
