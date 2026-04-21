import minimist from "minimist";
import nodemon from "nodemon";
import { checkEnv, heroesFileExtract, logger } from "./utils/index.js";

const LOGGER = logger("entry");

checkEnv();

const args = minimist(process.argv);

const SCRIPT_MAPPING = {
  xml: {
    script: {
      fn: async () => {
        (await import("./shared/buildIncludeXml.js")).default();
      },
    },
    watch: {
      ext: "xml",
      dir: ".",
      ignore: [process.env.TOOLS_XML_MAIN_XML_PATH], // Ignore the generated main XML file to prevent infinite loop
    },
  },

  // Mimic Commands
  mimicabilities: {
    script: {
      fn: async () => {
        (await import("./shared/mimic/abilities.js")).default();
      },
    },
    watch: null,
  },
  mimicbehaviors: {
    script: {
      fn: async () => {
        (await import("./shared/mimic/behaviors.js")).default();
      },
    },
    watch: null,
  },
  mimicmodels: {
    script: {
      fn: async () => {
        (await import("./shared/mimic/models.js")).default();
      },
    },
    watch: null,
  },
  mimiclib: {
    script: {
      fn: async () => {
        (await import("./shared/mimic/lib.js")).default();
      },
    },
    watch: null,
  },
  allmimic: {
    script: {
      fn: async () => {
        (await import("./shared/mimic/abilities.js")).default();
        (await import("./shared/mimic/behaviors.js")).default();
        (await import("./shared/mimic/models.js")).default();
        (await import("./shared/mimic/lib.js")).default();
      },
    },
    watch: null,
  },

  // Extract Commands
  extracts2ma: {
    script: {
      fn: async () => {
        (await import("./shared/extractS2ma.js")).default();
      },
    },
    watch: null,
  },

  // Utility Commands
  symlink: {
    script: {
      fn: async () => {
        (await import("./shared/utilSymlink.js")).default();
      },
    },
    watch: null,
  },

  // Library Commands
  libraries: {
    script: {
      fn: async () => {
        (await import("./shared/patchLibraries.js")).default();
      },
    },
    watch: {
      ext: "galaxy",
      watch: [process.env.TOOLS_UPDATE_LIBRARY_LIBRARIES_LOCATION],
    },
  },
};

if (args.script) {
  const scriptConfig = SCRIPT_MAPPING[args.script];
  if (!scriptConfig) {
    LOGGER.error(`Unknown script: ${args.script}`);
    process.exit(1);
  }

  // If watch mode
  if (args?.mode === "watch") {
    if (!scriptConfig.watch) {
      LOGGER.error(`Watch mode is not supported for script: ${args.script}`);
      process.exit(1);
    }
    LOGGER.info(`Starting in watch mode for ${args.script}...`);
    nodemon({
      script: args._[1],
      args: ["--script", args.script],
      verbose: true,
      ...scriptConfig.watch,
    });
  } else {
    // Run the script function
    await scriptConfig?.script?.fn();

    // start extraction queue
    if (heroesFileExtract.queueList.length > 0) heroesFileExtract.execute();
  }
} else {
  LOGGER.error("Please specify a script to run using --script");
}
