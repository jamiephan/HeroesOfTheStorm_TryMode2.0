<a name="meta-top"></a>

# Usage
<sup>*(Generated from [doc.json](./(10)trymemode.stormmap/base.stormdata/Modules/doc.json) at Tue, 25 May 2021 18:57:40 GMT)*</sup>

Generally, most of the functionalities are using chat commands. Simply type the commands in the chat box (like how you would normally chat with teammates).
>Note: Remember to either use allies or all chat channel when try to use the commands. Public chat channels and Private Messages (PM) does not work.
All commands have a short alias, which they both have identical functionality that allows for less typing.
Some of the commands have an UI counterpart implemented, which will display a menu of options and features corresponding to the commands' functionality.

<a name="meta-libraries"></a>

# 📚 Libraries
|Library Name|File Name|Library ID|Library Description|
|-|-|-|-|
|Module Loader|LibModuleLoader.galaxy|LibMODL|A unified Module Loader Lib that allows you to choose which module to load.|
|Utilities|LibUtilities.galaxy|LibUTIL|A Library with multiple utilities tools such as "Toggle Fog Of War", "Toggle UI", etc.|
|Units|LibUnits.galaxy|LibUNIT|A library with commands related to selected units, such as kill, spawn, etc.|
|Players|LibPlayers.galaxy|LibPLYR|Commands that are related to Players, eg, scoreboard, respawn timer, etc|
|Builder Mode|LibBuilderMode.galaxy|libBULM|A Builder Library that allows you to place objects anywhere in the map.|
|FPS Mode|LibFPSMode.galaxy|libFPSM|A First Person Shooter like Library that allows you to see the map in first person camera.|
|Free Camera Mode|LibFreeCameraMode.galaxy|libFRCM|Free Camera Mode allows you to change the angle of the camera easily.|
|Funny Stuff|LibFunny.galaxy|libFUNY|Random useless stuff just for the lolz.|
<a name="meta-toc"></a>

