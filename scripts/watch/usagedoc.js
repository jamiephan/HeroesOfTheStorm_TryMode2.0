const watch = require('./helper/watch');

watch({
  watch: `${process.env.TOOLS_UPDATE_LIBRARY_LIBRARIES_LOCATION}/doc.json`,
  exec: 'npm run build:usagedoc',
});
