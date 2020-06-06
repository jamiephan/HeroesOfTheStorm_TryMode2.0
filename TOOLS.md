# Tools

All tools require `nodejs` to do so. After installed `nodejs` and cloned the repo, do a `npm install`.

>Note: Due to how the storm-extract library works, this only support Nodejs 10.

In addition, it requires a Linux Enviorment to do so. If you are on Linux, great, if you are on Windows, try using `WSL` with `Ubuntu` installed.

>TODO: Make it compatible with Windows.

# Pre-usage Configuration (\*Required)

All the settings are stored in the `.env` file in the root of the project directory.

Before using any tools, rename `.env.example` into `.env` (remove the `.example` at the end) and modify the configuation to fit your need.

This tool uses `dotenv` to load the configs into Enviorment Variables (`process.env`). The settings are `key=value` pairs with strings having double quote.

Example: `HEROES_OF_THE_STORM_INSTALL_LOCATION="/mnt/c/Program Files/Heroes of the Storm"`.

The current values required are:

| Key                                          | Type   | Description                                                                                                                                                                                                                  |
|----------------------------------------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `HEROES_OF_THE_STORM_INSTALL_LOCATION`       | String | The location of HotS game file. (The main location, which should contain folders such as `HeroesData`, `Support`, `Versions` and files such as `.build.info`.)                                                               |
| `TOOLS_XML_MAIN_XML_PATH`                    | String | The location of `base.stormdata/gamedata.xml` file. Default: `./(10)trymemode.stormmap/base.stormdata/GameData.xml`                                                                                                          |
| `TOOLS_GAMEDATA_DIR`                         | String | The location of `base.stormdata` directory. Default: `./(10)trymemode.stormmap/base.stormdata`                                                                                                                               |
| `TOOLS_XML_MODS_DIR`                         | String | The location where the XML mods are stored. Default: `./(10)trymemode.stormmap/base.stormdata/Mods`                                                                                                                          |
| `TOOLS_MIMC_ABILITY_XML_GENERATION_LOCATION` | String | The location which Mimic Ability tool will produce. Please have it inside `TOOLS_XML_MODS_DIR` (Any level subdirectory does not matter). Default: `./(10)trymemode.stormmap/base.stormdata/Mods/HeroesMods/AbilityMimic.xml` |
| `TOOLS_S2MA_SAVE_LOCATION`                   | String | The location directory where the found s2ma files will be saved. Default: `./s2ma`                                                                                                                                           |


>Note: Generally, only modifying `HEROES_OF_THE_STORM_INSTALL_LOCATION` is enough, which its the install location for Heroes of the Storm under Linux / WSL path. (e.g in WSL, the letter drive will mount to `/mnt/{drive}`, so `C:/Program Files/Heroes of the Storm` will be `/mnt/c/Program Files/Heroes of the Storm`.) 


# Scripts

>Note: Tools that requires extraction from the Heroes of the Storm game file will take a while.


## Finder Tool for `*.s2ma`

**Command**: `npm run s2ma`


`*.s2ma` files are the generated libs for Heroes of the Storm. But most importantly it will also contain actual map files as well.

The tool will find all of the `*.s2ma` files and output them to `s2ma/` directory.

