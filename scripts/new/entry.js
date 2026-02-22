import minimist from "minimist";
import nodemon from "nodemon";
import checkEnv from "./utils/checkEnv.js";

checkEnv();

const args = minimist(process.argv);

const SCRIPT_MAPPING = {
  xml: {
    script: {
      fn: () =>
        import("./shared/buildIncludeXml.js").then((module) => {
          module.default();
        }),
    },
    watch: {
      ext: "xml",
      dir: ".",
    },
  },
  mimicabilities: {
    script: {
      fn: () =>
        import("./shared/mimic/abilities.js").then((module) => {
          module.default();
        }),
    },
    watch: null
  },
};

if (args.script) {
  const scriptConfig = SCRIPT_MAPPING[args.script];
  if (!scriptConfig) {
    console.error(`Unknown script: ${args.script}`);
    process.exit(1);
  }

  // If watch mode
  if (args?.mode === "watch") {
    if (!scriptConfig.watch) {
      console.error(`Watch mode is not supported for script: ${args.script}`);
      process.exit(1);
    }
    console.log(`Starting in watch mode for ${args.script}...`);
    nodemon({
      script: args._[1],
      args: ["--script", args.script],
      ext: scriptConfig?.watch?.ext,
      watch: scriptConfig?.watch?.dir,
    });
  } else {
    // Run the script function
    scriptConfig?.script?.fn();
  }
} else {
  console.error("Please specify a script to run using --script");
}
