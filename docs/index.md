# Heroes of the Storm - Try Mode 2.0
A modified Try Mode Map for [Heroes of the Storm](https://heroesofthestorm.com/) to create a better experience with enhanced functionalities.

![I believe, I can fly. I believe, I can touch the sky.](https://i.imgur.com/TTtE3fq.gif)

## What is this?

[Heroes of the Storm](https://heroesofthestorm.com/) has a built-in Try Mode that can be launched with any hero and any available skin from the Collection tab. The Try Mode includes basic cheats such as setting level, toggling a *slow* cooldown reset, and resetting talents.

However, it lacks many features, such as changing heroes, spawning units, adding extra AI players, interacting with game data, and a *fast* cooldown reset.

This project provides extra functionality built on top of the original Try Mode, along with additional tools for customization.

## What you can do:

**[See Community Showcases here!](showcase.md)**


- Simple stuff:

  - Toggle cooldowns instantly without the built-in 0.5s delay

  - Gain 1000 or more quest stacks every seconds

  - Modify your HP, Mana, Speed, Height, and Size

  - Spawn any units in the game (provided it was loaded)

  - Control any unit, including non-Heroes and Target Dummies

  - Instantly kill or respawn units, and set the respawn timer and location

  - *and more...*

- Advanced Stuff:

  - Data mine and view hidden or unavailable skins, mounts, voice lines, emojis, abilities, art, and more

  - Create your own abilities (to a degree, with the help of the SC2 Editor)

  - Create your own assets (such as models and music) and add or replace in-game ones

  - Test interactions between heroes, abilities, behaviours, effects, and more

  - *and more...*


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

Heroes of the Storm is built on top of the StarCraft II engine, inheriting some features such as loading custom maps and mods.

Try Mode 2.0 aims to add extra functionality to the original Try Mode and provide various tools for customization. It also generates `.stormmap` map files that include these extra functionalities for various maps that can be loaded into the game. 

For installation guide, please refer to [install.md](install.md).

### Can I get banned from using it?

The Try Mode 2.0 (including the in-game official's one and tutorial maps) runs on your computer locally (offline) without connecting to Blizzard's server, therefore it is **not possible** to, for example, level up your account, gain gold and loot boxes, alter Match History, or carry altered files into other online maps or modes, including Custom Games.

Strictly speaking, Blizzard can ban users for doing so. However, there is not a single known instance of this occurring, despite multiple instances of side-loading being shown on the official Forums and Subreddit — to which Blizzard even replied (on unrelated topics). The loaded map runs offline and cannot interact with other online maps or modes.

- Will Blizzard eventually patch the game and remove the possibility of loading the map? [Perhaps](https://i.kym-cdn.com/photos/images/newsfeed/001/462/400/978.jpg), but extremely unlikely.

- Will Blizzard ban players for loading an **offline-only** custom map that **does not** interfere with online game modes? Extremely unlikely.

> Disclaimer: I do not hold any responsibility if your account was banned by doing so.

### Can I play the map with my friends?

As stated above, Try Mode 2.0, or all other custom maps are **offline only**, similar to the official Try Mode / Tutorial. Hence it is currently **not possible** to play with your friends. 

Not to be confused with the official "Custom Games" game mode, it is still connected to Blizzard's server, able to play with friends and will appear on your match history.

---

## TODOs:

- [ ]  Create a Tool to generate a custom camera Object
- [x]  Tools to patch the actual Try mode with live game data automatically
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

>Note: In a recent commit, I have sync the `/` key with QA Cheat menu and Debug menu, which means the `/` key will open both debug and QA menu together. I am considering should I "de-sync" them.

Here is a quick look of the QA cheat menu:

![QA cheat menu](https://i.imgur.com/lrg8G3M.png)

