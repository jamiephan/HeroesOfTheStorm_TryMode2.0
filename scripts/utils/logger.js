import pino from "pino";
import pretty from 'pino-pretty'

function formatModule(name, maxLength = 19) {
  // 1. Calculate space available inside the [ ] brackets
  // If maxLength is 15, innerLimit is 13
  const innerLimit = maxLength - 2; 

  let content;

  if (name.length > innerLimit) {
    // 2. Truncate if too long: "DisplayService" -> "DisplaySer..."
    // (innerLimit - 3) leaves room for the "..."
    content = name.slice(0, innerLimit - 3) + "...";
  } else {
    // 3. Pad with spaces if too short: "test" -> "test         "
    content = name.padEnd(innerLimit, '.');
  }

  // 4. Wrap in brackets
  return `[${content}]`;
}


const baseLogger = pino(pretty({
  colorize: true,
  messageFormat: `{module} - {msg}`,
  hostname: "",
  ignore: "module,hostname,pid",
  sync: true,
}));

export const logger = (module) => {
  return baseLogger.child({ module: formatModule(module) });
};
