const fs = require('fs');
require('./helper/envValidator').check();
const fileWalker = require('./helper/fileWalker');

const removingString = '//_heroes_replace_//';

fileWalker(process.env.TOOLS_UPDATE_LIBRARY_LIBRARIES_LOCATION, (file) => {
  const fileName = file.split('/')[file.split('/').length - 1];
  const fileExt = fileName.split('.')[fileName.split('.').length - 1];

  if (fileExt.toLowerCase() === 'galaxy') {
    let content = fs.readFileSync(file, { encoding: 'utf8' });
    content = content.replace(new RegExp(removingString, 'gi'), '');
    fs.writeFileSync(file, content, { encoding: 'utf8' });
    console.log(`Saved ${file}`);
  } else {
    console.log(`${file} is not a galaxy file. Skipped...`);
  }
});
