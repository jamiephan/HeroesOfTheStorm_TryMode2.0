import fs from "fs";
import path from "path";
import { logger } from "../utils/index.js";

const LOGGER = logger("patchLibraries");

const removingString = "//_heroes_replace_//";

const walkDir = (dir, callback) => {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkDir(filePath, callback);
    } else {
      callback(filePath);
    }
  });
};

const patchLibraries = () => {
  const librariesLocation = process.env.TOOLS_UPDATE_LIBRARY_LIBRARIES_LOCATION;

  walkDir(librariesLocation, (file) => {
    if (file.toLowerCase().endsWith(".galaxy")) {
      const original = fs.readFileSync(file, { encoding: "utf8" });
      const patched = original.replace(new RegExp(removingString, "gi"), "");
      if (patched !== original) {
        fs.writeFileSync(file, patched, { encoding: "utf8" });
        LOGGER.info(`Saved ${file}`);
      } else {
        LOGGER.info(`${file} has no changes. Skipped...`);
      }
    } else {
      LOGGER.info(`${file} is not a galaxy file. Skipped...`);
    }
  });
};

export default patchLibraries;