To view or extract them, I suggest uses [MPQ Editor](http://www.zezula.net/en/mpq/download.html).

---

## Ability Mimic Generator

**Command**: `npm run buildmimicabilities`

This tools will search through most the abilities (Q, W, E, R, which are `<CAbil*>`) and map them to a a corresponding `<CBehaviorAbility>`. With the id having prefixed `"M"`.

For example `<CAbilEffectInstant id="ZeratulCleave">` => `<CBehaviorAbility id="MZeratulCleave">`.

The reason for this is you can add any abilities to any heroes freely (which will appear on the items bar, the top bar where active buttons like ice block, cleanse placed)

To do so, just simply add the behavior to the selected units (e.g using the [chat command](USAGE.md) `adb MZeratulCleave`)

Also note that some abilities have special requirements, such as ultimates requires `Ultimate2Unlocked` or `Ultimate2Unlocked` behavior, you will need to also add them to the units as well (e.g chat command `adb Ultimate2Unlocked`). Details on each abilties requirements will be shown inside the generated XML file.

>Note: After generation, it will run a function similar to `npm run buildxml` once, since its a XML mod afterall.

Generated XML file location: `./(10)trymemode.stormmap/base.stormdata/Mods/HeroesMod/AbilityMimic.xml`

Altering `.env` variable: `TOOLS_MIMC_ABILITY_XML_GENERATION_LOCATION`


Demo: Alarak with Zera's Cleave, VP, 2 banner from varian, Gazlowe's Turret 

![Alarak with extra abilites](https://i.imgur.com/11ogJyt.png)


---

## Automatically generate `GameData.XML`

**Command**: `npm run buildxml`

This tool will automatically generate the `GameData.XML` under `./(10)trymemode.stormmap/base.stormdata`, that will include all XML files in `./(10)trymemode.stormmap/base.stormdata/Mods`, which will scan through all its subdirectories. 

>Note: It **will ignore** any files that does not end with `.xml` (case insensitive) and **does not** validate whether the XML file is valid (syntax error, etc). TODO: Also validate XML syntax.

---


## Mimic Lib Generator

**BREAKING: THIS TOOLCURRENTLY DOES NOT WORK, PLEASE DO NOT USE IT.**

**Command**: `npm run buildmimic '/path/to/heroesofthestorm/'`

This tool will automatically generates the mimics libs to `./(10)trymemode.stormmap/base.stormdata/ModuleMimicLibs`.

The Mimic Libs will be taked from `heroesdata.stormmod/base.stormmod/TriggerLibs`.

Currently will mimic:

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

Mimic Librarys are identical to internal trigger libs (Created by Blizzard). However, due to some restrictions, some functionalities cannot be easily used (for example it will detect whether it is a development build or production build, to prevent normal users accessing the commands.)

The Mimic Libs are from `heroesdata.stormmod/base.stormdata/TriggerLibs` and they are stored in `base.stormdata/ModuleMimicLibs`.

>TODO: Found out what cause LibAIAI.galaxy to crash the map when mimic-ed. Currently exclude that lib from mimicking. 

>Note: To generate your own Mimic Lib, see [Tools Section](#Tools).

Hence, I have create a mimic lib that is identical to internal libs, but modified a few things.


#### Renamed all triggers, variables, function etc.

Well, common sense. To prevent conflict with the origional library, I have renamed the prefix name to `Mimic[LibFileName]`, for example `libSprt_gt_DEBUGShortHeroDeath_Func` will changed to `MimicSupportLib_gt_DEBUGShortHeroDeath_Func`.

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

Hence, all the mimic internal libs will change `if (!((GameCheatsEnabled(c_gameCheatCategoryDevelopment) == true))` to `if (!((GameCheatsEnabled(c_gameCheatCategoryDevelopment) == false))` validation check (but not `libCore_gv_dEBUGDebuggingEnabled`).

#### Override `TriggerDebugOutput()` with a custom command `MimicTriggerDebugOutput()`

Since those code are for debug purpose only, if you have played around SC2 Maps, you should come around the `TriggerDebugOutput` function. This is internally, which looks something like this:

![SC2 debug window](https://i.imgur.com/7IofkYI.png)

However, I cannot find a way to get the debug window up despite manually calling the debug window out. This tool is extremely useful for debugging if Heroes can call it out. Well, unfortunately.

Those messages still carry out important infomation about the current state of the trigger call, therefore, I changed the `TriggerDebugOutput` inside the mimic internal libs to a custom function, that will output the message to `c_messageTitleDebug` instead, like how all the chat commands output.

The Lib that countain this command is also generated via the mimic [tool](#Tools), which is `ModulesMimicLibs/MimicTriggerDebugOutput.galaxy`.

#### Prefixing Chat Commands

In order to prevent a chat command have conflict with the original lib (for example both internal and mimic lib listen for the same chat command and execute the same function), I have added a `m` prefix to all chat commands, regardless what characters do they start with.

For example:

Internal Command | Mimicked Command
--- | --- 
`invulnerablestructures` | `minvulnerablestructures`
`BUILDINGSCALING` | `mBUILDINGSCALING`
`-AI All` | `m-AI All`



## Trigger code generator

**DEPRECATED: THIS TOOL WILL BE REMOVED SOON**

**Command**: `npm run triggergenerator`

This tool will help you to generate the codes to create a simple trigger function. Just follow the instructions and you can build a basic trigger code.

You can also get trigger functions from either Starcraft 2 editor (Modules->Triggers->[Add some Events with the UI]->Data->View Script.)
