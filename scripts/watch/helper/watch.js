require('../../main/helper/envValidator').check();

const nodemon = require('nodemon');

/**
 *  Runs a nodemon watcher
 * @param {nodemon.Settings} config
 */
module.exports = (config) => {
  nodemon({
    verbose: true,
    ext: '*',
    exec: 'npm run build:xml',
    legacyWatch: true,
    ...config,
  });
  nodemon.on('log', (l) => console.log(l.colour));
};
