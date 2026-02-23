import fs from 'fs';
import appRoot from 'app-root-path';
import dotenv from 'dotenv';


export const errorGenerator = (key, message) => {
  return new Error(`Configuation File Error: ${key} is not valid. ${message}`);
};

export const checkEnv = () => {
  // Temporary change to project root dir for "./ to work"
  const currentWD = process.cwd();
  process.chdir(appRoot.path);

  // Check for .env file
  if (fs.existsSync(`${appRoot.path}/.env.example`) && !(fs.existsSync(`${appRoot.path}/.env`))) {
    throw new Error('.env file not found. Did you forget to rename .env.example to .env?');
  }
  if (!(fs.existsSync(`${appRoot.path}/.env`))) {
    throw new Error('.env file not found. Please refer to .env.example in the repo.');
  }
   
  dotenv.config({quiet: true});

  // Check for Heroes of the Storm Install valid directory
  ["", "/.build.info", "/HeroesData/", "/Support/", "/Versions/"].forEach((path) => {
    if (!fs.existsSync(`${process.env.HEROES_OF_THE_STORM_INSTALL_LOCATION}${path}`)) {
      throw errorGenerator(
        'HEROES_OF_THE_STORM_INSTALL_LOCATION',
        `Not a valid Heroes of the Storm Directory (${process.env.HEROES_OF_THE_STORM_INSTALL_LOCATION})`,
      );
    }
  });

  // Change WD back to the current one
  process.chdir(currentWD);
};
