const HeroesFiles = require('./helper/HeoresFileWalker');

require('dotenv').config();
require('./helper/envValidator').check();

HeroesFiles.SaveEach(HeroesFiles.AllS2MAs, process.env.TOOLS_S2MA_SAVE_LOCATION, false);
