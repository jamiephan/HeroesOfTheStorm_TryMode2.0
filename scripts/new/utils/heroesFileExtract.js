import { Storage } from "@jamiephan/casclib";
import os from "os";
import fs from "fs";

/**
 * Extract Heroes of the storm files
 * @param {Object} options
 * @param {RegExp} options.search - The regex to search for files, default is /^mods.*$/
 * @returns  {Array<{fileName: string, fileData: string}>} - An array of objects containing file paths and their content
 * @example
 * const extractedFiles = heroesFileExtract({ search: /^mods.*$/ });
 * console.log(extractedFiles);
 * // Output: [{fileName: "mods/heroes/heroes.txt", fileData: "some content"}]
 */
const heroesFileExtract = (options) => {
  const { search = /^mods.*$/ } = options;

  const IS_ONLINE_MODE =
    process.env.TOOLS_USE_CASC_ONLINE_MODE?.toLowerCase() === "true";
  const IS_KEEP_ONLINE_CACHE =
    process.env.TOOLS_KEEP_CASC_ONLINE_MODE_CACHE?.toLowerCase() === "true";
  const ONLINE_TEMP_DIR = os.tmpdir() + "/trymode20_online_casc_cache";

  const RESULT_FILES = [];
  const storage = new Storage();

  // Check if online mode & open storage
  if (IS_ONLINE_MODE) {
    const onlineParam = `${ONLINE_TEMP_DIR}*hero`;
    // If exists, remove the temp directory to prevent cache issues
    if (fs.existsSync(ONLINE_TEMP_DIR) && !IS_KEEP_ONLINE_CACHE) {
      fs.rmSync(ONLINE_TEMP_DIR, { recursive: true, force: true });
      console.log(
        `Removed existing online cache directory: ${ONLINE_TEMP_DIR}`,
      );
    }
    console.log("Opening CASCLib using online mode. This may take a while for game files to be downloaded to cache one the first time.", onlineParam);
    storage.openOnline(onlineParam);
  } else {
    storage.open(process.env.HEROES_OF_THE_STORM_INSTALL_LOCATION);
  }

  // Get full list of game file first for better performance
  const totalGameFiles = [];
  const find = storage.findFirstFile("");
  if (find) {
    totalGameFiles.push(find);
    let next = storage.findNextFile(find);
    while (next) {
      totalGameFiles.push(next);
      next = storage.findNextFile(find);
    }
  }

  // Filter files based on the search regex
  const filteredFiles = totalGameFiles.filter((f) => f.fileName.match(search));

  console.log(
    `Found ${filteredFiles.length}/${totalGameFiles.length} files matching pattern: ${search}`,
  );

  // Extract each file
  filteredFiles.forEach((file, i) => {
    // Replace the "\" with "/" in the file name to ensure the correct path structure
    file.fileName = file.fileName.replace(/\\/g, "/");
    console.log(
      `[${i + 1}/${filteredFiles.length}] Extracting file: fileSize=${file.contentFlags}\tfileName=${file.fileName}`,
    );
    const openedFile = storage.openFile(file.fileName);
    if (openedFile) {
      const fileData = openedFile.readAll();
      RESULT_FILES.push({ fileName: file.fileName, fileData });
    } else {
      console.error(`Failed to open file: ${file.fileName}`);
    }
    // close the file handle
    openedFile.close();
  });

  if (IS_ONLINE_MODE) {
    // Clean up the temp directory after use
    if (fs.existsSync(ONLINE_TEMP_DIR) && !IS_KEEP_ONLINE_CACHE) {
      fs.rmSync(ONLINE_TEMP_DIR, { recursive: true, force: true });
      console.log(`Cleaned up online cache directory: ${ONLINE_TEMP_DIR}`);
    }
  }

  storage.close();

  // Sort the result files by file name
  RESULT_FILES.sort((a, b) => a.fileName.localeCompare(b.fileName));

  return RESULT_FILES;
};

export default heroesFileExtract;
