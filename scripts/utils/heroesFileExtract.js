import { Storage } from "@jamiephan/casclib";
import os from "os";
import fs from "fs";
import { logger } from "./logger.js";

const LOGGER = logger("heroesFileExtract");

class HeroesFileExtract {
  queueList = [];
  // Cache for extracted files by fileName
  extractedCache = new Map();

  constructor() {}

  /**
   * Add a file search task to the queue
   * @param {string} jobName - A unique name for the job, used for logging purposes
   * @param {RegExp} search - The regex to search for files
   * @param {function(Array<{fileName: string, fileData: string}>): void} callback - The callback function to receive the extracted files, which is an array of objects containing file paths and their content
   * @example
   * heroesFileExtract.queue("exampleJob", /^mods.*$/, (files) => {
   *   LOGGER.info(files);
   *   // Output: [{fileName: "mods/heroes/heroes.txt", fileData: "some content"}]
   * });
   */
  queue(jobName, search, callback) {
    LOGGER.info(`Queued file extraction task "${jobName}" with search pattern: ${search}`);
    this.queueList.push({ jobName, search, callback });
  }

  /**
   * Execute all queued file extraction tasks sequentially, but open the storage only once for better performance. The storage will be closed after all tasks are completed.
   */
  execute() {
    // Check if there are tasks in the queue
    if (this.queueList.length === 0) {
      LOGGER.warn("No file extraction tasks in the queue to execute.");
      return;
    }

    LOGGER.info(
      `Starting execution of ${this.queueList.length} queued file extraction tasks...`,
    );
    const IS_ONLINE_MODE =
      process.env.TOOLS_USE_CASC_ONLINE_MODE?.toLowerCase() === "true";
    const IS_KEEP_ONLINE_CACHE =
      process.env.TOOLS_KEEP_CASC_ONLINE_MODE_CACHE?.toLowerCase() === "true";
    const ONLINE_TEMP_DIR = os.tmpdir() + "/trymode20_online_casc_cache";

    const storage = new Storage();

    // Check if online mode & open storage
    if (IS_ONLINE_MODE) {
      const onlineParam = `${ONLINE_TEMP_DIR}*hero`;
      // If exists, remove the temp directory to prevent cache issues
      if (fs.existsSync(ONLINE_TEMP_DIR) && !IS_KEEP_ONLINE_CACHE) {
        fs.rmSync(ONLINE_TEMP_DIR, { recursive: true, force: true });
        LOGGER.info(
          `Removed existing online cache directory: ${ONLINE_TEMP_DIR}`,
        );
      }
      LOGGER.info(
        "Opening CASCLib using online mode. This may take a while for game files to be downloaded to cache one the first time.",
        onlineParam,
      );
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

    // Execute each queued task sequentially
    this.queueList.forEach((task, index) => {
      LOGGER.info(
        `Executing task "${task.jobName}" ${index + 1}/${this.queueList.length} with search pattern: ${task.search}`,
      );
      // Filter files based on the search regex
      const filteredFiles = totalGameFiles.filter((f) =>
        f.fileName.match(task.search),
      );

      LOGGER.info(
        `Found ${filteredFiles.length}/${totalGameFiles.length} files matching pattern: ${task.search}`,
      );

      const extractedFiles = [];
      // Extract each file for the current task, using cache if available
      filteredFiles.forEach((file, i) => {
        // Replace the "\" with "/" in the file name to ensure the correct path structure
        file.fileName = file.fileName.replace(/\\/g, "/");
        // Check cache first
        if (this.extractedCache.has(file.fileName)) {
          LOGGER.info(
            `[${i + 1}/${filteredFiles.length}] Using cached file: fileName=${file.fileName}`,
          );
          extractedFiles.push({
            fileName: file.fileName,
            fileData: this.extractedCache.get(file.fileName),
          });
        } else {
          LOGGER.info(
            `[${i + 1}/${filteredFiles.length}] Extracting file: fileSize=${file.contentFlags}\tfileName=${file.fileName}`,
          );
          const openedFile = storage.openFile(file.fileName);
          if (openedFile) {
            const fileData = openedFile.readAll();
            extractedFiles.push({ fileName: file.fileName, fileData });
            // Cache the file data
            this.extractedCache.set(file.fileName, fileData);
          } else {
            LOGGER.error(`Failed to open file: ${file.fileName}`);
          }
          // close the file handle
          openedFile.close();
        }
      });

      // Sort the extracted files by file name
      extractedFiles.sort((a, b) => a.fileName.localeCompare(b.fileName));

      // Call the callback with the extracted files for the current task
      task.callback(extractedFiles);
    });

    if (IS_ONLINE_MODE) {
      // Clean up the temp directory after use
      if (fs.existsSync(ONLINE_TEMP_DIR) && !IS_KEEP_ONLINE_CACHE) {
        fs.rmSync(ONLINE_TEMP_DIR, { recursive: true, force: true });
        LOGGER.info(`Cleaned up online cache directory: ${ONLINE_TEMP_DIR}`);
      }
    }

    LOGGER.info("Completed execution of all queued file extraction tasks.");
    storage.close();
  }
}

export const heroesFileExtract = new HeroesFileExtract();
