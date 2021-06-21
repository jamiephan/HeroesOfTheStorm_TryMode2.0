# Heroes of the Storm - Try Mode 2.0
A modified Try Mode Map for [Heroes of the Storm](https://heroesofthestorm.com/) to create a better experience with enhanced functionalities.

![I believe, I can fly. I believe, I can touch the sky.](https://thumbs.gfycat.com/AntiqueFrighteningComet-size_restricted.gif)

## What is this?

[Heroes of the Storm](https://heroesofthestorm.com/) have a build in Try Mode, that can be launched with any heroes and with any (available) skins skins from the Collection tab. The try mode include basic cheats such as setting level, toggling a *slow* cooldown and reset talents.

However, it lacks lots of features such as changing Heroes, adding extra AI players, interacting with the game data and a *fast* cooldown reset.

This project aims to provide extra functionalities that build on top of the original try mode with extra tools to customize your own one.

## Stuff you can do:

- Simple stuff:

  - Actually "Toggle Cooldown" without a 0.5s stupid delay

  - Gain 1000 or more quest stacks every seconds

  - Modify your current HP, Mana, Speed, Height, Size

  - Spawn any units in the game (provided it was loaded)

  - Control any units, including non Heroes and Target Dummy

  - Instantly Kill/Respawn / Set respawn timer and location

  - and more...

- Advanced Stuff:

  - Data mine and show hidden/unavailable skins/mounts/voicelines/emojis/abilities/art, etc

  - Creating your own abilities (to a degree with a help of SC2 Editor)

  - Creating your own Arts (such as models/music) and add/replace the ingame's one

  - Testing Interactions between Heroes/Abilities/Behaviors/Effects etc

  - and more...



## How and Can I be banned from using it?

Heroes of the Storm built on top of the StarCraft II engine. Therefore some features (loading custom maps and mods) were inherited from it.

The in game Try mode was loaded from CASC (Blizzard's game file storage) storage's `mods/heroes.stormmod/base.stormmaps/maps/heroes/singleplayermaps/(10)trymemode.stormmap`. However due to how StarCraft II's engine works, the game will attempt to priorities loading from `Heroes of the Storm Installation/maps` folder before CASC, therefore, this modified map can be "side-loaded" into the game without modifying the CASC storage (which is against the EULA).

The Try Mode (including the in-game official's one) runs on your computer locally (offline) without connecting to Blizzard's server, therefore it is **not possible** to e.g level up your account, gaining gold and loot boxes, altering Match History or carrying the altered files to other online maps/modes, including Custom Games.

Technically speaking, Blizzard can ban users from doing so. However, there is no a single instance of that event occurs despite multiple side-loaded was shown in the Official Forums and Subreddit. The loaded map is also offline and not able to interact with other online maps/modes, therefore I believe that Blizzard would not ban players from loading their custom maps.

> Disclaimer: I do not hold any responsibility if your account was banned by doing so.

Still interested? Please see the documents below:

## How to install:

Please see [install.md](install.md).

## How to use the chat commands:

Please see [usage.md](usage.md).

## How to modify this map:

Please see [modding.md](modding.md)

## How to use the tools:

Please see [tools.md](tools.md)

## How to include the mods in this map to your own Map or Mod:

Please see [custom.md](custom.md).

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