# 🧾 Table of Contents
- 📙 [Module Loader](#lib-LibMODL)

- 📙 [Utilities](#lib-LibUTIL)

  - 💭 [Command: `addmarker`](#cmd-addmarker)

  - 💭 [Command: `addmarkercamera`](#cmd-addmarkercamera)

  - 💭 [Command: `alliancecontrolteamselection`](#cmd-alliancecontrolteamselection)

  - 💭 [Command: `clear`](#cmd-clear)

  - 💭 [Command: `clearmarker`](#cmd-clearmarker)

  - 💭 [Command: `colormarker`](#cmd-colormarker)

  - 💭 [Command: `endgame`](#cmd-endgame)

  - 💭 [Command: `floatingcombattext`](#cmd-floatingcombattext)

  - 💭 [Command: `forceruntrigger`](#cmd-forceruntrigger)

  - 💭 [Command: `getmarker`](#cmd-getmarker)

  - 💭 [Command: `loadmap`](#cmd-loadmap)

  - 💭 [Command: `minionwaveinterval`](#cmd-minionwaveinterval)

  - 💭 [Command: `playcutscene`](#cmd-playcutscene)

  - 💭 [Command: `removemarker`](#cmd-removemarker)

  - 💭 [Command: `resetcameraobject`](#cmd-resetcameraobject)

  - 💭 [Command: `resetgamespeed`](#cmd-resetgamespeed)

  - 💭 [Command: `restartgame`](#cmd-restartgame)

  - 💭 [Command: `setcameraobject`](#cmd-setcameraobject)

  - 💭 [Command: `setgamespeed`](#cmd-setgamespeed)

  - 💭 [Command: `startgame`](#cmd-startgame)

  - 💭 [Command: `string`](#cmd-string)

  - 💭 [Command: `togglecdr`](#cmd-togglecdr)

  - 💭 [Command: `togglecrosshair`](#cmd-togglecrosshair)

  - 💭 [Command: `toggledebugmode`](#cmd-toggledebugmode)

  - 💭 [Command: `togglefogofwar`](#cmd-togglefogofwar)

  - 💭 [Command: `togglerandommovement`](#cmd-togglerandommovement)

  - 💭 [Command: `toggleui`](#cmd-toggleui)

  - 💭 [Command: `wingame`](#cmd-wingame)

- 📙 [Units](#lib-LibUNIT)

  - 💭 [Command: `addbehavior`](#cmd-addbehavior) (✔ UI)

  - 💭 [Command: `addeffect`](#cmd-addeffect)

  - 💭 [Command: `addeffectcamera`](#cmd-addeffectcamera)

  - 💭 [Command: `addweapon`](#cmd-addweapon)

  - 💭 [Command: `changeunitownership`](#cmd-changeunitownership)

  - 💭 [Command: `clearbehavior`](#cmd-clearbehavior)

  - 💭 [Command: `clearunits`](#cmd-clearunits)

  - 💭 [Command: `clearweapon`](#cmd-clearweapon)

  - 💭 [Command: `getbehavior`](#cmd-getbehavior)

  - 💭 [Command: `getselectedunits`](#cmd-getselectedunits)

  - 💭 [Command: `getunitownership`](#cmd-getunitownership)

  - 💭 [Command: `getunits`](#cmd-getunits)

  - 💭 [Command: `getweapon`](#cmd-getweapon)

  - 💭 [Command: `killunits`](#cmd-killunits)

  - 💭 [Command: `playanimation`](#cmd-playanimation)

  - 💭 [Command: `removeanimation`](#cmd-removeanimation)

  - 💭 [Command: `removebehavior`](#cmd-removebehavior)

  - 💭 [Command: `removeeffect`](#cmd-removeeffect)

  - 💭 [Command: `removeeffectcamera`](#cmd-removeeffectcamera)

  - 💭 [Command: `removeweapon`](#cmd-removeweapon)

  - 💭 [Command: `replaceunit`](#cmd-replaceunit)

  - 💭 [Command: `sendactormessage`](#cmd-sendactormessage)

  - 💭 [Command: `summon`](#cmd-summon) (✔ UI)

  - 💭 [Command: `togglenoweaponcd`](#cmd-togglenoweaponcd)

  - 💭 [Command: `toggleoutputid`](#cmd-toggleoutputid)

  - 💭 [Command: `unitproperty`](#cmd-unitproperty)

- 📙 [Players](#lib-LibPLYR)

  - 💭 [Command: `addalltalent`](#cmd-addalltalent)

  - 💭 [Command: `addtalent`](#cmd-addtalent)

  - 💭 [Command: `disabletalent`](#cmd-disabletalent)

  - 💭 [Command: `enabletalent`](#cmd-enabletalent)

  - 💭 [Command: `experience`](#cmd-experience)

  - 💭 [Command: `getcatalog`](#cmd-getcatalog)

  - 💭 [Command: `modifycatalog`](#cmd-modifycatalog)

  - 💭 [Command: `removealltalent`](#cmd-removealltalent)

  - 💭 [Command: `removetalent`](#cmd-removetalent)

  - 💭 [Command: `resetoverlay`](#cmd-resetoverlay)

  - 💭 [Command: `respawnpoint`](#cmd-respawnpoint)

  - 💭 [Command: `respawntime`](#cmd-respawntime)

  - 💭 [Command: `setmasteryring`](#cmd-setmasteryring)

  - 💭 [Command: `setoverlay`](#cmd-setoverlay)

  - 💭 [Command: `setscore`](#cmd-setscore)

  - 💭 [Command: `togglemassquest`](#cmd-togglemassquest)

  - 💭 [Command: `togglepausegametalent`](#cmd-togglepausegametalent)

  - 💭 [Command: `toggletalenttree`](#cmd-toggletalenttree)

- 📙 [Builder Mode](#lib-libBULM)

- 📙 [FPS Mode](#lib-libFPSM)

- 📙 [Free Camera Mode](#lib-libFRCM)

- 📙 [Funny Stuff](#lib-libFUNY)

<a name="lib-LibMODL"></a>

# 📙 Module Loader Library (`LibModuleLoader.galaxy`):
A unified Module Loader Lib that allows you to choose which module to load.

<a name="lib-LibMODL-description"></a>

This module is for loading other modules. **DO NOT** modify this file in SC2Editor.



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

---
<a name="lib-LibUTIL"></a>

# 📙 Utilities Library (`LibUtilities.galaxy`):
A Library with multiple utilities tools such as "Toggle Fog Of War", "Toggle UI", etc.

<a name="cmd-addmarker"></a>

## (`addmarker` | `marker`) `<MarkerID>`
<a name="cmd-addmarker-description"></a>

#### ✏ Description: 
Add a marker at the position of the first selected unit.

<a name="cmd-addmarker-parameters"></a>

#### ⚙ Parameters:
    <MarkerID>
    	Required:	true
    	Type:		integer
    	Usage:		Defines the Marker ID to be added (up to 20).
<a name="cmd-addmarker-examples"></a>

#### 🔧 Examples:
    > marker 1
    	(Add marker 1 at the position of the first selected unit.)
    > addmarker 10
    	(Add marker 10 at the position of the first selected unit.)
<a name="cmd-addmarker-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-addmarkercamera"></a>

## (`addmarkercamera` | `markerc`) `<MarkerID>`
<a name="cmd-addmarkercamera-description"></a>

#### ✏ Description: 
Add a marker at the center position of the camera.

>Tip: Also use [`togglecrosshair`](#cmd-togglecrosshair) command to set the location precisely.

<a name="cmd-addmarkercamera-parameters"></a>

#### ⚙ Parameters:
    <MarkerID>
    	Required:	true
    	Type:		integer
    	Usage:		Defines the Marker ID to be added (up to 20).
<a name="cmd-addmarkercamera-examples"></a>

#### 🔧 Examples:
    > markerc 1
    	(Add marker 1 at the center position of the camera.)
    > addmarkercamera 10
    	(Add marker 10 at the center position of the camera.)
<a name="cmd-addmarkercamera-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-alliancecontrolteamselection"></a>

## (`alliancecontrolteamselection` | `acts`) 
<a name="cmd-alliancecontrolteamselection-description"></a>

#### ✏ Description: 
Toggle Alliance Control + Multi-Selection, a shortcut re-implementation to QA Cheat Menu's `/ac` and `ts`.
This will enable/disable "Alliance Control" (control units from other players, including Enemy) and "Multi-Selection" (selecting multiple units like Vikings and Samuro).

<a name="cmd-alliancecontrolteamselection-parameters"></a>

#### ⚙ Parameters:
    None
<a name="cmd-alliancecontrolteamselection-examples"></a>

#### 🔧 Examples:
    > acts
    	(Toggle Alliance Control + Multi-Selection)
    > alliancecontrolteamselection
    	(Toggle Alliance Control + Multi-Selection)
<a name="cmd-alliancecontrolteamselection-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-clear"></a>

## (`clear` | `cls`) `[seconds]`
<a name="cmd-clear-description"></a>

#### ✏ Description: 
Clear all text messages, including chat and debug messages with an optional delay.

<a name="cmd-clear-parameters"></a>

#### ⚙ Parameters:
    [seconds]
    	Required:	false
    	Type:		float
    	Usage:		Defines the delay to clear text messages in seconds.
    	Default:	0
<a name="cmd-clear-examples"></a>

#### 🔧 Examples:
    > cls
    	(Clear all texts instantly)
    > clear 5.4
    	(Clear all texts after 5.4 seconds)
<a name="cmd-clear-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-clearmarker"></a>

## (`clearmarker` | `clmarker`) 
<a name="cmd-clearmarker-description"></a>

#### ✏ Description: 
Clear all created markers.

<a name="cmd-clearmarker-parameters"></a>

#### ⚙ Parameters:
    None
<a name="cmd-clearmarker-examples"></a>

#### 🔧 Examples:
    > clmarker
    	(Clear all created markers.)
    > clearmarker
    	(Clear all created markers.)
<a name="cmd-clearmarker-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-colormarker"></a>

## (`colormarker` | `colmarker`) `<MarkerID>` `<Red>` `<Green>` `<Blue>`
<a name="cmd-colormarker-description"></a>

#### ✏ Description: 
Change the color of the specific marker with RGB value. This also applies to future markers.
> Note: The color of each marker will be generated randomly when the game started.

<a name="cmd-colormarker-parameters"></a>

#### ⚙ Parameters:
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
<a name="cmd-colormarker-examples"></a>

#### 🔧 Examples:
    > colmarker 1 255 0 0
    	(Change Marker 1 color to 255, 0, 0  (Red))
    > colormarker 10 0 0 0
    	(Change Marker 10 color to 0, 0, 0  (Black))
    > colormarker 10 0 0 0
    	(Change Marker 10 color to 0, 255, 255  (Cyan))
<a name="cmd-colormarker-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-endgame"></a>

## (`endgame` | `eg`) 
<a name="cmd-endgame-description"></a>

#### ✏ Description: 
End the game instantly and kick all players from the game.

<a name="cmd-endgame-parameters"></a>

#### ⚙ Parameters:
    None
<a name="cmd-endgame-examples"></a>

#### 🔧 Examples:
    > eg
    	(End the game instantly)
    > endgame
    	(End the game instantly)
<a name="cmd-endgame-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-floatingcombattext"></a>

## (`floatingcombattext` | `fct`) `<message>` `[state]` `[type]`
<a name="cmd-floatingcombattext-description"></a>

#### ✏ Description: 
Show a custom floating combat text with different built-in templates.

The table is the available combineations of `state` and `type`. Columns are `state` (e.g `Shield`) and Rows are `type` (e.g `NormalAmountGiven`):

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

>Note: The capitalizations of `type` is required to be followed.

<a name="cmd-floatingcombattext-parameters"></a>

#### ⚙ Parameters:
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
<a name="cmd-floatingcombattext-examples"></a>

#### 🔧 Examples:
    > fct 100
    	(Shows the FCT "100" with the style of basic attack (orange))
    > fct 50 XP SelfAmountReceived
    	(Shows the FCT "50" with the style of xp gathered (small purple text))
    > floatingcombattext nice Quest QuestProgress
    	(Shows the FCT "nice" with the style of quest progressing (gold circle with "!"))
    > floatingcombattext 999 Shield CritAmountGiven
    	(Shows the FCT "999" with the style of critical shield (white with explosion style))
<a name="cmd-floatingcombattext-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-forceruntrigger"></a>

## (`forceruntrigger` | `frt`) `<TriggerName>`
<a name="cmd-forceruntrigger-description"></a>

#### ✏ Description: 
Force to Run a Trigger created by `TriggerCreate()` with ignoring conditions and wait until finish. You can get these from the galaxy files. 
>Note: This command is mainly for debugging, most of the time it won't be useful.

<a name="cmd-forceruntrigger-parameters"></a>

#### ⚙ Parameters:
    <TriggerName>
    	Required:	true
    	Type:		string
    	Usage:		Defines the trigger to be run
<a name="cmd-forceruntrigger-examples"></a>

#### 🔧 Examples:
    > frt libUIUI_gt_InputBackslashKeyDown_Func
    	(Force to run the trigger "libUIUI_gt_InputBackslashKeyDown_Func", which will show up the debug menu.)
    > forceruntrigger libSprt_gt_DEBUGHaveAITakeOverAI_Func
    	(Force to run the trigger "libSprt_gt_DEBUGHaveAITakeOverAI_Func", which will have an AI take over your unit.)
<a name="cmd-forceruntrigger-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-getmarker"></a>

## (`getmarker` | `gmarker`) `<MarkerID>`
<a name="cmd-getmarker-description"></a>

#### ✏ Description: 
Get a Markers position in (X, Y, Z).

<a name="cmd-getmarker-parameters"></a>

#### ⚙ Parameters:
    <MarkerID>
    	Required:	true
    	Type:		integer
    	Usage:		Defines the Marker ID to be added (up to 20).
<a name="cmd-getmarker-examples"></a>

#### 🔧 Examples:
    > gmarker 1
    	(Get the position of Marker 1 in (X, Y, Z).)
    > getmarker 10
    	(Get the position of Marker 10 in (X, Y, Z).)
<a name="cmd-getmarker-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-loadmap"></a>

## (`loadmap` | `lm`) `<MapPath>`
<a name="cmd-loadmap-description"></a>

#### ✏ Description: 
End the game and load a .stormmap file instantly.
The `MapPath` is relative to:
 - `*.stormmods/base.stormmap/` for CASC / MPQ storage
 - `HEROES_INSTALL_LOCATION/maps/` for file system

There are currently 4 built-in `.stormmaps` from CASC in Heroes, which the `MapPath` is:
 - heroes/singleplayermaps/(10)trymemode.stormmap
 - `heroes/singleplayermaps/startingexperience/tutorial01.stormmap`
 - `heroes/singleplayermaps/startingexperience/tutorialmapmechanics.stormmap`
 - `heroes/singleplayermaps/startingexperience/tutorialveteran.stormmap`

You can also put a `.stormmap` file into `HEROES_INSTALL_LOCATION/maps/`, e.g `HEROES_INSTALL_LOCATION/maps/cool.stormmap`, which the `MapPath` will be `cool.stormmap`

<a name="cmd-loadmap-parameters"></a>

#### ⚙ Parameters:
    <MapPath>
    	Required:	true
    	Type:		string
    	Usage:		Defines the path to the stormmap
<a name="cmd-loadmap-examples"></a>

#### 🔧 Examples:
    > lm heroes/singleplayermaps/startingexperience/tutorial01.stormmap
    	(Exit and Load the tutorial 1 map)
    > loadmap heroes/singleplayermaps/startingexperience/tutorialveteran.stormmap
    	(Exit and Load the veteran tutorial map.)
<a name="cmd-loadmap-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-minionwaveinterval"></a>

## (`minionwaveinterval` | `mwi`) `[seconds]`
<a name="cmd-minionwaveinterval-description"></a>

#### ✏ Description: 
Get or Set the minion wave interval (Times to spawn a minion. Usually 30s but for 15s in ARAM.)

<a name="cmd-minionwaveinterval-parameters"></a>

#### ⚙ Parameters:
    [seconds]
    	Required:	false
    	Type:		float
    	Usage:		Defines interval for minion wave to spawn
    	Default:	(The map's original interval, usually 30 but 15 for ARAMs)
<a name="cmd-minionwaveinterval-examples"></a>

#### 🔧 Examples:
    > mwi
    	(Get the minion wave interval)
    > minionwaveinterval
    	(Get the minion wave interval)
    > mwi 0.0625
    	(Set the minion wave to spawn every 0.0625 seconds (each game loop))
    > mwi 100
    	(Set the minion wave to spawn every 100 seconds.)
<a name="cmd-minionwaveinterval-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-playcutscene"></a>

## (`playcutscene` | `pcs`) `<mode>`
<a name="cmd-playcutscene-description"></a>

#### ✏ Description: 
Play a Cutscene file (`*.StormCutscene`) directly. Press `Esc` anytime to stop it.

The file path is relative to `*.stormmod/base.stormata`. (e.g If Cutscene file is in `mods/heroesdata.stormmod/base.stormdata/Cutscenes/EndOfMatch/EndOfMatch_LineUp_Tassadar.StormCutscene`, the path will be `Cutscenes/EndOfMatch/EndOfMatch_LineUp_Tassadar.StormCutscene`)

<a name="cmd-playcutscene-parameters"></a>

#### ⚙ Parameters:
    <mode>
    	Required:	true
    	Type:		string
    	Usage:		Defines the path of the *.StormCutscene file.
<a name="cmd-playcutscene-examples"></a>

#### 🔧 Examples:
    > pcs Cutscenes/Tutorial_CursedHollow.StormCutscene
    	(Plays the Tutorial Cutscene for Cursed Hollow)
    > playcutscene Cutscenes/StoreMuradin.StormCutscene
    	(Plays the Muradin Cutscene in the Collection Page (wait for 2 second to show Muradin))
<a name="cmd-playcutscene-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-removemarker"></a>

## (`removemarker` | `rmmarker`) `<MarkerID>`
<a name="cmd-removemarker-description"></a>

#### ✏ Description: 
Removes a specific marker.

<a name="cmd-removemarker-parameters"></a>

#### ⚙ Parameters:
    <MarkerID>
    	Required:	true
    	Type:		integer
    	Usage:		Defines the Marker ID to be added (up to 20).
<a name="cmd-removemarker-examples"></a>

#### 🔧 Examples:
    > rmmarker 1
    	(Removed Marker 1)
    > removemarker 10
    	(Removed Marker 10)
<a name="cmd-removemarker-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-resetcameraobject"></a>

## (`resetcameraobject` | `rco`) 
<a name="cmd-resetcameraobject-description"></a>

#### ✏ Description: 
Reset the game camera to `BlizzardAllStars` (default game camera)

<a name="cmd-resetcameraobject-parameters"></a>

#### ⚙ Parameters:
    None
<a name="cmd-resetcameraobject-examples"></a>

#### 🔧 Examples:
    > rco
    	(Reset the game camera to BlizzardAllStars)
    > resetcameraobject
    	(Reset the game camera to BlizzardAllStars)
<a name="cmd-resetcameraobject-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-resetgamespeed"></a>

## (`resetgamespeed` | `rgs`) 
<a name="cmd-resetgamespeed-description"></a>

#### ✏ Description: 
Reset the game speed 2 (Normal).

<a name="cmd-resetgamespeed-parameters"></a>

#### ⚙ Parameters:
    None
<a name="cmd-resetgamespeed-examples"></a>

#### 🔧 Examples:
    > rgs
    	(Reset the game speed 2 (Normal).)
    > resetgamespeed
    	(Reset the game speed 2 (Normal).)
<a name="cmd-resetgamespeed-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-restartgame"></a>

## (`restartgame` | `re`) 
<a name="cmd-restartgame-description"></a>

#### ✏ Description: 
Restart the map without needed to re-enter. This is extremely useful when you want to try the new modified XML files or galaxy scripts. 
 >Note: It will **NOT** reload or add mods from `Includes.xml` automatically. You will need to manually re-enter for mods to be added.

<a name="cmd-restartgame-parameters"></a>

#### ⚙ Parameters:
    None
<a name="cmd-restartgame-examples"></a>

#### 🔧 Examples:
    > re
    	(Restart the game instantly)
    > restartgame
    	(Restart the game instantly)
<a name="cmd-restartgame-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-setcameraobject"></a>

## (`setcameraobject` | `sco`) `<camera>`
<a name="cmd-setcameraobject-description"></a>

#### ✏ Description: 
Manually set the camera object. The parameter is the id of `<CCamera id="xxx">`.
>**WARNING**: Set a non existing camera will actually **crash** the game.

<a name="cmd-setcameraobject-parameters"></a>

#### ⚙ Parameters:
    <camera>
    	Required:	true
    	Type:		string
    	Usage:		Defines the camera object.
<a name="cmd-setcameraobject-examples"></a>

#### 🔧 Examples:
    > sco BlizzardAllStars
    	(Set the camera object to BlizzardAllStars (default game camera))
    > setcameraobject Dflt
    	(Set the camera object to Dlft (default SC2 camera))
<a name="cmd-setcameraobject-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-setgamespeed"></a>

## (`setgamespeed` | `sgs`) `<speed>`
<a name="cmd-setgamespeed-description"></a>

#### ✏ Description: 
Set the game speed.

The game speed can only between 0 - 4:

| value | speed |
|-|-|
| 0 | Slower |
| 1 | Slow |
| 2 | Normal |
| 3 | Fast |
| 4 | Faster |

<a name="cmd-setgamespeed-parameters"></a>

#### ⚙ Parameters:
    <speed>
    	Required:	true
    	Type:		integer
    	Usage:		Defines the game speed to be set (between 0 - 4).
<a name="cmd-setgamespeed-examples"></a>

#### 🔧 Examples:
    > sgs 0
    	(Set the game speed to 0 (Slower))
    > setgamespeed 3
    	(Set the game speed to 3 (Fast))
<a name="cmd-setgamespeed-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-startgame"></a>

## (`startgame` | `sg`) 
<a name="cmd-startgame-description"></a>

#### ✏ Description: 
Start the game instantly (timer start, gate open, etc).

<a name="cmd-startgame-parameters"></a>

#### ⚙ Parameters:
    None
<a name="cmd-startgame-examples"></a>

#### 🔧 Examples:
    > sg
    	(Start the game instantly)
    > startgame
    	(Start the game instantly)
<a name="cmd-startgame-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-string"></a>

## (`string` | `str`) `<mode>` `<value>`
<a name="cmd-string-description"></a>

#### ✏ Description: 
Display a string with the value of `TextExpressionAssemble` or `StringExternal`
This is pretty useful to quickly shows the string from the functions internally.
`mode` must be either `TextExpressionAssemble` or `StringExternal`

<a name="cmd-string-parameters"></a>

#### ⚙ Parameters:
    <mode>
    	Required:	true
    	Type:		string
    	Usage:		Defines the mode of the string to be displayed.
    <value>
    	Required:	true
    	Type:		string
    	Usage:		Defines the value of the string to be displayed
<a name="cmd-string-examples"></a>

#### 🔧 Examples:
    > str TextExpressionAssemble Param/Expression/lib_Sprt_B1FD42AF
    	(Shows the string "Set Mastery Ring..." from supportlib)
    > string StringExternal Param/Value/lib_Sprt_F697F4C7
    	(Shows the string "Game Speed should not exceed 8.0...." from supportlib)
<a name="cmd-string-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-togglecdr"></a>

## (`togglecdr` | `tcdr`) 
<a name="cmd-togglecdr-description"></a>

#### ✏ Description: 
Toggle Mass CDR. This will reset the cooldown on all abilities on every game loop (0.0625s)
This is useful to bypass the limit of trymode's Toggle Cooldown, as it have a 1.5s cooldown between each reset.

<a name="cmd-togglecdr-parameters"></a>

#### ⚙ Parameters:
    None
<a name="cmd-togglecdr-examples"></a>

#### 🔧 Examples:
    > tcdr
    	(Toggle Mass CDR)
    > togglecdr
    	(Toggle Mass CDR)
<a name="cmd-togglecdr-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-togglecrosshair"></a>

## (`togglecrosshair` | `tch`) 
<a name="cmd-togglecrosshair-description"></a>

#### ✏ Description: 
Toggle to show a crosshair on the center of the camera. This allows for e.g more precise placement of [summon units](#cmd-summon) and [adding effects](#cmd-addeffectcamera).

<a name="cmd-togglecrosshair-parameters"></a>

#### ⚙ Parameters:
    None
<a name="cmd-togglecrosshair-examples"></a>

#### 🔧 Examples:
    > tch
    	(Toggle showing crosshair)
    > togglecrosshair
    	(Toggle showing crosshair)
<a name="cmd-togglecrosshair-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-toggledebugmode"></a>

## (`toggledebugmode` | `tdb`) 
<a name="cmd-toggledebugmode-description"></a>

#### ✏ Description: 
Toggle Debug Mode by modifying the `libCore_gv_dEBUGDebuggingEnabled` variable)

<a name="cmd-toggledebugmode-parameters"></a>

#### ⚙ Parameters:
    None
<a name="cmd-toggledebugmode-examples"></a>

#### 🔧 Examples:
    > tdb
    	(Toggle Debug Mode)
    > toggledebugmode
    	(Toggle Debug Mode)
<a name="cmd-toggledebugmode-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-togglefogofwar"></a>

## (`togglefogofwar` | `tfow`) 
<a name="cmd-togglefogofwar-description"></a>

#### ✏ Description: 
Toggle Fog Of War. This can enable or disable full map vision.

<a name="cmd-togglefogofwar-parameters"></a>

#### ⚙ Parameters:
    None
<a name="cmd-togglefogofwar-examples"></a>

#### 🔧 Examples:
    > tfow
    	(Toggle Full Map Vision)
    > togglefogofwar
    	(Toggle Full Map Vision)
<a name="cmd-togglefogofwar-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-togglerandommovement"></a>

## (`togglerandommovement` | `trm`) `[radius]`
<a name="cmd-togglerandommovement-description"></a>

#### ✏ Description: 
![trm screenshot](https://i.imgur.com/d4fg4Oj.png)

Toggle random movement for selected units.

This command will create a circle on the center of your camera. The selected units will start moving randomly in the circle.
This allows to practice various stuff such as skill-shots.
Run this command to turn off this functionality.

>Tip: To get the most out of this tool, use [`alliancecontrolteamselection`](#cmd-alliancecontrolteamselection) to select desired units, then use [summon units](#cmd-summon) to let them move randomly.

>Tip: Also use [`addbehavior`](#cmd-addbehavior) command to add the `Mounted` (`adb Mounted`) behavior for faster movement (mount speed), and `adb DisableWeaponsBehavior` to disable their auto attacks,

>Note: You can still command the units that are moving randomly, but after all the commands are finished (e.g stopped), it will start moving randomly again to the circle

<a name="cmd-togglerandommovement-parameters"></a>

#### ⚙ Parameters:
    [radius]
    	Required:	false
    	Type:		float
    	Usage:		The radius of the circle that units will be moved randomly
    	Default:	7
<a name="cmd-togglerandommovement-examples"></a>

#### 🔧 Examples:
    > trm 10
    	(Toggle Random Movement with circle radius of 10.)
    > togglerandommovement
    	(Toggle Random Movement with circle radius of default 7.)
<a name="cmd-togglerandommovement-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-toggleui"></a>

## (`toggleui` | `tui`) 
<a name="cmd-toggleui-description"></a>

#### ✏ Description: 
Toggle User Interface. This can hide or show all the UIs including HP bar, talents panel, floating combat text, abilities bar etc.
>Note: If the UI is off, all abilities will be disabled.

<a name="cmd-toggleui-parameters"></a>

#### ⚙ Parameters:
    None
<a name="cmd-toggleui-examples"></a>

#### 🔧 Examples:
    > tui
    	(Toggle In game UI)
    > toggleui
    	(Toggle In game UI)
<a name="cmd-toggleui-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-wingame"></a>

## (`wingame` | `wg`) `<TeamID>`
<a name="cmd-wingame-description"></a>

#### ✏ Description: 
Instantly declare a win for a team and end the game.
Generally left team is **Team 1** and right team is **Team 2**.

<a name="cmd-wingame-parameters"></a>

#### ⚙ Parameters:
    <TeamID>
    	Required:	true
    	Type:		integer
    	Usage:		Defines the team ID to win the game.
<a name="cmd-wingame-examples"></a>

#### 🔧 Examples:
    > wg 1
    	(Win the game for Team 1)
    > wingame 2
    	(Win the game for Team 2)
<a name="cmd-wingame-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

---
<a name="lib-LibUNIT"></a>

# 📙 Units Library (`LibUnits.galaxy`):
A library with commands related to selected units, such as kill, spawn, etc.

<a name="cmd-addbehavior"></a>

## (`addbehavior` | `adb`) `<BehaviorId>`
<a name="cmd-addbehavior-description"></a>

#### ✏ Description: 
Add a behavior to selected unit(s). Which are generally from `<CBehavior*>`, such as `<CBehaviorBuff id="xxx">` or `<CBehaviorAbility id="xxx">`.

<a name="cmd-addbehavior-parameters"></a>

#### ⚙ Parameters:
    <BehaviorId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the behavior id to be added to selected units
<a name="cmd-addbehavior-examples"></a>

#### 🔧 Examples:
    > addbehavior MedivhArcaneBrillianceItem
    	(Add Medivh's Arcane Brilliance Ability to selected units)
    > adb PermaInvulnerable
    	(Make all selected units permanent Invulnerable)
<a name="cmd-addbehavior-uiAvailability"></a>

#### 🖼 UI Availability:
- ✔ **Yes.** Use the command `addbehaviorui` or `adbui` to toggle the UI counterpart of this command.



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-addeffect"></a>

## (`addeffect` | `ade`) `<EffectId>` `[amount]`
<a name="cmd-addeffect-description"></a>

#### ✏ Description: 
Add an Effect to selected unit(s). Which are generally from `<CEffect*>`, such as `<CEffectSet id="xxxx">` or `<CEffectCreatePersistent id="xxx">`.

<a name="cmd-addeffect-parameters"></a>

#### ⚙ Parameters:
    <EffectId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the effect id to be added to selected unit(s).
    [amount]
    	Required:	false
    	Type:		integer
    	Usage:		Defines the amount of effects to be added to the units
    	Default:	1
<a name="cmd-addeffect-examples"></a>

#### 🔧 Examples:
    > addeffect StormSuicide
    	(Make all selected units "suicide" a.k.a kill the unit)
    > ade MedivhPolyBombPersistent
    	(Make all selected units affect by Medivh's Polybomb)
    > ade GreymaneCursedBulletDamagePercentDamage 5
    	(Make all selected units hit by Greymane's Cursed Bullet (damage) 5 times in a row.)
<a name="cmd-addeffect-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-addeffectcamera"></a>

## (`addeffectcamera` | `adec`) `<EffectId>` `[amount]` `[PlayerID]`
<a name="cmd-addeffectcamera-description"></a>

#### ✏ Description: 
Add an Effect to the center of the camera. Which are generally from `<CEffect*>`, such as `<CEffectSet id="xxxx">` or `<CEffectCreatePersistent id="xxx">`.

<a name="cmd-addeffectcamera-parameters"></a>

#### ⚙ Parameters:
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
<a name="cmd-addeffectcamera-examples"></a>

#### 🔧 Examples:
    > addeffectcamera DropUnderworldPowerupPersistent
    	(Add some Haunted Mines Skulls to camera location)
    > adec UnderworldBossRootsCreatePersistent
    	(Add Haunted Mines's boss root animation to camera location)
    > addeffectcamera NecromancerRaiseSkeletonCreationPersistent 10
    	(Spawn 10 Xul's Sekelton to camera location)
    > adec NecromancerRaiseSkeletonCreationPersistent 10 6
    	(Spawn 10 Xul's Sekelton to camera location with the effect owner of Player 6)
<a name="cmd-addeffectcamera-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-addweapon"></a>

## (`addweapon` | `adw`) `<WeaponID>`
<a name="cmd-addweapon-description"></a>

#### ✏ Description: 
Add a weapon (Basic Attack) to selected unit(s). Usually found in `<CWeapon* id='xxx'>`

<a name="cmd-addweapon-parameters"></a>

#### ⚙ Parameters:
    <WeaponID>
    	Required:	true
    	Type:		string
    	Usage:		The ID of the weapon
<a name="cmd-addweapon-examples"></a>

#### 🔧 Examples:
    > adw AlexstraszaDragonConeWeapon
    	(Add Alexstrasza's Dragon Form weapon to selected unit(s))
    > addweapon FirebatHeroWeapon
    	(Add Blaze's weapon to selected unit(s))
<a name="cmd-addweapon-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-changeunitownership"></a>

## (`changeunitownership` | `cuo`) `<PlayerId>`
<a name="cmd-changeunitownership-description"></a>

#### ✏ Description: 
Changes ownership of the selected unit(s).
>Note: 0 is neutral, which cannot be selected once ownership have changed.

<a name="cmd-changeunitownership-parameters"></a>

#### ⚙ Parameters:
    <PlayerId>
    	Required:	true
    	Type:		integer
    	Usage:		The new owner of the selected unit(s).
<a name="cmd-changeunitownership-examples"></a>

#### 🔧 Examples:
    > changeunitownership 1
    	(Change all selected units's ownership to Player 1)
    > cuo
    	(Change all selected units's ownership to Player 6)
<a name="cmd-changeunitownership-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-clearbehavior"></a>

## (`clearbehavior` | `clb`) 
<a name="cmd-clearbehavior-description"></a>

#### ✏ Description: 
Clear all active behaviors for selected units.

<a name="cmd-clearbehavior-parameters"></a>

#### ⚙ Parameters:
    None
<a name="cmd-clearbehavior-examples"></a>

#### 🔧 Examples:
    > clb
    	(Clear all active behaviors for selected units)
    > clearbehavior
    	(Clear all active behaviors for selected units)
<a name="cmd-clearbehavior-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-clearunits"></a>

## (`clearunits` | `clu`) `[PlayerId]`
<a name="cmd-clearunits-description"></a>

#### ✏ Description: 
Clear all summoned unit(s) (summoned by the [summon](#cmd-summon) command) for a Player. This is useful for remove large numbers of summoned units, or when summoned untargetable/unselectable units that are not able to use the [killunits](#cmd-killunits) command.

>Note: Due to the memory limitation, only the **last 500 summoned units** will be able to remove with this command. Older units will not be affected, if you would like to remove ALL summoned units, either respec your hero, or restart the game.

>Self note: For each `MaxPlayer[16][100]`, is equivalent to around 30 `EventChatMessage` triggers. So more memory assigned to this, the less trigger can be used.

<a name="cmd-clearunits-parameters"></a>

#### ⚙ Parameters:
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		Define to clear which player's summoned unit(s).
    	Default:	The player id of whoever used this command.
<a name="cmd-clearunits-examples"></a>

#### 🔧 Examples:
    > clu
    	(Clear summoned unit(s) from player who used the command)
    > clearunits 6
    	(Clear summoned unit(s) from Player 6)
<a name="cmd-clearunits-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-clearweapon"></a>

## (`clearweapon` | `clw`) 
<a name="cmd-clearweapon-description"></a>

#### ✏ Description: 
Remove all weapons (Basic Attack) from selected unit(s). Usually found in `<CWeapon* id='xxx'>`

<a name="cmd-clearweapon-parameters"></a>

#### ⚙ Parameters:
    None
<a name="cmd-clearweapon-examples"></a>

#### 🔧 Examples:
    > clw
    	(Remove all weapons from selected units)
    > clearweapon
    	(Remove all weapons from selected units)
<a name="cmd-clearweapon-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-getbehavior"></a>

## (`getbehavior` | `getb`) 
<a name="cmd-getbehavior-description"></a>

#### ✏ Description: 
List all active behaviors for selected units.

<a name="cmd-getbehavior-parameters"></a>

#### ⚙ Parameters:
    None
<a name="cmd-getbehavior-examples"></a>

#### 🔧 Examples:
    > getb
    	(List all active behaviors for selected units)
    > getbehavior
    	(List all active behaviors for selected units)
<a name="cmd-getbehavior-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-getselectedunits"></a>

## (`getselectedunits` | `gsu`) `[PlayerId]`
<a name="cmd-getselectedunits-description"></a>

#### ✏ Description: 
Get all selected units from a specific player

<a name="cmd-getselectedunits-parameters"></a>

#### ⚙ Parameters:
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		Define which player to get all the units.
    	Default:	The player id of whoever used this command.
<a name="cmd-getselectedunits-examples"></a>

#### 🔧 Examples:
    > gsu
    	(Get all selected units from whoever uses this command)
    > getselectedunits 6
    	(Get all selected units from Player 6)
<a name="cmd-getselectedunits-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-getunitownership"></a>

## (`getunitownership` | `guo`) 
<a name="cmd-getunitownership-description"></a>

#### ✏ Description: 
Gets the Ownership (Player ID) of selected unit(s).

<a name="cmd-getunitownership-parameters"></a>

#### ⚙ Parameters:
    None
<a name="cmd-getunitownership-examples"></a>

#### 🔧 Examples:
    > guo
    	(Gets the Ownership (Player ID) of selected unit(s).)
    > getunitownership
    	(Gets the Ownership (Player ID) of selected unit(s).)
<a name="cmd-getunitownership-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-getunits"></a>

## (`getunits` | `gu`) `[PlayerId]`
<a name="cmd-getunits-description"></a>

#### ✏ Description: 
Get all units owned by a specific players

<a name="cmd-getunits-parameters"></a>

#### ⚙ Parameters:
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		Define which player to get all the units.
    	Default:	The player id of whoever used this command.
<a name="cmd-getunits-examples"></a>

#### 🔧 Examples:
    > gu
    	(Get all units own by whoever uses this command.)
    > getunits 7
    	(Get all units owned by Player 7)
    > getunits 15
    	(Get all units owned by Player 15 (Player 15 usually are neutral mercenary camps.))
<a name="cmd-getunits-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-getweapon"></a>

## (`getweapon` | `getw`) 
<a name="cmd-getweapon-description"></a>

#### ✏ Description: 
Get all weapons (Basic Attack) from selected unit(s). Usually found in `<CWeapon* id='xxx'>`

<a name="cmd-getweapon-parameters"></a>

#### ⚙ Parameters:
    None
<a name="cmd-getweapon-examples"></a>

#### 🔧 Examples:
    > getw
    	(Get all weapons from selected units)
    > getweapon
    	(Get all weapons from selected units)
<a name="cmd-getweapon-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-killunits"></a>

## (`killunits` | `ku`) 
<a name="cmd-killunits-description"></a>

#### ✏ Description: 
Instantly kill all selected unit(s).

<a name="cmd-killunits-parameters"></a>

#### ⚙ Parameters:
    None
<a name="cmd-killunits-examples"></a>

#### 🔧 Examples:
    > ku
    	(Instantly kill all selected unit(s).)
    > killunits
    	(Instantly kill all selected unit(s).)
<a name="cmd-killunits-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-playanimation"></a>

## (`playanimation` | `pa`) `<AnimationId>`
<a name="cmd-playanimation-description"></a>

#### ✏ Description: 
Play an Animation for selected unit(s).
>Note: There are Walk, Attack, A to Z animations etc

<a name="cmd-playanimation-parameters"></a>

#### ⚙ Parameters:
    <AnimationId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the Animation ID to be played on selected unit(s)
<a name="cmd-playanimation-examples"></a>

#### 🔧 Examples:
    > playanimation Attack
    	(Play the Attack Animation for selected unit(s))
    > pa Walk
    	(Play the Walk animation for selected unit(s))
<a name="cmd-playanimation-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-removeanimation"></a>

## (`removeanimation` | `rma`) `<AnimationId>`
<a name="cmd-removeanimation-description"></a>

#### ✏ Description: 
Remove an Animation from selected unit(s).
>Note: There are Walk, Attack, A to Z animations etc

<a name="cmd-removeanimation-parameters"></a>

#### ⚙ Parameters:
    <AnimationId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the Animation ID to be removed from selected unit(s)
<a name="cmd-removeanimation-examples"></a>

#### 🔧 Examples:
    > removeanimation Attack
    	(Stop the Attack Animation for selected unit(s))
    > rma Walk
    	(Stop the Walk animation for selected unit(s))
<a name="cmd-removeanimation-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-removebehavior"></a>

## (`removebehavior` | `rmb`) `<BehaviorId>`
<a name="cmd-removebehavior-description"></a>

#### ✏ Description: 
Remove a behavior from selected unit(s). Which are generally from `<CBehavior*>`, such as `<CBehaviorBuff id="xxx">` or `<CBehaviorAbility id="xxx">`.
> Tips: You can get active behaviors with the `getbehavior` command above.

<a name="cmd-removebehavior-parameters"></a>

#### ⚙ Parameters:
    <BehaviorId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the behavior id to be removed from selected units
<a name="cmd-removebehavior-examples"></a>

#### 🔧 Examples:
    > removebehavior MedivhArcaneBrillianceItem
    	(Remove Medivh's Arcane Brilliance Ability from selected units)
    > rmb PermaInvulnerable
    	(No longer makes all selected units permanent Invulnerable)
<a name="cmd-removebehavior-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-removeeffect"></a>

## (`removeeffect` | `rme`) `<EffectId>`
<a name="cmd-removeeffect-description"></a>

#### ✏ Description: 
Remove an Effect from selected unit(s). Which are generally from `<CEffect*>`, such as `<CEffectSet id="xxxx">` or `<CEffectCreatePersistent id="xxx">`.

<a name="cmd-removeeffect-parameters"></a>

#### ⚙ Parameters:
    <EffectId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the effect id to be removed from selected unit(s).
<a name="cmd-removeeffect-examples"></a>

#### 🔧 Examples:
    > removeeffect MedivhPolyBombPersistent
    	(No longer make selected unit(s) affect by Medivh's Polybomb)
    > rme MedivhPolyBombPersistent
    	(No longer make selected unit(s) affect by Medivh's Polybomb)
<a name="cmd-removeeffect-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-removeeffectcamera"></a>

## (`removeeffectcamera` | `rmec`) `<EffectId>`
<a name="cmd-removeeffectcamera-description"></a>

#### ✏ Description: 
Remove an Effect from the center of the camera. Which are generally from `<CEffect*>`, such as `<CEffectSet id="xxxx">` or `<CEffectCreatePersistent id="xxx">`.

<a name="cmd-removeeffectcamera-parameters"></a>

#### ⚙ Parameters:
    <EffectId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the effect id to be removed from the center of the camera.
<a name="cmd-removeeffectcamera-examples"></a>

#### 🔧 Examples:
    > removeeffectcamera DropUnderworldPowerupPersistent
    	(Remove Haunted Mines Skulls from camera location)
    > rmec UnderworldBossRootsCreatePersistent
    	(Remove Haunted Mines's boss root animation from camera location)
<a name="cmd-removeeffectcamera-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-removeweapon"></a>

## (`removeweapon` | `rmw`) `<WeaponID>`
<a name="cmd-removeweapon-description"></a>

#### ✏ Description: 
Remove a weapon (Basic Attack) from selected unit(s). Usually found in `<CWeapon* id='xxx'>`

<a name="cmd-removeweapon-parameters"></a>

#### ⚙ Parameters:
    <WeaponID>
    	Required:	true
    	Type:		string
    	Usage:		The ID of the weapon
<a name="cmd-removeweapon-examples"></a>

#### 🔧 Examples:
    > rmw AnaHeroWeapon
    	(Remove Ana's weapon from selected unit(s))
    > removeweapon DVaMechWeapon
    	(Remove D.va mech mode's weapon from selected unit(s))
<a name="cmd-removeweapon-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-replaceunit"></a>

## (`replaceunit` | `rpu`) `<TargetUnitId>`
<a name="cmd-replaceunit-description"></a>

#### ✏ Description: 
Replace all selected units to the Target Unit.
>Note: Don't recommend using this command, as weird stuff will happen if you replaced to an non-existing unit or unit getting killed. If it happens, use the debug menu to respawn your hero for resetting.

<a name="cmd-replaceunit-parameters"></a>

#### ⚙ Parameters:
    <TargetUnitId>
    	Required:	true
    	Type:		string
    	Usage:		Define the selected units to be replaced with. You can get the id from <CUnit id="xxx"> in the game XML files.
<a name="cmd-replaceunit-examples"></a>

#### 🔧 Examples:
    > rpu HeroRaynor
    	(Replace all selected unit(s) to Raynor Hero.)
    > replaceunit CatapultMinion
    	(Replace all selected unit(s) to Catapult Minion.)
<a name="cmd-replaceunit-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-sendactormessage"></a>

## (`sendactormessage` | `sam`) `<ActorMessage>`
<a name="cmd-sendactormessage-description"></a>

#### ✏ Description: 
Send an Actor Message for selected unit(s). Generally from `<CActor*>`, the `<on send="xxx">`.
>Note: The command allows spaces for the parameter, since most actor messages have spaces.

<a name="cmd-sendactormessage-parameters"></a>

#### ⚙ Parameters:
    <ActorMessage>
    	Required:	true
    	Type:		string
    	Usage:		Defines the Actor Message to be sent. (This parameter allows spaces.)
<a name="cmd-sendactormessage-examples"></a>

#### 🔧 Examples:
    > sendactormessage AnimPlay Spell Spell,A 0 -1.000000 -1.000000 1.000000 AsTimeScale
    	(Play the A Spell animation, different on each hero)
    > sam StatusIncrement StatusBarHide
    	(Hide the status bar, HP bar)
<a name="cmd-sendactormessage-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-summon"></a>

## (`summon` | `sum`) `<UnitId>` `[Amount]` `[PlayerId]` `[Scale]`
<a name="cmd-summon-description"></a>

#### ✏ Description: 
Spawn unit(s) at the centre of your camera location.
>Note: A new summoned unit will automatically added to select group.
>Note: To control the summoned units, you will need to enable multi-selection from either the [`alliancecontrolteamselection`](#cmd-alliancecontrolteamselection) command or QA Cheat Menu (`ts`, also use `/ac` if the unit does not belong to you), which will behave like Vikings and Samuro with Illusion Master. 
>Note: If your hero is Samuro, it will have some weird behavior for multi selection due to Blizzard's implementation of Samuro.

<a name="cmd-summon-parameters"></a>

#### ⚙ Parameters:
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
<a name="cmd-summon-examples"></a>

#### 🔧 Examples:
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
<a name="cmd-summon-uiAvailability"></a>

#### 🖼 UI Availability:
- ✔ **Yes.** Use the command `summonui` or `sumui` to toggle the UI counterpart of this command.



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-togglenoweaponcd"></a>

## (`togglenoweaponcd` | `tnwcd`) 
<a name="cmd-togglenoweaponcd-description"></a>

#### ✏ Description: 
Constantly resetting the weapons (auto attack) cooldown, effectively increasing weapon speed.

<a name="cmd-togglenoweaponcd-parameters"></a>

#### ⚙ Parameters:
    None
<a name="cmd-togglenoweaponcd-examples"></a>

#### 🔧 Examples:
    > tnwcd
    	(Constantly resetting the weapons (auto attack) cooldown)
    > togglenoweaponcd
    	(Constantly resetting the weapons (auto attack) cooldown)
<a name="cmd-togglenoweaponcd-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-toggleoutputid"></a>

## (`toggleoutputid` | `toi`) 
<a name="cmd-toggleoutputid-description"></a>

#### ✏ Description: 
Toggle displaying units' id mode. Which will shows the unit's id on the screen with a left click.

<a name="cmd-toggleoutputid-parameters"></a>

#### ⚙ Parameters:
    None
<a name="cmd-toggleoutputid-examples"></a>

#### 🔧 Examples:
    > toi
    	(Toggle displaying units' id mode.)
    > toggleoutputid
    	(Toggle displaying units' id mode.)
<a name="cmd-toggleoutputid-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-unitproperty"></a>

## (`unitproperty` | `up`) `<type>` `[value]`
<a name="cmd-unitproperty-description"></a>

#### ✏ Description: 
Allow to show / modify a selected units' property, such as max health, regen, movement speed etc.
If the `type` parameter is not supplied, it will return the value of the property. If the `type` parameter was set, it will modify the selected unit's property.

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

<a name="cmd-unitproperty-parameters"></a>

#### ⚙ Parameters:
    <type>
    	Required:	true
    	Type:		integer/string
    	Usage:		Set the type of the property to be get / modified. Please refer to the table above.
    [value]
    	Required:	false
    	Type:		float
    	Usage:		The value to be set for the property type
    	Default:	null
<a name="cmd-unitproperty-examples"></a>

#### 🔧 Examples:
    > up life
    	(Shows the unit's current HP)
    > up 0 1
    	(Set the selected units's Current HP to 1; MAX SPEEDZ TAZZZZDINGO)
    > unitproperty 6
    	(Show the selected unit's Max Energy, usually refers as resource bar, such as mana, Tracer bullet, Chen's brew etc.)
    > unitproperty energymax 10000
    	(Set the selected unit's Max Energy for 10000, usually refers as resource bar, such as mana, Tracer bullet, Chen's brew etc.)
    > unitproperty 28
    	(Shows the base movement speed of selected units.)
    > unitproperty basemovementspeed 10
    	(Set the base movement speed of selected units to 10. Note that base speed for heroes is 4.8398)
<a name="cmd-unitproperty-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

---
<a name="lib-LibPLYR"></a>

# 📙 Players Library (`LibPlayers.galaxy`):
Commands that are related to Players, eg, scoreboard, respawn timer, etc

<a name="cmd-addalltalent"></a>

## (`addalltalent` | `aat`) `<HeroId>` `[PlayerId]`
<a name="cmd-addalltalent-description"></a>

#### ✏ Description: 
Add all talents to a player.
The `HeroId` can be either the ID of `<CHero id="xxx">`, which will add all of the talents from that hero to the player, or it can be `ALL`, which will add ALL the talents in the game to the player.
>Note: Some of the talents won't work, so you might want to experiment a bit.

<a name="cmd-addalltalent-parameters"></a>

#### ⚙ Parameters:
    <HeroId>
    	Required:	true
    	Type:		string
    	Usage:		The talents from the Hero / all the talents in the game to be added from a player
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		The target player id to have the talent being added.
    	Default:	The player id of whoever used this command.
<a name="cmd-addalltalent-examples"></a>

#### 🔧 Examples:
    > aat Tyrande
    	(Add all the talents from Tyrande to the player whoever uses the command)
    > addalltalent Firebat 2
    	(Add all the talents from Blaze to Player 2)
    > aat ALL
    	(Add ALL the talents from the game to the player whoever uses the command)
    > addalltalent ALL 10
    	(Add ALL the talents from the game to the player 10)
<a name="cmd-addalltalent-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-addtalent"></a>

## (`addtalent` | `adt`) `<TalentId>` `[PlayerId]`
<a name="cmd-addtalent-description"></a>

#### ✏ Description: 
Add a talent to a player, generally found in `<CTalent id="xxxx">`.
>Note: Some of the talents won't work, so you might want to experiment a bit.

<a name="cmd-addtalent-parameters"></a>

#### ⚙ Parameters:
    <TalentId>
    	Required:	true
    	Type:		string
    	Usage:		The talent id to be added
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		The target player id to have the talent being added.
    	Default:	The player id of whoever used this command.
<a name="cmd-addtalent-examples"></a>

#### 🔧 Examples:
    > addtalent MedivhForceOfWillArcaneExplosion
    	(Add Medivh's Arcane Explosion Talent to whoever uses this command)
    > adt MalfurionCelestialAlignment 2
    	(add Malfurion's Celest>ial Alignment Talent to Player 2)
<a name="cmd-addtalent-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-disabletalent"></a>

## (`disabletalent` | `dist`) `<TalentId>`
<a name="cmd-disabletalent-description"></a>

#### ✏ Description: 
Disable a for all players. Generally found in `<CTalent id="xxxx">`.
>Note: This only lock the selection of the talent. If the player already took the talent, it will not have any effect on the player.

<a name="cmd-disabletalent-parameters"></a>

#### ⚙ Parameters:
    <TalentId>
    	Required:	true
    	Type:		string
    	Usage:		The talent id to be disabled.
<a name="cmd-disabletalent-examples"></a>

#### 🔧 Examples:
    > disabletalent RagnarosLavaWave
    	(Disable Rag's Lava Wave talent, similar to ARAM.)
    > dist MaievUmbralBindPursuitOfVengeance 0
    	(Disable Maiev's Pursuit Of Vengeance talent)
<a name="cmd-disabletalent-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-enabletalent"></a>

## (`enabletalent` | `ent`) `<TalentId>`
<a name="cmd-enabletalent-description"></a>

#### ✏ Description: 
Enable a disabled talent for all players. Generally found in `<CTalent id="xxxx">`.

<a name="cmd-enabletalent-parameters"></a>

#### ⚙ Parameters:
    <TalentId>
    	Required:	true
    	Type:		string
    	Usage:		The talent id to be enabled.
<a name="cmd-enabletalent-examples"></a>

#### 🔧 Examples:
    > enabletalent RagnarosLavaWave
    	(Enable Rag's Lava Wave talent, which was disabled in ARAM.)
    > ent MaievUmbralBindPursuitOfVengeance
    	(Enable Maiev's Pursuit Of Vengeance talent)
<a name="cmd-enabletalent-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-experience"></a>

## (`experience` | `xp`) `<Amount>` `[PlayerId]` `[SourceId]`
<a name="cmd-experience-description"></a>

#### ✏ Description: 
Gives Experience to a Specific Player.

The `SourceId` can be represent as an Integer with the source value of:
|`SourceId`|Galaxy file constant|
|-|-|
|0|`libGame_ge_XPSources_Debug`|
|1|`libGame_ge_XPSources_Trickle`|
|2|`libGame_ge_XPSources_Minion`|
|3|`libGame_ge_XPSources_Creep`|
|4|`libGame_ge_XPSources_Hero`|
|5|`libGame_ge_XPSources_Structure`|
|6|`libGame_ge_XPSources_RegenGlobe`|

<a name="cmd-experience-parameters"></a>

#### ⚙ Parameters:
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
<a name="cmd-experience-examples"></a>

#### 🔧 Examples:
    > xp 10
    	(Grant 10 xp to whoever use this command)
    > experience 100 6
    	(Grant 100 xp to Player 6)
    > experience 100 1 2
    	(Grant 100 xp to Player 1 with its source set to minons)
<a name="cmd-experience-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-getcatalog"></a>

## (`getcatalog` | `gcl`) `<CatalogReference>` `[PlayerID]`
<a name="cmd-getcatalog-description"></a>

#### ✏ Description: 
Directly get a Catalog value (a.k.a XMLs) from a player.

The `CatalogReference` string consist of three parts: `<Catagory Type>,<Catagory Entry>,<Catalog Field Path>` seperated by comma, whereas:
- `<Catagory Type>`: The type of the catalog, which usually is the "seconds word" of the entry. Take `CBehaviorBuff` as example, it consist of three parts: 
  - `C` (Catalog)
  - `Behavior` (Type) `<-- This One`
  - `Buff` (Sub-Type)
  - The value is the second "Capitialised Word": `Behavior`. Similarly, `CAbilEffectInstant`, the value will be `Abil`, `CValidatorPlayerTalent` will be `Validator`.
- `<Catagory Entry>`: The ID of the target catagory. (`id="xxx"`)
- `<Catalog Field Path>`: The field path of the targeted `<Catagory Entry>`.
  - Nested level uses `.` to prepresent. If the target field is not `value="xxx", it need to be nested here as well.`
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
In order to get the reference to her Basic attack range, the `CatalogReference` string will be `Weapon,HeroWizardWeapon,Range`

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
In order to get his Jet Propulsion (E) Cooldown Reference, the `CatalogReference` will be `Abil,FirebatJetPropulsion,Cost.Cooldown.TimeUse`

Another Example: (Extracted from `stukovdata.xml`, Stukov's Data file: Stukov's Talent `Biotic Armor`, gains 15 Armor to ally affect by healing pathogen)
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
In order to reference the armor value against Structure, the `CatalogReference` will be `Behavior,StukovHealingPathogenBioticArmorPhysicalArmorBehavior,ArmorModification.ArmorSet[Structure].ArmorMitigationTable[Basic]`.

<a name="cmd-getcatalog-parameters"></a>

#### ⚙ Parameters:
    <CatalogReference>
    	Required:	true
    	Type:		string
    	Usage:		The Reference to the specific catalog field
    [PlayerID]
    	Required:	false
    	Type:		integer
    	Usage:		The Player ID for the catalog modification
    	Default:	The player id of whoever used this command.
<a name="cmd-getcatalog-examples"></a>

#### 🔧 Examples:
    > getcatalog Effect,WizardTeleportCalamityDamage,Amount
    	(Get Li-Ming's Calamity damage from whoever uses this command)
    > gcl Abil,VarianCharge,Cost.Vital[Energy]
    	(Get Varian's Charge mana cost from whoever uses this command)
    > gcl Behavior,Mounted,Modification.UnifiedMoveSpeedFactor 2
    	(Get the mount speed for all Heroes from Player 2)
    > gcl Weapon,StukovHeroWeapon,Period
    	(Getl Stukov's Basic Attack speed from whoever uses this command)
    > gcl Weapon,ChromieHeroWeapon,Effect
    	(Get Chromie's Basic Attack Effect from whoever uses this command)
    > gcl Behavior,DehakaDarkSwarm,Modification.StateFlags[SuppressCollision] 2
    	(Get Dehaka's Dark Swarm Ability Supress Collision flag value when active from Player 2)
<a name="cmd-getcatalog-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-modifycatalog"></a>

## (`modifycatalog` | `mcl`) `<CatalogReference>` `<value>` `[PlayerID]`
<a name="cmd-modifycatalog-description"></a>

#### ✏ Description: 
Directly modify a Catalog value (a.k.a XMLs) for a player in runtime.

For how to obtain and construct `CatalogReference`, Please refer to the [`getcatalog`](#cmd-getcatalog-description) command.

**Caveats:**
 - Some of the fields are READ-ONLY, meaning it cannot be modified, e.g `Unit,HeroChromie,PlaneArray[Air]` (Unable to make Chromie become an air unit like Medivh Raven). This would require an override to the XML instead (see [MODDING.md](MODDING.md)).
 - The catalog modification is applied after parental inheritance, meaning that it is not possible to modify a parent (`parent="xxx"`) for its effect to apply to all child catalogs. You must need to do it on each of the child catalogs.
 - It is not possible "create" a value that does not exist after the map loaded. Meaning it can only modify value based on existed ones (after inherit attributes from parent)

<a name="cmd-modifycatalog-parameters"></a>

#### ⚙ Parameters:
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
<a name="cmd-modifycatalog-examples"></a>

#### 🔧 Examples:
    > modifycatalog Effect,WizardTeleportCalamityDamage,Amount 9999
    	(Modify Li=Ming's Calamity damage to 9999 for the whoever uses this command)
    > mcl Abil,VarianCharge,Cost.Vital[Energy] 5
    	(Modify Varian's Charge mana cost to 5 for whoever uses this command)
    > mcl Behavior,Mounted,Modification.UnifiedMoveSpeedFactor -0.3 2
    	(Modify the mount speed for all Heroes to -30% (30% slower instead of faster) for Player 2)
    > mcl Weapon,StukovHeroWeapon,Period 0.0625
    	(Modify Stukov's Basic Attack speed to 16 (1 second performs 16 attacks = 0.0625 period per AA) for whoever uses this command)
    > mcl Weapon,ChromieHeroWeapon,Effect WizardWeaponLaunchSwitch
    	(Modify Chromie's Basic Attack to behave like Li-ming's Basic Attack (Shooting a Purple Missle) for whoever uses this command)
    > mcl Behavior,DehakaDarkSwarm,Modification.StateFlags[SuppressCollision] 0 2
    	(Modify Dehaka's Dark Swarm Ability to no longer Supress Collision When active (No longer pass though units) for Player 2)
<a name="cmd-modifycatalog-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-removealltalent"></a>

## (`removealltalent` | `rmat`) `<HeroId>` `[PlayerId]`
<a name="cmd-removealltalent-description"></a>

#### ✏ Description: 
Remove all talents from a player.
The `HeroId` can be either the ID of `<CHero id="xxx">`, which will remove all of the talents from that hero from the player, or it can be `ALL`, which will remove ALL the talents in the game from the player.
>Note: Some of the talents won't work, so you might want to experiment a bit.

<a name="cmd-removealltalent-parameters"></a>

#### ⚙ Parameters:
    <HeroId>
    	Required:	true
    	Type:		string
    	Usage:		The talents from the Hero / all the talents in the game to be removed from a player
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		The target player id to have the talent being added.
    	Default:	The player id of whoever used this command.
<a name="cmd-removealltalent-examples"></a>

#### 🔧 Examples:
    > rmat Tyrande
    	(Remove all the talents from Tyrande from the player whoever uses the command)
    > removealltalent Firebat 2
    	(Remove all the talents from Blaze from Player 2)
    > rmat ALL
    	(Remove ALL the talents from the game from the player whoever uses the command)
    > removealltalent ALL 10
    	(Remove ALL the talents from the game from the player 10)
<a name="cmd-removealltalent-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-removetalent"></a>

## (`removetalent` | `rmt`) `<TalentId>` `[PlayerId]`
<a name="cmd-removetalent-description"></a>

#### ✏ Description: 
Remove a talent from a player, generally found in `<CTalent id="xxxx">`.
>Note: Some of the talents won't work, so you might want to experiment a bit.

<a name="cmd-removetalent-parameters"></a>

#### ⚙ Parameters:
    <TalentId>
    	Required:	true
    	Type:		string
    	Usage:		The talent id to be removed
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		The target player id to have the talent being removed.
    	Default:	The player id of whoever used this command.
<a name="cmd-removetalent-examples"></a>

#### 🔧 Examples:
    > removetalent MedivhForceOfWillArcaneExplosion
    	(Removed Medivh's Arcane Explosion Talent from whoever uses this command)
    > rmt MalfurionCelestialAlignment 2
    	(Removed Malfurion's Celest>ial Alignment Talent from Player 2)
<a name="cmd-removetalent-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-resetoverlay"></a>

## (`resetoverlay` | `rol`) 
<a name="cmd-resetoverlay-description"></a>

#### ✏ Description: 
Remove all the overlays with the default one.

<a name="cmd-resetoverlay-parameters"></a>

#### ⚙ Parameters:
    None
<a name="cmd-resetoverlay-examples"></a>

#### 🔧 Examples:
    > rol
    	(Remove all the overlays with the default one.)
    > resetoverlay
    	(Remove all the overlays with the default one.)
<a name="cmd-resetoverlay-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-respawnpoint"></a>

## (`respawnpoint` | `rsp`) `<Action>` `[PlayerId/all]`
<a name="cmd-respawnpoint-description"></a>

#### ✏ Description: 
Modify the respawn point for a player. Either at the current camera location or its default location.

<a name="cmd-respawnpoint-parameters"></a>

#### ⚙ Parameters:
    <Action>
    	Required:	true
    	Type:		string
    	Usage:		Choose the action of the comman. (set = set the respawn location at camera location, reset = reset all respawn location)
    [PlayerId/all]
    	Required:	false
    	Type:		integer/string
    	Usage:		Set the player id for the spawn modification to take effect, use "all" for all players.
    	Default:	The player id of whoever used this command.
<a name="cmd-respawnpoint-examples"></a>

#### 🔧 Examples:
    > respawnpoint set all
    	(set the respawn point for all players at the current camera location)
    > rsp set
    	(set the respawn point to player who uses the command at the current camera location)
    > respawnpoint set 6
    	(set the respawn point for player 6 at camera location)
    > rsp reset 2
    	(reset player 2's respawn point to default location)
    > rsp reset all
    	(reset all player's respawn point to its default respawn location (hall of storms).)
<a name="cmd-respawnpoint-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-respawntime"></a>

## (`respawntime` | `rst`) `<seconds>`
<a name="cmd-respawntime-description"></a>

#### ✏ Description: 
Override the current respawn timer for all players.
>Notice: Due to the system limitation, if you set to 0, it will change it to 0.0625 automatically (1 game tick).

<a name="cmd-respawntime-parameters"></a>

#### ⚙ Parameters:
    <seconds>
    	Required:	true
    	Type:		float
    	Usage:		The respawn time to be set for all players
<a name="cmd-respawntime-examples"></a>

#### 🔧 Examples:
    > respawntime 99
    	(set the respawn timer to 99 seconds)
    > rst 0
    	(set the respawn timer to 0.0625 second)
<a name="cmd-respawntime-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-setmasteryring"></a>

## (`setmasteryring` | `smr`) `<MasteryRingLevel>`
<a name="cmd-setmasteryring-description"></a>

#### ✏ Description: 
Set the Mastery Ring level. The ring below the hero will be automatically updated.
>Note: If the new Level is lower than the current one, you may need to respawn(e.g suicide) the selected units.

<a name="cmd-setmasteryring-parameters"></a>

#### ⚙ Parameters:
    <MasteryRingLevel>
    	Required:	true
    	Type:		integer
    	Usage:		The level of the mastery ring to be set.
<a name="cmd-setmasteryring-examples"></a>

#### 🔧 Examples:
    > setmasteryring 0
    	(Remove the mastery ring from the player)
    > smr 3
    	(Set the mastery ring to Level 3.)
<a name="cmd-setmasteryring-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-setoverlay"></a>

## (`setoverlay` | `sol`) `<OverlayPath>`
<a name="cmd-setoverlay-description"></a>

#### ✏ Description: 
Set the in-game overlay (e.g golden overlay for Uther's Divine Shield). 
>Note: The path is relative to `*.storm*/base.gamedata/`, usually with the extension of `*.stormcutscene`.

<a name="cmd-setoverlay-parameters"></a>

#### ⚙ Parameters:
    <OverlayPath>
    	Required:	true
    	Type:		string
    	Usage:		The path of the overlay file, relative to base.stormdata.
<a name="cmd-setoverlay-examples"></a>

#### 🔧 Examples:
    > sol Cutscenes/GameUI_InvulnerableOverlay.StormCutscene
    	(Set the overlay to "Invulnerable", e.g Divine Shield / Sanctification.)
    > setoverlay cutscenes\gameui_gorgeoverlay.stormcutscene
    	(Set the overlay to Stitches Gorge.)
<a name="cmd-setoverlay-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-setscore"></a>

## (`setscore` | `score`) `<Field>` `<Value>` `[PlayerId]`
<a name="cmd-setscore-description"></a>

#### ✏ Description: 
Set the score for the scoreboard (some of them will shows in tab screen). This is good to use when some talents interact with scoreboard such as Zagara's Infest.
>Note: Though Infest internal function limits to `524%`, max of fixed value, but details are out of scope here.
You can obtain these FIELDs from `ScoreValueData.xml` in `heroesdata.stormmod`
>Note: Some fields uses Integer and some uses Fixed. However because this function is unified using `PlayerScoreValueSetFromInt()`, all decimals will be removed. As such, the max value for fixed is `524287` and `2147483647` for Integer. This limitation might change later.

<a name="cmd-setscore-parameters"></a>

#### ⚙ Parameters:
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
<a name="cmd-setscore-examples"></a>

#### 🔧 Examples:
    > setscore HeroDamage 0
    	(Set the field "Hero Damage" to 0 for the player who use this command.)
    > score SoloKill 524287
    	(Set the field "Kils" to 5242873 for the player who use this command)
    > score Healing 1000 2
    	(Set the field "Healing" to 1000 for the player 2)
<a name="cmd-setscore-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-togglemassquest"></a>

## (`togglemassquest` | `tmq`) `[stacks]`
<a name="cmd-togglemassquest-description"></a>

#### ✏ Description: 
Toggle mass quest completion mode to give stack every game tick (0.0625s).
>Note: This is useful on heroes with actual infinite stacking such as Zuljin or Nazeebo. However due to Integeroverflow, after reached certain amount for the quest, the actual functionality will be overflowed, such as Nazeebo HP reduced to 1 if having max stacks with lv4 extra HP per stacltalent

<a name="cmd-togglemassquest-parameters"></a>

#### ⚙ Parameters:
    [stacks]
    	Required:	false
    	Type:		integer
    	Usage:		The amount of stack to be added every game tick (0.0626s)
    	Default:	1
<a name="cmd-togglemassquest-examples"></a>

#### 🔧 Examples:
    > tmq 10
    	(Enable mass quest completion mode and give 10 stacks every game tick if not enabled)
    > togglemassquest
    	(Disable mass quest completion mode if enabled)
<a name="cmd-togglemassquest-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-togglepausegametalent"></a>

## (`togglepausegametalent` | `tpgt`) 
<a name="cmd-togglepausegametalent-description"></a>

#### ✏ Description: 
Toggle whether to pause the game when viewing talents, similar to heores tutorial.

<a name="cmd-togglepausegametalent-parameters"></a>

#### ⚙ Parameters:
    None
<a name="cmd-togglepausegametalent-examples"></a>

#### 🔧 Examples:
    > tpgt
    	(Toggle whether to pause the game when viewing talents)
    > togglepausegametalent
    	(Toggle whether to pause the game when viewing talents)
<a name="cmd-togglepausegametalent-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-toggletalenttree"></a>

## (`toggletalenttree` | `ttt`) 
<a name="cmd-toggletalenttree-description"></a>

#### ✏ Description: 
Toggle the display of the talents selection tree.

<a name="cmd-toggletalenttree-parameters"></a>

#### ⚙ Parameters:
    None
<a name="cmd-toggletalenttree-examples"></a>

#### 🔧 Examples:
    > ttt
    	(Toggle the display of the talents selection tree.)
    > toggletalenttree
    	(Toggle the display of the talents selection tree.)
<a name="cmd-toggletalenttree-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

---
<a name="lib-libBULM"></a>

# 📙 Builder Mode Library (`LibBuilderMode.galaxy`):
A Builder Library that allows you to place objects anywhere in the map.

<a name="lib-libBULM-description"></a>

**This system is still in a early development.**
Builder mode allows you to place objects to anywhere in the map. The units will constantly teleport to your cursor (follow your cursor). Remember to select `/ac` and `ts` in QA menu (this will added automatically in future development).
To use builder mode, select a unit, or units and press `backspace`. Builder mode will then be activated and you can place the units where you like.
To place the unit(s), press `backspace` again to deactivate builder mode.



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

---
<a name="lib-libFPSM"></a>

# 📙 FPS Mode Library (`LibFPSMode.galaxy`):
A First Person Shooter like Library that allows you to see the map in first person camera.

<a name="lib-libFPSM-description"></a>

**This system is still in a early development.**
FPS Mode allows you to look at the map by using a first person camera on your unit. The camera will constantly look forward and turn as well as long as the mode is activated.
To toggle FPS mode, simply use the `fps` chat command.
### Controls:
 - `u` : Move your unit forward. (It will also clear queue commands and **Hold Position** after moved.)
 - `← (arrow key)` : Turn your unit and camera to left.
 - `→ (arrow key)` : Turn your unit and camera to right.
 - `↑ (arrow key)` : Turn your camera upwards.
 - `↓ (arrow key)` : Turn your camera downwards.



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

---
<a name="lib-libFRCM"></a>

# 📙 Free Camera Mode Library (`LibFreeCameraMode.galaxy`):
Free Camera Mode allows you to change the angle of the camera easily.

<a name="lib-libFRCM-description"></a>

**This system is still in a early development.**
Free Camera Mode allows you to use `Middle Mouse Wheel` to freely change your camera angel and direction.
To enable or disable, simply use the chat command `tfc` or `togglefreecamera`!
>Note: Camera pan (move the camera by pushing mouse to the edge) will be disabled when free camera mode is active



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

---
<a name="lib-libFUNY"></a>

# 📙 Funny Stuff Library (`LibFunny.galaxy`):
Random useless stuff just for the lolz.

<a name="lib-libFUNY-description"></a>

>Vm0weE1HRnRVWGRPVmxwT1ZsZG9WRmxVU205alJsVjNWMjFHYUZKdVFsaFdiWFF3VmtkS1NGVnVjRnBXVmxsM1dWWmFTMWRYUmtsYVJscFhUVEF4TkZkV1dsWmtNbFpJVkd0c1ZXSkdTbGhXYlhoM1UxWmtXV05GZEZSaVZscFhWR3hhYjFReFdsVlNiV2hoVmpOQ1ExUnNSVGxRVVQwOQ==



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

---
