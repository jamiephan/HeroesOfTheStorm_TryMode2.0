[◁ Back to Home](index.md)
# Tools

## Prerequisite

- Node.js: (Latest or LTS should be fine)

After installing the libraries and applications above, run `npm install` in this directory.

## Pre-usage Configuration (\*Required)

All settings are stored in the `.env` file at the root of the project directory.

Before using any tools, rename `.env.example` to `.env` (removing the `.example` extension) and adjust the configuration as needed.

The current values required are:

| Key                                          | Type   | Description                                                                                                                                                                                                                  |
|----------------------------------------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `HEROES_OF_THE_STORM_INSTALL_LOCATION` | String | The location of HotS game file. (The main location, which should contain folders such as `HeroesData`, `Support`, `Versions` and files such as `.build.info`. |
| `TOOLS_USE_CASC_ONLINE_MODE` | Bool | Whether to use the online data when extracting game files (will not extract from `HEROES_OF_THE_STORM_INSTALL_LOCATION`) |
| `TOOLS_KEEP_CASC_ONLINE_MODE_CACHE` | Bool | Whether to cache the online data files |
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


>Note: In most cases, only `HEROES_OF_THE_STORM_INSTALL_LOCATION` needs to be set. This is the install location for Heroes of the Storm


## Scripts

>Note: Tools that require extraction from Heroes of the Storm game files may take some time if you using CASC online mode (`TOOLS_USE_CASC_ONLINE_MODE=true`).

<a name="tools-symlink"></a>

### Symbolic Linker Tool

**Command**: `npm run util:symlink`

This tool creates a [Symbolic Link](https://en.wikipedia.org/wiki/Symbolic_link) to the Heroes of the Storm installation folder, mirroring the directory so that edits made in this repo are reflected in the actual Try Mode map.

This command only needs to be run once if it completes successfully.

<a name="tools-s2ma"></a>

### Finder Tool for `*.s2ma`

**Command**: `npm run extract:s2ma`


`*.s2ma` files are the generated libraries for Heroes of the Storm and also contain actual map files.

The tool will find all of the `*.s2ma` files and output them to `s2ma/` directory.

To view or extract them, I suggest uses [MPQ Editor](http://www.zezula.net/en/mpq/download.html).

---
<a name="tools-buildmimicabilities"></a>

### Ability Mimic Generator

**Command**: `npm run build:mimicabilities`

This tool searches through most abilities (Q, W, E, R, represented as `<CAbil*>`) and maps each to a corresponding `<CBehaviorAbility>`, with the ID prefixed with `"M"`.

For example `<CAbilEffectInstant id="ZeratulCleave">` => `<CBehaviorAbility id="MZeratulCleave">`.

This allows you to freely add any ability to any hero (it will appear in the items bar — the top bar where active items like Ice Block and Cleanse are placed).

To do so, add the behavior to the selected units (e.g using the [chat command](usage.md) `adb MZeratulCleave`)

Note that some abilities have special requirements. For example, ultimates may require `Ultimate2Unlocked` or `Ultimate2Unlocked` behavior — you will need to add these to the unit as well (e.g chat command `adb Ultimate2Unlocked`). Details on each abilities requirements will be shown inside the generated XML file.

>Note: After generation, it will run a function similar to `npm run build:xml` once, since its a XML mod after all.

Generated XML file location: `./(10)trymemode.stormmap/base.stormdata/Mods/GameData/HeroesMod/AbilityMimic.xml`

Altering `.env` variable: `TOOLS_MIMC_ABILITY_XML_GENERATION_LOCATION`


Demo: Alarak with Zeratul's Cleave, VP, 2 banner from Varian, Gazlowe's Turret 

![Alarak with extra abilities](https://i.imgur.com/11ogJyt.png)


---
<a name="tools-buildmimicbehaviors"></a>

### `<CBehaviorBuff>` Mimic Generator

**Command**: `npm run build:mimicbehaviors`

This tool searches through all `<CBehaviorBuff>` entries and maps each to a *toggleable* hotkey button, similar to how Ice Block / Spell Shield works.

This will generate an ability with the prefixed `MB`. For instance, the behavior `AurielResurrectLightSpeedControllerBehavior` (The behavior that gives massive movement speed to units that are resurrected by Auriel Lv20 Resurrection talent) will have an ability `MBAurielResurrectLightSpeedControllerBehavior`, You can add this ability as a behavior to units using the [addbehavior](usage.md#cmd-addbehavior) command: `addbehavior MBAurielResurrectLightSpeedControllerBehavior`.

>Note: This will also respect the game settings, e.g Stuns and Silences will disable hotkey bars. Therefore it is not recommended to use `MBPermaStun` (Behavior Buff: `PermaStun`) or `MBPermaSilence` (Behavior Buff: `PermaSilence`) since you cannot active again to cancel it. You will need to respawn / remove the behavior (not the ability but actual behavior buff) if you would like to regain control.

>Note: After generation, it will run a function similar to `npm run build:xml` once, since its a XML mod after all.

Generated XML file location: `./(10)trymemode.stormmap/base.stormdata/Mods/GameData/HeroesMod/AbilityMimic.xml`

Altering `.env` variable: `TOOLS_MIMC_BEHAVIOR_XML_GENERATION_LOCATION`


---
<a name="tools-buildmimicmodels"></a>

### `<CModel>` Mimic Generator

**Command**: `npm run build:mimicmodels`

This tool searches through all `<CModel>` entries and maps each to a `<CUnit>`, which can then be controlled on the map.

This will generate a unit with the prefixed `UN`. For instance, the model `RetreatPing` (White Flag retreat ping model) will have a unit `UNRetreatPing`, You can summon this unit using the [summon](usage.md#cmd-summon) command: `summon UNRetreatPing`.

>Note: After generation, it will run a function similar to `npm run build:xml` once, since its a XML mod after all.

Generated XML file location: `./(10)trymemode.stormmap/base.stormdata/Mods/GameData/HeroesMod/ModelMimic.xml`

Altering `.env` variable: `TOOLS_MIMC_MODEL_XML_GENERATION_LOCATION`


---
<a name="tools-buildxml"></a>

### Automatically generate `GameData.XML`

**Command**: `npm run build:xml`

>Use `npm run watch:xml` for automatically run the command above when required files were changed

This tool automatically generates `GameData.XML` under `./(10)trymemode.stormmap/base.stormdata`, including all XML files in `./(10)trymemode.stormmap/base.stormdata/Mods` by scanning through all subdirectories. 

>Note: It **will ignore** any files that do not end with `.xml` (case-insensitive) and **does not** validate XML syntax.

---
<a name="tools-buildmimiclib"></a>

### Mimic Lib Generator

**Command**: `npm run build:mimiclib`

This feature is disabled by default in the game (though the tool can still generate the mimic libraries). This is because it is incompatible with some maps, and the feature does not provide sufficient benefit to justify enabling it by default. Because it is disabled via a `.galaxy` modification, it cannot be toggled with a chat command. If you would like to enable this feature, please manually edit the file:

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

#### Internal Library Mimics

Mimic Libraries are identical to internal trigger libs (Created by Blizzard). However, due to some restrictions, some functionalities cannot be easily used (for example it will detect whether it is a development build or production build, to prevent normal users accessing the commands.)

>TODO: Found out what cause LibAIAI.galaxy to crash the map when mimic-ed. Currently exclude that lib from mimicking. 

Hence, I have create a mimic lib that is identical to internal libs, but modified a few things automatically.

##### Renamed all triggers, variables, function etc.

To prevent conflict with the original library, I have renamed the prefix name to `Mimic[LibFileName]`, for example `libSprt_gt_DEBUGShortHeroDeath_Func` will changed to `MimicSupportLib_gt_DEBUGShortHeroDeath_Func`.

##### Changed Game Cheat Detection (Dev/Prod build detect)

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

##### Override `TriggerDebugOutput()` with a custom command `MimicTriggerDebugOutput()`

Since those code are for debug purpose only, if you have played around SC2 Maps, you should come around the `TriggerDebugOutput` function. This is internally, which looks something like this:

![SC2 debug window](https://i.imgur.com/7IofkYI.png)

However, I cannot find a way to get the debug window up despite manually calling the debug window out. This tool is extremely useful for debugging if Heroes can call it out. Well, unfortunately.

Those messages still carry out important information about the current state of the trigger call so I changed the `TriggerDebugOutput` inside the mimic internal libs to a custom function, that will output the message to `c_messageAreaSubtitle` instead, like how all the chat commands outputs.

**Note:** This feature is *disabled* by default. Meaning it will not showing any messages. This is to prevent the bombardment from `SupportLib`'s logging messages (like `00:00|Player 1|ExperienceContribution 1234`). If you would like to toggle this functionality, you can use the chat command `tmtdo` or `togglemimictriggerdebugoutput` to do so.

##### Prefixing Chat Commands

In order to prevent a chat command have conflict with the original lib (for example both internal and mimic lib listen for the same chat command and execute the same function), I have added a `m` prefix to all chat commands, regardless what characters do they start with.

For example:

Internal Command | Mimicked Command
--- | --- 
`invulnerablestructures` | `minvulnerablestructures`
`BUILDINGSCALING` | `mBUILDINGSCALING`
`-AI All` | `m-AI All`

---
<a name="tools-patchlibraries"></a>

### Patching Libraries

**Command**: `npm run patch:libraries`

>Use `npm run watch:libraries` for automatically run the command above when required files were changed.

Automatically removes all `//_heroes_replace_//` strings in the Modules folder, reducing the chance of human error.

After exported and saved the galaxy file, run this command and enter Try mode to test it out.

This does not need to do a manual search/replace in Galaxy Editor.

---
<a name="tools-buildusagedoc"></a>

### Build Usage Doc ([usage.md](usage.md))
**Command**: `npm run build:usagedoc`

>Use `npm run watch:usagedoc` for automatically run the command above when required files were changed.

Builds the [usage.md](usage.md) document from `usage.json` in `./docs/gen/usage.json`.

---
<a name="tools-buildshowcasedoc"></a>

### Build Showcase Doc ([showcase.md](showcase.md))
**Command**: `npm run build:showcasedoc`

Builds the [showcase.md](showcase.md) document from `showcase.json` in `./docs/gen/showcase.json` and the individual showcase entries stored under `./docs/gen/showcase/`.

Each subdirectory inside `./docs/gen/showcase/` represents a single showcase entry and must contain a `metadata.json` file. An optional `files/` subdirectory may also be included, whose contents will be embedded as fenced code blocks in the generated document.
