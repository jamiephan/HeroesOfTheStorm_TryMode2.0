---
title: 📚 Utilities Library
nav_order: 1
last_modified_date: Sat, 09 May 2026 16:16:29 GMT
parent: Usage
---

# 📚 Utilities Library (`LibUtilities.galaxy`):
{: .no_toc }
A library providing utility tools such as "Toggle Fog Of War", "Toggle UI", etc.
- Table of Contents
{:toc}

---

## 💭 Command: `addmarker`

### 🔍 Syntax:
{: .no_toc }
(`addmarker` | `marker`) `<MarkerID>`

### ✏ Description: 
{: .no_toc }
Add a marker at the position of the first selected unit.

### ⚙ Parameters:
{: .no_toc }
    <MarkerID>
    	Required:	true
    	Type:		integer
    	Usage:		Defines the Marker ID to be added (up to 20).

### 🔧 Examples:
{: .no_toc }
    > marker 1
    	(Add marker 1 at the position of the first selected unit.)
    > addmarker 10
    	(Add marker 10 at the position of the first selected unit.)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `addmarkercamera`

### 🔍 Syntax:
{: .no_toc }
(`addmarkercamera` | `markerc`) `<MarkerID>`

### ✏ Description: 
{: .no_toc }
Add a marker at the center position of the camera.

