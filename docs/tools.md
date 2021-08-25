[◁ Back to Home](index.md)
# Tools

## Prerequisite

In order for the tools to work, some specific environment configurations must be done. 

- Environment: `Linux` (or `WSL`)
- System Libraries:
    - cmake 
    - libbz2-dev 
    - zlib1g-dev 
    - python 
    - build-essential
- Nodejs: `10.X.X` (Other versions might not work)

After installed the libraries and application above, in this directory, run `npm install`.

# Pre-usage Configuration (\*Required)

All the settings are stored in the `.env` file in the root of the project directory.

Before using any tools, rename `.env.example` into `.env` (remove the `.example` at the end) and modify the configuration to fit your need.

This tool uses `dotenv` to load the configs into Environment Variables (`process.env`). The settings are `key=value` pairs with strings having double quote.

Example: `HEROES_OF_THE_STORM_INSTALL_LOCATION="/mnt/c/Program Files/Heroes of the Storm"`.

The current values required are:

| Key                                          | Type   | Description                                                                                                                                                                                                                  |
|----------------------------------------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `HEROES_OF_THE_STORM_INSTALL_LOCATION` | String | The location of HotS game file. (The main location, which should contain folders such as `HeroesData`, `Support`, `Versions` and files such as `.build.info`. |
| `TOOLS_XML_MAIN_XML_PATH` | String | The location of `base.stormdata/gamedata.xml` file. Default: `./(10)trymemode.stormmap/base.stormdata/GameData.xml` |
| `TOOLS_XML_MODS_DIR` | String | Default: The location where the XML mods are stored. `./(10)trymemode.stormmap/base.stormdata/Mods` |
| `TOOLS_GAMEDATA_DIR` | String | The location of `base.stormdata` directory. Default: `./(10)trymemode.stormmap/base.stormdata` |
| `TOOLS_S2MA_SAVE_LOCATION` | String | The save location for `*.s2ma` files. Default: `./s2ma` |
| `TOOLS_MIMIC_LIBRARY_SAVE_LOCATION` | String | The location to save the mimic libraries. Default: `./(10)trymemode.stormmap/base.stormdata/ModuleMimicLibs/InternalMimics` |
| `TOOLS_MIMIC_LIBRARY_IMPORT_PREFIX` | String | The prefix of the import mimic library, relative to `TOOLS_GAMEDATA_DIR`. Default: `ModuleMimicLibs/InternalMimics/` |
| `TOOLS_UPDATE_LIBRARY_LIBRARIES_LOCATION` | String | The location of the galaxy modules. Default: `./(10)trymemode.stormmap/base.stormdata/Modules` |
| `TOOLS_MIMC_ABILITY_XML_GENERATION_LOCATION` | String | The location which Mimic Ability tool will produce. Please have it inside `TOOLS_XML_MODS_DIR` (Any level subdirectory does not matter). Default: `./(10)trymemode.stormmap/base.stormdata/Mods/GameData/HeroesMod/AbilityMimic.xml` |
| `TOOLS_MIMC_BEHAVIOR_XML_GENERATION_LOCATION` | String | The location which Mimic Behavior tool will produce. Please have it inside `TOOLS_XML_MODS_DIR` (Any level subdirectory does not matter). Default: `./(10)trymemode.stormmap/base.stormdata/Mods/GameData/HeroesMod/BehaviorMimic.xml` |
| `TOOLS_MIMC_MODEL_XML_GENERATION_LOCATION` | String | The location which Mimic Model tool will produce. Please have it inside `TOOLS_XML_MODS_DIR` (Any level subdirectory does not matter). Default: `./(10)trymemode.stormmap/base.stormdata/Mods/GameData/HeroesMod/ModelMimic.xml` |


>Note: Generally, only modifying `HEROES_OF_THE_STORM_INSTALL_LOCATION` is enough, which its the install location for Heroes of the Storm under Linux / WSL path. (e.g in WSL, the letter drive will mount to `/mnt/{drive}`, so `C:/Program Files/Heroes of the Storm` will be `/mnt/c/Program Files/Heroes of the Storm`.) 


# Scripts

>Note: Tools that requires extraction from the Heroes of the Storm game file will take a while.

<a name="tools-symlink"></a>

## Symbolic Linker Tool

**Command**: `npm run util:symlink`

This tool will create a [Symbolic Link](https://en.wikipedia.org/wiki/Symbolic_link) to the Heroes of the Storm installation folder, which will "mirror" the directory, such that you can continue to edit the files in the directory but will also take effect in the Heroes actual try mode map.

This command should not need to use more than once if it completed successfully.

>Note: For some reason symlink created in WSL Environment does not work, please change the `.env` `HEROES_OF_THE_STORM_INSTALL_LOCATION` to a windows path first (e.g `C:/games/Heroes of the Storm` instead of `/mnt/c/games/Heroes of the Storm`), run `npm run symlink` in CMD (not WSL), then change it back to linux path for other commands.


<a name="tools-s2ma"></a>

## Finder Tool for `*.s2ma`

**Command**: `npm run extract:s2ma`


`*.s2ma` files are the generated libs for Heroes of the Storm. But most importantly it will also contain actual map files as well.

The tool will find all of the `*.s2ma` files and output them to `s2ma/` directory.

To view or extract them, I suggest uses [MPQ Editor](http://www.zezula.net/en/mpq/download.html).

---
<a name="tools-buildmimicabilities"></a>

## Ability Mimic Generator

**Command**: `npm run build:mimicabilities`

This tools will search through most the abilities (Q, W, E, R, which are `<CAbil*>`) and map them to a a corresponding `<CBehaviorAbility>`. With the id having prefixed `"M"`.

For example `<CAbilEffectInstant id="ZeratulCleave">` => `<CBehaviorAbility id="MZeratulCleave">`.

The reason for this is you can add any abilities to any heroes freely (which will appear on the items bar, the top bar where active buttons like ice block, cleanse placed)

To do so, just simply add the behavior to the selected units (e.g using the [chat command](usage.md) `adb MZeratulCleave`)

Also note that some abilities have special requirements, such as ultimates requires `Ultimate2Unlocked` or `Ultimate2Unlocked` behavior, you will need to also add them to the units as well (e.g chat command `adb Ultimate2Unlocked`). Details on each abilities requirements will be shown inside the generated XML file.

>Note: After generation, it will run a function similar to `npm run buildxml` once, since its a XML mod after all.

Generated XML file location: `./(10)trymemode.stormmap/base.stormdata/Mods/GameData/HeroesMod/AbilityMimic.xml`

Altering `.env` variable: `TOOLS_MIMC_ABILITY_XML_GENERATION_LOCATION`


Demo: Alarak with Zeratul's Cleave, VP, 2 banner from Varian, Gazlowe's Turret 

![Alarak with extra abilities](https://i.imgur.com/11ogJyt.png)


---
<a name="tools-buildmimicbehaviors"></a>

## `<CBehaviorBuff>` Mimic Generator

**Command**: `npm run build:mimicbehaviors`

This tool will search though all the `<CBehaviorBuff>` and map it to a *toggleable* hotkey button, similar to how Ice Block / Spell Shield works.

This will generate an ability with the prefixed `MB`. For instance, the behavior `AurielResurrectLightSpeedControllerBehavior` (The behavior that gives massive movement speed to units that are resurrected by Auriel Lv20 Resurrection talent) will have an ability `MBAurielResurrectLightSpeedControllerBehavior`, which you can add this ability as a behavior to units using tools such as [addbehavior](usage.md#cmd-addbehavior), with the command of `addbehavior MBAurielResurrectLightSpeedControllerBehavior`.

>Note: This will also respect the game settings, e.g Stuns and Silences will disable hotkey bars. Therefore it is not recommended to use `MBPermaStun` (Behavior Buff: `PermaStun`) or `MBPermaSilence` (Behavior Buff: `PermaSilence`) since you cannot active again to cancel it. You will need to respawn / remove the behavior (not the ability but actual behavior buff) if you would like to regain control.

>Note: After generation, it will run a function similar to `npm run buildxml` once, since its a XML mod after all.

Generated XML file location: `./(10)trymemode.stormmap/base.stormdata/Mods/GameData/HeroesMod/AbilityMimic.xml`

Altering `.env` variable: `TOOLS_MIMC_BEHAVIOR_XML_GENERATION_LOCATION`


---
<a name="tools-buildmimicmodels"></a>

## `<CModel>` Mimic Generator

**Command**: `npm run build:mimicmodels`

This tool will search though all the `<CModel>` and map it to a `<CUnit>`, which allows to be controlled on the map.

This will generate a unit with the prefixed `UN`. For instance, the model `RetreatPing` (White Flag retreat ping model) will have a unit `UNRetreatPing`, which you can summon this unit using tools such as [summon](usage.md#cmd-summon), with the command of `summon UNRetreatPing`.

>Note: After generation, it will run a function similar to `npm run buildxml` once, since its a XML mod after all.

Generated XML file location: `./(10)trymemode.stormmap/base.stormdata/Mods/GameData/HeroesMod/ModelMimic.xml`

Altering `.env` variable: `TOOLS_MIMC_MODEL_XML_GENERATION_LOCATION`


---
<a name="tools-buildxml"></a>

## Automatically generate `GameData.XML`

**Command**: `npm run build:xml`

>Use `npm run watch:xml` for automatically run the command above when required files were changed

This tool will automatically generate the `GameData.XML` under `./(10)trymemode.stormmap/base.stormdata`, that will include all XML files in `./(10)trymemode.stormmap/base.stormdata/Mods`, which will scan through all its subdirectories. 

>Note: It **will ignore** any files that does not end with `.xml` (case insensitive) and **does not** validate whether the XML file is valid (syntax error, etc). TODO: Also validate XML syntax.

---
<a name="tools-buildmimiclib"></a>

## Mimic Lib Generator

**Command**: `npm run build:mimiclib`

**Important**: Please note that this feature is disabled by default in the game (the tool can still generate the mimic libs). This is due to it is incompatible with some maps and the feature it provides does not have sufficient reason for it to enable by default (it cause more harm from what I can tell). Due to it was disabled via .galaxy modification, it is not possible to toggle this option with a chat command. If you would like to enable this feature, please manually edit the file:

File: [`(10)trymemode.stormmap/base.stormdata/LibTryMeMode.galaxy`](https://github.com/jamiephan/HeroesOfTheStorm_TryMode2.0/blob/master/(10)trymemode.stormmap/base.stormdata/LibTryMeMode.galaxy)

Modify the following lines by removing the leading `//`:
 
 - Line `2` (at the top): Change `// include "ModuleMimicLibs/MimicLibsLoader"` to `include "ModuleMimicLibs/MimicLibsLoader"`
 - Line `23` (inside the `libTRYM_InitLibraries()` function): Change `// libMICL_InitLib();` to `libMICL_InitLib();`

The Mimic Libs will be taken from `heroesdata.stormmod/base.stormmod/TriggerLibs`.

Currently will mimic (AI and Native Libs is excluded):

- `GameDataHelperLib.galaxy`
- `GameDataHelperLib_h.galaxy`
- `GameLib.galaxy`
- `GameLib_h.galaxy`
- `HeroesLib.galaxy`
- `HeroesLib_h.galaxy`
- `MapMechanicsLib.galaxy`
- `MapMechanicsLib_h.galaxy`
- `SoundLib.galaxy`
- `SoundLib_h.galaxy`
- `StartingExperienceLib.galaxy`
- `StartingExperienceLib_h.galaxy`
- `SupportLib.galaxy`
- `SupportLib_h.galaxy`
- `UILib.galaxy`
- `UILib_h.galaxy`

### Internal Library Mimics

Mimic Libraries are identical to internal trigger libs (Created by Blizzard). However, due to some restrictions, some functionalities cannot be easily used (for example it will detect whether it is a development build or production build, to prevent normal users accessing the commands.)

>TODO: Found out what cause LibAIAI.galaxy to crash the map when mimic-ed. Currently exclude that lib from mimicking. 

Hence, I have create a mimic lib that is identical to internal libs, but modified a few things automatically.

#### Renamed all triggers, variables, function etc.

To prevent conflict with the original library, I have renamed the prefix name to `Mimic[LibFileName]`, for example `libSprt_gt_DEBUGShortHeroDeath_Func` will changed to `MimicSupportLib_gt_DEBUGShortHeroDeath_Func`.

#### Changed Game Cheat Detection (Dev/Prod build detect)

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

Hence, all the mimic internal libs that checks for `GameCheatsEnabled(c_gameCheatCategoryDevelopment)` and `libCore_gv_dEBUGDebuggingEnabled` will be replaced to `true`.

#### Override `TriggerDebugOutput()` with a custom command `MimicTriggerDebugOutput()`

Since those code are for debug purpose only, if you have played around SC2 Maps, you should come around the `TriggerDebugOutput` function. This is internally, which looks something like this:

![SC2 debug window](https://i.imgur.com/7IofkYI.png)

However, I cannot find a way to get the debug window up despite manually calling the debug window out. This tool is extremely useful for debugging if Heroes can call it out. Well, unfortunately.

Those messages still carry out important information about the current state of the trigger call so I changed the `TriggerDebugOutput` inside the mimic internal libs to a custom function, that will output the message to `c_messageAreaSubtitle` instead, like how all the chat commands outputs.

**Note:** This feature is *disabled* by default. Meaning it will not showing any messages. This is to prevent the bombardment from `SupportLib`'s logging messages (like `00:00|Player 1|ExperienceContribution 1234`). If you would like to toggle this functionality, you can use the chat command `tmtdo` or `togglemimictriggerdebugoutput` to do so.

#### Prefixing Chat Commands

In order to prevent a chat command have conflict with the original lib (for example both internal and mimic lib listen for the same chat command and execute the same function), I have added a `m` prefix to all chat commands, regardless what characters do they start with.

For example:

Internal Command | Mimicked Command
--- | --- 
`invulnerablestructures` | `minvulnerablestructures`
`BUILDINGSCALING` | `mBUILDINGSCALING`
`-AI All` | `m-AI All`

---
<a name="tools-patchlibraries"></a>

## Patching Libraries

**Command**: `npm run patch:libraries`

>Use `npm run watch:libraries` for automatically run the command above when required files were changed.

A command to automatically remove all `//_heroes_replace_//` string in the Modules folder. This allows for less human errors.

After exported and saved the galaxy file, run this command and enter Try mode to test it out.

This does not need to do a manual search/replace in Galaxy Editor.

---
<a name="tools-buildusagedoc"></a>

## Build Usage Doc ([usage.md](usage.md))
**Command**: `npm run build:usagedoc`

>Use `npm run watch:usagedoc` for automatically run the command above when required files were changed.

A Command to build [usage.md](usage.md) document base on `doc.json` in `./(10)trymemode.stormmap/base.stormdata/Modules`.
