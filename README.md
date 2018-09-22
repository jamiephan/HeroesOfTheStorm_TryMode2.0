
# HeroesOfTheStorm_TryMode2.0
A modified Try Mode Map to create a better experience for **Heroes of the Storm - Try mode**.

![I believe, I can fly. I believe, I can touch the sky.](https://thumbs.gfycat.com/AntiqueFrighteningComet-size_restricted.gif)

# Modules

I have make most of the custom functionalities became that is "plugin-able", so you can easily intergrate into your own map by just copying and add 2 lines of code manually.

All modules are under the `/Modules` directory in `base.stormdata`.

| Module Name|File|Lib Id| Brief functionality|
|:------------- |:------------- |:-------------|:-----|
| Module Loader|`LibModuleLoader.galaxy`|`libMODL`|A unified Module Loader Lib that allows you to choose which module to load,|
| Utilities|`LibUtilities.galaxy`|`libUTIL`|A Module that have utilities tools such as "Toggle Fog Of War", "Toggle UI", etc.|
| Builder Mode |`LibBuilderMode.galaxy`|`libBULM`|A Builder Module that allows you to place objects anywhere in the map.|
| FPS Mode|`LibFPSMode.galaxy`|`libFPSM`|A FPS Module that allows you to see the map in first person camera.|
| Units |`LibUnits.galaxy`|`libUNIT`|Commands that are related to units, eg, spawn, kill, etc|
| Funny Module |`LibFunny.galaxy`|`libFUNY`|Some random code that I put in when I am boring.|

## Module Loader (`LibModuleLoader.galaxy`)

This is the main entry script to all other modules. I recommand add it here because it is easier to maintain as well as increase portability.

>TODO: Create an node script tool to automate this process.

### Disable Modules

To disable modules, simply find the module you dont like, for example `LibFunny.galaxy`

1. In the `includes "XXXX"` section, find the module you would like to disable, for example `LibFunny`.

2. Then by either delete the include or comment it out (recommanded comment it out) by adding `//` at the beginning:

        //include "Modules/LibFunny"

3. Then find the loading function, for example `libFUNY_InitLib()` by either delete the include or comment it out (recommanded comment it out) by adding `//` at the beginning:

        //libFUNY_InitLib();


## Utilities Module (`LibUtilities.galaxy`)

This module contains various of utilities command ready to use:

### `togglefogofwar` | `tfow`

Toggle Fog Of War. This can enable or disable full map vision.

    Parameters: 
        none

    Example:
        tfow
        togglefogofwar

### `toggleui` | `tui`

Toggle User Interface. This can hide or show all the UIs

> Note: If UI is off, all abilites will be disabled.

    Parameters: 
        none

    Example:
        tui
        toggleui

### `togglecdr` | `tcdr`

Toggle Mass CDR. This will constantly set cooldowns and mana (energy) to 0s and 100% respectively.

> Note: The reason why this over the one in trymode because trymode's actually have cooldown between uses, something like 0.5s.

    Parameters: 
        none

    Example:
        tcdr
        togglecdr

### `restart` | `re`

Allow to restart and reload the map, without exit and re-enter it. This is extremely useful when you want to try the new modified XML files or scripts.
 
>Note: It will **NOT** reload or add mods from `Includes.xml` automatically. You will need to actually exit the map and re-enter if you need to do so.

    Parameters:
    	None
        
    Example:
        re
        restart

## Builder Module (`LibBuilderMode.galaxy`)

**This system is still in a early development.**

Builder mode allows you to place objects to anywhere in the map. The units will constantly teleport to your cursor (follow your cursor). Remember to select `/ac` and `ts` in QA menu (this will added automatically in future development).

To use builder mode, select a unit, or units and press `backspace`. Builder mode will then be activated and you can place the units where you like.

To place the unit(s), press `backspace` again to deactivate builder mode.


## FPS Module (`LibFPSMode.galaxy`)

**This system is still in a early development.**

FPS Mode allows you to look at the map by using a first person camera on your unit. The camera will constantly look forward and turn as well as long as the mode is activated.

To toggle FPS mode, simply use the `fps` chat command.

### Controls:

 - `u` : Move your unit forward. (It will also clear queue commands and **Hold Position** after moved.)
 - `← (arrow key)` : Turn your unit and camera to left.
 - `→ (arrow key)` : Turn your unit and camera to right.
 - `↑ (arrow key)` : Turn your camera upwards.
 - `↓ (arrow key)` : Turn your camera downwards.

## Units (`LibUnits.galaxy`)

This module are the commands related to units, such as kill, spawn, etc.

### `summon` | `sum` `UNITNAME` `[Player]` `[Amount]`

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
        [Player]
        	Data type: Integer
            Requirements: Optional
            Description: Define how many units to spawn
            Default Value: 1

    Examples:
        summon TownTownHallL2
        	(Summon a tower structure to the player who used the command)
        summon HeroRaynor 1 5
        	(Summon 5 Raynor Hero unit for player 1)
        sum JungleGraveGolemDefender 6
        	(Summon A boss golem defender for player 6)

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

### `unitproperty` | `up`

Allow to modify a selected unit's property, for example Max health, regen, movement speed etc.
 

    Parameters:
        UNITNAME
        	Data type: Integer
            Requirements: Required
            Description: Provides the command with the type of property to modify. See below.
        Player
        	Data type: Real
            Requirements: Required
            Description: Define the value to set. 
        
    Example:
        up 0 1
            (Set the selected units's Current HP to 1)
        unitproperty 6 10000
            (Set the selected unit's Max Energy for 10000 (usually means resource bar, such as mana, Tracer bullet, Chen's brew etc.))

Code for types:
    
    0 = c_unitPropLife
    1 = c_unitPropLifePercent
    2 = c_unitPropLifeMax
    3 = c_unitPropLifeRegen
    4 = c_unitPropEnergy
    5 = c_unitPropEnergyPercent
    6 = c_unitPropEnergyMax
    7 = c_unitPropEnergyRegen
    8 = c_unitPropShields
    9 = c_unitPropShieldsPercent
    10 = c_unitPropShieldsMax
    11 = c_unitPropShieldsRegen
    12 = c_unitPropKills
    17 = c_unitPropHeight
    18 = c_unitPropMovementSpeed
    20 = c_unitPropResources
    21 = c_unitPropRadius
    22 = c_unitPropXP
    23 = c_unitPropLevel
    24 = c_unitPropKillXP
    28 = c_unitPropBaseMovementSpeed
    29 = c_unitPropMovementSpeedCurrent
    30 = c_unitPropLifeExpectedPercent


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

>TODO: Add parameter allow to remove items by item id.

    Parameters:
        none

    Example:
        removeitems
        rmi


### `killunits` | `ku`

Instantly kill all the units that are selected.

    Parameters: 
        none

    Example:
        killunits
        ku

### `toggleoutputid` | `toi`

Toggle Display Unit's ID Mode

This can output all the selected Units ID to the screen with a left click.

>Notice: The system is not perfect yet and its kinda buggy. But the main functionality works. Requires `ts` and `/ac` in the QA Cheat menu for now.

    Parameters: 
        none

    Example:
        toi
        toggleoutputid

## Players (`LibFunny.galaxy`)

## Funny Module (`LibFunny.galaxy`)

> Hehe. Find it yourself. 😉

## How to use in your own map or mod

You can easily add modules or use the above in your map easily!

1. Copy the whole directory `Modules` in `base.stormdata`
2. Put it in your mods or map file's directory, should be something like `/your/path/to/ModOrMap.stormmap(or .stormmod)/base.stormdata/Modules`

### How to use in your own map

If you are developing a map, you should have a `MapScript.galaxy` file in the root of your map directory.

>Note: I suggest use text editor that supports syntax highlighting such as Sublime Text, VS code or Notepad ++

1. Open the `MapScript.galaxy` in your text editor.
2. For the first few lines, you should see bunch of `include "XXXX"`. (If not, just add it on top of the file.)
3. After the last line, add the code in a new line: `include "Modules/LibModuleLoader"`:
     
        include "XXXXXXX"
        include "XXXXXXX"
        ...
        include "Modules/LibModuleLoader"
        
4. Then find the function named `InitLibs ()`, which look like this:

        void InitLibs () {
            libXXXX_InitLib();
            libXXXX_InitLib();
            ...
            ...
        }

5. At the last line, add the code `libMODL_InitLib();`, which looks like this:

        void InitLibs () {
            libXXXX_InitLib();
            libXXXX_InitLib();
            ...
            ...
            libMODL_InitLib();
        }
6. Save the file and open the map, you should see some modules loaded message appear: 
![Loaded Modules](https://i.imgur.com/Jwci20Y.jpg)
7. If there any errors, which will looks like this, then check your code again:
![Map script error](https://i.imgur.com/cjXbq07.jpg)

### How to use in your own Mod

If you are developing a mod, you should have a created a `.galaxy` file inside `base.stormdata` directory. If not, create one using tools such as SC2 Editor and add a trigger library, or make your own

>Note: I suggest use text editor that supports syntax highlighting such as Sublime Text, VS code or Notepad ++

1. Open the `.galaxy` in your text editor.
2. For the first few lines, you should see bunch of `include "XXXX"`. (If not, just add it on top of the file.)
3. After the last line, add the code in a new line: `include "Modules/LibModuleLoader"`:
     
        include "XXXXXXX"
        include "XXXXXXX"
        ...
        include "Modules/LibModuleLoader"
        
4. Your `.galaxy` file should have a LibID, which most functions or variables star with. It is beginning with `lib` then either follow by a 4 character or 6 random Hex characters. It should not hard to find it. (below will use `libXXXX` as example)

5. Then find the function named `libXXX_InitLibraries ()`, which look like this:

        void libXXX_InitLibraries () {
            libXXXX_InitLib();
            libXXXX_InitLib();
            ...
            ...
        }

5. At the last line, add the code `libMODL_InitLib();`, which looks like this:

        void libXXX_InitLibraries () {
            libXXXX_InitLib();
            libXXXX_InitLib();
            ...
            ...
            libMODL_InitLib();
        }
6. Save the file and open the map, you should see some modules loaded message appear: 
![Loaded Modules](https://i.imgur.com/Jwci20Y.jpg)
7. If there any errors, which will looks like this, then check your code again:
![Map script error](https://i.imgur.com/cjXbq07.jpg)


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


### `hello` | `hi`

Output a greeting message, with your username included.

    Parameters:
    	None
        
    Examples:
    	hello
        hi

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


### `setscore` | `score` `FIELD` `VALUE` `[PLAYER]`

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
            Requirements: Required
            Description: Set the value for the field above.
        PLAYER:
            Data type: Integer
            Requirements: Optional
            Desctioption: Set the target player's ID
            Default Value: Your player ID (obtained from EventPlayer())
            

    Example:
        setscore HeroDamage 0
        	(Set the field "Hero Damage" to 0 to the player who use this command)
        score SoloKill 524287
	        (Set the field "Kils" to 5242873 to the player who use this command)
        score Healing 1000 2
            (Set the field "Healing" to 1000 to the player 2)


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



### `togglefreecamera` | `tfc`

Toggle Free Camera Mode

This can allows you to freely move your camera's around with your middle (wheel) mouse button. Free zoom are coming soon.

>Notice: The camera pan will be disabled while free camera mode is activated (you can no longer move your camera by pushing your cursor to the side.)

    Parameters: 
        none

    Example:
        tfc
        togglefreecamera

## System Commands

>This section is outdated. Please refer to [Mimic](#internal-library-mimics) section.

These commands are used by Blizzard internally, after forced to turn on the debug mode, some of them we can use it as well.

- `togheroai`: Allows you to toggle AIs to players that have AI assigned.
- `debugrespawn`: Instantly cause your hero to respawn.
- `-devcheats`: Toggle QA debug menu. (Kinda redundant, as I have sync it with `\` key manually.) 
- `-AI All`: Toggle AIs and apply them to all players (AI will take control over you.) <sup>*Conspiracy theory of AI taking control the world? hmm..*</sup>
    
**---PENDING FOR UPDATE---**

The command list are just a quick "grep" generated from all galaxy files. Documentation are not there yet, but might add later.

For now to see command list, please refer to [`InternalCommands.txt`](/InternalCommands.txt)
 
    Format: TriggerLibPath:lineNumber: TriggerAddEventChatMessage(TRIGGERFUNCTION, c_playerAny, CHATCOMMAND, OPTION);

    if OPTION is true, means the chat command does not have parameter, and if it is false, meaning you have to refer to the code to see the parameter.
    
## Internal Library Mimics

### **Currently Mimicked Internal Libraries:**

Mod name | Library name | Library prefix | Mimicked Lib Prefix
--- | --- | --- | ---
`heroesdata.stormmod` | `SupportLib` | `libSprt` | `MimicSupportLib`

Mimic Librarys are identical to internal trigger libs (Created by Blizzard). However, due to some restrictions, some functionalities cannot be easily used (for example it will detect whether it is a development build or production build, to prevent normal users accessing the commands.)

Hence, I have create a mimic lib that is identical to internal libs, but modified a few things:

### Renamed all triggers, variables, function etc.

Well, common sense. To prevent conflict with the origional library, I have renamed the prefix name to `Mimic[LibFileName]`, for example `libSprt_gt_DEBUGShortHeroDeath_Func` will changed to `MimicSupportLib_gt_DEBUGShortHeroDeath_Func`.

### Removed Game Cheat Detection (Dev/Prod build detect)

Since there are two ways that Blizzard detect whether does the game are in dev mode (maybe by different Blizzard Staff), some of the triggers have them both validated:

    if (!((libCore_gv_dEBUGDebuggingEnabled == true))) {
        return false;
    }

This is most commonly used, however it can be easily bypass it, as `libCore_gv_dEBUGDebuggingEnabled` is just a variable that can be overwritten, which already done in `libDEBUG.galaxy`.

However, another checking method on some triggers can not bypass:

    if (!((GameCheatsEnabled(c_gameCheatCategoryDevelopment) == true))) {
        return false;
    }

Because this `c_gameCheatCategoryDevelopment` is a **constant** that was pre-defined (which cannot be changed and will crash if you "forcefully" do so).

Hence, all the mimic internal libs will remove `GameCheatsEnabled(c_gameCheatCategoryDevelopment)` validation check (but not `libCore_gv_dEBUGDebuggingEnabled`).

### Override `TriggerDebugOutput()` with a custom command

Since those code are for debug purpose only, if you have played around SC2 Maps, you should come around the `TriggerDebugOutput` function. This is internally, which looks something like this:

![SC2 debug window](https://i.imgur.com/7IofkYI.png)

However, I cannot find a way to get the debug window up despite manually calling the debug window out. This tool is extremely useful for debugging if Heroes can call it out. Well, unfortunately.

However, those messages still carry out important infomation about the current state of the trigger call, therefore, I changed the `TriggerDebugOutput` inside the mimic internal libs to a custom function, that will output the message to `c_messageAreaDebug` instead, like how all the chat commands output.

### Prefixing Chat Commands

In order to prevent a chat command have conflict with the original lib (for example both internal and mimic lib listen for the same chat command and execute the same function), I have added a `m` prefix to all chat commands, regardless what characters do they start with.

For example:

Internal Command | Mimicked Command
--- | --- 
`invulnerablestructures` | `minvulnerablestructures`
`BUILDINGSCALING` | `mBUILDINGSCALING`
`-AI All` | `m-AI All`


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
