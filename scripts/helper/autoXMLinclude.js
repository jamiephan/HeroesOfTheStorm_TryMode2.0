const fs = require('fs');
const xml2js = require('xml2js');

require('./envValidator').check();


/**
 * A function to automatically generare GameData.XML with all of the mods XML files under process.env.TOOLS_XML_MODS_DIR
 */
const autoXMLInclude = () => {
  // Funny Recursive file function: https://stackoverflow.com/questions/5827612/node-js-fs-readdir-recursive-directory-search
  // TODO: Convert this to ES6
  // eslint-disable-next-line no-var, func-names
  var walk = function (dir, done) {
    let results = [];
    // eslint-disable-next-line consistent-return
    fs.readdir(dir, (err, list) => {
      if (err) return done(err);
      let i = 0;
      // eslint-disable-next-line consistent-return
      (function next() {
        // eslint-disable-next-line no-plusplus
        let file = list[i++];
        if (!file) return done(null, results);
        file = `${dir}/${file}`;
        fs.stat(file, (e1, stat) => {
          if (stat && stat.isDirectory()) {
            walk(file, (e2, res) => {
              results = results.concat(res);
              next();
            });
          } else {
            if (file.toLowerCase().endsWith('.xml')) {
              results.push(file);
            } else {
              console.log(`WARNING: ${file} is not end with .xml`);
              console.log('');
            }
            next();
          }
        });
      }());
    });
  };

  // Override current XML file for rebuild
  fs.writeFile(process.env.TOOLS_XML_MAIN_XML_PATH, '', (err) => {
    if (err) {
      console.log(err);
    }
  });

  // Get all XML files under ModDir
  walk(process.env.TOOLS_XML_MODS_DIR, (err, results) => {
    if (err) throw err;
    if (results.length === 0) return console.log('Cannot find any XML files.');

    // Generate XML file
    const MainObj = {
      Includes: {
        Catalog: [],
      },
    };
    for (let i = 0; i < results.length; i++) {
      const filepath = results[i].replace(`${process.env.TOOLS_GAMEDATA_DIR}/`, '');
      const pathObj = {
        $: {
          path: filepath,
        },
      };
      MainObj.Includes.Catalog.push(pathObj);
    }
    const builder = new xml2js.Builder();
    const xml = builder.buildObject(MainObj);

    // Write to mainXML
    fs.writeFile(process.env.TOOLS_XML_MAIN_XML_PATH, xml, (error) => {
      if (error) {
        console.log(error);
      }
      console.log(`Successfully generate XML file: ${process.env.TOOLS_XML_MAIN_XML_PATH}`);
      console.log('===================');
      console.log(xml);
      console.log('===================');
    });

    return true;
  });
};

module.exports = autoXMLInclude;
