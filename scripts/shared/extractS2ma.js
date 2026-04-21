import fs from "fs";
import path from "path";

import { heroesFileExtract, logger } from "../utils/index.js";

const LOGGER = logger("extractS2ma");

const S2MA_REGEX = /^mods.*\.s2ma$/i;

const extractS2ma = () => {
  const saveLocation = path.resolve(process.env.TOOLS_S2MA_SAVE_LOCATION);

  if (!fs.existsSync(saveLocation)) {
    fs.mkdirSync(saveLocation, { recursive: true });
  }

  heroesFileExtract.queue("extractS2ma", S2MA_REGEX, (files) => {
    LOGGER.info(`Saving ${files.length} .s2ma files to ${saveLocation}`);
    for (const { fileName, fileData } of files) {
      const outName = fileName.split("/").at(-1);
      const outPath = path.join(saveLocation, outName);
      fs.writeFileSync(outPath, fileData);
      LOGGER.info(`Saved ${outPath}`);
    }
  });
};

export default extractS2ma;
