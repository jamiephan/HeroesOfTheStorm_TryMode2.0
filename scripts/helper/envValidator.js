/* eslint-disable max-len */
const fs = require('fs');
require('dotenv').config();

// eslint-disable-next-line arrow-body-style
const ErrorGenerator = (key, message) => {
  return new Error(`Configuation File Error: ${key} is not valid. ${message}`);
};

module.exports.check = () => {
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
};
