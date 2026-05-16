import fs from "fs";
import os from "os";
import path from "path";
import { logger } from "../utils/index.js";

const LOGGER = logger("utilClearCascCache");

const utilClearCascCache = () => {
  const cacheDir = path.join(
    os.tmpdir(),
    process.env.TOOLS_CASC_ONLINE_MODE_CACHE_DIR_NAME ||
      "trymode20_online_casc_cache",
  );

  if (!fs.existsSync(cacheDir)) {
    LOGGER.info(`No CASC online cache directory found at: ${cacheDir}`);
    return;
  }

  fs.rmSync(cacheDir, { recursive: true, force: true });
  LOGGER.info(`Removed CASC online cache directory: ${cacheDir}`);
};

export default utilClearCascCache;
