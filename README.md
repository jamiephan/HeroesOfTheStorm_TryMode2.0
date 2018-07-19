
# HeroesOfTheStorm_TryMode2.0
A modified Try Mode to create a better experience on Heroes of the Storm - Try mode.

![I believe, I can fly. I believe, I can touch the sky.](https://thumbs.gfycat.com/AntiqueFrighteningComet-size_restricted.gif)


# Internal Debug Menus

## Debug Menu

Internally, there is a hidden debug menu, by forcing enable debug mode, you can now summon it as well, by clicking the hotkey `\` which have various functionalities such as switch heroes, level, etc. Here is a quick look:

![debug menu](https://i.imgur.com/gPI9we8.png)

## QA Cheat Menu

Base on the naming of the internal variables, I assume this is for QA testers. To use it, type `-devcheats` in the chat (on either Ally or All chats only). In a recent commit, I have sync the `/` key with QA Cheat meni and Debug menu, for better experience.

Here is a quick look:


![debug menu](https://i.imgur.com/lrg8G3M.png)



# In game chat commands


## Custom Commands:

The Lib handles chat commands scripts are located in `base.stormdata/LibDEBUG_h.galaxy` and `base.stormdata/LibDEBUG.galaxy`. Note that all commands must be done in game chat (either `allies` or `all` chat. Public chat channels and private messages does not work.)

### `re` | `restart`

 Restarting the game, without exit and re-enter.

### `hi` | `hello`

Output a greeting message, with your username.

### `summon` | `sum` `UNITNAME` `[Player]`

Spawn a unit at the centre of your camera location.
    
>Note: It will also enable multi-selection, like Vikings and Samuro with Illusion Master.

    Parameters:
        UNITNAME: String, Required, defines the unit name to spawn.
        [Player]: Integer, Optional, defines the Player ID. 
                  Default: EventPlayer(), 1


    Examples:
        summon TownTownHallL2
        summon HeroRaynor
        sum JungleGraveGolemDefender 6

### `setscale` | `ss` `SCALE`

Set the scale of the summon units from "summon".

`1.0` is default size for most of the models.

    Parameters:
        SCALE: Fixed, Requires, define the summon scale
    
    Examples:
        setscale 0.1
        ss 1.5

### `respawntime` | `rst` `RESPAWNTIME`

Override the current respawn timer. 

>Notice: Due to the system limitation, if you set to 0, it will change it to 0.1 automatically.

    Parameters:
        RESPAWNTIME: Integer, Required, defines the respawn time

    Examples:
        respawntime 99
        rst 0

### `additem` | `adi` `ITEM`

Spawn an item that is added to your unit inventory. If you selected multiple units, it will add to each of them.

You can aquire the ITEM ID from `<CUnit id="XXXX" parent="ITEM" />`

>Notice: Due to some validation might occur, some items such as "NecromancerBoneSpear" (Xul lv16 Bone Spear) will not have any functionality (but can be still spawned) because it validates that whether you have the talent. Modify it manually though the Mod XML files.

    Parameters:
        ITEM: String, Required, defines ITEM

    Example:
        additem ArthasAntiMagicShell
        adi TalentRewind

### `removeitems` | `rmi`

Remove all items from selected units.

*Still figuring out out to remove items by name instead all of them.*

    Parameters:
        none

    Example:
        removeitems
        rmi


### `setscore` | `score` `FIELD` `VALUE`

Set the score for the scoreboard (some of them shows in tab screen).

You can obtain these from `ScoreValueData.xml` in `heroesdata.stormmod`

>Notice: Some fields uses Integer and some uses Fixed. However because this function is unified using `PlayerScoreValueSetFromInt()`, all decimals will be removed. As such, the max value for Fixed is `524287` and `2147483647` for Integer. 

    Parameters:
        FIELD: String, Required, defines Field
        VALUE: Integer, Required, defined Value

    Example:
        setscore HeroDamage 0
        score SoloKill 524287

    

### `killunits` | `ku`

Instant Kill all units within the select group.

    Parameters: 
        none

    Example:
        killunits
        ku

### `togglefogofwar` | `tfow`

Toggle Fow of war. This can enable or disable full map vision

    Parameters: 
        none

    Example:
        tfow
        togglefogofwar

### `toggleoutputid` | `toi`

Toggle Display Unit ID Mode

This can output all the selected Units ID to the screen with a right click.

>Notice: The system is not perfect yet and its kinda buggy. But the main functionality kinda works. Requires `ts` and `/ac` in the QA Cheat menu for now.

    Parameters: 
        none

    Example:
        tfow
        toggleoutputid

### `togglefreecamera` | `tfc`

Toggle Free Camera Mode

This can allows you to freely move your camera's around. Free zoom are coming soon.

>Notice: The camera pan will be disabled while free camera mode is activated (you can no longer move your camera by pushing your cursor to the side.)

    Parameters: 
        none

    Example:
        tfc
        togglefreecamera

### `do a barrel roll`

DO A BARREL ROLL

    ~~ Barrel Roll, Barrel Roll ~~
    ~~ Do The Barrel Barrel Roll ~~
    ~~ Do The Barrel Barrel Roll ~~
    ~~ Do The Barrel Roll ~~

>Notice: IT WILL SWOOOOOOOOOOP.


    Parameters: 
        none

    Example:
        do a barrel roll
        dO a BaRrEl rOlL

## System Commands

These commands are used by Blizzard internaly, after force to turn in the debug mode, we can use it as well.

    ---PENDING FOR UPDATE---
    The command list are just a quick "grep" generated from all galaxy files. Some of them works in Try mode but some of them don't. Some of them require parameters, some of them just log out to TriggerDebugOutput(). Documentation are not there yet, but might add later.

    For now to see command list, please refer to `InternalCommands.txt`

    Format: TRIGGERLIB_gt_TRIGGERFUNCTION   "Command"

## Builder Mode

**This system is still in a early development.**

Builder mode allows you to place objects to anywhere in the map. The units will constantly teleport to your cursor (follow your cursor). To active it, remember to select `/ac` and `ts` in QA menu (this will added automatically in future development).

To use builder mode, select a unit, or units and press `backspace`. Then builder mode will be activated and you can place the units where you like.

To place the units down, press `backspace` again to deactivate builder mode.


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

**Command**: `npm run buildxml`

This tool will automatically generate the `GameData.XML` under `./(10)trymemode.stormmap/base.stormdata/GameData.xml`. Note that it was preset that all XML modifications must be inside the `Mods` folder (`./(10)trymemode.stormmap/base.stormdata/Mods`). Any subdirectories are not limited and will automatically include when generating `GameData.XML`.

Note that it **will ignore** any files that does not end with `.xml` (case insensitive) and will **not** validate whether the XML file is valid (syntax error, etc).

### Trigger code generator

**Command**: `npm run triggergenerator`

This tool will help you to generate the code to make a simple trigger. Just follow the instructions and you can build a basic trigger code.

The `TriggerAddEventChatMessage()` is a trigger function that will read the input from user and execute the trigger when it matches/contains (depends on the variable forth parameter `true`/`false`). You can get trigger functions from either SC2 editor (Modules->Triggers->[Add some Events with the UI]->Data->View Script.)


# Notes:

### Dealing with chat commands

The trigger event is `TriggerAddEventChatMessage(TRIGGER, c_playerAny, "-hi", false);`. The forth boolean parameter determines whether the input must exact match or not. So commands like `-restart` is recommanded set to true and `-spawn XXX` is set to false.

To get the param from `false`, inside the function, get it by `StringWord(EventChatMessage(false), 2)` where the `2` is the position of the param split by space. For example, a command like `-spawn HeroChen 100`, `1` will be `-spawn`, `2` will be `HeroChen` and `3` will be `100`.


### When Editing Asset Files (.dds)
Recommended using Photoshop plugin [NVIDIA Texture Tools for Adobe Photoshop](https://developer.nvidia.com/nvidia-texture-tools-adobe-photoshop) to do so. 
When saving, remember to choose `No MIP maps` inside the `MIP Map Generation` section. 
*(Took me a long time to figure it out why the texture is not loading.....)*