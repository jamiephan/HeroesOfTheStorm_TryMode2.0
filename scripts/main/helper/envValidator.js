/* eslint-disable max-len */
const fs = require('fs');
const appRoot = require('app-root-path');
// eslint-disable-next-line arrow-body-style
const ErrorGenerator = (key, message) => {
  return new Error(`Configuation File Error: ${key} is not valid. ${message}`);
};

module.exports.check = () => {
  // Temporary change to project root dir for "./ to work"
  const currentWD = process.cwd();
  process.chdir(appRoot.path);

  if (fs.existsSync(`${appRoot.path}/.env.example`) && !(fs.existsSync(`${appRoot.path}/.env`))) {
    throw new Error('.env file not found. Did you forget to rename .env.example to .env?');
  }
  if (!(fs.existsSync(`${appRoot.path}/.env`))) {
    throw new Error('.env file not found. Please refer to .env.example in the repo.');
  }
  // eslint-disable-next-line global-require
  require('dotenv').config();

  if (!fs.existsSync(process.env.HEROES_OF_THE_STORM_INSTALL_LOCATION)) {
    throw ErrorGenerator(
      'HEROES_OF_THE_STORM_INSTALL_LOCATION',
      `Cannot Find the directory ${process.env.HEROES_OF_THE_STORM_INSTALL_LOCATION}`,
    );
  }

  if (!fs.existsSync(`${process.env.HEROES_OF_THE_STORM_INSTALL_LOCATION}/.build.info`)) {
    throw ErrorGenerator(
      'HEROES_OF_THE_STORM_INSTALL_LOCATION',
      `Not a valid Heroes Of The Storm Directory (${process.env.HEROES_OF_THE_STORM_INSTALL_LOCATION})`,
    );
  }
  if (!fs.existsSync(`${process.env.HEROES_OF_THE_STORM_INSTALL_LOCATION}/HeroesData/`)) {
    throw ErrorGenerator(
      'HEROES_OF_THE_STORM_INSTALL_LOCATION',
      `Not a valid Heroes Of The Storm Directory (${process.env.HEROES_OF_THE_STORM_INSTALL_LOCATION})`,
    );
  }
  if (!fs.existsSync(`${process.env.HEROES_OF_THE_STORM_INSTALL_LOCATION}/Support/`)) {
    throw ErrorGenerator(
      'HEROES_OF_THE_STORM_INSTALL_LOCATION',
      `Not a valid Heroes Of The Storm Directory (${process.env.HEROES_OF_THE_STORM_INSTALL_LOCATION})`,
    );
  }
  if (!fs.existsSync(`${process.env.HEROES_OF_THE_STORM_INSTALL_LOCATION}/Versions/`)) {
    throw ErrorGenerator(
      'HEROES_OF_THE_STORM_INSTALL_LOCATION',
      `Not a valid Heroes Of The Storm Directory (${process.env.HEROES_OF_THE_STORM_INSTALL_LOCATION})`,
    );
  }

  // Change WD back to the currrent one
  process.chdir(currentWD);
};
