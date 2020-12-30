<a name="meta-top"></a>

# Usage
<sup>*(Generated from [doc.json](./(10)trymemode.stormmap/base.stormdata/Modules/doc.json) at Wed, 30 Dec 2020 10:56:58 GMT)*</sup>

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

  - 💭 [Command: `alliancecontrolteamselection`](#cmd-alliancecontrolteamselection)

  - 💭 [Command: `clear`](#cmd-clear)

  - 💭 [Command: `endgame`](#cmd-endgame)

  - 💭 [Command: `forceruntrigger`](#cmd-forceruntrigger)

  - 💭 [Command: `minionwaveinterval`](#cmd-minionwaveinterval)

  - 💭 [Command: `resetcameraobject`](#cmd-resetcameraobject)

  - 💭 [Command: `restartgame`](#cmd-restartgame)

  - 💭 [Command: `setcameraobject`](#cmd-setcameraobject)

  - 💭 [Command: `startgame`](#cmd-startgame)

  - 💭 [Command: `toggledebugmode`](#cmd-toggledebugmode)

  - 💭 [Command: `togglefogofwar`](#cmd-togglefogofwar)

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

  - 💭 [Command: `countbehavior`](#cmd-countbehavior)

  - 💭 [Command: `getbehavior`](#cmd-getbehavior)

  - 💭 [Command: `getunitownership`](#cmd-getunitownership)

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

  - 💭 [Command: `disabletalent`](#cmd-disabletalent)

  - 💭 [Command: `enabletalent`](#cmd-enabletalent)

  - 💭 [Command: `getcatalog`](#cmd-getcatalog)

  - 💭 [Command: `modifycatalog`](#cmd-modifycatalog)

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
    > sco Dflt
    	(Set the camera object to Dlft (default SC2 camera))
<a name="cmd-setcameraobject-uiAvailability"></a>

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

## (`addeffect` | `ade`) `<EffectId>`
<a name="cmd-addeffect-description"></a>

#### ✏ Description: 
Add an Effect to selected unit(s). Which are generally from `<CEffect*>`, such as `<CEffectSet id="xxxx">` or `<CEffectCreatePersistent id="xxx">`.

<a name="cmd-addeffect-parameters"></a>

#### ⚙ Parameters:
    <EffectId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the effect id to be added to selected unit(s).
<a name="cmd-addeffect-examples"></a>

#### 🔧 Examples:
    > addeffect StormSuicide
    	(Make the unit "suicide" a.k.a kill the unit)
    > ade MedivhPolyBombPersistent
    	(Make all selected units affect by Medivh's Polybomb)
<a name="cmd-addeffect-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-addeffectcamera"></a>

## (`addeffectcamera` | `adec`) `<EffectId>`
<a name="cmd-addeffectcamera-description"></a>

#### ✏ Description: 
Add an Effect to the center of the camera. Which are generally from `<CEffect*>`, such as `<CEffectSet id="xxxx">` or `<CEffectCreatePersistent id="xxx">`.

<a name="cmd-addeffectcamera-parameters"></a>

#### ⚙ Parameters:
    <EffectId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the effect id to be added to the center of the camera.
<a name="cmd-addeffectcamera-examples"></a>

#### 🔧 Examples:
    > addeffectcamera DropUnderworldPowerupPersistent
    	(Add some Haunted Mines Skulls to camera location)
    > adec UnderworldBossRootsCreatePersistent
    	(Add Haunted Mines's boss root animation to camera location)
<a name="cmd-addeffectcamera-uiAvailability"></a>

#### 🖼 UI Availability:
- ❌ **Not Implemented**



[\[Return to Table of Contents 🧾\]](#meta-toc)

[\[Return to Top ⬆\]](#meta-top)

<a name="cmd-addweapon"></a>

## (`addweapon` | `adw`) `<WeaponID>`
<a name="cmd-addweapon-description"></a>

#### ✏ Description: 
Add a weapon to selected unit(s). Usually found in `<CWeapon* id='xxx'>`

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
    > cuo6
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

>Note: Due to the memory limitation, only the **last 927 summoned units** will be able to remove with this command. Older units will not be affected, if you would like to remove ALL summoned units, either respec your hero, or restart the game.

<a name="cmd-clearunits-parameters"></a>

#### ⚙ Parameters:
    [PlayerId]
    	Required:	false
    	Type:		string
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

<a name="cmd-countbehavior"></a>

## (`countbehavior` | `ctb`) `<BehaviorId>`
<a name="cmd-countbehavior-description"></a>

#### ✏ Description: 
Count the number of a specific behavior from selected unit(s). Which are generally from `<CBehavior*>`, such as `<CBehaviorBuff id="xxx">` or `<CBehaviorAbility id="xxx">`.
> Tips: You can get active behaviors with the `getbehavior` command above.

<a name="cmd-countbehavior-parameters"></a>

#### ⚙ Parameters:
    <BehaviorId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the behavior id to be counted from selected units
<a name="cmd-countbehavior-examples"></a>

#### 🔧 Examples:
    > countbehavior MedivhArcaneBrillianceItem
    	(Count Medivh's Arcane Brilliance Ability from selected units)
    > ctb PermaInvulnerable
    	(Count selected unit's permanent Invulnerable behavior)
<a name="cmd-countbehavior-uiAvailability"></a>

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
Remove a weapon from selected unit(s). Usually found in `<CWeapon* id='xxx'>`

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
    	Type:		string
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
|Type|Galaxy file constant|
|-|-|
|0|c_unitPropLife|
|1|c_unitPropLifePercent|
|2|c_unitPropLifeMax|
|3|c_unitPropLifeRegen|
|4|c_unitPropEnergy|
|5|c_unitPropEnergyPercent|
|6|c_unitPropEnergyMax|
|7|c_unitPropEnergyRegen|
|8|c_unitPropShields|
|9|c_unitPropShieldsPercent|
|10|c_unitPropShieldsMax|
|11|c_unitPropShieldsRegen|
|12|c_unitPropKills|
|17|c_unitPropHeight|
|18|c_unitPropMovementSpeed|
|20|c_unitPropResources|
|21|c_unitPropRadius|
|22|c_unitPropXP|
|23|c_unitPropLevel|
|24|c_unitPropKillXP|
|28|c_unitPropBaseMovementSpeed|
|29|c_unitPropMovementSpeedCurrent|
|30|c_unitPropLifeExpectedPercent|

<a name="cmd-unitproperty-parameters"></a>

#### ⚙ Parameters:
    <type>
    	Required:	true
    	Type:		integer
    	Usage:		Set the type of the property to be modified. Please refer to the table above.
    [value]
    	Required:	false
    	Type:		float
    	Usage:		The value to be set for the property type
    	Default:	null
<a name="cmd-unitproperty-examples"></a>

#### 🔧 Examples:
    > up 0
    	(Shows the unit's current HP)
    > up 0 1
    	(Set the selected units's Current HP to 1; MAX SPEEDZ TAZZZZDINGO)
    > unitproperty 6
    	(Show the selected unit's Max Energy, usually refers as resource bar, such as mana, Tracer bullet, Chen's brew etc.)
    > unitproperty 6 10000
    	(Set the selected unit's Max Energy for 10000, usually refers as resource bar, such as mana, Tracer bullet, Chen's brew etc.)
    > unitproperty 28
    	(Shows the base movement speed of selected units.)
    > unitproperty 28 10
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
    	Usage:		The talent id to be enabled/disabled.
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
    	Usage:		The talent id to be enabled/disabled.
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
    	Type:		string
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
    	Type:		string
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
    	Type:		string
    	Usage:		The target player id to have the talent being removed.
    	Default:	The player id of whoever used this command.
<a name="cmd-removetalent-examples"></a>

#### 🔧 Examples:
    > removetalent MedivhForceOfWillArcaneExplosion
    	(Removed Medivh's Arcane Explosion Talent from Player 1)
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
