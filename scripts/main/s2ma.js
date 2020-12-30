const HeroesFiles = require('./helper/HeoresFileWalker');

HeroesFiles.SaveEach(HeroesFiles.AllS2MAs, process.env.TOOLS_S2MA_SAVE_LOCATION, false);
