# Heroes of the Storm - Try Mode 2.0
A modified Try Mode Map for [Heroes of the Storm](https://heroesofthestorm.com/) to create a better experience with enhanced functionalities.

![I believe, I can fly. I believe, I can touch the sky.](https://thumbs.gfycat.com/AntiqueFrighteningComet-size_restricted.gif)


## How to install:

Please see [INSTALL.md](INSTALL.md).

## How to use the chat commands:

Please see [USAGE.md](USAGE.md).

## How to modify this map:

Please see [MODDING.md](MODDING.md)

## How to use the tools:

Please see [TOOLS.md](TOOLS.md)

## How to include the mods in this map to your own Map or Mod:

Please see [CUSTOM.md](CUSTOM.md).

---

## TODOs:

- [ ]  Create a Tool to generate a custom camera Object
- [ ]  Tools to patch the actual Try mode with live game data automatically
- [ ]  Actually modify the map / Create a new map in SC2 Editor (Working in Progress)
- [x]  GitHub Release more `stormmaps` which patch the live maps such as Cursed Hollow or Infernal Shrines. (Completed. Check the [Release](https://github.com/jamiephan/HeroesOfTheStorm_TryMode2.0/releases) Page.)

---

## Internal Debug Menus

### Debug Menu

Internally, there is a hidden debug menu. By forcing enable debug mode (`libCore_gv_dEBUGDebuggingEnabled`), you can now use it as well by pressing the hotkey `\`.

It have various functionalities such as switch heroes, level, etc, which can save lots of time when get used to it. Here is a quick look:

![debug menu](https://i.imgur.com/gPI9we8.png)

### QA Cheat Menu

Base on the naming of the internal variables, I assume this is for QA testers. To use it, type `-devcheats` in the chat (on either Ally or All chats only).

>Note: In a recent commit, I have sync the `\` key with QA Cheat menu and Debug menu, which means the `\` key will open both debug and QA menu together. I am considering should I "desync" them.

Here is a quick look of the QA cheat menu:

![QA cheat menu](https://i.imgur.com/lrg8G3M.png)

