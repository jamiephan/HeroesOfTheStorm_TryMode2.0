---
title: Usage
nav_order: 2
last_modified_date: Sat, 09 May 2026 13:04:30 GMT
---

# Usage
{: .no_toc }
Most functionality is accessed through chat commands. Simply type a command in the chat box, just as you would when chatting with teammates.
>Note: Remember to use the Allies or All chat channel when entering commands. Public chat channels and Private Messages (PM) do not work.
All commands have a short alias with identical functionality, allowing for less typing.
Some commands have a UI counterpart that displays a menu of options and features corresponding to the command's functionality.

## 📚 Libraries
{: .no_toc }

|Library Name|File Name|Library ID|Library Description|
|-|-|-|-|
|Module Loader|LibModuleLoader.galaxy|LibMODL|A unified module loader library for selecting which modules to load.|
|Utilities|LibUtilities.galaxy|LibUTIL|A library providing utility tools such as "Toggle Fog Of War", "Toggle UI", etc.|
|Units|LibUnits.galaxy|LibUNIT|A library with commands related to selected units, such as kill, spawn, etc.|
|Players|LibPlayers.galaxy|LibPLYR|Commands related to players, such as scoreboard, respawn timer, etc.|
|Builder Mode|LibBuilderMode.galaxy|libBULM|A Builder Library that allows you to place objects anywhere in the map.|
|FPS Mode|LibFPSMode.galaxy|libFPSM|A First Person Shooter like Library that allows you to see the map in first person camera.|
|Free Camera Mode|LibFreeCameraMode.galaxy|libFRCM|Free Camera Mode allows you to change the angle of the camera easily.|
|Funny Stuff|LibFunny.galaxy|libFUNY|Random useless stuff just for the lolz.|

## 📚 Table of Contents
{: .no_toc }
- Table of Contents
{:toc}


## 📙 Module Loader Library (`LibModuleLoader.galaxy`):
A unified module loader library for selecting which modules to load.
This module is for loading other modules. **DO NOT** modify this file in SC2Editor.

---


## 📙 Utilities Library (`LibUtilities.galaxy`):
A library providing utility tools such as "Toggle Fog Of War", "Toggle UI", etc.

### 💭 Command: `addmarker`

#### 🔍 Syntax:
{: .no_toc }
(`addmarker` | `marker`) `<MarkerID>`

#### ✏ Description: 
{: .no_toc }
Add a marker at the position of the first selected unit.

#### ⚙ Parameters:
{: .no_toc }
    <MarkerID>
    	Required:	true
    	Type:		integer
    	Usage:		Defines the Marker ID to be added (up to 20).

#### 🔧 Examples:
{: .no_toc }
    > marker 1
    	(Add marker 1 at the position of the first selected unit.)
    > addmarker 10
    	(Add marker 10 at the position of the first selected unit.)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `addmarkercamera`

#### 🔍 Syntax:
{: .no_toc }
(`addmarkercamera` | `markerc`) `<MarkerID>`

#### ✏ Description: 
{: .no_toc }
Add a marker at the center position of the camera.

