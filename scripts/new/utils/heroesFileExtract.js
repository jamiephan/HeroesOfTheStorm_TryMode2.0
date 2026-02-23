import { Storage } from "@jamiephan/casclib";
import os from "os";
import fs from "fs";

class HeroesFileExtract {
  queueList = [];

  constructor() {}

  /**
   * Add a file search task to the queue
   * @param {RegExp} search - The regex to search for files
   * @param {function(Array<{fileName: string, fileData: string}>): void} callback - The callback function to receive the extracted files, which is an array of objects containing file paths and their content
   * @example
   * heroesFileExtract.queue(/^mods.*$/, (files) => {
   *   console.log(files);
   *   // Output: [{fileName: "mods/heroes/heroes.txt", fileData: "some content"}]
   * });
   */
  queue(search, callback) {
    console.log(`Queued file extraction task with search pattern: ${search}`);
    this.queueList.push({ search, callback });
  }

  /**
   * Execute all queued file extraction tasks sequentially, but open the storage only once for better performance. The storage will be closed after all tasks are completed.
   */
  execute() {
    // Check if there are tasks in the queue
    if (this.queueList.length === 0) {
      console.warn("No file extraction tasks in the queue to execute.");
      return;
    }

    console.log(`Starting execution of ${this.queueList.length} queued file extraction tasks...`);
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
        console.log(
          `Removed existing online cache directory: ${ONLINE_TEMP_DIR}`,
        );
      }
      console.log(
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
      console.log(
        `Executing task ${index + 1}/${this.queueList.length} with search pattern: ${task.search}`,
      );
      // Filter files based on the search regex
      const filteredFiles = totalGameFiles.filter((f) =>
        f.fileName.match(task.search),
      );

      console.log(
        `Found ${filteredFiles.length}/${totalGameFiles.length} files matching pattern: ${task.search}`,
      );

      const extractedFiles = [];
      // Extract each file for the current task
      filteredFiles.forEach((file, i) => {
        // Replace the "\" with "/" in the file name to ensure the correct path structure
        file.fileName = file.fileName.replace(/\\/g, "/");
        console.log(
          `[${i + 1}/${filteredFiles.length}] Extracting file: fileSize=${file.contentFlags}\tfileName=${file.fileName}`,
        );
        const openedFile = storage.openFile(file.fileName);
        if (openedFile) {
          const fileData = openedFile.readAll();
          extractedFiles.push({ fileName: file.fileName, fileData });
        } else {
          console.error(`Failed to open file: ${file.fileName}`);
        }
        // close the file handle
        openedFile.close();
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
        console.log(`Cleaned up online cache directory: ${ONLINE_TEMP_DIR}`);
      }
    }

    storage.close();
  }
}

export const heroesFileExtract = new HeroesFileExtract();
