# Usage
<sup>*(Generated from [doc.json](./(10)trymemode.stormmap/base.stormdata/Modules/doc.json) at Fri, 04 Dec 2020 10:57:11 GMT)*</sup>

Generally, most of the functionalities are using chat commands. Simply type the commands in the chat box (like how you would normally chat with teammates).
>Note: Remember to either use allies or all chat channel when try to use the commands. Public chat channels and Private Messages (PM) does not work.

Most commands have a short alias command, they both have identical functionality which let you to type less.

# Libraries
|Library Name|File Name|Library ID|Library Description|
|-|-|-|-|
|Module Loader|LibModuleLoader.galaxy|LibMODL|A unified Module Loader Lib that allows you to choose which module to load|
|Utilities|LibUtilities.galaxy|LibUTIL|A Library that have utilities tools such as "Toggle Fog Of War", "Toggle UI", etc.|
|Units|LibUnits.galaxy|LibUNIT|A library with commands related to selected units, such as kill, spawn, etc.|
|Players|LibPlayers.galaxy|LibPLYR|Commands that are related to Players, eg, scoreboard, respawn timer, etc|
|Builder Mode|LibBuilderMode.galaxy|libBULM|A Builder Library that allows you to place objects anywhere in the map.|
|FPS Mode|LibFPSMode.galaxy|libFPSM|A First Person Shooter like Library that allows you to see the map in first person camera.|
|Free Camera Mode|LibFreeCameraMode.galaxy|libFRCM|Free Camera Mode allows you to change the angle of the camera easily.|
|Funny Module|LibFunny.galaxy|libFUNY|Random useless stuff just for the lolz.|
# Table of Contents
- [Module Loader](#lib-LibMODL)

- [Utilities](#lib-LibUTIL)

  - [Command: `clear`](#cmd-clear)

  - [Command: `endgame`](#cmd-endgame)

  - [Command: `resetcameraobject`](#cmd-resetcameraobject)

  - [Command: `restartgame`](#cmd-restartgame)

  - [Command: `setcameraobject`](#cmd-setcameraobject)

  - [Command: `startgame`](#cmd-startgame)

  - [Command: `toggledebugmode`](#cmd-toggledebugmode)

  - [Command: `togglefogofwar`](#cmd-togglefogofwar)

  - [Command: `toggleui`](#cmd-toggleui)

  - [Command: `wingame`](#cmd-wingame)

- [Units](#lib-LibUNIT)

  - [Command: `addbehavior`](#cmd-addbehavior)

  - [Command: `addeffect`](#cmd-addeffect)

  - [Command: `addeffect`](#cmd-addeffect)

  - [Command: `addeffectcamera`](#cmd-addeffectcamera)

  - [Command: `changeunitownership`](#cmd-changeunitownership)

  - [Command: `countbehavior`](#cmd-countbehavior)

  - [Command: `getbehavior`](#cmd-getbehavior)

  - [Command: `getunitownership`](#cmd-getunitownership)

  - [Command: `killunits`](#cmd-killunits)

  - [Command: `playanimation`](#cmd-playanimation)

  - [Command: `removeanimation`](#cmd-removeanimation)

  - [Command: `removebehavior`](#cmd-removebehavior)

  - [Command: `removeeffectcamera`](#cmd-removeeffectcamera)

  - [Command: `sendactormessage`](#cmd-sendactormessage)

  - [Command: `setscale`](#cmd-setscale)

  - [Command: `summon`](#cmd-summon)

  - [Command: `togglenoweaponcd`](#cmd-togglenoweaponcd)

  - [Command: `toggleoutputid`](#cmd-toggleoutputid)

  - [Command: `unitproperty`](#cmd-unitproperty)

- [Players](#lib-LibPLYR)

  - [Command: `enabletalent`](#cmd-enabletalent)

  - [Command: `remvetalent`](#cmd-remvetalent)

  - [Command: `respawnpoint`](#cmd-respawnpoint)

  - [Command: `respawntime`](#cmd-respawntime)

  - [Command: `setmasteryring`](#cmd-setmasteryring)

  - [Command: `setscore`](#cmd-setscore)

  - [Command: `togglemassquest`](#cmd-togglemassquest)

  - [Command: `togglepausegametalent`](#cmd-togglepausegametalent)

  - [Command: `toggletalenttree`](#cmd-toggletalenttree)

- [Builder Mode](#lib-libBULM)

- [FPS Mode](#lib-libFPSM)

- [Free Camera Mode](#lib-libFRCM)

- [Funny Module](#lib-libFUNY)

<a name="lib-LibMODL"/>

# Module Loader Library (`LibModuleLoader.galaxy`):
A unified Module Loader Lib that allows you to choose which module to load

<a name="lib-LibMODL-description"/>

This module is for loading other modules. Do not modify this file in SC2Editor.

---
<a name="lib-LibUTIL"/>

# Utilities Library (`LibUtilities.galaxy`):
A Library that have utilities tools such as "Toggle Fog Of War", "Toggle UI", etc.

<a name="cmd-clear" />

## (`clear` | `cls`) `[seconds]`
<a name="cmd-clear-description" />

#### Description: 
Allow to clear all text messages, including chat and debug messages.

<a name="cmd-clear-parameters" />

#### Parameters:
    [seconds]
    	Required:	false
    	Type:		float
    	Usage:		Defines the delay to clear text messages in seconds.
    	Default:	0
<a name="cmd-clear-examples" />

#### Examples:
    > cls
    	(Clear all texts instantly)
    > clear
    	(Clear all texts after 5.4 seconds)
<a name="cmd-endgame" />

## (`endgame` | `eg`) 
<a name="cmd-endgame-description" />

#### Description: 
End the game instantly and kick all players from the game.

<a name="cmd-endgame-parameters" />

#### Parameters:
    None
<a name="cmd-endgame-examples" />

#### Examples:
    > eg
    	(End the game instantly)
    > endgame
    	(End the game instantly)
<a name="cmd-resetcameraobject" />

## (`resetcameraobject` | `rco`) 
<a name="cmd-resetcameraobject-description" />

#### Description: 
Reset the game camera to BlizzardAllStars (default game camera)

<a name="cmd-resetcameraobject-parameters" />

#### Parameters:
    None
<a name="cmd-resetcameraobject-examples" />

#### Examples:
    > rco
    	(Reset the game camera to BlizzardAllStars)
    > resetcameraobject
    	(Reset the game camera to BlizzardAllStars)
<a name="cmd-restartgame" />

## (`restartgame` | `re`) 
<a name="cmd-restartgame-description" />

#### Description: 
Allow to restart and reload the map, without exit and re-enter it. This is extremely useful when you want to try the new modified XML files or scripts. 
 >Note: It will **NOT** reload or add mods from `Includes.xml` automatically. You will need to actually exit the map and re-enter if you need to do so.

<a name="cmd-restartgame-parameters" />

#### Parameters:
    None
<a name="cmd-restartgame-examples" />

#### Examples:
    > re
    	(Restart the game instantly)
    > restartgame
    	(Restart the game instantly)
<a name="cmd-setcameraobject" />

## (`setcameraobject` | `sco`) `<camera>`
<a name="cmd-setcameraobject-description" />

#### Description: 
Manually set the camera object. The parameter is the id of `<CCamera id="xxx">`.
>**WARNING**: Set a non existing camera will actually **crash** the game!

<a name="cmd-setcameraobject-parameters" />

#### Parameters:
    <camera>
    	Required:	true
    	Type:		string
    	Usage:		Defines the camera object.
<a name="cmd-setcameraobject-examples" />

#### Examples:
    > sco BlizzardAllStars
    	(Set the camera object to BlizzardAllStars (default game camera))
    > sco Dflt
    	(Set the camera object to Dlft (default SC2 camera))
<a name="cmd-startgame" />

## (`startgame` | `sg`) 
<a name="cmd-startgame-description" />

#### Description: 
Allow to start the game instantly (timer start, gate open, etc).

<a name="cmd-startgame-parameters" />

#### Parameters:
    None
<a name="cmd-startgame-examples" />

#### Examples:
    > sg
    	(Start the game instantly)
    > startgame
    	(Start the game instantly)
<a name="cmd-toggledebugmode" />

## (`toggledebugmode` | `tdb`) 
<a name="cmd-toggledebugmode-description" />

#### Description: 
Toggle Debug Mode (the `libCore_gv_dEBUGDebuggingEnabled` variable)

<a name="cmd-toggledebugmode-parameters" />

#### Parameters:
    None
<a name="cmd-toggledebugmode-examples" />

#### Examples:
    > tdb
    	(Toggle Debug Mode)
    > toggledebugmode
    	(Toggle Debug Mode)
<a name="cmd-togglefogofwar" />

## (`togglefogofwar` | `tfow`) 
<a name="cmd-togglefogofwar-description" />

#### Description: 
Toggle Fog Of War. This can enable or disable full map vision.

<a name="cmd-togglefogofwar-parameters" />

#### Parameters:
    None
<a name="cmd-togglefogofwar-examples" />

#### Examples:
    > tfow
    	(Toggle Full Map Vision)
    > togglefogofwar
    	(Toggle Full Map Vision)
<a name="cmd-toggleui" />

## (`toggleui` | `tui`) 
<a name="cmd-toggleui-description" />

#### Description: 
Toggle User Interface. This can hide or show all the UIs including HP bar, talents panel, floating combat text, abilities bar etc.

>Note: If UI is off, all abilities will be disabled.

<a name="cmd-toggleui-parameters" />

#### Parameters:
    None
<a name="cmd-toggleui-examples" />

#### Examples:
    > tui
    	(Toggle In game UI)
    > toggleui
    	(Toggle In game UI)
<a name="cmd-wingame" />

## (`wingame` | `wg`) `<TeamID>`
<a name="cmd-wingame-description" />

#### Description: 
Instantly declare a win for a team and end the game.
Generally left team is **Team 1** and right team is **Team 2**.

<a name="cmd-wingame-parameters" />

#### Parameters:
    <TeamID>
    	Required:	true
    	Type:		integer
    	Usage:		Defines the team ID to win the game.
<a name="cmd-wingame-examples" />

#### Examples:
    > wg 1
    	(Win the game for Team 1)
    > wingame 2
    	(Win the game for Team 2)
---
<a name="lib-LibUNIT"/>

# Units Library (`LibUnits.galaxy`):
A library with commands related to selected units, such as kill, spawn, etc.

<a name="cmd-addbehavior" />

## (`addbehavior` | `adb`) `<BehaviorId>`
<a name="cmd-addbehavior-description" />

#### Description: 
Add a behavior to selected unit(s). Which are generally from `<CBehavior*>`, such as `<CBehaviorBuff id="xxx">` or `<CBehaviorAbility id="xxx">`.

<a name="cmd-addbehavior-parameters" />

#### Parameters:
    <BehaviorId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the behavior id to be added to selected units
<a name="cmd-addbehavior-examples" />

#### Examples:
    > addbehavior MedivhArcaneBrillianceItem
    	(Add Medivh's Arcane Brilliance Ability to selected units)
    > adb PermaInvulnerable
    	(Make all selected units permanent Invulnerable)
<a name="cmd-addeffect" />

## (`addeffect` | `ade`) `<EffectId>`
<a name="cmd-addeffect-description" />

#### Description: 
Add an Effect to selected unit(s). Which are generally from `<CEffect*>`, such as `<CEffectSet id="xxxx">` or `<CEffectCreatePersistent id="xxx">`.

<a name="cmd-addeffect-parameters" />

#### Parameters:
    <EffectId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the effect id to be added to selected unit(s).
<a name="cmd-addeffect-examples" />

#### Examples:
    > addeffect StormSuicide
    	(Make the unit "suicide" a.k.a kill the unit)
    > ade MedivhPolyBombPersistent
    	(Make all selected units affect by Medivh's Polybomb)
<a name="cmd-addeffect" />

## (`addeffect` | `rme`) `<EffectId>`
<a name="cmd-addeffect-description" />

#### Description: 
Remove an Effect from selected unit(s). Which are generally from `<CEffect*>`, such as `<CEffectSet id="xxxx">` or `<CEffectCreatePersistent id="xxx">`.

<a name="cmd-addeffect-parameters" />

#### Parameters:
    <EffectId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the effect id to be removed from selected unit(s).
<a name="cmd-addeffect-examples" />

#### Examples:
    > removeeffect MedivhPolyBombPersistent
    	(No longer make selected unit(s) affect by Medivh's Polybomb)
    > rme MedivhPolyBombPersistent
    	(No longer make selected unit(s) affect by Medivh's Polybomb)
<a name="cmd-addeffectcamera" />

## (`addeffectcamera` | `adec`) `<EffectId>`
<a name="cmd-addeffectcamera-description" />

#### Description: 
Add an Effect to the center of the camera. Which are generally from `<CEffect*>`, such as `<CEffectSet id="xxxx">` or `<CEffectCreatePersistent id="xxx">`.

<a name="cmd-addeffectcamera-parameters" />

#### Parameters:
    <EffectId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the effect id to be added to the center of the camera.
<a name="cmd-addeffectcamera-examples" />

#### Examples:
    > addeffectcamera DropUnderworldPowerupPersistent
    	(Add some Haunted Mines Skulls to camera location)
    > adec UnderworldBossRootsCreatePersistent
    	(Add Haunted Mines's boss root animation to camera location)
<a name="cmd-changeunitownership" />

## (`changeunitownership` | `cuo`) `<PlayerId>`
<a name="cmd-changeunitownership-description" />

#### Description: 
Changes ownership of the selected unit(s).
>Note: 0 is neutral, which cannot be selected once ownership have changed.

<a name="cmd-changeunitownership-parameters" />

#### Parameters:
    <PlayerId>
    	Required:	true
    	Type:		integer
    	Usage:		The new owner of the selected unit(s).
<a name="cmd-changeunitownership-examples" />

#### Examples:
    > changeunitownership 1
    	(Change all selected units's ownership to Player 1)
    > cuo6
    	(Change all selected units's ownership to Player 6)
<a name="cmd-countbehavior" />

## (`countbehavior` | `ctb`) `<BehaviorId>`
<a name="cmd-countbehavior-description" />

#### Description: 
Count the number of a specific behavior from selected unit(s). Which are generally from `<CBehavior*>`, such as `<CBehaviorBuff id="xxx">` or `<CBehaviorAbility id="xxx">`.

> Tips: You can get active behaviors with the `getbehavior` command above.

<a name="cmd-countbehavior-parameters" />

#### Parameters:
    <BehaviorId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the behavior id to be counted from selected units
<a name="cmd-countbehavior-examples" />

#### Examples:
    > countbehavior MedivhArcaneBrillianceItem
    	(Count Medivh's Arcane Brilliance Ability from selected units)
    > ctb PermaInvulnerable
    	(Count selected unit's permanent Invulnerable behavior)
<a name="cmd-getbehavior" />

## (`getbehavior` | `getb`) 
<a name="cmd-getbehavior-description" />

#### Description: 
List all active behaviors for selected units.

<a name="cmd-getbehavior-parameters" />

#### Parameters:
    None
<a name="cmd-getbehavior-examples" />

#### Examples:
    > getb
    	(List all active behaviors for selected units)
    > getbehavior
    	(List all active behaviors for selected units)
<a name="cmd-getunitownership" />

## (`getunitownership` | `guo`) 
<a name="cmd-getunitownership-description" />

#### Description: 
Gets the Ownership (Player ID) of selected unit(s).

<a name="cmd-getunitownership-parameters" />

#### Parameters:
    None
<a name="cmd-getunitownership-examples" />

#### Examples:
    > guo
    	(Gets the Ownership (Player ID) of selected unit(s).)
    > getunitownership
    	(Gets the Ownership (Player ID) of selected unit(s).)
<a name="cmd-killunits" />

## (`killunits` | `ku`) 
<a name="cmd-killunits-description" />

#### Description: 
Instantly kill all selected unit(s).

<a name="cmd-killunits-parameters" />

#### Parameters:
    None
<a name="cmd-killunits-examples" />

#### Examples:
    > ku
    	(Instantly kill all selected unit(s).)
    > killunits
    	(Instantly kill all selected unit(s).)
<a name="cmd-playanimation" />

## (`playanimation` | `pa`) `<AnimationId>`
<a name="cmd-playanimation-description" />

#### Description: 
Play an Animation for selected unit(s).
>Note: There are Walk, Attack, A to Z animations etc

<a name="cmd-playanimation-parameters" />

#### Parameters:
    <AnimationId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the Animation ID to be played on selected unit(s)
<a name="cmd-playanimation-examples" />

#### Examples:
    > playanimation Attack
    	(Play the Attack Animation for selected unit(s))
    > pa Walk
    	(Play the Walk animation for selected unit(s))
<a name="cmd-removeanimation" />

## (`removeanimation` | `rma`) `<AnimationId>`
<a name="cmd-removeanimation-description" />

#### Description: 
Remove an Animation from selected unit(s).
>Note: There are Walk, Attack, A to Z animations etc

<a name="cmd-removeanimation-parameters" />

#### Parameters:
    <AnimationId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the Animation ID to be removed from selected unit(s)
<a name="cmd-removeanimation-examples" />

#### Examples:
    > removeanimation Attack
    	(Stop the Attack Animation for selected unit(s))
    > rma Walk
    	(Stop the Walk animation for selected unit(s))
<a name="cmd-removebehavior" />

## (`removebehavior` | `rmb`) `<BehaviorId>`
<a name="cmd-removebehavior-description" />

#### Description: 
Remove a behavior from selected unit(s). Which are generally from `<CBehavior*>`, such as `<CBehaviorBuff id="xxx">` or `<CBehaviorAbility id="xxx">`.

> Tips: You can get active behaviors with the `getbehavior` command above.

<a name="cmd-removebehavior-parameters" />

#### Parameters:
    <BehaviorId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the behavior id to be removed from selected units
<a name="cmd-removebehavior-examples" />

#### Examples:
    > removebehavior MedivhArcaneBrillianceItem
    	(Remove Medivh's Arcane Brilliance Ability from selected units)
    > rmb PermaInvulnerable
    	(No longer makes all selected units permanent Invulnerable)
<a name="cmd-removeeffectcamera" />

## (`removeeffectcamera` | `rmec`) `<EffectId>`
<a name="cmd-removeeffectcamera-description" />

#### Description: 
Remove an Effect from the center of the camera. Which are generally from `<CEffect*>`, such as `<CEffectSet id="xxxx">` or `<CEffectCreatePersistent id="xxx">`.

<a name="cmd-removeeffectcamera-parameters" />

#### Parameters:
    <EffectId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the effect id to be removed from the center of the camera.
<a name="cmd-removeeffectcamera-examples" />

#### Examples:
    > removeeffectcamera DropUnderworldPowerupPersistent
    	(Remove Haunted Mines Skulls from camera location)
    > rmec UnderworldBossRootsCreatePersistent
    	(Remove Haunted Mines's boss root animation from camera location)
<a name="cmd-sendactormessage" />

## (`sendactormessage` | `sam`) `<ActorMessage>`
<a name="cmd-sendactormessage-description" />

#### Description: 
Send an Actor Message for selected unit(s). Generally from `<CActor*>`, the `<on send="xxx">`.
>Note: The command allows spaces for the parameter, since most actor messages have spaces.

<a name="cmd-sendactormessage-parameters" />

#### Parameters:
    <ActorMessage>
    	Required:	true
    	Type:		string
    	Usage:		Defines the Actor Message to be sent. (This parameter allows spaces.)
<a name="cmd-sendactormessage-examples" />

#### Examples:
    > sendactormessage AnimPlay Spell Spell,A 0 -1.000000 -1.000000 1.000000 AsTimeScale
    	(Play the A Spell animation, different on each hero)
    > sam StatusIncrement StatusBarHide
    	(Hide the status bar, HP bar)
<a name="cmd-setscale" />

## (`setscale` | `ss`) `<ScaleAmount>`
<a name="cmd-setscale-description" />

#### Description: 
Set the scale of the summon units for the command `summon`.

>Note: 1.0 is default scale for all of the units.

>Note: This is UI change only, the relative attack range, movement speed, etc will not change.

<a name="cmd-setscale-parameters" />

#### Parameters:
    <ScaleAmount>
    	Required:	true
    	Type:		float
    	Usage:		Set the scale for the summon unit afterwards.
<a name="cmd-setscale-examples" />

#### Examples:
    > setscale 0.1
    	(Set the scale of the summon unit to 0.1 (1/10, or 10% of the normal size))
    > ss 1.5
    	(Set the scale of the summon unit to 1.5 (50% bigger than normal size))
<a name="cmd-summon" />

## (`summon` | `sum`) `<UnitId>` `[PlayerId]` `[Amount]`
<a name="cmd-summon-description" />

#### Description: 
Spawn unit(s) at the centre of your camera location.
>Note: It will also enable multi-selection, like Vikings and Samuro with Illusion Master. However, there are some issues that have conflict to `/ac` QA Cheat menu, which I recommend you first turn `/ac` on if you would like to use this command.

>Note: If your hero is Samuro, it will have some weird behavior for multi selection.

<a name="cmd-summon-parameters" />

#### Parameters:
    <UnitId>
    	Required:	true
    	Type:		string
    	Usage:		Define the unit to be spawned. You can get the id from <CUnit id="xxx"> in the game XML files.
    [PlayerId]
    	Required:	false
    	Type:		string
    	Usage:		Define which player to own the unit that spawned.
    	Default:	The player id of whoever used this command.
    [Amount]
    	Required:	false
    	Type:		string
    	Usage:		Define the amount of unit(s) to be spawned
    	Default:	1
<a name="cmd-summon-examples" />

#### Examples:
    > summon TownTownHallL2
    	(Summon a tower structure to the player who used the command)
    > summon HeroRaynor 1 5
    	(Summon 5 Raynor Hero units for player 1)
    > sum JungleGraveGolemDefender 6
    	(Summon A boss golem for player 6)
<a name="cmd-togglenoweaponcd" />

## (`togglenoweaponcd` | `tnwcd`) 
<a name="cmd-togglenoweaponcd-description" />

#### Description: 
Constantly resetting the weapons (auto attack) cooldown, effectively increasing weapon speed.

<a name="cmd-togglenoweaponcd-parameters" />

#### Parameters:
    None
<a name="cmd-togglenoweaponcd-examples" />

#### Examples:
    > tnwcd
    	(Constantly resetting the weapons (auto attack) cooldown)
    > togglenoweaponcd
    	(Constantly resetting the weapons (auto attack) cooldown)
<a name="cmd-toggleoutputid" />

## (`toggleoutputid` | `toi`) 
<a name="cmd-toggleoutputid-description" />

#### Description: 
Toggle displaying units' id mode. Which will shows the unit's id on the screen with a left click.

<a name="cmd-toggleoutputid-parameters" />

#### Parameters:
    None
<a name="cmd-toggleoutputid-examples" />

#### Examples:
    > toi
    	(Toggle displaying units' id mode.)
    > toggleoutputid
    	(Toggle displaying units' id mode.)
<a name="cmd-unitproperty" />

## (`unitproperty` | `up`) `<type>` `<value>`
<a name="cmd-unitproperty-description" />

#### Description: 
Allow to modify a selected units' property, such as max health, regen, movement speed etc.


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

<a name="cmd-unitproperty-parameters" />

#### Parameters:
    <type>
    	Required:	true
    	Type:		integer
    	Usage:		Set the type of the property to be modified. Please refer to the table above.
    <value>
    	Required:	true
    	Type:		float
    	Usage:		The value to be set for the property type
<a name="cmd-unitproperty-examples" />

#### Examples:
    > up 0 1
    	(Set the selected units's Current HP to 1; MAX SPEEDZ TAZZZZDINGO)
    > unitproperty 6 10000
    	(Set the selected unit's Max Energy for 10000 (usually means resource bar, such as mana, Tracer bullet, Chen's brew etc.))
---
<a name="lib-LibPLYR"/>

# Players Library (`LibPlayers.galaxy`):
Commands that are related to Players, eg, scoreboard, respawn timer, etc

<a name="cmd-enabletalent" />

## (`enabletalent` | `ent`) `<TalentId>` `[isEnable]`
<a name="cmd-enabletalent-description" />

#### Description: 
Enable / Disable a talent for all player. Generally found in `<CTalent id="xxxx">`.
>Note: This only lock the selection of the talent. If the player already took the talent, it will not have any effect on the player.

<a name="cmd-enabletalent-parameters" />

#### Parameters:
    <TalentId>
    	Required:	true
    	Type:		string
    	Usage:		The talent id to be enabled/disabled.
    [isEnable]
    	Required:	false
    	Type:		integer
    	Usage:		Set whether the talent should be enabled or disabled. (0 = disable, 1 = enable)
    	Default:	1
<a name="cmd-enabletalent-examples" />

#### Examples:
    > enabletalent RagnarosLavaWave 1
    	(Enable Rag's Lava Wave talent, which was disabled in ARAM.)
    > ent MaievUmbralBindPursuitOfVengeance 0
    	(Disable Maiev's Pursuit Of Vengeance talent)
<a name="cmd-remvetalent" />

## (`remvetalent` | `rmt`) `<TalentId>` `[PlayerId]`
<a name="cmd-remvetalent-description" />

#### Description: 
Remove a talent from a player, generally found in `<CTalent id="xxxx">`.
>Note: Some of the talents won't work, so you might want to experiment a bit.

<a name="cmd-remvetalent-parameters" />

#### Parameters:
    <TalentId>
    	Required:	true
    	Type:		string
    	Usage:		The talent id to be removed
    [PlayerId]
    	Required:	false
    	Type:		string
    	Usage:		The target player id to have the talent being removed.
    	Default:	The player id of whoever used this command.
<a name="cmd-remvetalent-examples" />

#### Examples:
    > removetalent MedivhForceOfWillArcaneExplosion
    	(Removed Medivh's Arcane Explosion Talent from Player 1)
    > rmt MalfurionCelestialAlignment 2
    	(Removed Malfurion's Celest>ial Alignment Talent from Player 2)
<a name="cmd-respawnpoint" />

## (`respawnpoint` | `rsp`) `<Action>` `[PlayerId/all]`
<a name="cmd-respawnpoint-description" />

#### Description: 
Modify the respawn point for a player. Either at the current camera location or its default location.

<a name="cmd-respawnpoint-parameters" />

#### Parameters:
    <Action>
    	Required:	true
    	Type:		string
    	Usage:		Choose the action of the comman. (set = set the respawn location at camera location, reset = reset all respawn location)
    [PlayerId/all]
    	Required:	false
    	Type:		integer/string
    	Usage:		Set the player id for the spawn modification to take effect, use "all" for all players.
    	Default:	The player id of whoever used this command.
<a name="cmd-respawnpoint-examples" />

#### Examples:
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
<a name="cmd-respawntime" />

## (`respawntime` | `rst`) `<seconds>`
<a name="cmd-respawntime-description" />

#### Description: 
Override the current respawn timer for all players.
>Notice: Due to the system limitation, if you set to 0, it will change it to 0.0625 automatically (1 game tick).

<a name="cmd-respawntime-parameters" />

#### Parameters:
    <seconds>
    	Required:	true
    	Type:		float
    	Usage:		The respawn time to be set for all players
<a name="cmd-respawntime-examples" />

#### Examples:
    > respawntime 99
    	(set the respawn timer to 99 seconds)
    > rst 0
    	(set the respawn timer to 0.0625 second)
<a name="cmd-setmasteryring" />

## (`setmasteryring` | `smr`) `<MasteryRingLevel>`
<a name="cmd-setmasteryring-description" />

#### Description: 
Set the Mastery Ring level. The ring below the hero will be automatically updated.
>Note: If the new Level is lower than the current one, you may need to respawn(e.g suicide) the selected units.

<a name="cmd-setmasteryring-parameters" />

#### Parameters:
    <MasteryRingLevel>
    	Required:	true
    	Type:		integer
    	Usage:		The level of the mastery ring to be set.
<a name="cmd-setmasteryring-examples" />

#### Examples:
    > setmasteryring 0
    	(Remove the mastery ring from the player)
    > smr 3
    	(Set the mastery ring to Level 3.)
<a name="cmd-setscore" />

## (`setscore` | `score`) `<Field>` `<Value>` `[PlayerId]`
<a name="cmd-setscore-description" />

#### Description: 
Set the score for the scoreboard (some of them will shows in tab screen). This is good to use when some talents interact with scoreboard such as Zagara's Infest.
>Note: Though Infest internal function limits to `524%`, max of fixed value, but details are out of scope here.

You can obtain these FIELDs from `ScoreValueData.xml` in `heroesdata.stormmod`

>Note: Some fields uses Integer and some uses Fixed. However because this function is unified using `PlayerScoreValueSetFromInt()`, all decimals will be removed. As such, the max value for fixed is `524287` and `2147483647` for Integer. This limitation might change later.

<a name="cmd-setscore-parameters" />

#### Parameters:
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
<a name="cmd-setscore-examples" />

#### Examples:
    > setscore HeroDamage 0
    	(Set the field "Hero Damage" to 0 for the player who use this command.)
    > score SoloKill 524287
    	(Set the field "Kils" to 5242873 for the player who use this command)
    > score Healing 1000 2
    	(Set the field "Healing" to 1000 for the player 2)
<a name="cmd-togglemassquest" />

## (`togglemassquest` | `tmq`) `[stacks]`
<a name="cmd-togglemassquest-description" />

#### Description: 
Toggle mass quest completion mode to give stack every game tick (0.0625s).
>Note: This is useful on heroes with actual infinite stacking such as Zuljin or Nazeebo. However due to Integeroverflow, after reached certain amount for the quest, the actual functionality will be overflowed, such as Nazeebo HP reduced to 1 if having max stacks with lv4 extra HP per stacltalent

<a name="cmd-togglemassquest-parameters" />

#### Parameters:
    [stacks]
    	Required:	false
    	Type:		integer
    	Usage:		The amount of stack to be added every game tick (0.0626s)
    	Default:	1
<a name="cmd-togglemassquest-examples" />

#### Examples:
    > tmq 10
    	(Enable mass quest completion mode and give 10 stacks every game tick if not enabled)
    > togglemassquest
    	(Disable mass quest completion mode if enabled)
<a name="cmd-togglepausegametalent" />

## (`togglepausegametalent` | `tpgt`) 
<a name="cmd-togglepausegametalent-description" />

#### Description: 
Toggle whether to pause the game when viewing talents, similar to heores tutorial.

<a name="cmd-togglepausegametalent-parameters" />

#### Parameters:
    None
<a name="cmd-togglepausegametalent-examples" />

#### Examples:
    > tpgt
    	(Toggle whether to pause the game when viewing talents)
    > togglepausegametalent
    	(Toggle whether to pause the game when viewing talents)
<a name="cmd-toggletalenttree" />

## (`toggletalenttree` | `ttt`) 
<a name="cmd-toggletalenttree-description" />

#### Description: 
Toggle the display of the talents selection tree.

<a name="cmd-toggletalenttree-parameters" />

#### Parameters:
    None
<a name="cmd-toggletalenttree-examples" />

#### Examples:
    > ttt
    	(Toggle the display of the talents selection tree.)
    > toggletalenttree
    	(Toggle the display of the talents selection tree.)
---
<a name="lib-libBULM"/>

# Builder Mode Library (`LibBuilderMode.galaxy`):
A Builder Library that allows you to place objects anywhere in the map.

<a name="lib-libBULM-description"/>

**This system is still in a early development.**



Builder mode allows you to place objects to anywhere in the map. The units will constantly teleport to your cursor (follow your cursor). Remember to select `/ac` and `ts` in QA menu (this will added automatically in future development).



To use builder mode, select a unit, or units and press `backspace`. Builder mode will then be activated and you can place the units where you like.



To place the unit(s), press `backspace` again to deactivate builder mode.



---
<a name="lib-libFPSM"/>

# FPS Mode Library (`LibFPSMode.galaxy`):
A First Person Shooter like Library that allows you to see the map in first person camera.

<a name="lib-libFPSM-description"/>

**This system is still in a early development.**



FPS Mode allows you to look at the map by using a first person camera on your unit. The camera will constantly look forward and turn as well as long as the mode is activated.



To toggle FPS mode, simply use the `fps` chat command.



### Controls:



 - `u` : Move your unit forward. (It will also clear queue commands and **Hold Position** after moved.)

 - `← (arrow key)` : Turn your unit and camera to left.

 - `→ (arrow key)` : Turn your unit and camera to right.

 - `↑ (arrow key)` : Turn your camera upwards.

 - `↓ (arrow key)` : Turn your camera downwards.



---
<a name="lib-libFRCM"/>

# Free Camera Mode Library (`LibFreeCameraMode.galaxy`):
Free Camera Mode allows you to change the angle of the camera easily.

<a name="lib-libFRCM-description"/>

**This system is still in a early development.**

Free Camera Mode allows you to use `Middle Mouse Wheel` to freely change your camera angel and direction.

To enable or disable, simply use the chat command `tfc` or `togglefreecamera`!

>Note: Camera pan (move the camera by pushing mouse to the edge) will be disabled when free camera mode is active


---
<a name="lib-libFUNY"/>

# Funny Module Library (`LibFunny.galaxy`):
Random useless stuff just for the lolz.

<a name="lib-libFUNY-description"/>

>Vm0weE1HRnRVWGRPVmxwT1ZsZG9WRmxVU205alJsVjNWMjFHYUZKdVFsaFdiWFF3VmtkS1NGVnVjRnBXVmxsM1dWWmFTMWRYUmtsYVJscFhUVEF4TkZkV1dsWmtNbFpJVkd0c1ZXSkdTbGhXYlhoM1UxWmtXV05GZEZSaVZscFhWR3hhYjFReFdsVlNiV2hoVmpOQ1ExUnNSVGxRVVQwOQ==

---
