# Usage
<sup>*(Generated from [doc.json](./(10)trymemode.stormmap/base.stormdata/Modules/doc.json) at Fri, 04 Dec 2020 09:58:13 GMT)*</sup>

Generally, most of the functionalities are using chat commands. Simply type the commands in the chat box (like how you would normally chat with teammates).
>Note: Remember to either use allies or all chat channel when try to use the commands. Public chat channels and Private Messages (PM) does not work.

Most commands have a short alias command, they both have identical functionality which let you to type less.

The commands documentation sits on each library. Please see below:

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
# Module Loader Library (`LibModuleLoader.galaxy`):
A unified Module Loader Lib that allows you to choose which module to load

This module is for loading other modules. Do not modify this file in SC2Editor.

---
# Utilities Library (`LibUtilities.galaxy`):
A Library that have utilities tools such as "Toggle Fog Of War", "Toggle UI", etc.

## (`toggledebugmode` | `tdb`) 
#### Description: 
Toggle Debug Mode (the `libCore_gv_dEBUGDebuggingEnabled` variable)

#### Parameters:
    None
#### Examples:
    > tdb
    	(Toggle Debug Mode)
    > toggledebugmode
    	(Toggle Debug Mode)
## (`togglefogofwar` | `tfow`) 
#### Description: 
Toggle Fog Of War. This can enable or disable full map vision.

#### Parameters:
    None
#### Examples:
    > tfow
    	(Toggle Full Map Vision)
    > togglefogofwar
    	(Toggle Full Map Vision)
## (`toggleui` | `tui`) 
#### Description: 
Toggle User Interface. This can hide or show all the UIs including HP bar, talents panel, floating combat text, abilities bar etc.

>Note: If UI is off, all abilities will be disabled.

#### Parameters:
    None
#### Examples:
    > tui
    	(Toggle In game UI)
    > toggleui
    	(Toggle In game UI)
## (`clear` | `cls`) `[seconds]`
#### Description: 
Allow to clear all text messages, including chat and debug messages.

#### Parameters:
    [seconds]
    	Required:	false
    	Type:		float
    	Usage:		Defines the delay to clear text messages in seconds.
    	Default:	0
#### Examples:
    > cls
    	(Clear all texts instantly)
    > clear
    	(Clear all texts after 5.4 seconds)
## (`restartgame` | `re`) 
#### Description: 
Allow to restart and reload the map, without exit and re-enter it. This is extremely useful when you want to try the new modified XML files or scripts. 
 >Note: It will **NOT** reload or add mods from `Includes.xml` automatically. You will need to actually exit the map and re-enter if you need to do so.

#### Parameters:
    None
#### Examples:
    > re
    	(Restart the game instantly)
    > restartgame
    	(Restart the game instantly)
## (`startgame` | `sg`) 
#### Description: 
Allow to start the game instantly (timer start, gate open, etc).

#### Parameters:
    None
#### Examples:
    > sg
    	(Start the game instantly)
    > startgame
    	(Start the game instantly)
## (`endgame` | `eg`) 
#### Description: 
End the game instantly and kick all players from the game.

#### Parameters:
    None
#### Examples:
    > eg
    	(End the game instantly)
    > endgame
    	(End the game instantly)
## (`wingame` | `wg`) `<TeamID>`
#### Description: 
Instantly declare a win for a team and end the game.
Generally left team is **Team 1** and right team is **Team 2**.

#### Parameters:
    <TeamID>
    	Required:	true
    	Type:		integer
    	Usage:		Defines the team ID to win the game.
#### Examples:
    > wg 1
    	(Win the game for Team 1)
    > wingame 2
    	(Win the game for Team 2)
## (`setcameraobject` | `sco`) `<camera>`
#### Description: 
Manually set the camera object. The parameter is the id of `<CCamera id="xxx">`.
>**WARNING**: Set a non existing camera will actually **crash** the game!

#### Parameters:
    <camera>
    	Required:	true
    	Type:		string
    	Usage:		Defines the camera object.
#### Examples:
    > sco BlizzardAllStars
    	(Set the camera object to BlizzardAllStars (default game camera))
    > sco Dflt
    	(Set the camera object to Dlft (default SC2 camera))
