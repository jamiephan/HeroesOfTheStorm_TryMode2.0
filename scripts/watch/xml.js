const watch = require('./helper/watch');

watch({
  watch: process.env.TOOLS_XML_MODS_DIR,
  ext: 'xml',
  exec: 'npm run build:xml',
});
