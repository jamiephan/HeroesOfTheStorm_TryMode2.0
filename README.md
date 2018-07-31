
# HeroesOfTheStorm_TryMode2.0
A modified Try Mode Map to create a better experience for **Heroes of the Storm - Try mode**.

![I believe, I can fly. I believe, I can touch the sky.](https://thumbs.gfycat.com/AntiqueFrighteningComet-size_restricted.gif)


# Internal Debug Menus

## Debug Menu

Internally, there is a hidden debug menu. By forcing enable debug mode, you can now use it as well by pressing the hotkey `\`.

It have various functionalities such as switch heroes, level, etc, which can save lots of time when get used to it. Here is a quick look:

![debug menu](https://i.imgur.com/gPI9we8.png)

## QA Cheat Menu

Base on the naming of the internal variables, I assume this is for QA testers. To use it, type `-devcheats` in the chat (on either Ally or All chats only).

>Note: In a recent commit, I have sync the `/` key with QA Cheat menu and Debug menu, which means the `\` key will open both debug and QA menu together. I am considering should I "desync" them.

Here is a quick look of the QA cheat menu:


![QA cheat menu](https://i.imgur.com/lrg8G3M.png)



# In-game chat commands

## How to use:

To use the commands below, simply type the commands in the chat box (like how you would normally chat with teammates).
>Note: Remember to either use `allies` or `all` chat channel when try to use the commands. Public chat channels and Private Messages (PM) does not work.


## How to include the library with custom commands in my map:

The library that handles custom chat commands are located in `base.stormdata/LibDEBUG_h.galaxy` and `base.stormdata/LibDEBUG.galaxy`. (I will consider "module-lize" them if the file getting bigger and harder to maintain).

Since it does not have direct connection to the try mode map, you can easily port the library to your desire map:

1. Place both `LibDEBUG.galaxy` and `LibDEBUG_h.galaxy` inside the folder `base.stormdata` in your map folder.
2. In your map script (`MapScript.galaxy`), append the code `include "LibDEBUG"` (without semi-colon) after all the includes library on the top.
3. Append the code `libDEBUG_InitLib();` inside the `InitLibs()` function.
4. The lib have been successfully imported to your map.

## Custom Commands in `LibDEBUG`:

Most commands have a short alias command. They both have identical functionality, but just able to type less characters. *In other word, laziness...*  

### `restart` | `re`

 Allow to restart and reload the map, without exit and re-enter it. This is extremely useful when you want to try the new modified XML files or scripts.
 
>Note: It will **NOT** reload or add mods from `Includes.xml` automatically. You will need to actually exit the map and re-enter if you need to do so.

    Parameters:
    	None
        
    Examples:
    	restart
        re

### `hello` | `hi`

Output a greeting message, with your username included.

    Parameters:
    	None
        
    Examples:
    	hello
        hi


### `summon` | `sum` `UNITNAME` `[Player]`

Spawn a unit at the centre of your camera location.
    
>Note: It will also enable multi-selection, like Vikings and Samuro with Illusion Master. However, there are some issues that have conflict to `/ac` QA Cheat menu, hence, I recommend you first turn `/ac` on if you would like to use this command. 

    Parameters:
        UNITNAME
        	Data type: Sting
            Requirements: Required
            Description: Provides the command with the unit ID to spawn it.
        [Player]
        	Data type: Integer
            Requirements: Optional
            Description: Define which player to own the unit that spawned. 
            Default Value: Your player ID (obtained from EventPlayer())


    Examples:
        summon TownTownHallL2
        	(Summon a tower structure to the player who used the command)
        summon HeroRaynor
        	(Summon Raynor Hero unit to the player who used the command)
        sum JungleGraveGolemDefender 6
        	(Summon A boss golem defender to player 6)

### `setscale` | `ss` `SCALE`

Set the scale of the summon units for the command "summon".

>Note: `1.0` is default size for most of the models.

    Parameters:
        SCALE
        	Data type: Fixed
            Requirements: Requires
            Description: Set the scale for the summon unit afterwards.
    
    Examples:
        setscale 0.1
        	(Set the scale of the summon unit to 0.1 (1/10 of the normal size).)
        ss 1.5
        	(Set the scale of the summon unit to 1.5 (0.5x bigger than normal size).)

### `respawntime` | `rst` `RESPAWNTIME`

Override the current respawn timer for all players. 

>Notice: Due to the system limitation, if you set to 0, it will change it to 0.0625 automatically (1 game tick).

    Parameters:
        RESPAWNTIME
        	Data type: Integer
            Requirements: Required
            Description: Change the default timer

    Examples:
        respawntime 99
        	(set the respawn timer to 99 seconds)
        rst 0
        	(set the respawn timer to 0 seconds (0.0625).)

### `additem` | `adi` `ITEM`

Add an item that is added to your unit inventory. If you selected multiple units, it will add to each of them.

You can acquire the ITEM's id from `<CUnit id="XXXX" parent="ITEM" />`

>Notice: Due to some validation might occur, items such as `NecromancerBoneSpear` (Xul's Bone Spear) will not have any functionality (but can be still spawned) because it validates that whether you have the talent or not. You can modify it manually though the Mod XML files.

    Parameters:
        ITEM
        	Data type: String
            Requirements: Required
            Description: Prodives the command with the item ID to add to unit's inventory

    Example:
        additem ArthasAntiMagicShell
        	(Add Arthas's Anti Magic Shell active item to selected unit's inventory)
        adi TalentRewind
        	(Add Generic Talent Reiwnd item to selected unit's inventory)

### `removeitems` | `rmi`

Remove all inventory items from selected units.

>Note: *Still figuring out out to remove items by name instead all of them....*

    Parameters:
        none

    Example:
        removeitems
        rmi


### `setscore` | `score` `FIELD` `VALUE`

Set the score for the scoreboard (some of them will shows in tab screen). This is good to use when some talents interact with scoreboard such as Zagara's Infest.

>Note: Though Infest internal function limits to 524%, max of Fixed value, but details are out of scope here.

You can obtain these FIELDs from `ScoreValueData.xml` in `heroesdata.stormmod`

>Note: Some fields uses Integer and some uses Fixed. However because this function is unified using `PlayerScoreValueSetFromInt()`, all decimals will be removed. As such, the max value for Fixed is `524287` and `2147483647` for Integer. This limitation might change later 

    Parameters:
        FIELD
        	Data type: String
            Requirements: Required
            Description: Determine the field to modify
        VALUE:
        	Data type: Integer
            Requirement: Required
            Description: Set the value for the field above.

    Example:
        setscore HeroDamage 0
        	(Set the field "Hero Damage" to 0 to the player who use this command)
        score SoloKill 524287
	        (Set the field "Kils" to 5242873 to the player who use this command)


### `respawnpoint` | `rsp` `ACTION` `PLAYER`

Modify the respawn point for a player. Either at the current camera location or its default location.

    Parameters:
        ACTION:
            set: Set the spawn location for the player(s) at the current camera location.
            reset: Reset the spawn location for the player(s) to its/their default spawn location.
        PLAYER:
            [1-10]: Set the target player for the action above.
            all: Apply the action above to all players (1-10)

    Example:
        respawnpoint set all
        	(set the respawn point for all players at the current camera location)
        rsp set 1
        	(set the respawn point to player 1 at the current camera location)
        rsp reset all
        	(reset all player's respawn point to its default respawn location (hall of storms).)

    

### `killunits` | `ku`

Instantly kill all the units that are selected.

    Parameters: 
        none

    Example:
        killunits
        ku

### `togglefogofwar` | `tfow`

Toggle Fog Of War. This can enable or disable full map vision.

    Parameters: 
        none

    Example:
        tfow
        togglefogofwar

### `toggleoutputid` | `toi`

Toggle Display Unit's ID Mode

This can output all the selected Units ID to the screen with a left click.

>Notice: The system is not perfect yet and its kinda buggy. But the main functionality works. Requires `ts` and `/ac` in the QA Cheat menu for now.

    Parameters: 
        none

    Example:
        toi
        toggleoutputid

### `togglefreecamera` | `tfc`

Toggle Free Camera Mode

This can allows you to freely move your camera's around with your middle (wheel) mouse button. Free zoom are coming soon.

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

These commands are used by Blizzard internally, after forced to turn on the debug mode, some of them we can use it as well.

- `togheroai` - Allows you to toggle AIs to players that have AI assigned.
- `debugrespawn` - Instantly cause your hero to respawn.
- `-devcheats` - Toggle QA debug menu. (Kinda redundant, as I have sync it with `\` key manually.) 
- `-AI All` - Toggle AIs and apply them to all players (AI will take control over you.) <sup>*Conspiracy theory of AI taking control the world? hmm..*</sup>


    ---PENDING FOR UPDATE---
    The command list are just a quick "grep" generated from all galaxy files. Documentation are not there yet, but might add later.


    For now to see command list, please refer to `InternalCommands.txt`

    Format: TriggerLibPath:lineNumber: TriggerAddEventChatMessage(TRIGGERFUNCTION, c_playerAny, CHATCOMMAND, OPTION);

    if OPTION is true, means the chat command does not have parameter, and if it is false, meaning you have to refer to the code to see the parameter.

## Builder Mode

**This system is still in a early development.**

Builder mode allows you to place objects to anywhere in the map. The units will constantly teleport to your cursor (follow your cursor). Remember to select `/ac` and `ts` in QA menu (this will added automatically in future development).

To use builder mode, select a unit, or units and press `backspace`. Builder mode will then be activated and you can place the units where you like.

To place the unit(s), press `backspace` again to deactivate builder mode.


# Modifications

Modifications of XML files are under `Mods` folder (`./(10)trymemode.stormmap/base.stormdata/Mods`). If Galaxy modification needed, it will be in (`./(10)trymemode.stormmap/base.stormdata`), same as where the custom command library located at.

>Pending for update...
   
# Tools

All tools require `nodejs` to do so. After installed `nodejs` and cloned the repo, do a `npm install`.

### Automatically generate `GameData.XML`

**Command**: `npm run buildxml`

This tool will automatically generate the `GameData.XML` under `./(10)trymemode.stormmap/base.stormdata`. 

it was preset that all XML modifications must be inside the `Mods` folder (`./(10)trymemode.stormmap/base.stormdata/Mods`). Any subdirectories are not limited and will automatically include when generating `GameData.XML`.

>Note: It **will ignore** any files that does not end with `.xml` (case insensitive) and **does not** validate whether the XML file is valid (syntax error, etc).

### Trigger code generator

**Command**: `npm run triggergenerator`

This tool will help you to generate the codes to create a simple trigger function. Just follow the instructions and you can build a basic trigger code.

You can also get trigger functions from either Starcraft 2 editor (Modules->Triggers->[Add some Events with the UI]->Data->View Script.)


# Notes:

### Dealing with chat commands

The trigger event is `TriggerAddEventChatMessage(TRIGGER, c_playerAny, "-hi", false);`. The forth boolean parameter determines whether the input must exact match or not. So commands like `restart` is recommended set to `true` and `sum XXX` is set to `false` (as it requires parameter, so it is impossible to match).

To get the param from `TriggerAddEventChatMessage()` with the forth parameter set to `false`, inside the trigger function, get it by `StringWord(EventChatMessage(false), 2)` where the `2` is the position of the param split by space. For example, a command like `sum HeroChen 100`, `1` will be `sum`, `2` will be `HeroChen` and `3` will be `100`.


### When Editing Asset Files (.dds)
Recommended using Photoshop plugin [NVIDIA Texture Tools for Adobe Photoshop](https://developer.nvidia.com/nvidia-texture-tools-adobe-photoshop) to do so. 

>Note: When saving, remember to choose `No MIP maps` inside the `MIP Map Generation` section. 
*(Took me a long time to figure it out why the texture is not loading.....)*