## (`resetcameraobject` | `rco`) 
#### Description: 
Reset the game camera to BlizzardAllStars (default game camera)

#### Parameters:
    None
#### Examples:
    > rco
    	(Reset the game camera to BlizzardAllStars)
    > resetcameraobject
    	(Reset the game camera to BlizzardAllStars)
---
# Units Library (`LibUnits.galaxy`):
A library with commands related to selected units, such as kill, spawn, etc.

## (`killunits` | `ku`) 
#### Description: 
Instantly kill all selected unit(s).

#### Parameters:
    None
#### Examples:
    > ku
    	(Instantly kill all selected unit(s).)
    > killunits
    	(Instantly kill all selected unit(s).)
## (`toggleoutputid` | `toi`) 
#### Description: 
Toggle displaying units' id mode. Which will shows the unit's id on the screen with a left click.

#### Parameters:
    None
#### Examples:
    > toi
    	(Toggle displaying units' id mode.)
    > toggleoutputid
    	(Toggle displaying units' id mode.)
## (`summon` | `sum`) `<UnitId>` `[PlayerId]` `[Amount]`
#### Description: 
Spawn unit(s) at the centre of your camera location.
>Note: It will also enable multi-selection, like Vikings and Samuro with Illusion Master. However, there are some issues that have conflict to `/ac` QA Cheat menu, which I recommend you first turn `/ac` on if you would like to use this command.

>Note: If your hero is Samuro, it will have some weird behavior for multi selection.

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
#### Examples:
    > summon TownTownHallL2
    	(Summon a tower structure to the player who used the command)
    > summon HeroRaynor 1 5
    	(Summon 5 Raynor Hero units for player 1)
    > sum JungleGraveGolemDefender 6
    	(Summon A boss golem for player 6)
## (`setscale` | `ss`) `<ScaleAmount>`
#### Description: 
Set the scale of the summon units for the command `summon`.

>Note: 1.0 is default scale for all of the units.

>Note: This is UI change only, the relative attack range, movement speed, etc will not change.

#### Parameters:
    <ScaleAmount>
    	Required:	true
    	Type:		float
    	Usage:		Set the scale for the summon unit afterwards.
#### Examples:
    > setscale 0.1
    	(Set the scale of the summon unit to 0.1 (1/10, or 10% of the normal size))
    > ss 1.5
    	(Set the scale of the summon unit to 1.5 (50% bigger than normal size))
## (`unitproperty` | `up`) `<type>` `<value>`
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

#### Parameters:
    <type>
    	Required:	true
    	Type:		integer
    	Usage:		Set the type of the property to be modified. Please refer to the table above.
    <value>
    	Required:	true
    	Type:		float
    	Usage:		The value to be set for the property type
#### Examples:
    > up 0 1
    	(Set the selected units's Current HP to 1; MAX SPEEDZ TAZZZZDINGO)
    > unitproperty 6 10000
    	(Set the selected unit's Max Energy for 10000 (usually means resource bar, such as mana, Tracer bullet, Chen's brew etc.))
## (`getbehavior` | `getb`) 
#### Description: 
List all active behaviors for selected units.

#### Parameters:
    None
#### Examples:
    > getb
    	(List all active behaviors for selected units)
    > getbehavior
    	(List all active behaviors for selected units)
## (`addbehavior` | `adb`) `<BehaviorId>`
#### Description: 
Add a behavior to selected unit(s). Which are generally from `<CBehavior*>`, such as `<CBehaviorBuff id="xxx">` or `<CBehaviorAbility id="xxx">`.

#### Parameters:
    <BehaviorId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the behavior id to be added to selected units
#### Examples:
    > addbehavior MedivhArcaneBrillianceItem
    	(Add Medivh's Arcane Brilliance Ability to selected units)
    > adb PermaInvulnerable
    	(Make all selected units permanent Invulnerable)
## (`removebehavior` | `rmb`) `<BehaviorId>`
#### Description: 
Remove a behavior from selected unit(s). Which are generally from `<CBehavior*>`, such as `<CBehaviorBuff id="xxx">` or `<CBehaviorAbility id="xxx">`.

> Tips: You can get active behaviors with the `getbehavior` command above.

#### Parameters:
    <BehaviorId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the behavior id to be removed from selected units
#### Examples:
    > removebehavior MedivhArcaneBrillianceItem
    	(Remove Medivh's Arcane Brilliance Ability from selected units)
    > rmb PermaInvulnerable
    	(No longer makes all selected units permanent Invulnerable)
## (`countbehavior` | `ctb`) `<BehaviorId>`
#### Description: 
Count the number of a specific behavior from selected unit(s). Which are generally from `<CBehavior*>`, such as `<CBehaviorBuff id="xxx">` or `<CBehaviorAbility id="xxx">`.

> Tips: You can get active behaviors with the `getbehavior` command above.

#### Parameters:
    <BehaviorId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the behavior id to be counted from selected units
#### Examples:
    > countbehavior MedivhArcaneBrillianceItem
    	(Count Medivh's Arcane Brilliance Ability from selected units)
    > ctb PermaInvulnerable
    	(Count selected unit's permanent Invulnerable behavior)
## (`addeffect` | `ade`) `<EffectId>`
#### Description: 
Add an Effect to selected unit(s). Which are generally from `<CEffect*>`, such as `<CEffectSet id="xxxx">` or `<CEffectCreatePersistent id="xxx">`.

#### Parameters:
    <EffectId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the effect id to be added to selected unit(s).
#### Examples:
    > addeffect StormSuicide
    	(Make the unit "suicide" a.k.a kill the unit)
    > ade MedivhPolyBombPersistent
    	(Make all selected units affect by Medivh's Polybomb)
## (`addeffectcamera` | `adec`) `<EffectId>`
#### Description: 
Add an Effect to the center of the camera. Which are generally from `<CEffect*>`, such as `<CEffectSet id="xxxx">` or `<CEffectCreatePersistent id="xxx">`.

#### Parameters:
    <EffectId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the effect id to be added to the center of the camera.
#### Examples:
    > addeffectcamera DropUnderworldPowerupPersistent
    	(Add some Haunted Mines Skulls to camera location)
    > adec UnderworldBossRootsCreatePersistent
    	(Add Haunted Mines's boss root animation to camera location)
## (`addeffect` | `rme`) `<EffectId>`
#### Description: 
Remove an Effect from selected unit(s). Which are generally from `<CEffect*>`, such as `<CEffectSet id="xxxx">` or `<CEffectCreatePersistent id="xxx">`.

#### Parameters:
    <EffectId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the effect id to be removed from selected unit(s).
#### Examples:
    > removeeffect MedivhPolyBombPersistent
    	(No longer make selected unit(s) affect by Medivh's Polybomb)
    > rme MedivhPolyBombPersistent
    	(No longer make selected unit(s) affect by Medivh's Polybomb)
## (`removeeffectcamera` | `rmec`) `<EffectId>`
#### Description: 
Remove an Effect from the center of the camera. Which are generally from `<CEffect*>`, such as `<CEffectSet id="xxxx">` or `<CEffectCreatePersistent id="xxx">`.

#### Parameters:
    <EffectId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the effect id to be removed from the center of the camera.
#### Examples:
    > removeeffectcamera DropUnderworldPowerupPersistent
    	(Remove Haunted Mines Skulls from camera location)
    > rmec UnderworldBossRootsCreatePersistent
    	(Remove Haunted Mines's boss root animation from camera location)
## (`playanimation` | `pa`) `<AnimationId>`
#### Description: 
Play an Animation for selected unit(s).
>Note: There are Walk, Attack, A to Z animations etc

#### Parameters:
    <AnimationId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the Animation ID to be played on selected unit(s)
#### Examples:
    > playanimation Attack
    	(Play the Attack Animation for selected unit(s))
    > pa Walk
    	(Play the Walk animation for selected unit(s))
## (`removeanimation` | `rma`) `<AnimationId>`
#### Description: 
Remove an Animation from selected unit(s).
>Note: There are Walk, Attack, A to Z animations etc

#### Parameters:
    <AnimationId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the Animation ID to be removed from selected unit(s)
#### Examples:
    > removeanimation Attack
    	(Stop the Attack Animation for selected unit(s))
    > rma Walk
    	(Stop the Walk animation for selected unit(s))
## (`sendactormessage` | `sam`) `<ActorMessage>`
#### Description: 
Send an Actor Message for selected unit(s). Generally from `<CActor*>`, the `<on send="xxx">`.
>Note: The command allows spaces for the parameter, since most actor messages have spaces.

#### Parameters:
    <ActorMessage>
    	Required:	true
    	Type:		string
    	Usage:		Defines the Actor Message to be sent. (This parameter allows spaces.)
#### Examples:
    > sendactormessage AnimPlay Spell Spell,A 0 -1.000000 -1.000000 1.000000 AsTimeScale
    	(Play the A Spell animation, different on each hero)
    > sam StatusIncrement StatusBarHide
    	(Hide the status bar, HP bar)
## (`getunitownership` | `guo`) 
#### Description: 
Gets the Ownership (Player ID) of selected unit(s).

#### Parameters:
    None
#### Examples:
    > guo
    	(Gets the Ownership (Player ID) of selected unit(s).)
    > getunitownership
    	(Gets the Ownership (Player ID) of selected unit(s).)
## (`changeunitownership` | `cuo`) `<PlayerId>`
#### Description: 
Changes ownership of the selected unit(s).
>Note: 0 is neutral, which cannot be selected once ownership have changed.

#### Parameters:
    <PlayerId>
    	Required:	true
    	Type:		integer
    	Usage:		The new owner of the selected unit(s).
#### Examples:
    > changeunitownership 1
    	(Change all selected units's ownership to Player 1)
    > cuo6
    	(Change all selected units's ownership to Player 6)
## (`togglenoweaponcd` | `tnwcd`) 
#### Description: 
Constantly resetting the weapons (auto attack) cooldown, effectively increasing weapon speed.

#### Parameters:
    None
#### Examples:
    > tnwcd
    	(Constantly resetting the weapons (auto attack) cooldown)
    > togglenoweaponcd
    	(Constantly resetting the weapons (auto attack) cooldown)
---
# Players Library (`LibPlayers.galaxy`):
Commands that are related to Players, eg, scoreboard, respawn timer, etc

## (`togglemassquest` | `tmq`) `[stacks]`
#### Description: 
Toggle mass quest completion mode to give stack every game tick (0.0625s).
>Note: This is useful on heroes with actual infinite stacking such as Zuljin or Nazeebo. However due to Integeroverflow, after reached certain amount for the quest, the actual functionality will be overflowed, such as Nazeebo HP reduced to 1 if having max stacks with lv4 extra HP per stacltalent

#### Parameters:
    [stacks]
    	Required:	false
    	Type:		integer
    	Usage:		The amount of stack to be added every game tick (0.0626s)
    	Default:	1
#### Examples:
    > tmq 10
    	(Enable mass quest completion mode and give 10 stacks every game tick if not enabled)
    > togglemassquest
    	(Disable mass quest completion mode if enabled)
## (`setmasteryring` | `smr`) `<MasteryRingLevel>`
#### Description: 
Set the Mastery Ring level. The ring below the hero will be automatically updated.
>Note: If the new Level is lower than the current one, you may need to respawn(e.g suicide) the selected units.

#### Parameters:
    <MasteryRingLevel>
    	Required:	true
    	Type:		integer
    	Usage:		The level of the mastery ring to be set.
#### Examples:
    > setmasteryring 0
    	(Remove the mastery ring from the player)
    > smr 3
    	(Set the mastery ring to Level 3.)
## (`toggletalenttree` | `ttt`) 
#### Description: 
Toggle the display of the talents selection tree.

#### Parameters:
    None
#### Examples:
    > ttt
    	(Toggle the display of the talents selection tree.)
    > toggletalenttree
    	(Toggle the display of the talents selection tree.)
## (`togglepausegametalent` | `tpgt`) 
#### Description: 
Toggle whether to pause the game when viewing talents, similar to heores tutorial.

#### Parameters:
    None
#### Examples:
    > tpgt
    	(Toggle whether to pause the game when viewing talents)
    > togglepausegametalent
    	(Toggle whether to pause the game when viewing talents)
## (`remvetalent` | `rmt`) `<TalentId>` `[PlayerId]`
#### Description: 
Remove a talent from a player, generally found in `<CTalent id="xxxx">`.
>Note: Some of the talents won't work, so you might want to experiment a bit.

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
#### Examples:
    > removetalent MedivhForceOfWillArcaneExplosion
    	(Removed Medivh's Arcane Explosion Talent from Player 1)
    > rmt MalfurionCelestialAlignment 2
    	(Removed Malfurion's Celest>ial Alignment Talent from Player 2)
## (`enabletalent` | `ent`) `<TalentId>` `[isEnable]`
#### Description: 
Enable / Disable a talent for all player. Generally found in `<CTalent id="xxxx">`.
>Note: This only lock the selection of the talent. If the player already took the talent, it will not have any effect on the player.

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
#### Examples:
    > enabletalent RagnarosLavaWave 1
    	(Enable Rag's Lava Wave talent, which was disabled in ARAM.)
    > ent MaievUmbralBindPursuitOfVengeance 0
    	(Disable Maiev's Pursuit Of Vengeance talent)
## (`respawntime` | `rst`) `<seconds>`
#### Description: 
Override the current respawn timer for all players.
>Notice: Due to the system limitation, if you set to 0, it will change it to 0.0625 automatically (1 game tick).

#### Parameters:
    <seconds>
    	Required:	true
    	Type:		float
    	Usage:		The respawn time to be set for all players
#### Examples:
    > respawntime 99
    	(set the respawn timer to 99 seconds)
    > rst 0
    	(set the respawn timer to 0.0625 second)
## (`setscore` | `score`) `<Field>` `<Value>` `[PlayerId]`
#### Description: 
Set the score for the scoreboard (some of them will shows in tab screen). This is good to use when some talents interact with scoreboard such as Zagara's Infest.
>Note: Though Infest internal function limits to `524%`, max of fixed value, but details are out of scope here.

You can obtain these FIELDs from `ScoreValueData.xml` in `heroesdata.stormmod`

>Note: Some fields uses Integer and some uses Fixed. However because this function is unified using `PlayerScoreValueSetFromInt()`, all decimals will be removed. As such, the max value for fixed is `524287` and `2147483647` for Integer. This limitation might change later.

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
#### Examples:
    > setscore HeroDamage 0
    	(Set the field "Hero Damage" to 0 for the player who use this command.)
    > score SoloKill 524287
    	(Set the field "Kils" to 5242873 for the player who use this command)
    > score Healing 1000 2
    	(Set the field "Healing" to 1000 for the player 2)
## (`respawnpoint` | `rsp`) `<Action>` `[PlayerId/all]`
#### Description: 
Modify the respawn point for a player. Either at the current camera location or its default location.

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
---
# Builder Mode Library (`LibBuilderMode.galaxy`):
A Builder Library that allows you to place objects anywhere in the map.

**This system is still in a early development.**



Builder mode allows you to place objects to anywhere in the map. The units will constantly teleport to your cursor (follow your cursor). Remember to select `/ac` and `ts` in QA menu (this will added automatically in future development).



To use builder mode, select a unit, or units and press `backspace`. Builder mode will then be activated and you can place the units where you like.



To place the unit(s), press `backspace` again to deactivate builder mode.



---
# FPS Mode Library (`LibFPSMode.galaxy`):
A First Person Shooter like Library that allows you to see the map in first person camera.

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
# Free Camera Mode Library (`LibFreeCameraMode.galaxy`):
Free Camera Mode allows you to change the angle of the camera easily.

**This system is still in a early development.**

Free Camera Mode allows you to use `Middle Mouse Wheel` to freely change your camera angel and direction.

To enable or disable, simply use the chat command `tfc` or `togglefreecamera`!

>Note: Camera pan (move the camera by pushing mouse to the edge) will be disabled when free camera mode is active


---
# Funny Module Library (`LibFunny.galaxy`):
Random useless stuff just for the lolz.

>Vm0weE1HRnRVWGRPVmxwT1ZsZG9WRmxVU205alJsVjNWMjFHYUZKdVFsaFdiWFF3VmtkS1NGVnVjRnBXVmxsM1dWWmFTMWRYUmtsYVJscFhUVEF4TkZkV1dsWmtNbFpJVkd0c1ZXSkdTbGhXYlhoM1UxWmtXV05GZEZSaVZscFhWR3hhYjFReFdsVlNiV2hoVmpOQ1ExUnNSVGxRVVQwOQ==

---