>Tip: Also use [`togglecrosshair`](#cmd-togglecrosshair) command to set the location precisely.

#### ⚙ Parameters:
{: .no_toc }
    <MarkerID>
    	Required:	true
    	Type:		integer
    	Usage:		Defines the Marker ID to be added (up to 20).

#### 🔧 Examples:
{: .no_toc }
    > markerc 1
    	(Add marker 1 at the center position of the camera.)
    > addmarkercamera 10
    	(Add marker 10 at the center position of the camera.)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `alliancecontrolteamselection`

#### 🔍 Syntax:
{: .no_toc }
(`alliancecontrolteamselection` | `acts`) 

#### ✏ Description: 
{: .no_toc }
Toggle Alliance Control and Multi-Selection — a shortcut reimplementation of the QA Cheat Menu's `/ac` and `ts` commands.
This enables or disables "Alliance Control" (control units from other players, including enemies) and "Multi-Selection" (select multiple units at once, like Vikings and Samuro).

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > acts
    	(Toggle Alliance Control + Multi-Selection)
    > alliancecontrolteamselection
    	(Toggle Alliance Control + Multi-Selection)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `clear`

#### 🔍 Syntax:
{: .no_toc }
(`clear` | `cls`) `[seconds]`

#### ✏ Description: 
{: .no_toc }
Clear all text messages, including chat and debug messages with an optional delay.

#### ⚙ Parameters:
{: .no_toc }
    [seconds]
    	Required:	false
    	Type:		float
    	Usage:		Defines the delay to clear text messages in seconds.
    	Default:	0

#### 🔧 Examples:
{: .no_toc }
    > cls
    	(Clear all texts instantly)
    > clear 5.4
    	(Clear all texts after 5.4 seconds)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `clearmarker`

#### 🔍 Syntax:
{: .no_toc }
(`clearmarker` | `clmarker`) 

#### ✏ Description: 
{: .no_toc }
Clear all created markers.

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > clmarker
    	(Clear all created markers.)
    > clearmarker
    	(Clear all created markers.)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `colormarker`

#### 🔍 Syntax:
{: .no_toc }
(`colormarker` | `colmarker`) `<MarkerID>` `<Red>` `<Green>` `<Blue>`

#### ✏ Description: 
{: .no_toc }
Change the color of a specific marker using an RGB value. The new color also applies to future markers.
>Note: Each marker's color is generated randomly when the game starts.

#### ⚙ Parameters:
{: .no_toc }
    <MarkerID>
    	Required:	true
    	Type:		integer
    	Usage:		Defines the Marker ID to be added (up to 20).
    <Red>
    	Required:	true
    	Type:		integer
    	Usage:		Defines the Red color of the marker's RGB color. (0 - 255)
    <Green>
    	Required:	true
    	Type:		integer
    	Usage:		Defines the Green color of the marker's RGB color. (0 - 255)
    <Blue>
    	Required:	true
    	Type:		integer
    	Usage:		Defines the Blue color of the marker's RGB color. (0 - 255)

#### 🔧 Examples:
{: .no_toc }
    > colmarker 1 255 0 0
    	(Change Marker 1 color to 255, 0, 0  (Red))
    > colormarker 10 0 0 0
    	(Change Marker 10 color to 0, 0, 0  (Black))
    > colormarker 10 0 0 0
    	(Change Marker 10 color to 0, 255, 255  (Cyan))

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `endgame`

#### 🔍 Syntax:
{: .no_toc }
(`endgame` | `eg`) 

#### ✏ Description: 
{: .no_toc }
End the game instantly and kick all players from the game.

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > eg
    	(End the game instantly)
    > endgame
    	(End the game instantly)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `floatingcombattext`

#### 🔍 Syntax:
{: .no_toc }
(`floatingcombattext` | `fct`) `<message>` `[state]` `[type]`

#### ✏ Description: 
{: .no_toc }
Show a custom floating combat text with different built-in templates.

The table is the available combinations of `state` and `type`. Columns are `state` (e.g `Shield`) and Rows are `type` (e.g `NormalAmountGiven`):

| `type` \ `state` | `Ability` | `Basic` | `Heal` | `Mana` | `Shield` | `XP` | `Quest` | `Reduced` |
|-|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| `LesserAmountReceived` | ✔ | ✔ | ✔ | ✔ | ✔ | ❌ | ❌ | ❌ |
| `LesserAmountGiven` | ✔ | ✔ | ✔ | ✔ | ✔ | ❌ | ✔ | ❌ |
| `NormalAmountReceived` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ❌ | ❌ |
| `NormalAmountGiven` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ❌ | ❌ |
| `MediumAmountReceived` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ❌ | ❌ |
| `MediumAmountGiven` | ✔ | ✔ | ✔ | ✔ | ✔ | ❌ | ❌ | ❌ |
| `GreaterAmountReceived` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ❌ | ❌ |
| `GreaterAmountGiven` | ✔ | ✔ | ✔ | ✔ | ✔ | ❌ | ❌ | ❌ |
| `CritAmountReceived` | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ❌ | ❌ |
| `CritAmountGiven` | ✔ | ✔ | ✔ | ✔ | ✔ | ❌ | ❌ | ❌ |
| `AmountReadable` | ❌ | ❌ | ✔ | ❌ | ✔ | ❌ | ❌ | ✔ |
| `CritAmountReadable` | ❌ | ✔ | ❌ | ❌ | ✔ | ❌ | ❌ | ❌ |
| `SelfAmountReceived` | ❌ | ❌ | ❌ | ❌ | ❌ | ✔ | ❌ | ❌ |
| `HealPrevented` | ✔ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `QuestProgress` | ❌ | ✔ | ❌ | ❌ | ❌ | ❌ | ✔ | ❌ |

>Note: The capitalization of `type` must be followed exactly.

#### ⚙ Parameters:
{: .no_toc }
    <message>
    	Required:	true
    	Type:		string
    	Usage:		Defines the message to be shown in Floating Combat Text
    [state]
    	Required:	false
    	Type:		string
    	Usage:		Defines the state of the Floating Combat Text
    	Default:	Basic
    [type]
    	Required:	false
    	Type:		string
    	Usage:		Defines the type of the Floating Combat Text
    	Default:	NormalAmountGiven

#### 🔧 Examples:
{: .no_toc }
    > fct 100
    	(Shows the FCT "100" with the style of basic attack (orange))
    > fct 50 XP SelfAmountReceived
    	(Shows the FCT "50" with the style of xp gathered (small purple text))
    > floatingcombattext nice Quest QuestProgress
    	(Shows the FCT "nice" with the style of quest progressing (gold circle with "!"))
    > floatingcombattext 999 Shield CritAmountGiven
    	(Shows the FCT "999" with the style of critical shield (white with explosion style))

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `forceruntrigger`

#### 🔍 Syntax:
{: .no_toc }
(`forceruntrigger` | `frt`) `<TriggerName>`

#### ✏ Description: 
{: .no_toc }
Force-run a trigger created by `TriggerCreate()`, ignoring conditions and waiting until it finishes.
This can be used to run a trigger that bypasses the `testConds` check, such as `GameCheatsEnabled(c_gameCheatCategoryDevelopment)`.

You can get the trigger name from the `TriggerCreate()` function in various galaxy files.

For example, a debug chat trigger to start the Immortal objective in Battlefield of Eternity immediately:

```c++
//--------------------------------------------------------------------------------------------------
// Trigger: MMBOE Debug - Start Immediately
//--------------------------------------------------------------------------------------------------
bool libMLBD_gt_MMBOEDebugStartImmediately_Func (bool testConds, bool runActions) {
    // Automatic Variable Declarations
    // Conditions
    if (testConds) {
        if (!((GameCheatsEnabled(c_gameCheatCategoryDevelopment) == true))) {
            return false;
        }
    }

    // Actions
    if (!runActions) {
        return true;
    }

    libMLBD_gv_mMBOEDebugUsed = true;
    libMLBD_gf_MMBOEDuelWarningStart();
    TimerStart(libMLBD_gv_mMBOEEventWarningTimer, 0.5, false, c_timeGame);
    return true;
}

//--------------------------------------------------------------------------------------------------
void libMLBD_gt_MMBOEDebugStartImmediately_Init () {
    libMLBD_gt_MMBOEDebugStartImmediately = TriggerCreate("libMLBD_gt_MMBOEDebugStartImmediately_Func");
    TriggerEnable(libMLBD_gt_MMBOEDebugStartImmediately, false);
    TriggerAddEventChatMessage(libMLBD_gt_MMBOEDebugStartImmediately, c_playerAny, "-bd", true);
}
```
The trigger name will be `libMLBD_gt_MMBOEDebugStartImmediately_Func`. By using this command (`frt libMLBD_gt_MMBOEDebugStartImmediately_Func`), you can bypass the `GameCheatsEnabled(c_gameCheatCategoryDevelopment)` restriction, which was required when using the `-bd` command.

#### ⚙ Parameters:
{: .no_toc }
    <TriggerName>
    	Required:	true
    	Type:		string
    	Usage:		Defines the trigger to be run

#### 🔧 Examples:
{: .no_toc }
    > frt libUIUI_gt_InputBackslashKeyDown_Func
    	(Force to run the trigger "libUIUI_gt_InputBackslashKeyDown_Func", which will show up the debug menu.)
    > forceruntrigger libSprt_gt_DEBUGHaveAITakeOverAI_Func
    	(Force to run the trigger "libSprt_gt_DEBUGHaveAITakeOverAI_Func", which will have an AI take over your unit.)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `getmarker`

#### 🔍 Syntax:
{: .no_toc }
(`getmarker` | `gmarker`) `<MarkerID>`

#### ✏ Description: 
{: .no_toc }
Get a Markers position in (X, Y, Z).

#### ⚙ Parameters:
{: .no_toc }
    <MarkerID>
    	Required:	true
    	Type:		integer
    	Usage:		Defines the Marker ID to be added (up to 20).

#### 🔧 Examples:
{: .no_toc }
    > gmarker 1
    	(Get the position of Marker 1 in (X, Y, Z).)
    > getmarker 10
    	(Get the position of Marker 10 in (X, Y, Z).)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `loadmap`

#### 🔍 Syntax:
{: .no_toc }
(`loadmap` | `lm`) `<MapPath>`

#### ✏ Description: 
{: .no_toc }
End the game and instantly load a `.stormmap` file.
The `MapPath` is relative to:
 - `*.stormmods/base.stormmap/` for CASC / MPQ storage
 - `HEROES_INSTALL_LOCATION/maps/` for file system

There are currently 4 built-in `.stormmaps` from CASC in Heroes, which the `MapPath` is:
 - heroes/singleplayermaps/(10)trymemode.stormmap
 - `heroes/singleplayermaps/startingexperience/tutorial01.stormmap`
 - `heroes/singleplayermaps/startingexperience/tutorialmapmechanics.stormmap`
 - `heroes/singleplayermaps/startingexperience/tutorialveteran.stormmap`

You can also put a `.stormmap` file into `HEROES_INSTALL_LOCATION/maps/`, e.g `HEROES_INSTALL_LOCATION/maps/cool.stormmap`, which the `MapPath` will be `cool.stormmap`

#### ⚙ Parameters:
{: .no_toc }
    <MapPath>
    	Required:	true
    	Type:		string
    	Usage:		Defines the path to the stormmap

#### 🔧 Examples:
{: .no_toc }
    > lm heroes/singleplayermaps/startingexperience/tutorial01.stormmap
    	(Exit and Load the tutorial 1 map)
    > loadmap heroes/singleplayermaps/startingexperience/tutorialveteran.stormmap
    	(Exit and Load the veteran tutorial map.)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `minionwaveinterval`

#### 🔍 Syntax:
{: .no_toc }
(`minionwaveinterval` | `mwi`) `[seconds]`

#### ✏ Description: 
{: .no_toc }
Get or set the minion wave spawn interval. Usually 30s, or 15s in ARAM.

#### ⚙ Parameters:
{: .no_toc }
    [seconds]
    	Required:	false
    	Type:		float
    	Usage:		Defines interval for minion wave to spawn
    	Default:	(The map's original interval, usually 30 but 15 for ARAMs)

#### 🔧 Examples:
{: .no_toc }
    > mwi
    	(Get the minion wave interval)
    > minionwaveinterval
    	(Get the minion wave interval)
    > mwi 0.0625
    	(Set the minion wave to spawn every 0.0625 seconds (each game loop))
    > mwi 100
    	(Set the minion wave to spawn every 100 seconds.)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `playcutscene`

#### 🔍 Syntax:
{: .no_toc }
(`playcutscene` | `pcs`) `<mode>`

#### ✏ Description: 
{: .no_toc }
Play a Cutscene file (`*.StormCutscene`) directly. Press `Esc` anytime to stop it.

The file path is relative to `*.stormmod/base.stormdata`. (e.g If Cutscene file is in `mods/heroesdata.stormmod/base.stormdata/Cutscenes/EndOfMatch/EndOfMatch_LineUp_Tassadar.StormCutscene`, the path will be `Cutscenes/EndOfMatch/EndOfMatch_LineUp_Tassadar.StormCutscene`)

#### ⚙ Parameters:
{: .no_toc }
    <mode>
    	Required:	true
    	Type:		string
    	Usage:		Defines the path of the *.StormCutscene file.

#### 🔧 Examples:
{: .no_toc }
    > pcs Cutscenes/Tutorial_CursedHollow.StormCutscene
    	(Plays the Tutorial Cutscene for Cursed Hollow)
    > playcutscene Cutscenes/StoreMuradin.StormCutscene
    	(Plays the Muradin Cutscene in the Collection Page (wait for 2 second to show Muradin))

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `removecamerabound`

#### 🔍 Syntax:
{: .no_toc }
(`removecamerabound` | `rcb`) 

#### ✏ Description: 
{: .no_toc }
Remove the camera bounding box, which is defined in the map editor. This allows the camera to move freely without being limited to a specific area.
>Note: This command cannot be reverted. You will need to restart the game to get the bounding box back.

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > rcb
    	(Remove the camera bounding box)
    > removecamerabound
    	(Remove the camera bounding box)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `removemarker`

#### 🔍 Syntax:
{: .no_toc }
(`removemarker` | `rmmarker`) `<MarkerID>`

#### ✏ Description: 
{: .no_toc }
Removes a specific marker.

#### ⚙ Parameters:
{: .no_toc }
    <MarkerID>
    	Required:	true
    	Type:		integer
    	Usage:		Defines the Marker ID to be added (up to 20).

#### 🔧 Examples:
{: .no_toc }
    > rmmarker 1
    	(Removed Marker 1)
    > removemarker 10
    	(Removed Marker 10)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `resetcameraobject`

#### 🔍 Syntax:
{: .no_toc }
(`resetcameraobject` | `rco`) 

#### ✏ Description: 
{: .no_toc }
Reset the game camera to `BlizzardAllStars` (default game camera)

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > rco
    	(Reset the game camera to BlizzardAllStars)
    > resetcameraobject
    	(Reset the game camera to BlizzardAllStars)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `resetgamespeed`

#### 🔍 Syntax:
{: .no_toc }
(`resetgamespeed` | `rgs`) 

#### ✏ Description: 
{: .no_toc }
Reset the game speed to 2 (Normal).

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > rgs
    	(Reset the game speed to 2 (Normal).)
    > resetgamespeed
    	(Reset the game speed to 2 (Normal).)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `restartgame`

#### 🔍 Syntax:
{: .no_toc }
(`restartgame` | `re`) 

#### ✏ Description: 
{: .no_toc }
Restart the map without needing to re-enter. This is extremely useful when testing modified XML files or Galaxy scripts.
>Note: It will **NOT** automatically reload or add mods from `Includes.xml`. You must manually re-enter the map for mods to be applied.

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > re
    	(Restart the game instantly)
    > restartgame
    	(Restart the game instantly)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `setcameraobject`

#### 🔍 Syntax:
{: .no_toc }
(`setcameraobject` | `sco`) `<camera>`

#### ✏ Description: 
{: .no_toc }
Manually set the camera object. The parameter is the id of `<CCamera id="xxx">`.
>**WARNING**: Set a non existing camera will actually **crash** the game.

#### ⚙ Parameters:
{: .no_toc }
    <camera>
    	Required:	true
    	Type:		string
    	Usage:		Defines the camera object.

#### 🔧 Examples:
{: .no_toc }
    > sco BlizzardAllStars
    	(Set the camera object to BlizzardAllStars (default game camera))
    > setcameraobject Dflt
    	(Set the camera object to Dlft (default SC2 camera))

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `setgamespeed`

#### 🔍 Syntax:
{: .no_toc }
(`setgamespeed` | `sgs`) `<speed>`

#### ✏ Description: 
{: .no_toc }
Set the game speed.

The game speed must be between 0 and 4:

| value | speed |
|-|-|
| 0 | Slower |
| 1 | Slow |
| 2 | Normal |
| 3 | Fast |
| 4 | Faster |

#### ⚙ Parameters:
{: .no_toc }
    <speed>
    	Required:	true
    	Type:		integer
    	Usage:		Defines the game speed to be set (between 0 - 4).

#### 🔧 Examples:
{: .no_toc }
    > sgs 0
    	(Set the game speed to 0 (Slower))
    > setgamespeed 3
    	(Set the game speed to 3 (Fast))

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `startgame`

#### 🔍 Syntax:
{: .no_toc }
(`startgame` | `sg`) 

#### ✏ Description: 
{: .no_toc }
Start the game instantly (timer start, gate open, etc).

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > sg
    	(Start the game instantly)
    > startgame
    	(Start the game instantly)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `string`

#### 🔍 Syntax:
{: .no_toc }
(`string` | `str`) `<mode>` `<value>`

#### ✏ Description: 
{: .no_toc }
Display a string using `TextExpressionAssemble` or `StringExternal`.
Useful for quickly displaying strings from internal functions.
`mode` must be either `TextExpressionAssemble` or `StringExternal`.

#### ⚙ Parameters:
{: .no_toc }
    <mode>
    	Required:	true
    	Type:		string
    	Usage:		Defines the mode of the string to be displayed.
    <value>
    	Required:	true
    	Type:		string
    	Usage:		Defines the value of the string to be displayed

#### 🔧 Examples:
{: .no_toc }
    > str TextExpressionAssemble Param/Expression/lib_Sprt_B1FD42AF
    	(Shows the string "Set Mastery Ring..." from supportlib)
    > string StringExternal Param/Value/lib_Sprt_F697F4C7
    	(Shows the string "Game Speed should not exceed 8.0...." from supportlib)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `togglecdr`

#### 🔍 Syntax:
{: .no_toc }
(`togglecdr` | `tcdr`) 

#### ✏ Description: 
{: .no_toc }
Toggle Mass CDR. Resets the cooldown on all abilities every game loop (0.0625s).
This is useful for bypassing the limit of Try Mode's Toggle Cooldown, which has a 1.5s cooldown between each reset.

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > tcdr
    	(Toggle Mass CDR)
    > togglecdr
    	(Toggle Mass CDR)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `togglecrosshair`

#### 🔍 Syntax:
{: .no_toc }
(`togglecrosshair` | `tch`) 

#### ✏ Description: 
{: .no_toc }
Toggle a crosshair at the center of the camera. This allows for more precise placement of [summon units](#cmd-summon) and [adding effects](#cmd-addeffectcamera).

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > tch
    	(Toggle showing crosshair)
    > togglecrosshair
    	(Toggle showing crosshair)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `toggledebugmode`

#### 🔍 Syntax:
{: .no_toc }
(`toggledebugmode` | `tdb`) 

#### ✏ Description: 
{: .no_toc }
Toggle Debug Mode by modifying the `libCore_gv_dEBUGDebuggingEnabled` variable.

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > tdb
    	(Toggle Debug Mode)
    > toggledebugmode
    	(Toggle Debug Mode)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `togglefogofwar`

#### 🔍 Syntax:
{: .no_toc }
(`togglefogofwar` | `tfow`) 

#### ✏ Description: 
{: .no_toc }
Toggle Fog Of War. This can enable or disable full map vision.

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > tfow
    	(Toggle Full Map Vision)
    > togglefogofwar
    	(Toggle Full Map Vision)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `togglerandommovement`

#### 🔍 Syntax:
{: .no_toc }
(`togglerandommovement` | `trm`) `[radius]`

#### ✏ Description: 
{: .no_toc }
![trm screenshot](https://i.imgur.com/d4fg4Oj.png)

Toggle random movement for selected units.

This command creates a circle centered on your camera. Selected units will begin moving randomly within the circle.
This is useful for practicing various things, such as skillshots.
Run this command again to turn off this functionality.

>Tip: To get the most out of this tool, use [`alliancecontrolteamselection`](#cmd-alliancecontrolteamselection) to select desired units, then use [summon units](#cmd-summon) to let them move randomly.

>Tip: Also use the [`addbehavior`](#cmd-addbehavior) command to add the `Mounted` (`adb Mounted`) behavior for faster movement (mount speed), and `adb DisableWeaponsBehavior` to disable auto attacks.

>Note: You can still issue commands to units that are moving randomly, but once all commands are finished (e.g., the unit stops), it will resume moving randomly within the circle.

#### ⚙ Parameters:
{: .no_toc }
    [radius]
    	Required:	false
    	Type:		float
    	Usage:		The radius of the circle that units will be moved randomly
    	Default:	7

#### 🔧 Examples:
{: .no_toc }
    > trm 10
    	(Toggle Random Movement with circle radius of 10.)
    > togglerandommovement
    	(Toggle Random Movement with circle radius of default 7.)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `toggleterrainindicator`

#### 🔍 Syntax:
{: .no_toc }
(`toggleterrainindicator` | `tti`) 

#### ✏ Description: 
{: .no_toc }
Toggle the Terrain Indicator (used by Diablo, Auriel, etc.) for any unit.

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > tti
    	(Toggle Terrain Indicator)
    > toggleterrainindicator
    	(Toggle Terrain Indicator)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `toggleui`

#### 🔍 Syntax:
{: .no_toc }
(`toggleui` | `tui`) 

#### ✏ Description: 
{: .no_toc }
Toggle the UI. This hides or shows all UI elements, including the HP bar, talents panel, floating combat text, abilities bar, etc.
>Note: When the UI is off, all abilities are disabled.

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > tui
    	(Toggle In game UI)
    > toggleui
    	(Toggle In game UI)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `wingame`

#### 🔍 Syntax:
{: .no_toc }
(`wingame` | `wg`) `<TeamID>`

#### ✏ Description: 
{: .no_toc }
Instantly declare a win for a team and end the game.
Generally left team is **Team 1** and right team is **Team 2**.

#### ⚙ Parameters:
{: .no_toc }
    <TeamID>
    	Required:	true
    	Type:		integer
    	Usage:		Defines the team ID to win the game.

#### 🔧 Examples:
{: .no_toc }
    > wg 1
    	(Win the game for Team 1)
    > wingame 2
    	(Win the game for Team 2)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

---


## 📙 Units Library (`LibUnits.galaxy`):
A library with commands related to selected units, such as kill, spawn, etc.

### 💭 Command: `addbehavior` (✔ UI)

#### 🔍 Syntax:
{: .no_toc }
(`addbehavior` | `adb`) `<BehaviorId>`

#### ✏ Description: 
{: .no_toc }
Add a behavior to selected unit(s). Behaviors are generally found in `<CBehavior*>`, such as `<CBehaviorBuff id="xxx">` or `<CBehaviorAbility id="xxx">`.

#### ⚙ Parameters:
{: .no_toc }
    <BehaviorId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the behavior id to be added to selected units

#### 🔧 Examples:
{: .no_toc }
    > addbehavior MedivhArcaneBrillianceItem
    	(Add Medivh's Arcane Brilliance Ability to selected units)
    > adb PermaInvulnerable
    	(Make all selected units permanent Invulnerable)

#### 🖼 UI Availability:
{: .no_toc }
- ✔ **Yes.** Use the command `addbehaviorui` or `adbui` to toggle the UI counterpart of this command.

### 💭 Command: `addeffect`

#### 🔍 Syntax:
{: .no_toc }
(`addeffect` | `ade`) `<EffectId>` `[amount]`

#### ✏ Description: 
{: .no_toc }
Add an effect to selected unit(s). Effects are generally found in `<CEffect*>`, such as `<CEffectSet id="xxxx">` or `<CEffectCreatePersistent id="xxx">`.

#### ⚙ Parameters:
{: .no_toc }
    <EffectId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the effect id to be added to selected unit(s).
    [amount]
    	Required:	false
    	Type:		integer
    	Usage:		Defines the amount of effects to be added to the units
    	Default:	1

#### 🔧 Examples:
{: .no_toc }
    > addeffect StormSuicide
    	(Kill all selected units (self-destruct))
    > ade MedivhPolyBombPersistent
    	(Apply Medivh's Polybomb to all selected units)
    > ade GreymaneCursedBulletDamagePercentDamage 5
    	(Make all selected units hit by Greymane's Cursed Bullet (damage) 5 times in a row.)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `addeffectcamera`

#### 🔍 Syntax:
{: .no_toc }
(`addeffectcamera` | `adec`) `<EffectId>` `[amount]` `[PlayerID]`

#### ✏ Description: 
{: .no_toc }
Add an effect to the center of the camera. Effects are generally found in `<CEffect*>`, such as `<CEffectSet id="xxxx">` or `<CEffectCreatePersistent id="xxx">`.

#### ⚙ Parameters:
{: .no_toc }
    <EffectId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the effect id to be added to the center of the camera.
    [amount]
    	Required:	false
    	Type:		integer
    	Usage:		Defines the amount of effects to be added to the center of the camera.
    	Default:	1
    [PlayerID]
    	Required:	false
    	Type:		integer
    	Usage:		The Player ID for the effect owner
    	Default:	The player id of whoever used this command.

#### 🔧 Examples:
{: .no_toc }
    > addeffectcamera DropUnderworldPowerupPersistent
    	(Add some Haunted Mines Skulls to camera location)
    > adec UnderworldBossRootsCreatePersistent
    	(Add Haunted Mines's boss root animation to camera location)
    > addeffectcamera NecromancerRaiseSkeletonCreationPersistent 10
    	(Spawn 10 Xul's skeleton to camera location)
    > adec NecromancerRaiseSkeletonCreationPersistent 10 6
    	(Spawn 10 Xul's skeleton to camera location with the effect owner of Player 6)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `addweapon`

#### 🔍 Syntax:
{: .no_toc }
(`addweapon` | `adw`) `<WeaponID>`

#### ✏ Description: 
{: .no_toc }
Add a weapon (Basic Attack) to selected unit(s). Usually found in `<CWeapon* id='xxx'>`

#### ⚙ Parameters:
{: .no_toc }
    <WeaponID>
    	Required:	true
    	Type:		string
    	Usage:		The ID of the weapon

#### 🔧 Examples:
{: .no_toc }
    > adw AlexstraszaDragonConeWeapon
    	(Add Alexstrasza's Dragon Form weapon to selected unit(s))
    > addweapon FirebatHeroWeapon
    	(Add Blaze's weapon to selected unit(s))

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `changeunitownership`

#### 🔍 Syntax:
{: .no_toc }
(`changeunitownership` | `cuo`) `<PlayerId>`

#### ✏ Description: 
{: .no_toc }
Changes ownership of the selected unit(s).
>Note: 0 is neutral; neutral units cannot be selected after their ownership is changed.

#### ⚙ Parameters:
{: .no_toc }
    <PlayerId>
    	Required:	true
    	Type:		integer
    	Usage:		The new owner of the selected unit(s).

#### 🔧 Examples:
{: .no_toc }
    > changeunitownership 1
    	(Change ownership of all selected units to Player 1)
    > cuo
    	(Change all selected units's ownership to Player 6)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `clearbehavior`

#### 🔍 Syntax:
{: .no_toc }
(`clearbehavior` | `clb`) 

#### ✏ Description: 
{: .no_toc }
Clear all active behaviors for selected units.

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > clb
    	(Clear all active behaviors for selected units)
    > clearbehavior
    	(Clear all active behaviors for selected units)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `clearunits`

#### 🔍 Syntax:
{: .no_toc }
(`clearunits` | `clu`) `[PlayerId]`

#### ✏ Description: 
{: .no_toc }
Clear all summoned unit(s) (spawned via the [summon](#cmd-summon) command) for a player. Useful for removing large numbers of summoned units, or when summoned units are untargetable/unselectable and cannot be removed with the [killunits](#cmd-killunits) command.

>Note: Due to memory limitations, only the **last 500 summoned units** can be removed with this command. Older units will not be affected. To remove ALL summoned units, either respec your hero or restart the game.

>Self note: For each `MaxPlayer[16][100]`, is equivalent to around 30 `EventChatMessage` triggers. So more memory assigned to this, the less trigger can be used.

#### ⚙ Parameters:
{: .no_toc }
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		Define to clear which player's summoned unit(s).
    	Default:	The player id of whoever used this command.

#### 🔧 Examples:
{: .no_toc }
    > clu
    	(Clear summoned unit(s) from player who used the command)
    > clearunits 6
    	(Clear summoned unit(s) from Player 6)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `clearweapon`

#### 🔍 Syntax:
{: .no_toc }
(`clearweapon` | `clw`) 

#### ✏ Description: 
{: .no_toc }
Remove all weapons (Basic Attack) from selected unit(s). Usually found in `<CWeapon* id='xxx'>`

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > clw
    	(Remove all weapons from selected units)
    > clearweapon
    	(Remove all weapons from selected units)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `enablecollision`

#### 🔍 Syntax:
{: .no_toc }
(`enablecollision` | `encol`) 

#### ✏ Description: 
{: .no_toc }
Enable collision for selected unit(s).
>Note: This may conflict with non-collision units such as Medivh's Raven form. Avoid using this command on those units.

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > encol
    	(Enable collision for selected unit(s).)
    > enablecollision
    	(Enable collision for selected unit(s).)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `getbehavior`

#### 🔍 Syntax:
{: .no_toc }
(`getbehavior` | `getb`) 

#### ✏ Description: 
{: .no_toc }
List all active behaviors for selected units.

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > getb
    	(List all active behaviors for selected units)
    > getbehavior
    	(List all active behaviors for selected units)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `getselectedunits`

#### 🔍 Syntax:
{: .no_toc }
(`getselectedunits` | `gsu`) `[PlayerId]`

#### ✏ Description: 
{: .no_toc }
Get all selected units from a specific player.

#### ⚙ Parameters:
{: .no_toc }
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		Define which player to get all the units.
    	Default:	The player id of whoever used this command.

#### 🔧 Examples:
{: .no_toc }
    > gsu
    	(Get all selected units from whoever uses this command)
    > getselectedunits 6
    	(Get all selected units from Player 6)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `getunitownership`

#### 🔍 Syntax:
{: .no_toc }
(`getunitownership` | `guo`) 

#### ✏ Description: 
{: .no_toc }
Gets the Ownership (Player ID) of selected unit(s).

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > guo
    	(Gets the Ownership (Player ID) of selected unit(s).)
    > getunitownership
    	(Gets the Ownership (Player ID) of selected unit(s).)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `getunits`

#### 🔍 Syntax:
{: .no_toc }
(`getunits` | `gu`) `[PlayerId]`

#### ✏ Description: 
{: .no_toc }
Get all units owned by a specific player.

#### ⚙ Parameters:
{: .no_toc }
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		Define which player to get all the units.
    	Default:	The player id of whoever used this command.

#### 🔧 Examples:
{: .no_toc }
    > gu
    	(Get all units owned by whoever uses this command.)
    > getunits 7
    	(Get all units owned by Player 7)
    > getunits 15
    	(Get all units owned by Player 15 (Player 15 usually are neutral mercenary camps.))

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `getweapon`

#### 🔍 Syntax:
{: .no_toc }
(`getweapon` | `getw`) 

#### ✏ Description: 
{: .no_toc }
Get all weapons (Basic Attack) from selected unit(s). Usually found in `<CWeapon* id='xxx'>`

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > getw
    	(Get all weapons from selected units)
    > getweapon
    	(Get all weapons from selected units)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `killallunits`

#### 🔍 Syntax:
{: .no_toc }
(`killallunits` | `kau`) `[PlayerId]`

#### ✏ Description: 
{: .no_toc }
Kill all units owned by a specific player.
Unlike other commands that accept a player ID, this command also accepts Player 0 (Neutral).
>Note: In most maps, the Core is owned by Player 11 (left team) and Player 12 (right team). Killing it will instantly destroy the core and end the game.

#### ⚙ Parameters:
{: .no_toc }
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		Define which player to get all the units.
    	Default:	The player id of whoever used this command.

#### 🔧 Examples:
{: .no_toc }
    > kau
    	(Kill all units owned by whoever uses this command.)
    > killallunits 7
    	(Kill all units owned by Player 7)
    > killallunits 15
    	(Kill all units owned by Player 15 (Player 15 usually are neutral mercenary camps.))

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `killunits`

#### 🔍 Syntax:
{: .no_toc }
(`killunits` | `ku`) 

#### ✏ Description: 
{: .no_toc }
Instantly kill all selected unit(s).

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > ku
    	(Instantly kill all selected unit(s).)
    > killunits
    	(Instantly kill all selected unit(s).)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `playanimation`

#### 🔍 Syntax:
{: .no_toc }
(`playanimation` | `pa`) `<AnimationId>`

#### ✏ Description: 
{: .no_toc }
Play an Animation for selected unit(s).
>Note: There are Walk, Attack, A to Z animations etc

#### ⚙ Parameters:
{: .no_toc }
    <AnimationId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the Animation ID to be played on selected unit(s)

#### 🔧 Examples:
{: .no_toc }
    > playanimation Attack
    	(Play the Attack Animation for selected unit(s))
    > pa Walk
    	(Play the Walk animation for selected unit(s))

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `removeanimation`

#### 🔍 Syntax:
{: .no_toc }
(`removeanimation` | `rma`) `<AnimationId>`

#### ✏ Description: 
{: .no_toc }
Remove an Animation from selected unit(s).
>Note: There are Walk, Attack, A to Z animations etc

#### ⚙ Parameters:
{: .no_toc }
    <AnimationId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the Animation ID to be removed from selected unit(s)

#### 🔧 Examples:
{: .no_toc }
    > removeanimation Attack
    	(Stop the Attack Animation for selected unit(s))
    > rma Walk
    	(Stop the Walk animation for selected unit(s))

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `removebehavior`

#### 🔍 Syntax:
{: .no_toc }
(`removebehavior` | `rmb`) `<BehaviorId>`

#### ✏ Description: 
{: .no_toc }
Remove a behavior from selected unit(s). Behaviors are generally found in `<CBehavior*>`, such as `<CBehaviorBuff id="xxx">` or `<CBehaviorAbility id="xxx">`.
>Tip: Use the [`getbehavior`](#cmd-getbehavior) command to list active behaviors.

#### ⚙ Parameters:
{: .no_toc }
    <BehaviorId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the behavior id to be removed from selected units

#### 🔧 Examples:
{: .no_toc }
    > removebehavior MedivhArcaneBrillianceItem
    	(Remove Medivh's Arcane Brilliance Ability from selected units)
    > rmb PermaInvulnerable
    	(No longer makes all selected units permanent Invulnerable)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `removecollision`

#### 🔍 Syntax:
{: .no_toc }
(`removecollision` | `rmcol`) 

#### ✏ Description: 
{: .no_toc }
Remove collision for selected unit(s).
>Note: This may conflict with non-collision units such as Medivh's Raven form. Avoid using this command on those units.

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > rmcol
    	(Disable Collision for selected unit(s).)
    > removecollision
    	(Disable Collision for selected unit(s).)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `removeeffect`

#### 🔍 Syntax:
{: .no_toc }
(`removeeffect` | `rme`) `<EffectId>`

#### ✏ Description: 
{: .no_toc }
Remove an effect from selected unit(s). Effects are generally found in `<CEffect*>`, such as `<CEffectSet id="xxxx">` or `<CEffectCreatePersistent id="xxx">`.

#### ⚙ Parameters:
{: .no_toc }
    <EffectId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the effect id to be removed from selected unit(s).

#### 🔧 Examples:
{: .no_toc }
    > removeeffect MedivhPolyBombPersistent
    	(Remove Medivh's Polybomb effect from selected unit(s))

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `removeeffectcamera`

#### 🔍 Syntax:
{: .no_toc }
(`removeeffectcamera` | `rmec`) `<EffectId>`

#### ✏ Description: 
{: .no_toc }
Remove an effect from the center of the camera. Effects are generally found in `<CEffect*>`, such as `<CEffectSet id="xxxx">` or `<CEffectCreatePersistent id="xxx">`.

#### ⚙ Parameters:
{: .no_toc }
    <EffectId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the effect id to be removed from the center of the camera.

#### 🔧 Examples:
{: .no_toc }
    > removeeffectcamera DropUnderworldPowerupPersistent
    	(Remove Haunted Mines Skulls from camera location)
    > rmec UnderworldBossRootsCreatePersistent
    	(Remove Haunted Mines's boss root animation from camera location)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `removeweapon`

#### 🔍 Syntax:
{: .no_toc }
(`removeweapon` | `rmw`) `<WeaponID>`

#### ✏ Description: 
{: .no_toc }
Remove a weapon (Basic Attack) from selected unit(s). Usually found in `<CWeapon* id='xxx'>`

#### ⚙ Parameters:
{: .no_toc }
    <WeaponID>
    	Required:	true
    	Type:		string
    	Usage:		The ID of the weapon

#### 🔧 Examples:
{: .no_toc }
    > rmw AnaHeroWeapon
    	(Remove Ana's weapon from selected unit(s))
    > removeweapon DVaMechWeapon
    	(Remove D.va mech mode's weapon from selected unit(s))

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `replaceunit`

#### 🔍 Syntax:
{: .no_toc }
(`replaceunit` | `rpu`) `<TargetUnitId>`

#### ✏ Description: 
{: .no_toc }
Replace all selected units with the target unit.
>Note: Use with caution. Unexpected behavior may occur if the target unit does not exist or if a unit dies during the replacement. If this happens, use the debug menu to respawn your hero.

#### ⚙ Parameters:
{: .no_toc }
    <TargetUnitId>
    	Required:	true
    	Type:		string
    	Usage:		Define the selected units to be replaced with. You can get the id from <CUnit id="xxx"> in the game XML files.

#### 🔧 Examples:
{: .no_toc }
    > rpu HeroRaynor
    	(Replace all selected unit(s) to Raynor Hero.)
    > replaceunit CatapultMinion
    	(Replace all selected unit(s) to Catapult Minion.)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `sendactormessage`

#### 🔍 Syntax:
{: .no_toc }
(`sendactormessage` | `sam`) `<ActorMessage>`

#### ✏ Description: 
{: .no_toc }
Send an Actor Message for selected unit(s). Generally from `<CActor*>`, the `<on send="xxx">`.
>Note: The command allows spaces for the parameter, since most actor messages have spaces.

#### ⚙ Parameters:
{: .no_toc }
    <ActorMessage>
    	Required:	true
    	Type:		string
    	Usage:		Defines the Actor Message to be sent. (This parameter allows spaces.)

#### 🔧 Examples:
{: .no_toc }
    > sendactormessage AnimPlay Spell Spell,A 0 -1.000000 -1.000000 1.000000 AsTimeScale
    	(Play the A Spell animation, different on each hero)
    > sam StatusIncrement StatusBarHide
    	(Hide the status bar, HP bar)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `summon` (✔ UI)

#### 🔍 Syntax:
{: .no_toc }
(`summon` | `sum`) `<UnitId>` `[Amount]` `[PlayerId]` `[Scale]`

#### ✏ Description: 
{: .no_toc }
Spawn unit(s) at the center of the camera.
>Note: Newly summoned units are automatically added to the selection group.
>Note: To control summoned units, enable multi-selection via the [`alliancecontrolteamselection`](#cmd-alliancecontrolteamselection) command or QA Cheat Menu (`ts`, and also `/ac` if the unit does not belong to you). They will behave like Vikings and Samuro with Illusion Master.
>Note: If your hero is Samuro, multi-selection may behave unexpectedly due to Blizzard's implementation.

#### ⚙ Parameters:
{: .no_toc }
    <UnitId>
    	Required:	true
    	Type:		string
    	Usage:		Define the unit to be spawned. You can get the id from <CUnit id="xxx"> in the game XML files.
    [Amount]
    	Required:	false
    	Type:		string
    	Usage:		Define the amount of unit(s) to be spawned
    	Default:	1
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		Define which player to own the unit that spawned.
    	Default:	The player id of whoever used this command.
    [Scale]
    	Required:	false
    	Type:		float
    	Usage:		Define scale of the unit(s) to be spawned. default size is 1.0
    	Default:	1

#### 🔧 Examples:
{: .no_toc }
    > summon TownTownHallL2
    	(Summon a tower structure to the player who used the command)
    > summon HeroRaynor 3
    	(Summon 3 Raynor Hero units for the player who used the command)
    > summon HeroMalGanis 2 4
    	(Summon 2 Mal'Ganis Hero units for player 4)
    > sum JungleGraveGolemDefender 2 1 0.5
    	(Summon 2 boss golems for player 1 with the unit scale to 0.5 (half the size))
    > sum CatapultMinion 10 5 2
    	(Summon 10 Catapult Minions for player 5 with the unit scale to 2 (double the size))

#### 🖼 UI Availability:
{: .no_toc }
- ✔ **Yes.** Use the command `summonui` or `sumui` to toggle the UI counterpart of this command.

### 💭 Command: `togglenoweaponcd`

#### 🔍 Syntax:
{: .no_toc }
(`togglenoweaponcd` | `tnwcd`) 

#### ✏ Description: 
{: .no_toc }
Continuously reset the weapon (auto attack) cooldown, effectively increasing attack speed.

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > tnwcd
    	(Continuously reset the weapon (auto attack) cooldown)
    > togglenoweaponcd
    	(Continuously reset the weapon (auto attack) cooldown)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `toggleoutputid`

#### 🔍 Syntax:
{: .no_toc }
(`toggleoutputid` | `toi`) 

#### ✏ Description: 
{: .no_toc }
Toggle unit ID display mode. When enabled, left-clicking a unit shows its ID on screen.

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > toi
    	(Toggle displaying units' id mode.)
    > toggleoutputid
    	(Toggle displaying units' id mode.)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `unitproperty`

#### 🔍 Syntax:
{: .no_toc }
(`unitproperty` | `up`) `<type>` `[value]`

#### ✏ Description: 
{: .no_toc }
Show or modify a selected unit's property, such as max health, regen, movement speed, etc.
If `value` is not provided, the current property value is returned. If `value` is provided, the property is set accordingly.

The `type` parameters accept either the `Type (int)` or `Type (string)` below.

| Type (int) | Type (string) | Galaxy file constant |
|-|-|-|
| 0 | life | c_unitLife |
| 1 | lifepercent | c_unitPropLifePercent |
| 2 | lifemax | c_unitPropLifeMax |
| 3 | liferegen | c_unitPropLifeRegen |
| 4 | energy | c_unitPropEnergy |
| 5 | energypercent | c_unitPropEnergyPercent |
| 6 | energymax | c_unitPropEnergyMax |
| 7 | energyregen | c_unitPropEnergyRegen |
| 8 | shields | c_unitPropShields |
| 9 | shieldspercent | c_unitPropShieldsPercent |
| 10 | shieldsmax | c_unitPropShieldsMax |
| 11 | shieldsregen | c_unitPropShieldsRegen |
| 12 | kills | c_unitPropKills |
| 17 | height | c_unitPropHeight |
| 18 | movementspeed | c_unitPropMovementSpeed |
| 20 | resources | c_unitPropResources |
| 21 | radius | c_unitPropRadius |
| 22 | xp | c_unitPropXP |
| 23 | level | c_unitPropLevel |
| 24 | killxp | c_unitPropKillXP |
| 28 | basemovementspeed | c_unitPropBaseMovementSpeed |
| 29 | movementspeedcurrent | c_unitPropMovementSpeedCurrent |
| 30 | lifeexpectedpercent | c_unitPropLifeExpectedPercent |

#### ⚙ Parameters:
{: .no_toc }
    <type>
    	Required:	true
    	Type:		integer/string
    	Usage:		The property type to get or modify. See the table above.
    [value]
    	Required:	false
    	Type:		float
    	Usage:		The value to be set for the property type
    	Default:	null

#### 🔧 Examples:
{: .no_toc }
    > up life
    	(Shows the unit's current HP)
    > up 0 1
    	(Set the selected unit's current HP to 1.)
    > unitproperty 6
    	(Show the selected unit's Max Energy (the resource bar: mana, Tracer bullets, Chen's brew, etc.))
    > unitproperty energymax 10000
    	(Set the selected unit's Max Energy to 10000 (the resource bar: mana, Tracer bullets, Chen's brew, etc.))
    > unitproperty 28
    	(Shows the base movement speed of selected units.)
    > unitproperty basemovementspeed 10
    	(Set the base movement speed of selected units to 10. Note that base speed for heroes is 4.8398)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

---


## 📙 Players Library (`LibPlayers.galaxy`):
Commands related to players, such as scoreboard, respawn timer, etc.

### 💭 Command: `addalltalent`

#### 🔍 Syntax:
{: .no_toc }
(`addalltalent` | `aat`) `<HeroId>` `[PlayerId]`

#### ✏ Description: 
{: .no_toc }
** ***DEPRECATED: Please use [`selectalltalent`](#cmd-selectalltalent-description) command instead.*** **

Add all talents to a player.
The `HeroId` can be either the ID of `<CHero id="xxx">`, which will add all of the talents from that hero to the player, or it can be `ALL`, which will add ALL the talents in the game to the player.
>Note: Some of the talents won't work, so you might want to experiment a bit.

#### ⚙ Parameters:
{: .no_toc }
    <HeroId>
    	Required:	true
    	Type:		string
    	Usage:		The talents from the Hero / all the talents in the game to be added from a player
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		The target player id to have the talent being added.
    	Default:	The player id of whoever used this command.

#### 🔧 Examples:
{: .no_toc }
    > aat Tyrande
    	(Add all the talents from Tyrande to the player whoever uses the command)
    > addalltalent Firebat 2
    	(Add all the talents from Blaze to Player 2)
    > aat ALL
    	(Add ALL the talents from the game to the player whoever uses the command)
    > addalltalent ALL 10
    	(Add ALL the talents from the game to the player 10)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `addqueststack`

#### 🔍 Syntax:
{: .no_toc }
(`addqueststack` | `aqs`) `<stacks>` `[PlayerId]`

#### ✏ Description: 
{: .no_toc }
Add a specific amount of quest stacks to a player.

#### ⚙ Parameters:
{: .no_toc }
    <stacks>
    	Required:	true
    	Type:		integer
    	Usage:		The amount of stack to be added for a player
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		The Player ID for the quest stacks to be added
    	Default:	The player id of whoever used this command.

#### 🔧 Examples:
{: .no_toc }
    > aqs 10
    	(Add 10 quest stacks to whoever uses this command)
    > addqueststack 20 6
    	(Add 20 quest stacks to Player 6.)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `addtalent`

#### 🔍 Syntax:
{: .no_toc }
(`addtalent` | `adt`) `<TalentId>` `[PlayerId]`

#### ✏ Description: 
{: .no_toc }
Add a talent to a player, generally found in `<CTalent id="xxxx">`.
>Note: Some of the talents won't work, so you might want to experiment a bit.

#### ⚙ Parameters:
{: .no_toc }
    <TalentId>
    	Required:	true
    	Type:		string
    	Usage:		The talent id to be added
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		The target player id to have the talent being added.
    	Default:	The player id of whoever used this command.

#### 🔧 Examples:
{: .no_toc }
    > addtalent MedivhForceOfWillArcaneExplosion
    	(Add Medivh's Arcane Explosion Talent to whoever uses this command)
    > adt MalfurionCelestialAlignment 2
    	(add Malfurion's Celestial Alignment Talent to Player 2)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `difficultyai`

#### 🔍 Syntax:
{: .no_toc }
(`difficultyai` | `diffai`) `[PlayerID]` `[DifficultyID]`

#### ✏ Description: 
{: .no_toc }
Get or set the AI difficulty for a player.

The difficulty settings are below:

| DifficultyId | Friendly Name (`GameString.txt`) | Galaxy Constant (`AILib_h.galaxy`) |
|-|-|-|
| 0 | Unknown | `libAIAI_ge_HeroAIDifficulty_Null` |
| 1 | Tuto1Enemy | `libAIAI_ge_HeroAIDifficulty_HeroAITutorial1Enemy` |
| 2 | Tuto1Ally | `libAIAI_ge_HeroAIDifficulty_HeroAITutorial1Ally` |
| 3 | TutoMMEnemy | `libAIAI_ge_HeroAIDifficulty_HeroAITutorialMapMechanicEnemy` |
| 4 | TutoMMAlly | `libAIAI_ge_HeroAIDifficulty_HeroAITutorialMapMechanicAlly` |
| 5 | Beginner | `libAIAI_ge_HeroAIDifficulty_HeroAITryMeMode` |
| 6 | Unknown | `libAIAI_ge_HeroAIDifficulty_HeroAITryMeModeAlly` |
| 7 | Beginner | `libAIAI_ge_HeroAIDifficulty_HeroAIVeryEasy` |
| 8 | Beginner | `libAIAI_ge_HeroAIDifficulty_HeroAIVeryEasyWithHumanAlly` |
| 9 | Recruit | `libAIAI_ge_HeroAIDifficulty_HeroAIEasy` |
| 10 | Recruit | `libAIAI_ge_HeroAIDifficulty_HeroAIEasyWithHumanAlly` |
| 11 | Adept | `libAIAI_ge_HeroAIDifficulty_HeroAIMedium` |
| 12 | Veteran | `libAIAI_ge_HeroAIDifficulty_HeroAIVeryHard` |
| 13 | Elite | `libAIAI_ge_HeroAIDifficulty_HeroAIElite` |

#### ⚙ Parameters:
{: .no_toc }
    [PlayerID]
    	Required:	false
    	Type:		integer
    	Usage:		The player ID for the AI difficulty setting.
    	Default:	The player id of whoever used this command.
    [DifficultyID]
    	Required:	false
    	Type:		integer
    	Usage:		The difficulty to be set
    	Default:	null

#### 🔧 Examples:
{: .no_toc }
    > diffai
    	(Get the AI difficulty for whoever uses this command)
    > diffai 2 11
    	(Set the AI difficulty for Player 2 to HeroAIMedium)
    > difficultyai 6
    	(Get the AI difficulty for Player 6)
    > difficultyai 7 9
    	(Set the AI difficulty for Player 7 to HeroAIEasy)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `disableai`

#### 🔍 Syntax:
{: .no_toc }
(`disableai` | `disai`) `[PlayerID]`

#### ✏ Description: 
{: .no_toc }
Disable AI for a player.

>Note: This also disables AI for units summoned via the [summon](#cmd-summon) command.

#### ⚙ Parameters:
{: .no_toc }
    [PlayerID]
    	Required:	false
    	Type:		integer
    	Usage:		The Player ID for the AI to be disabled
    	Default:	The player id of whoever used this command.

#### 🔧 Examples:
{: .no_toc }
    > disai
    	(Disable AI for whoever use this command)
    > disai 10
    	(Disable AI for Player 10)
    > disableai 2
    	(Disable AI for Player 2)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `disabletalent`

#### 🔍 Syntax:
{: .no_toc }
(`disabletalent` | `dist`) `<TalentId>`

#### ✏ Description: 
{: .no_toc }
Disable a talent for all players. Generally found in `<CTalent id="xxxx">`.
>Note: This only locks the talent selection. If a player has already taken the talent, it will not be affected.

#### ⚙ Parameters:
{: .no_toc }
    <TalentId>
    	Required:	true
    	Type:		string
    	Usage:		The talent id to be disabled.

#### 🔧 Examples:
{: .no_toc }
    > disabletalent RagnarosLavaWave
    	(Disable Rag's Lava Wave talent, similar to ARAM.)
    > dist MaievUmbralBindPursuitOfVengeance 0
    	(Disable Maiev's Pursuit Of Vengeance talent)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `enableai`

#### 🔍 Syntax:
{: .no_toc }
(`enableai` | `enai`) `[PlayerID]`

#### ✏ Description: 
{: .no_toc }
Enable AI for a player.

>Note: This also enables AI for units summoned via the [summon](#cmd-summon) command.

#### ⚙ Parameters:
{: .no_toc }
    [PlayerID]
    	Required:	false
    	Type:		integer
    	Usage:		The Player ID for the AI to be enabled
    	Default:	The player id of whoever used this command.

#### 🔧 Examples:
{: .no_toc }
    > enai
    	(Enable AI for whoever use this command)
    > enai 10
    	(Enable AI for Player 10)
    > enableai 2
    	(Enable AI for Player 2)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `enabletalent`

#### 🔍 Syntax:
{: .no_toc }
(`enabletalent` | `ent`) `<TalentId>`

#### ✏ Description: 
{: .no_toc }
Enable a disabled talent for all players. Generally found in `<CTalent id="xxxx">`.

#### ⚙ Parameters:
{: .no_toc }
    <TalentId>
    	Required:	true
    	Type:		string
    	Usage:		The talent id to be enabled.

#### 🔧 Examples:
{: .no_toc }
    > enabletalent RagnarosLavaWave
    	(Enable Rag's Lava Wave talent, which was disabled in ARAM.)
    > ent MaievUmbralBindPursuitOfVengeance
    	(Enable Maiev's Pursuit Of Vengeance talent)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `experience`

#### 🔍 Syntax:
{: .no_toc }
(`experience` | `xp`) `<Amount>` `[PlayerId]` `[SourceId]`

#### ✏ Description: 
{: .no_toc }
Grant experience to a specific player.

The `SourceId` is an integer with the following values:

|`SourceId`|Galaxy file constant|
|-|-|
|0|`libGame_ge_XPSources_Debug`|
|1|`libGame_ge_XPSources_Trickle`|
|2|`libGame_ge_XPSources_Minion`|
|3|`libGame_ge_XPSources_Creep`|
|4|`libGame_ge_XPSources_Hero`|
|5|`libGame_ge_XPSources_Structure`|
|6|`libGame_ge_XPSources_RegenGlobe`|

#### ⚙ Parameters:
{: .no_toc }
    <Amount>
    	Required:	true
    	Type:		integer
    	Usage:		The amount of xp to be given
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		The Player ID for the XP to be given to
    	Default:	The player id of whoever used this command.
    [SourceId]
    	Required:	false
    	Type:		integer
    	Usage:		The integer value of the xp source
    	Default:	0

#### 🔧 Examples:
{: .no_toc }
    > xp 10
    	(Grant 10 xp to whoever use this command)
    > experience 100 6
    	(Grant 100 xp to Player 6)
    > experience 100 1 2
    	(Grant 100 xp to Player 1 with its source set to minions)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `getcatalog`

#### 🔍 Syntax:
{: .no_toc }
(`getcatalog` | `gcl`) `<CatalogReference>` `[PlayerID]`

#### ✏ Description: 
{: .no_toc }
Directly get a catalog value (i.e., XML data) for a player.

The `CatalogReference` string consists of three parts: `<Category Type>,<Category Entry>,<Catalog Field Path>` separated by commas, where:
- `<Category Type>`: The type of the catalog, which is usually the second word of the entry. Take `CBehaviorBuff` as an example — it consists of three parts:
  - `C` (Catalog)
  - `Behavior` (Type) `<-- This One`
  - `Buff` (Sub-Type)
  - The value is the second "Capitalised Word": `Behavior`. Similarly, `CAbilEffectInstant`, the value will be `Abil`, `CValidatorPlayerTalent` will be `Validator`.
- `<Category Entry>`: The ID of the target Category. (`id="xxx"`)
- `<Catalog Field Path>`: The field path of the targeted `<Category Entry>`.
  - Nested levels use `.` for representation. If the target field is not `value="xxx"`, it must also be nested.
  - Arrays uses `[n]` to specify the numeric order
  - If an entry can exist multiple times with different index such as `<Flags>`, use `[Index]`, such as `Flags[AllowSelfCast]`

Therefore, consider the following XML (extracted from `wizarddata.xml`, Li ming's data file):
```xml
<?xml version="1.0" encoding="us-ascii"?>
<Catalog>
  <!-- Data trimmed -->
  <CWeaponLegacy id="HeroWizardWeapon" parent="StormHeroFastWeapon">
    <Icon value="Assets\Textures\storm_temp_btn-upgrade-zerg-meleeattacks-level3.dds" />
    <DisplayEffect value="WizardHeroWeaponDamage" />
    <MinScanRange value="5.5" />
    <Range value="5.5" />
    <Period value="1" />
    <PreswingBeforeAttack value="0.25" />
    <PreswingBetweenAttacks value="0.25" />
    <Effect value="WizardWeaponLaunchSwitch" />
  </CWeaponLegacy>
</Catalog>
```
To get a reference to her basic attack range, the `CatalogReference` string will be `Weapon,HeroWizardWeapon,Range`

Another Example: (Extracted from `firebat.xml`, Blaze's Data file)
```xml
<?xml version="1.0" encoding="us-ascii"?>
<Catalog>
  <!-- Data trimmed -->
  <CAbilEffectTarget id="FirebatJetPropulsion" parent="StormSkillshotDashParent">
    <Effect value="FirebatJetPropulsionOffsetPersistent" />
    <Cost>
      <Vital index="Energy" value="45" />
      <Cooldown TimeUse="10" />
    </Cost>
    <MoveLocation ProjectionDistanceScale="14" />
    <CursorEffect value="FirebatJetPropulsionSquareSearchArea" />
    <CmdButtonArray index="Execute" DefaultButtonFace="FirebatJetPropulsion">
      <Flags index="AllowSelfCast" value="0" />
    </CmdButtonArray>
    <Activity value="Jet Propulsion" />
    <CastIntroTime value="0.375" />
    <ShowProgressArray index="Cast" value="1" />
  </CAbilEffectTarget>
</Catalog>
```
To get a reference to Blaze's Jet Propulsion (E) cooldown, the `CatalogReference` will be `Abil,FirebatJetPropulsion,Cost.Cooldown.TimeUse`

(Extracted from `stukovdata.xml`, Stukov's data file — the `Biotic Armor` talent, which grants 15 Armor to allies affected by Healing Pathogen)
```xml
<?xml version="1.0" encoding="us-ascii"?>
<Catalog>
  <!-- Data trimmed -->
  <CBehaviorBuff id="StukovHealingPathogenBioticArmorPhysicalArmorBehavior" parent="StormArmor">
    <BehaviorCategories index="BuffResistant" value="1" />
    <RemoveValidatorArray value="StukovTargetHasHealingPathogen" />
    <ArmorModification>
      <ArmorSet index="Hero">
        <ArmorMitigationTable index="Basic" value="15" />
      </ArmorSet>
      <ArmorSet index="Merc">
        <ArmorMitigationTable index="Basic" value="15" />
      </ArmorSet>
      <ArmorSet index="Monster">
        <ArmorMitigationTable index="Basic" value="15" />
      </ArmorSet>
      <ArmorSet index="Summon">
        <ArmorMitigationTable index="Basic" value="15" />
      </ArmorSet>
      <ArmorSet index="Structure">
        <ArmorMitigationTable index="Basic" value="15" />
      </ArmorSet>
      <ArmorSet index="Minion">
        <ArmorMitigationTable index="Basic" value="15" />
      </ArmorSet>
    </ArmorModification>
  </CBehaviorBuff>
</Catalog>
```
To get a reference to the armor value against Structures, the `CatalogReference` will be `Behavior,StukovHealingPathogenBioticArmorPhysicalArmorBehavior,ArmorModification.ArmorSet[Structure].ArmorMitigationTable[Basic]`.

#### ⚙ Parameters:
{: .no_toc }
    <CatalogReference>
    	Required:	true
    	Type:		string
    	Usage:		The Reference to the specific catalog field
    [PlayerID]
    	Required:	false
    	Type:		integer
    	Usage:		The Player ID for the catalog modification
    	Default:	The player id of whoever used this command.

#### 🔧 Examples:
{: .no_toc }
    > getcatalog Effect,WizardTeleportCalamityDamage,Amount
    	(Get Li-Ming's Calamity damage from whoever uses this command)
    > gcl Abil,VarianCharge,Cost.Vital[Energy]
    	(Get Varian's Charge mana cost from whoever uses this command)
    > gcl Behavior,Mounted,Modification.UnifiedMoveSpeedFactor 2
    	(Get the mount speed for all Heroes from Player 2)
    > gcl Weapon,StukovHeroWeapon,Period
    	(Get Stukov's Basic Attack speed from whoever uses this command)
    > gcl Weapon,ChromieHeroWeapon,Effect
    	(Get Chromie's Basic Attack Effect from whoever uses this command)
    > gcl Behavior,DehakaDarkSwarm,Modification.StateFlags[SuppressCollision] 2
    	(Get Dehaka's Dark Swarm Ability Suppress Collision flag value when active from Player 2)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `modifycatalog`

#### 🔍 Syntax:
{: .no_toc }
(`modifycatalog` | `mcl`) `<CatalogReference>` `<value>` `[PlayerID]`

#### ✏ Description: 
{: .no_toc }
Directly modify a Catalog value (a.k.a XMLs) for a player in runtime.

For how to obtain and construct `CatalogReference`, Please refer to the [`getcatalog`](#cmd-getcatalog-description) command.

**Caveats:**
 - Some of the fields are READ-ONLY, meaning it cannot be modified, e.g `Unit,HeroChromie,PlaneArray[Air]` (Unable to make Chromie become an air unit like Medivh Raven). This would require an override to the XML instead (see [modding.md](modding.md)).
 - The catalog modification is applied after parental inheritance, meaning it is not possible to modify a parent (`parent="xxx"`) and have the change apply to all child catalogs. You must apply it to each child catalog individually.
 - It is not possible to "create" a value that does not exist after the map has loaded. Only existing values (after inheriting from a parent) can be modified.

#### ⚙ Parameters:
{: .no_toc }
    <CatalogReference>
    	Required:	true
    	Type:		string
    	Usage:		The Reference to the catalog field to be modified
    <value>
    	Required:	true
    	Type:		float
    	Usage:		The value to be set for the specified catalog field
    [PlayerID]
    	Required:	false
    	Type:		integer
    	Usage:		The Player ID for the catalog modification
    	Default:	The player id of whoever used this command.

#### 🔧 Examples:
{: .no_toc }
    > modifycatalog Effect,WizardTeleportCalamityDamage,Amount 9999
    	(Modify Li-Ming's Calamity damage to 9999 for whoever uses this command)
    > mcl Abil,VarianCharge,Cost.Vital[Energy] 5
    	(Modify Varian's Charge mana cost to 5 for whoever uses this command)
    > mcl Behavior,Mounted,Modification.UnifiedMoveSpeedFactor -0.3 2
    	(Modify the mount speed for all Heroes to -30% (30% slower instead of faster) for Player 2)
    > mcl Weapon,StukovHeroWeapon,Period 0.0625
    	(Modify Stukov's Basic Attack speed to 16 (1 second performs 16 attacks = 0.0625 period per AA) for whoever uses this command)
    > mcl Weapon,ChromieHeroWeapon,Effect WizardWeaponLaunchSwitch
    	(Modify Chromie's Basic Attack to behave like Li-ming's Basic Attack (Shooting a Purple Missile) for whoever uses this command)
    > mcl Behavior,DehakaDarkSwarm,Modification.StateFlags[SuppressCollision] 0 2
    	(Modify Dehaka's Dark Swarm to no longer suppress collision when active (units can no longer pass through each other) for Player 2)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `modifycatalogvalue`

#### 🔍 Syntax:
{: .no_toc }
(`modifycatalogvalue` | `mcv`) `<CatalogType>` `<CatalogEntry>` `<CatalogField>` `<value>` `[PlayerID]`

#### ✏ Description: 
{: .no_toc }
Directly modify a catalog value (i.e., XML data) for a player at runtime.

For how to obtain and construct `CatalogReference`, please refer to the [`getcatalog`](#cmd-getcatalog-description) command.

This is similar to the [`modifycatalog`](#cmd-modifycatalog-description) command, but uses the `CatalogFieldValueSet()` function directly. If the regular `modifycatalog` command does not work, try this one.

> Note: This command format is a bit different from the `modifycatalog` command, as it does not require the `CatalogReference` to be separated by comma. Instead, it is separated by space.

> Note: due to unknown reason, `<CItemClass>` and `<CItemContainer>` currently does not work with this command.

#### ⚙ Parameters:
{: .no_toc }
    <CatalogType>
    	Required:	true
    	Type:		string
    	Usage:		The Catalog Type to be modified
    <CatalogEntry>
    	Required:	true
    	Type:		string
    	Usage:		The Catalog Entry to be modified
    <CatalogField>
    	Required:	true
    	Type:		string
    	Usage:		The Catalog Field to be modified
    <value>
    	Required:	true
    	Type:		float
    	Usage:		The value to be set for the specified catalog field
    [PlayerID]
    	Required:	false
    	Type:		integer
    	Usage:		The Player ID for the catalog modification
    	Default:	The player id of whoever used this command.

#### 🔧 Examples:
{: .no_toc }
    > modifycatalogvalue Effect WizardTeleportCalamityDamage Amount 9999
    	(Modify Li-Ming's Calamity damage to 9999 for whoever uses this command)
    > mcv Abil VarianCharge Cost.Vital[Energy] 5
    	(Modify Varian's Charge mana cost to 5 for whoever uses this command)
    > mcv Behavior Mounted Modification.UnifiedMoveSpeedFactor -0.3 2
    	(Modify the mount speed for all Heroes to -30% (30% slower instead of faster) for Player 2)
    > mcv Weapon StukovHeroWeapon Period 0.0625
    	(Modify Stukov's Basic Attack speed to 16 (1 second performs 16 attacks = 0.0625 period per AA) for whoever uses this command)
    > mcv Weapon ChromieHeroWeapon Effect WizardWeaponLaunchSwitch
    	(Modify Chromie's Basic Attack to behave like Li-ming's Basic Attack (Shooting a Purple Missile) for whoever uses this command)
    > mcv Behavior DehakaDarkSwarm Modification.StateFlags[SuppressCollision] 0 2
    	(Modify Dehaka's Dark Swarm to no longer suppress collision when active (units can no longer pass through each other) for Player 2)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `removealltalent`

#### 🔍 Syntax:
{: .no_toc }
(`removealltalent` | `rmat`) `<HeroId>` `[PlayerId]`

#### ✏ Description: 
{: .no_toc }
Remove all talents from a player.
The `HeroId` can be either the ID of `<CHero id="xxx">`, which will remove all of the talents from that hero from the player, or it can be `ALL`, which will remove ALL the talents in the game from the player.
>Note: Some of the talents won't work, so you might want to experiment a bit.

#### ⚙ Parameters:
{: .no_toc }
    <HeroId>
    	Required:	true
    	Type:		string
    	Usage:		The talents from the Hero / all the talents in the game to be removed from a player
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		The target player ID from which to remove the talent.
    	Default:	The player id of whoever used this command.

#### 🔧 Examples:
{: .no_toc }
    > rmat Tyrande
    	(Remove all the talents from Tyrande from the player whoever uses the command)
    > removealltalent Firebat 2
    	(Remove all the talents from Blaze from Player 2)
    > rmat ALL
    	(Remove ALL the talents from the game from the player whoever uses the command)
    > removealltalent ALL 10
    	(Remove ALL the talents from the game from Player 10)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `removequeststack`

#### 🔍 Syntax:
{: .no_toc }
(`removequeststack` | `rqs`) `<stacks>` `[PlayerId]`

#### ✏ Description: 
{: .no_toc }
Remove a specific amount of quest stacks from a player.

#### ⚙ Parameters:
{: .no_toc }
    <stacks>
    	Required:	true
    	Type:		integer
    	Usage:		The amount of stack to be removed from a player
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		The Player ID for the quest stacks to be removed
    	Default:	The player id of whoever used this command.

#### 🔧 Examples:
{: .no_toc }
    > rqs 10
    	(Remove 10 quest stacks from whoever uses this command)
    > removequeststack 20 6
    	(Remove 20 quest stacks from Player 6.)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `removetalent`

#### 🔍 Syntax:
{: .no_toc }
(`removetalent` | `rmt`) `<TalentId>` `[PlayerId]`

#### ✏ Description: 
{: .no_toc }
Remove a talent from a player, generally found in `<CTalent id="xxxx">`.
>Note: Some of the talents won't work, so you might want to experiment a bit.

#### ⚙ Parameters:
{: .no_toc }
    <TalentId>
    	Required:	true
    	Type:		string
    	Usage:		The talent id to be removed
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		The target player id to have the talent being removed.
    	Default:	The player id of whoever used this command.

#### 🔧 Examples:
{: .no_toc }
    > removetalent MedivhForceOfWillArcaneExplosion
    	(Remove Medivh's Arcane Explosion Talent from whoever uses this command)
    > rmt MalfurionCelestialAlignment 2
    	(Remove Malfurion's Celestial Alignment Talent from Player 2)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `resetoverlay`

#### 🔍 Syntax:
{: .no_toc }
(`resetoverlay` | `rol`) 

#### ✏ Description: 
{: .no_toc }
Reset to the default overlay, removing all custom overlays.

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > rol
    	(Reset to the default overlay.)
    > resetoverlay
    	(Reset to the default overlay.)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `respawnpoint`

#### 🔍 Syntax:
{: .no_toc }
(`respawnpoint` | `rsp`) `<Action>` `[PlayerId/all]`

#### ✏ Description: 
{: .no_toc }
Modify the respawn point for a player. Either at the current camera location or its default location.

#### ⚙ Parameters:
{: .no_toc }
    <Action>
    	Required:	true
    	Type:		string
    	Usage:		Choose the action of the command. (set = set the respawn location at camera location, reset = reset all respawn location)
    [PlayerId/all]
    	Required:	false
    	Type:		integer/string
    	Usage:		Set the player id for the spawn modification to take effect, use "all" for all players.
    	Default:	The player id of whoever used this command.

#### 🔧 Examples:
{: .no_toc }
    > respawnpoint set all
    	(Set the respawn point for all players at the current camera location)
    > rsp set
    	(Set the respawn point to the current camera location for the player who uses the command)
    > respawnpoint set 6
    	(Set the respawn point for player 6 at the current camera location)
    > rsp reset 2
    	(Reset player 2's respawn point to the default location)
    > rsp reset all
    	(Reset all players' respawn points to their default locations (Hall of Storms).)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `respawntime`

#### 🔍 Syntax:
{: .no_toc }
(`respawntime` | `rst`) `<seconds>`

#### ✏ Description: 
{: .no_toc }
Override the current respawn timer for all players.
>Note: Due to system limitations, setting the value to 0 will be automatically changed to 0.0625 (1 game tick).

#### ⚙ Parameters:
{: .no_toc }
    <seconds>
    	Required:	true
    	Type:		float
    	Usage:		The respawn time to be set for all players

#### 🔧 Examples:
{: .no_toc }
    > respawntime 99
    	(Set the respawn timer to 99 seconds)
    > rst 0
    	(Set the respawn timer to 0.0625 seconds (1 game tick))

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `selectalltalent`

#### 🔍 Syntax:
{: .no_toc }
(`selectalltalent` | `sat`) `[PlayerId]`

#### ✏ Description: 
{: .no_toc }
Select all talents for a player. Ever wonder what a Q and AA build Zeratul at the same time would feel like? Or a Varian with Twin Blade+Smash+Taunt and triple banners?
>Note: This uses the built-in `libGame_gf_TalentsChooseTalentForPlayer()` function, which adds talents for the player's current hero only. Summoned hero units do not count. Unlike the `addalltalent` command, this works reliably most of the time.

#### ⚙ Parameters:
{: .no_toc }
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		The target player id to have the talent being selected.
    	Default:	The player id of whoever used this command.

#### 🔧 Examples:
{: .no_toc }
    > sat
    	(Select all the talents for player whoever uses the command)
    > selectalltalent
    	(Select all the talents for player whoever uses the command)
    > sat 6
    	(Select all the talents for player 6)
    > selectalltalent 6
    	(Select all the talents for player 6)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `setmasteryring`

#### 🔍 Syntax:
{: .no_toc }
(`setmasteryring` | `smr`) `<MasteryRingLevel>`

#### ✏ Description: 
{: .no_toc }
Set the Mastery Ring level. The ring below the hero will be automatically updated.
>Note: If the new level is lower than the current one, you may need to respawn (e.g., suicide) the selected units.

#### ⚙ Parameters:
{: .no_toc }
    <MasteryRingLevel>
    	Required:	true
    	Type:		integer
    	Usage:		The level of the mastery ring to be set.

#### 🔧 Examples:
{: .no_toc }
    > setmasteryring 0
    	(Remove the mastery ring from the player)
    > smr 3
    	(Set the mastery ring to Level 3.)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `setoverlay`

#### 🔍 Syntax:
{: .no_toc }
(`setoverlay` | `sol`) `<OverlayPath>`

#### ✏ Description: 
{: .no_toc }
Set the in-game overlay (e.g., the golden overlay for Uther's Divine Shield).
>Note: The path is relative to `*.storm*/base.stormdata/`, usually with the extension `*.StormCutscene`.

#### ⚙ Parameters:
{: .no_toc }
    <OverlayPath>
    	Required:	true
    	Type:		string
    	Usage:		The path of the overlay file, relative to base.stormdata.

#### 🔧 Examples:
{: .no_toc }
    > sol Cutscenes/GameUI_InvulnerableOverlay.StormCutscene
    	(Set the overlay to "Invulnerable", e.g Divine Shield / Sanctification.)
    > setoverlay cutscenes\gameui_gorgeoverlay.stormcutscene
    	(Set the overlay to Stitches Gorge.)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `setscore`

#### 🔍 Syntax:
{: .no_toc }
(`setscore` | `score`) `<Field>` `<Value>` `[PlayerId]`

#### ✏ Description: 
{: .no_toc }
Set the score for the scoreboard (some values are visible on the Tab screen). Useful when testing talents that interact with scoreboard values, such as Zagara's Infest.
>Note: The Infest internal function is capped at `524%` (maximum fixed value); further details are out of scope here.
You can obtain these FIELDs from `ScoreValueData.xml` in `heroesdata.stormmod`
>Note: Some fields uses Integer and some uses Fixed. However because this function is unified using `PlayerScoreValueSetFromInt()`, all decimals will be removed. As such, the max value for fixed is `524287` and `2147483647` for Integer. This limitation might change later.

#### ⚙ Parameters:
{: .no_toc }
    <Field>
    	Required:	true
    	Type:		string
    	Usage:		The field to be modified in the scoreboard.
    <Value>
    	Required:	true
    	Type:		integer
    	Usage:		The value to be set for the field in the scoreboard.
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		The player id for the modification to be applied.
    	Default:	The player id of whoever used this command.

#### 🔧 Examples:
{: .no_toc }
    > setscore HeroDamage 0
    	(Set the field "Hero Damage" to 0 for the player who use this command.)
    > score SoloKill 524287
    	(Set the field "Kills" to 5242873 for the player who use this command)
    > score Healing 1000 2
    	(Set the field "Healing" to 1000 for the player 2)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `toggleai`

#### 🔍 Syntax:
{: .no_toc }
(`toggleai` | `togai`) `[PlayerID]`

#### ✏ Description: 
{: .no_toc }
Toggle AI for a player.

>Note: This also enables/disables AI for units summoned via the [summon](#cmd-summon) command.

#### ⚙ Parameters:
{: .no_toc }
    [PlayerID]
    	Required:	false
    	Type:		integer
    	Usage:		The Player ID for the AI to be enabled/disabled
    	Default:	The player id of whoever used this command.

#### 🔧 Examples:
{: .no_toc }
    > togai
    	(Toggle AI for whoever use this command)
    > togai 10
    	(Toggle AI for Player 10)
    > toggleai 2
    	(Toggle AI for Player 2)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `togglemassquest`

#### 🔍 Syntax:
{: .no_toc }
(`togglemassquest` | `tmq`) `[stacks]`

#### ✏ Description: 
{: .no_toc }
Toggle mass quest completion mode, granting stacks every game tick (0.0625s) for whoever uses this command.
>Note: Useful for heroes with truly infinite stacking such as Zul'jin or Nazeebo. However, due to integer/floating-point overflow, after reaching a certain stack count the functionality may overflow — for example, Nazeebo's HP may reduce to 1 when at maximum stacks with the level 4 bonus HP-per-stack talent.

#### ⚙ Parameters:
{: .no_toc }
    [stacks]
    	Required:	false
    	Type:		integer
    	Usage:		The amount of stacks to add every game tick (0.0625s)
    	Default:	1

#### 🔧 Examples:
{: .no_toc }
    > tmq 10
    	(Enable mass quest completion mode and give 10 stacks every game tick if not enabled)
    > togglemassquest
    	(Disable mass quest completion mode if enabled)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `togglepausegametalent`

#### 🔍 Syntax:
{: .no_toc }
(`togglepausegametalent` | `tpgt`) 

#### ✏ Description: 
{: .no_toc }
Toggle whether to pause the game when viewing talents, similar to heroes tutorial.

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > tpgt
    	(Toggle whether to pause the game when viewing talents)
    > togglepausegametalent
    	(Toggle whether to pause the game when viewing talents)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

### 💭 Command: `toggletalenttree`

#### 🔍 Syntax:
{: .no_toc }
(`toggletalenttree` | `ttt`) 

#### ✏ Description: 
{: .no_toc }
Toggle the display of the talents selection tree.

#### ⚙ Parameters:
{: .no_toc }
    None

#### 🔧 Examples:
{: .no_toc }
    > ttt
    	(Toggle the display of the talents selection tree.)
    > toggletalenttree
    	(Toggle the display of the talents selection tree.)

#### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

---


## 📙 Builder Mode Library (`LibBuilderMode.galaxy`):
A Builder Library that allows you to place objects anywhere in the map.
**This system is still in early development.**
Builder mode lets you place objects anywhere on the map. Units will continuously teleport to your cursor (following it). Remember to select `/ac` and `ts` in the QA menu (these will be added automatically in a future update).
To use builder mode, select a unit, or units and press `backspace`. Builder mode will then be activated and you can place the units where you like.
To place the unit(s), press `backspace` again to deactivate builder mode.

---


## 📙 FPS Mode Library (`LibFPSMode.galaxy`):
A First Person Shooter like Library that allows you to see the map in first person camera.
**This system is still in early development.**
FPS Mode lets you view the map through a first-person camera attached to your unit. The camera continuously looks forward and rotates while the mode is active.
To toggle FPS mode, simply use the `fps` chat command.
### Controls
 - `u` : Move your unit forward. (It will also clear queue commands and **Hold Position** after moved.)
 - `← (arrow key)` : Turn your unit and camera to left.
 - `→ (arrow key)` : Turn your unit and camera to right.
 - `↑ (arrow key)` : Turn your camera upwards.
 - `↓ (arrow key)` : Turn your camera downwards.

---


## 📙 Free Camera Mode Library (`LibFreeCameraMode.galaxy`):
Free Camera Mode allows you to change the angle of the camera easily.
**This system is still in early development.**
Free Camera Mode lets you use the `Middle Mouse Wheel` to freely change your camera angle and direction.
To enable or disable, simply use the chat command `tfc` or `togglefreecamera`!
>Note: Camera pan (move the camera by pushing mouse to the edge) will be disabled when free camera mode is active

---


## 📙 Funny Stuff Library (`LibFunny.galaxy`):
Random useless stuff just for the lolz.
>Vm0weE1HRnRVWGRPVmxwT1ZsZG9WRmxVU205alJsVjNWMjFHYUZKdVFsaFdiWFF3VmtkS1NGVnVjRnBXVmxsM1dWWmFTMWRYUmtsYVJscFhUVEF4TkZkV1dsWmtNbFpJVkd0c1ZXSkdTbGhXYlhoM1UxWmtXV05GZEZSaVZscFhWR3hhYjFReFdsVlNiV2hoVmpOQ1ExUnNSVGxRVVQwOQ==

---