>Tip: Also use [`togglecrosshair`](#cmd-togglecrosshair) command to set the location precisely.

### ⚙ Parameters:
{: .no_toc }
    <MarkerID>
    	Required:	true
    	Type:		integer
    	Usage:		Defines the Marker ID to be added (up to 20).

### 🔧 Examples:
{: .no_toc }
    > markerc 1
    	(Add marker 1 at the center position of the camera.)
    > addmarkercamera 10
    	(Add marker 10 at the center position of the camera.)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `alliancecontrolteamselection`

### 🔍 Syntax:
{: .no_toc }
(`alliancecontrolteamselection` | `acts`) 

### ✏ Description: 
{: .no_toc }
Toggle Alliance Control and Multi-Selection — a shortcut reimplementation of the QA Cheat Menu's `/ac` and `ts` commands.
This enables or disables "Alliance Control" (control units from other players, including enemies) and "Multi-Selection" (select multiple units at once, like Vikings and Samuro).

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > acts
    	(Toggle Alliance Control + Multi-Selection)
    > alliancecontrolteamselection
    	(Toggle Alliance Control + Multi-Selection)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `clear`

### 🔍 Syntax:
{: .no_toc }
(`clear` | `cls`) `[seconds]`

### ✏ Description: 
{: .no_toc }
Clear all text messages, including chat and debug messages with an optional delay.

### ⚙ Parameters:
{: .no_toc }
    [seconds]
    	Required:	false
    	Type:		float
    	Usage:		Defines the delay to clear text messages in seconds.
    	Default:	0

### 🔧 Examples:
{: .no_toc }
    > cls
    	(Clear all texts instantly)
    > clear 5.4
    	(Clear all texts after 5.4 seconds)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `clearmarker`

### 🔍 Syntax:
{: .no_toc }
(`clearmarker` | `clmarker`) 

### ✏ Description: 
{: .no_toc }
Clear all created markers.

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > clmarker
    	(Clear all created markers.)
    > clearmarker
    	(Clear all created markers.)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `colormarker`

### 🔍 Syntax:
{: .no_toc }
(`colormarker` | `colmarker`) `<MarkerID>` `<Red>` `<Green>` `<Blue>`

### ✏ Description: 
{: .no_toc }
Change the color of a specific marker using an RGB value. The new color also applies to future markers.
>Note: Each marker's color is generated randomly when the game starts.

### ⚙ Parameters:
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

### 🔧 Examples:
{: .no_toc }
    > colmarker 1 255 0 0
    	(Change Marker 1 color to 255, 0, 0  (Red))
    > colormarker 10 0 0 0
    	(Change Marker 10 color to 0, 0, 0  (Black))
    > colormarker 10 0 0 0
    	(Change Marker 10 color to 0, 255, 255  (Cyan))

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `endgame`

### 🔍 Syntax:
{: .no_toc }
(`endgame` | `eg`) 

### ✏ Description: 
{: .no_toc }
End the game instantly and kick all players from the game.

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > eg
    	(End the game instantly)
    > endgame
    	(End the game instantly)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `floatingcombattext`

### 🔍 Syntax:
{: .no_toc }
(`floatingcombattext` | `fct`) `<message>` `[state]` `[type]`

### ✏ Description: 
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

### ⚙ Parameters:
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

### 🔧 Examples:
{: .no_toc }
    > fct 100
    	(Shows the FCT "100" with the style of basic attack (orange))
    > fct 50 XP SelfAmountReceived
    	(Shows the FCT "50" with the style of xp gathered (small purple text))
    > floatingcombattext nice Quest QuestProgress
    	(Shows the FCT "nice" with the style of quest progressing (gold circle with "!"))
    > floatingcombattext 999 Shield CritAmountGiven
    	(Shows the FCT "999" with the style of critical shield (white with explosion style))

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `forceruntrigger`

### 🔍 Syntax:
{: .no_toc }
(`forceruntrigger` | `frt`) `<TriggerName>`

### ✏ Description: 
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

### ⚙ Parameters:
{: .no_toc }
    <TriggerName>
    	Required:	true
    	Type:		string
    	Usage:		Defines the trigger to be run

### 🔧 Examples:
{: .no_toc }
    > frt libUIUI_gt_InputBackslashKeyDown_Func
    	(Force to run the trigger "libUIUI_gt_InputBackslashKeyDown_Func", which will show up the debug menu.)
    > forceruntrigger libSprt_gt_DEBUGHaveAITakeOverAI_Func
    	(Force to run the trigger "libSprt_gt_DEBUGHaveAITakeOverAI_Func", which will have an AI take over your unit.)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `getmarker`

### 🔍 Syntax:
{: .no_toc }
(`getmarker` | `gmarker`) `<MarkerID>`

### ✏ Description: 
{: .no_toc }
Get a Markers position in (X, Y, Z).

### ⚙ Parameters:
{: .no_toc }
    <MarkerID>
    	Required:	true
    	Type:		integer
    	Usage:		Defines the Marker ID to be added (up to 20).

### 🔧 Examples:
{: .no_toc }
    > gmarker 1
    	(Get the position of Marker 1 in (X, Y, Z).)
    > getmarker 10
    	(Get the position of Marker 10 in (X, Y, Z).)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `loadmap`

### 🔍 Syntax:
{: .no_toc }
(`loadmap` | `lm`) `<MapPath>`

### ✏ Description: 
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

### ⚙ Parameters:
{: .no_toc }
    <MapPath>
    	Required:	true
    	Type:		string
    	Usage:		Defines the path to the stormmap

### 🔧 Examples:
{: .no_toc }
    > lm heroes/singleplayermaps/startingexperience/tutorial01.stormmap
    	(Exit and Load the tutorial 1 map)
    > loadmap heroes/singleplayermaps/startingexperience/tutorialveteran.stormmap
    	(Exit and Load the veteran tutorial map.)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `minionwaveinterval`

### 🔍 Syntax:
{: .no_toc }
(`minionwaveinterval` | `mwi`) `[seconds]`

### ✏ Description: 
{: .no_toc }
Get or set the minion wave spawn interval. Usually 30s, or 15s in ARAM.

### ⚙ Parameters:
{: .no_toc }
    [seconds]
    	Required:	false
    	Type:		float
    	Usage:		Defines interval for minion wave to spawn
    	Default:	(The map's original interval, usually 30 but 15 for ARAMs)

### 🔧 Examples:
{: .no_toc }
    > mwi
    	(Get the minion wave interval)
    > minionwaveinterval
    	(Get the minion wave interval)
    > mwi 0.0625
    	(Set the minion wave to spawn every 0.0625 seconds (each game loop))
    > mwi 100
    	(Set the minion wave to spawn every 100 seconds.)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `playcutscene`

### 🔍 Syntax:
{: .no_toc }
(`playcutscene` | `pcs`) `<mode>`

### ✏ Description: 
{: .no_toc }
Play a Cutscene file (`*.StormCutscene`) directly. Press `Esc` anytime to stop it.

The file path is relative to `*.stormmod/base.stormdata`. (e.g If Cutscene file is in `mods/heroesdata.stormmod/base.stormdata/Cutscenes/EndOfMatch/EndOfMatch_LineUp_Tassadar.StormCutscene`, the path will be `Cutscenes/EndOfMatch/EndOfMatch_LineUp_Tassadar.StormCutscene`)

### ⚙ Parameters:
{: .no_toc }
    <mode>
    	Required:	true
    	Type:		string
    	Usage:		Defines the path of the *.StormCutscene file.

### 🔧 Examples:
{: .no_toc }
    > pcs Cutscenes/Tutorial_CursedHollow.StormCutscene
    	(Plays the Tutorial Cutscene for Cursed Hollow)
    > playcutscene Cutscenes/StoreMuradin.StormCutscene
    	(Plays the Muradin Cutscene in the Collection Page (wait for 2 second to show Muradin))

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `removecamerabound`

### 🔍 Syntax:
{: .no_toc }
(`removecamerabound` | `rcb`) 

### ✏ Description: 
{: .no_toc }
Remove the camera bounding box, which is defined in the map editor. This allows the camera to move freely without being limited to a specific area.
>Note: This command cannot be reverted. You will need to restart the game to get the bounding box back.

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > rcb
    	(Remove the camera bounding box)
    > removecamerabound
    	(Remove the camera bounding box)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `removemarker`

### 🔍 Syntax:
{: .no_toc }
(`removemarker` | `rmmarker`) `<MarkerID>`

### ✏ Description: 
{: .no_toc }
Removes a specific marker.

### ⚙ Parameters:
{: .no_toc }
    <MarkerID>
    	Required:	true
    	Type:		integer
    	Usage:		Defines the Marker ID to be added (up to 20).

### 🔧 Examples:
{: .no_toc }
    > rmmarker 1
    	(Removed Marker 1)
    > removemarker 10
    	(Removed Marker 10)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `resetcameraobject`

### 🔍 Syntax:
{: .no_toc }
(`resetcameraobject` | `rco`) 

### ✏ Description: 
{: .no_toc }
Reset the game camera to `BlizzardAllStars` (default game camera)

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > rco
    	(Reset the game camera to BlizzardAllStars)
    > resetcameraobject
    	(Reset the game camera to BlizzardAllStars)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `resetgamespeed`

### 🔍 Syntax:
{: .no_toc }
(`resetgamespeed` | `rgs`) 

### ✏ Description: 
{: .no_toc }
Reset the game speed to 2 (Normal).

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > rgs
    	(Reset the game speed to 2 (Normal).)
    > resetgamespeed
    	(Reset the game speed to 2 (Normal).)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `restartgame`

### 🔍 Syntax:
{: .no_toc }
(`restartgame` | `re`) 

### ✏ Description: 
{: .no_toc }
Restart the map without needing to re-enter. This is extremely useful when testing modified XML files or Galaxy scripts.
>Note: It will **NOT** automatically reload or add mods from `Includes.xml`. You must manually re-enter the map for mods to be applied.

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > re
    	(Restart the game instantly)
    > restartgame
    	(Restart the game instantly)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `setcameraobject`

### 🔍 Syntax:
{: .no_toc }
(`setcameraobject` | `sco`) `<camera>`

### ✏ Description: 
{: .no_toc }
Manually set the camera object. The parameter is the id of `<CCamera id="xxx">`.
>**WARNING**: Set a non existing camera will actually **crash** the game.

### ⚙ Parameters:
{: .no_toc }
    <camera>
    	Required:	true
    	Type:		string
    	Usage:		Defines the camera object.

### 🔧 Examples:
{: .no_toc }
    > sco BlizzardAllStars
    	(Set the camera object to BlizzardAllStars (default game camera))
    > setcameraobject Dflt
    	(Set the camera object to Dlft (default SC2 camera))

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `setgamespeed`

### 🔍 Syntax:
{: .no_toc }
(`setgamespeed` | `sgs`) `<speed>`

### ✏ Description: 
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

### ⚙ Parameters:
{: .no_toc }
    <speed>
    	Required:	true
    	Type:		integer
    	Usage:		Defines the game speed to be set (between 0 - 4).

### 🔧 Examples:
{: .no_toc }
    > sgs 0
    	(Set the game speed to 0 (Slower))
    > setgamespeed 3
    	(Set the game speed to 3 (Fast))

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `startgame`

### 🔍 Syntax:
{: .no_toc }
(`startgame` | `sg`) 

### ✏ Description: 
{: .no_toc }
Start the game instantly (timer start, gate open, etc).

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > sg
    	(Start the game instantly)
    > startgame
    	(Start the game instantly)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `string`

### 🔍 Syntax:
{: .no_toc }
(`string` | `str`) `<mode>` `<value>`

### ✏ Description: 
{: .no_toc }
Display a string using `TextExpressionAssemble` or `StringExternal`.
Useful for quickly displaying strings from internal functions.
`mode` must be either `TextExpressionAssemble` or `StringExternal`.

### ⚙ Parameters:
{: .no_toc }
    <mode>
    	Required:	true
    	Type:		string
    	Usage:		Defines the mode of the string to be displayed.
    <value>
    	Required:	true
    	Type:		string
    	Usage:		Defines the value of the string to be displayed

### 🔧 Examples:
{: .no_toc }
    > str TextExpressionAssemble Param/Expression/lib_Sprt_B1FD42AF
    	(Shows the string "Set Mastery Ring..." from supportlib)
    > string StringExternal Param/Value/lib_Sprt_F697F4C7
    	(Shows the string "Game Speed should not exceed 8.0...." from supportlib)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `togglecdr`

### 🔍 Syntax:
{: .no_toc }
(`togglecdr` | `tcdr`) 

### ✏ Description: 
{: .no_toc }
Toggle Mass CDR. Resets the cooldown on all abilities every game loop (0.0625s).
This is useful for bypassing the limit of Try Mode's Toggle Cooldown, which has a 1.5s cooldown between each reset.

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > tcdr
    	(Toggle Mass CDR)
    > togglecdr
    	(Toggle Mass CDR)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `togglecrosshair`

### 🔍 Syntax:
{: .no_toc }
(`togglecrosshair` | `tch`) 

### ✏ Description: 
{: .no_toc }
Toggle a crosshair at the center of the camera. This allows for more precise placement of [summon units](#cmd-summon) and [adding effects](#cmd-addeffectcamera).

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > tch
    	(Toggle showing crosshair)
    > togglecrosshair
    	(Toggle showing crosshair)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `toggledebugmode`

### 🔍 Syntax:
{: .no_toc }
(`toggledebugmode` | `tdb`) 

### ✏ Description: 
{: .no_toc }
Toggle Debug Mode by modifying the `libCore_gv_dEBUGDebuggingEnabled` variable.

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > tdb
    	(Toggle Debug Mode)
    > toggledebugmode
    	(Toggle Debug Mode)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `togglefogofwar`

### 🔍 Syntax:
{: .no_toc }
(`togglefogofwar` | `tfow`) 

### ✏ Description: 
{: .no_toc }
Toggle Fog Of War. This can enable or disable full map vision.

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > tfow
    	(Toggle Full Map Vision)
    > togglefogofwar
    	(Toggle Full Map Vision)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `togglerandommovement`

### 🔍 Syntax:
{: .no_toc }
(`togglerandommovement` | `trm`) `[radius]`

### ✏ Description: 
{: .no_toc }
![trm screenshot](https://i.imgur.com/d4fg4Oj.png)

Toggle random movement for selected units.

This command creates a circle centered on your camera. Selected units will begin moving randomly within the circle.
This is useful for practicing various things, such as skillshots.
Run this command again to turn off this functionality.

>Tip: To get the most out of this tool, use [`alliancecontrolteamselection`](#cmd-alliancecontrolteamselection) to select desired units, then use [summon units](#cmd-summon) to let them move randomly.

>Tip: Also use the [`addbehavior`](#cmd-addbehavior) command to add the `Mounted` (`adb Mounted`) behavior for faster movement (mount speed), and `adb DisableWeaponsBehavior` to disable auto attacks.

>Note: You can still issue commands to units that are moving randomly, but once all commands are finished (e.g., the unit stops), it will resume moving randomly within the circle.

### ⚙ Parameters:
{: .no_toc }
    [radius]
    	Required:	false
    	Type:		float
    	Usage:		The radius of the circle that units will be moved randomly
    	Default:	7

### 🔧 Examples:
{: .no_toc }
    > trm 10
    	(Toggle Random Movement with circle radius of 10.)
    > togglerandommovement
    	(Toggle Random Movement with circle radius of default 7.)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `toggleterrainindicator`

### 🔍 Syntax:
{: .no_toc }
(`toggleterrainindicator` | `tti`) 

### ✏ Description: 
{: .no_toc }
Toggle the Terrain Indicator (used by Diablo, Auriel, etc.) for any unit.

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > tti
    	(Toggle Terrain Indicator)
    > toggleterrainindicator
    	(Toggle Terrain Indicator)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `toggleui`

### 🔍 Syntax:
{: .no_toc }
(`toggleui` | `tui`) 

### ✏ Description: 
{: .no_toc }
Toggle the UI. This hides or shows all UI elements, including the HP bar, talents panel, floating combat text, abilities bar, etc.
>Note: When the UI is off, all abilities are disabled.

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > tui
    	(Toggle In game UI)
    > toggleui
    	(Toggle In game UI)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `wingame`

### 🔍 Syntax:
{: .no_toc }
(`wingame` | `wg`) `<TeamID>`

### ✏ Description: 
{: .no_toc }
Instantly declare a win for a team and end the game.
Generally left team is **Team 1** and right team is **Team 2**.

### ⚙ Parameters:
{: .no_toc }
    <TeamID>
    	Required:	true
    	Type:		integer
    	Usage:		Defines the team ID to win the game.

### 🔧 Examples:
{: .no_toc }
    > wg 1
    	(Win the game for Team 1)
    > wingame 2
    	(Win the game for Team 2)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**
