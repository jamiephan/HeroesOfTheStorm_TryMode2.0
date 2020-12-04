const fs = require('fs');
const path = require('path');

/**
 * Callback for each of the files
 * @callback fileCallback
 * @param {string} filePath The path of the file found.
 */

/**
 *
 * @param {string} directory The directory to be scanned for files
 * @param {fileCallback} callback The callback on each file
 */
module.exports = (directory, callback) => {
  const walker = (dir) => {
    fs.readdirSync(dir).forEach((file) => {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) {
        walker(filePath);
      } else {
        callback(filePath);
      }
    });
  };
  walker(directory);
};
