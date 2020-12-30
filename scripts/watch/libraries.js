const watch = require('./helper/watch');

watch({
  watch: process.env.TOOLS_UPDATE_LIBRARY_LIBRARIES_LOCATION,
  ext: 'galaxy',
  exec: 'npm run patch:libraries',
  delay: 3000,
});
