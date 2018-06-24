
# HeroesOfTheStorm_TryMode2.0
A modified Try Mode to create a better experience on Heroes of the Storm - Try mode.

![wheeeeeeeeeeeeeeeeeee](https://thumbs.gfycat.com/AntiqueFrighteningComet-size_restricted.gif)


# Internal Debug Menu

Internally, there is a hidden debug menu, by forcing enable debug mode, you can now summon it as well, by clicking the hotkey `\` which have various functionalities such as switch heroes, level, etc. Here is a quick look:

![debug menu](https://i.imgur.com/gPI9we8.png)


# In game chat commands


## Custom Commands:

The Lib handles chat commands scripts are located in `base.stormdata/LibDEBUG_h.galaxy` and `base.stormdata/LibDEBUG.galaxy`. Note that all commands must be done in game chat (either `allies` or `all` chat. Public chat channels and private messages does not work.)

### `restart`

    Restarting the game, without exit and re-enter.

### `hi` | `hello`

    Output a greeting message, with your username.

### `summon | sum UNITNAME [PlayerGroup]`

    Spawn a unit (as long as it loaded by lib) at the centre of the your selected unit group. If you only selected 1 unit, it will spawn next to you.
    Note: It will also enable multi-selection, like Vikings and Samuro with Illusion Master.

    Parameters:
        UNITNAME: String, Required, defines the unit name to spawn.
        [PlayerGroup]: Integer, Optional, defines the owner of the unit. Default: EventPlayer(), 1

        Note for PlayerGroup: 2-5 means ally players, 6-10 means enemy players. If you set 6-10, the unit will attack you (if it capable of). You cannot control them if you set anything other than you.

    Examples:
        summon TownTownHallL2
        summon HeroRaynor
        sum JungleGraveGolemDefender 6

### `setscale | ss SCALE`

    Set the scale of the summon units from "summon". 1.0 is default size

    Parameters:
        SCALE: Fixed, Requires, define the summon scale
    
    Examples:
        setscale 0.1
        ss 1.5

### `respawntime` | `rst` RESPAWNTIME

    Override the current respawn timer. (Due to the game design, if you set to 0, it will change it to 0.1 automatically.)

    Parameters:
        RESPAWNTIME: Integer, Required, defines the respawn time

## System Commands

These commands are used by Blizzard internaly, after force to turn in the debug mode, we can use it as well.

    ---PENDING FOR UPDATE---
    The command list are just a quick "grep" generated from all galaxy files. Some of them works in Try mode but some of them don't. Some of them require parameters, some of them just log out to TriggerDebugOutput(). Documentation are not there yet, but might add later.

    For now to see command list, please refer to `InternalCommands.txt`

    Format: TRIGGERLIB_gt_TRIGGERFUNCTION   "Command"

# Modifications

A list of modifications to heroes, system, terrain, object....., some of them are not documented, maybe because of laziness, but still.

Modifications of XML files are under `Mods` folder (`./(10)trymemode.stormmap/base.stormdata/Mods`). If Galaxy modification needed, it will be in (`./(10)trymemode.stormmap/base.stormdata`), same as where the debug lib went.

## Hero Modifications

### [Placeholder] Raynor

- [Placeholder]

## System Modifications

### [Placeholder] Camera

- [Placeholder]

## Terrain Modifications

### [Placeholder] New objective area

- [Placeholder] 

## Object Modifications

### [Placeholder] Added new boss

- [Placeholder]

# Tools

All tools require `nodejs` to do so. After installed `nodejs` and cloned the repo, do a `npm install`.

### Automatically generate `GameData.XML`

This tool will automatically generate the `GameData.XML` under `./(10)trymemode.stormmap/base.stormdata/GameData.xml`. Note that it was preset that all XML modifications must be inside the `Mods` folder (`./(10)trymemode.stormmap/base.stormdata/Mods`). Any subdirectories are not limited and will automatically include when generating `GameData.XML`.

To use the tool after created XML files under `Mods` folder, simply use terminal (or CMD) with the command `npm run buildxml`. Also note that it **will ignore** any files that does not end with `.xml` (case insensitive) and will **not** validate whether the XML file is valid (syntax error, etc).


# Notes:

### Dealing with chat commands

The trigger event is `TriggerAddEventChatMessage(TRIGGER, c_playerAny, "-hi", false);`. The forth boolean parameter determines whether the input must exact match or not. So commands like `-restart` is recommanded set to true and `-spawn XXX` is set to false.

To get the param from `false`, inside the function, get it by `StringWord(EventChatMessage(false), 2)` where the `2` is the position of the param split by space. For example, a command like `-spawn HeroChen 100`, `1` will be `-spawn`, `2` will be `HeroChen` and `3` will be `100`.


### When Editing Asset Files (.dds)
Recommended using Photoshop plugin [NVIDIA Texture Tools for Adobe Photoshop](https://developer.nvidia.com/nvidia-texture-tools-adobe-photoshop) to do so. 
When saving, remember to choose `No MIP maps` inside the `MIP Map Generation` section. 
*(Took me a long time to figure it out why the texture is not loading.....)*