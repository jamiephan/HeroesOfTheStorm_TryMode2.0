# Heroes of the Storm - Try Mode 2.0
A modified Try Mode Map for [Heroes of the Storm](https://heroesofthestorm.com/) to create a better experience with enhanced functionalities.

![I believe, I can fly. I believe, I can touch the sky.](https://i.imgur.com/UgR1Sd3.gif)

## What is this?

[Heroes of the Storm](https://heroesofthestorm.com/) have a build in Try Mode that can be launched with any heroes and with any (available) skins from the Collection tab. The try mode includes basic cheats such as setting level, toggling a *slow* cooldown and reset talents.

However, it lacks lots of features such as changing Heroes, spawning any units, adding extra AI players, interacting with the game data and a *fast* cooldown reset.

This project aims to provide extra functionalities which were built on top of the original try mode with extra tools for customisation.

## Stuff you can do:

- Simple stuff:

  - Actually "Toggle Cooldown" without a 0.5s stupid delay

  - Gain 1000 or more quest stacks every seconds

  - Modify your current HP, Mana, Speed, Height, Size

  - Spawn any units in the game (provided it was loaded)

  - Control any units, including non-Heroes and Target Dummy

  - Instantly Kill/Respawn / Set respawn timer and location

  - and more...

- Advanced Stuff:

  - Data mine and show hidden/unavailable skins/mounts/voice lines/emojis/abilities/art, etc

  - Creating your own abilities (to a degree with a help of SC2 Editor)

  - Creating your own Arts (such as models/music) and add/replace the in-game's one

  - Testing Interactions between Heroes/Abilities/Behaviours/Effects etc

  - and more...


---

## How to install the map:

Please see [install.md](install.md).

## How to use the chat commands:

Please see [usage.md](usage.md).

## How to modify this map:

Please see [modding.md](modding.md).

## How to use the command line tools:

Please see [tools.md](tools.md).

## How to include the functionalities in this map to your own custom map or mod:

Please see [custom.md](custom.md).

---

## FAQ:

### How does it work?

Heroes of the Storm built on top of the StarCraft II engine. Therefore, some features (loading custom maps and mods) were inherited from it.

Try Mode 2.0 aims to adding extra functionalities to the original Try Mode and provide various tooling for customisation. It will also generate `.stormmap` map files which added the extra functionalities to various maps that can be loaded into the game. 

Currently, there are two ways to load a custom map:

- Replacing in-game single player maps (Tutorial maps, Try Mode):
  - The in game single player maps was loaded from CASC (Blizzard's game file storage) storage: `mods/heroes.stormmod/base.stormmaps/maps/heroes/singleplayermaps/(10)trymemode.stormmap`. However due to how StarCraft II's engine works, the game will attempt to priorities loading from `Heroes of the Storm Installation/maps` folder before CASC, therefore, this modified map can be "side-loaded" into the game without modifying the CASC storage (which is against the EULA).
- Run a `.stormmap` file directly:
  - The game allows to run a `.stormmap` file, which is a modified version of `.sc2map` from StarCraft 2 and it is paclaged in a [MPQ format](http://www.zezula.net/en/mpq/main.html). Simply just run the map with `"HeroesSwitcher_x64.exe <path>"`, where path is the *absolute* path to the `.stormmap` file. Note that unlike usual command line applications where relative path is relative to your working directory, Heroes treats relative path as it is from CASC. So the "relative" path of the `<Path>` argument is relative to `mods/heroes.stormmod/base.stormmaps/maps` (CASC) or `Heroes of the Storm Installation/maps`(File System).

> Note that both methods allow loading the map which are either a file, folder, or a symbolic link of both, as long as the name is ending in `.stormmap`.

### Can I get banned from using it?

The Try Mode 2.0 (including the in-game official's one and tutorial maps) runs on your computer locally (offline) without connecting to Blizzard's server, therefore it is **not possible** to e.g. level up your account, gaining gold and loot boxes, altering Match History or carrying the altered files to other online maps/modes, including Custom Games.

Strictly speaking, Blizzard can ban users from doing so. However, there is not a single instance of that event occurs despite multiple side-loaded was shown in the official Forums and Subreddit, which Blizzard even replied (unrelated to banning or ToS). The loaded map is also offline and not able to interact with other online maps/modes.

- Will Blizzard eventually patch the game and remove the possibility of loading the map? [Perhaps](https://i.kym-cdn.com/photos/images/newsfeed/001/462/400/978.jpg), but extremely unlikely.

- Will Blizzard ban players who loading a **offline-only** custom map which **does not** interfere with online game modes? Extremely unlikely.

> Disclaimer: I do not hold any responsibility if your account was banned by doing so.

### Can I play the map with my friends?

As stated above, Try Mode 2.0, or all other custom maps are **offline only**, similar to the official Try Mode / Tutorial. Hence it is currently **not possible** to play with your friends. 

Not to be confused with the official "Custom Games" game mode, it is still connected to Blizzard's server, able to play with friends and will appear on your match history.

---

## TODOs:

- [ ]  Create a Tool to generate a custom camera Object
- [ ]  Tools to patch the actual Try mode with live game data automatically
- [ ]  Actually modify the map / Create a new map in SC2 Editor (Working in Progress)
- [x]  GitHub Release more `stormmaps` which patch the live maps such as Cursed Hollow or Infernal Shrines. (Completed. Check the [Release](https://github.com/jamiephan/HeroesOfTheStorm_TryMode2.0/releases) Page.)

---

## Internal Debug Menus

### Debug Menu

Internally, there is a hidden debug menu. By forcing enable debug mode (`libCore_gv_dEBUGDebuggingEnabled`), you can now use it as well by pressing the hotkey `/`.

It have various functionalities such as switch heroes, level, etc, which can save lots of time when get used to it. Here is a quick look:

![debug menu](https://i.imgur.com/gPI9we8.png)

### QA Cheat Menu

Base on the naming of the internal variables, I assume this is for QA testers. To use it, type `-devcheats` in the chat (on either Ally or All chats only).

>Note: In a recent commit, I have sync the `/` key with QA Cheat menu and Debug menu, which means the `/` key will open both debug and QA menu together. I am considering should I "desync" them.

Here is a quick look of the QA cheat menu:

![QA cheat menu](https://i.imgur.com/lrg8G3M.png)

