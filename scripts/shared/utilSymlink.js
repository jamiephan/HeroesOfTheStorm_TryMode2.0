import fs from "fs";
import path from "path";
import appRoot from "app-root-path";
import { logger } from "../utils/index.js";

const LOGGER = logger("utilSymlink");

const MAP_DIR_NAME = "(10)trymemode.stormmap";

const utilSymlink = () => {
  const targetPathParent = path.join(
    process.env.HEROES_OF_THE_STORM_INSTALL_LOCATION,
    "maps/heroes/singleplayermaps",
  );
  const targetPathFull = path.join(targetPathParent, MAP_DIR_NAME);
  const sourcePath = fs.realpathSync(path.join(appRoot.path, MAP_DIR_NAME));

  if (fs.existsSync(targetPathFull)) {
    LOGGER.error(`File/folder ${targetPathFull} already exists. Skipping...`);
    return;
  }

  if (!fs.existsSync(targetPathParent)) {
    fs.mkdirSync(targetPathParent, { recursive: true });
  }

  fs.symlink(sourcePath, targetPathFull, "junction", "dir", (e) => {
    if (e) throw e;
    LOGGER.info(`Created symlink: ${sourcePath} <==> ${targetPathFull}`);
    LOGGER.info("Now try to restart the game and launch Try Me Mode!");
    LOGGER.info("You don't need to restart the game every time, just once for installation.");
    LOGGER.info(">You might need to re-enter try mode once for the loading screen image to change.");
  });
};

export default utilSymlink;
