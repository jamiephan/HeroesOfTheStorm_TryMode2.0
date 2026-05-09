---
title: 📚 Units Library
nav_order: 2
last_modified_date: Sat, 09 May 2026 15:25:50 GMT
parent: Usage
---

# 📚 Units Library (`LibUnits.galaxy`):
{: .no_toc }
A library with commands related to selected units, such as kill, spawn, etc.
- Table of Contents
{:toc}

---

## 💭 Command: `addbehavior` (✔ UI)

### 🔍 Syntax:
{: .no_toc }
(`addbehavior` | `adb`) `<BehaviorId>`

### ✏ Description: 
{: .no_toc }
Add a behavior to selected unit(s). Behaviors are generally found in `<CBehavior*>`, such as `<CBehaviorBuff id="xxx">` or `<CBehaviorAbility id="xxx">`.

### ⚙ Parameters:
{: .no_toc }
    <BehaviorId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the behavior id to be added to selected units

### 🔧 Examples:
{: .no_toc }
    > addbehavior MedivhArcaneBrillianceItem
    	(Add Medivh's Arcane Brilliance Ability to selected units)
    > adb PermaInvulnerable
    	(Make all selected units permanent Invulnerable)

### 🖼 UI Availability:
{: .no_toc }
- ✔ **Yes.** Use the command `addbehaviorui` or `adbui` to toggle the UI counterpart of this command.

## 💭 Command: `addeffect`

### 🔍 Syntax:
{: .no_toc }
(`addeffect` | `ade`) `<EffectId>` `[amount]`

### ✏ Description: 
{: .no_toc }
Add an effect to selected unit(s). Effects are generally found in `<CEffect*>`, such as `<CEffectSet id="xxxx">` or `<CEffectCreatePersistent id="xxx">`.

### ⚙ Parameters:
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

### 🔧 Examples:
{: .no_toc }
    > addeffect StormSuicide
    	(Kill all selected units (self-destruct))
    > ade MedivhPolyBombPersistent
    	(Apply Medivh's Polybomb to all selected units)
    > ade GreymaneCursedBulletDamagePercentDamage 5
    	(Make all selected units hit by Greymane's Cursed Bullet (damage) 5 times in a row.)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `addeffectcamera`

### 🔍 Syntax:
{: .no_toc }
(`addeffectcamera` | `adec`) `<EffectId>` `[amount]` `[PlayerID]`

### ✏ Description: 
{: .no_toc }
Add an effect to the center of the camera. Effects are generally found in `<CEffect*>`, such as `<CEffectSet id="xxxx">` or `<CEffectCreatePersistent id="xxx">`.

### ⚙ Parameters:
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

### 🔧 Examples:
{: .no_toc }
    > addeffectcamera DropUnderworldPowerupPersistent
    	(Add some Haunted Mines Skulls to camera location)
    > adec UnderworldBossRootsCreatePersistent
    	(Add Haunted Mines's boss root animation to camera location)
    > addeffectcamera NecromancerRaiseSkeletonCreationPersistent 10
    	(Spawn 10 Xul's skeleton to camera location)
    > adec NecromancerRaiseSkeletonCreationPersistent 10 6
    	(Spawn 10 Xul's skeleton to camera location with the effect owner of Player 6)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `addweapon`

### 🔍 Syntax:
{: .no_toc }
(`addweapon` | `adw`) `<WeaponID>`

### ✏ Description: 
{: .no_toc }
Add a weapon (Basic Attack) to selected unit(s). Usually found in `<CWeapon* id='xxx'>`

### ⚙ Parameters:
{: .no_toc }
    <WeaponID>
    	Required:	true
    	Type:		string
    	Usage:		The ID of the weapon

### 🔧 Examples:
{: .no_toc }
    > adw AlexstraszaDragonConeWeapon
    	(Add Alexstrasza's Dragon Form weapon to selected unit(s))
    > addweapon FirebatHeroWeapon
    	(Add Blaze's weapon to selected unit(s))

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `changeunitownership`

### 🔍 Syntax:
{: .no_toc }
(`changeunitownership` | `cuo`) `<PlayerId>`

### ✏ Description: 
{: .no_toc }
Changes ownership of the selected unit(s).
>Note: 0 is neutral; neutral units cannot be selected after their ownership is changed.

### ⚙ Parameters:
{: .no_toc }
    <PlayerId>
    	Required:	true
    	Type:		integer
    	Usage:		The new owner of the selected unit(s).

### 🔧 Examples:
{: .no_toc }
    > changeunitownership 1
    	(Change ownership of all selected units to Player 1)
    > cuo
    	(Change all selected units's ownership to Player 6)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `clearbehavior`

### 🔍 Syntax:
{: .no_toc }
(`clearbehavior` | `clb`) 

### ✏ Description: 
{: .no_toc }
Clear all active behaviors for selected units.

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > clb
    	(Clear all active behaviors for selected units)
    > clearbehavior
    	(Clear all active behaviors for selected units)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `clearunits`

### 🔍 Syntax:
{: .no_toc }
(`clearunits` | `clu`) `[PlayerId]`

### ✏ Description: 
{: .no_toc }
Clear all summoned unit(s) (spawned via the [summon](#cmd-summon) command) for a player. Useful for removing large numbers of summoned units, or when summoned units are untargetable/unselectable and cannot be removed with the [killunits](#cmd-killunits) command.

>Note: Due to memory limitations, only the **last 500 summoned units** can be removed with this command. Older units will not be affected. To remove ALL summoned units, either respec your hero or restart the game.

>Self note: For each `MaxPlayer[16][100]`, is equivalent to around 30 `EventChatMessage` triggers. So more memory assigned to this, the less trigger can be used.

### ⚙ Parameters:
{: .no_toc }
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		Define to clear which player's summoned unit(s).
    	Default:	The player id of whoever used this command.

### 🔧 Examples:
{: .no_toc }
    > clu
    	(Clear summoned unit(s) from player who used the command)
    > clearunits 6
    	(Clear summoned unit(s) from Player 6)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `clearweapon`

### 🔍 Syntax:
{: .no_toc }
(`clearweapon` | `clw`) 

### ✏ Description: 
{: .no_toc }
Remove all weapons (Basic Attack) from selected unit(s). Usually found in `<CWeapon* id='xxx'>`

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > clw
    	(Remove all weapons from selected units)
    > clearweapon
    	(Remove all weapons from selected units)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `enablecollision`

### 🔍 Syntax:
{: .no_toc }
(`enablecollision` | `encol`) 

### ✏ Description: 
{: .no_toc }
Enable collision for selected unit(s).
>Note: This may conflict with non-collision units such as Medivh's Raven form. Avoid using this command on those units.

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > encol
    	(Enable collision for selected unit(s).)
    > enablecollision
    	(Enable collision for selected unit(s).)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `getbehavior`

### 🔍 Syntax:
{: .no_toc }
(`getbehavior` | `getb`) 

### ✏ Description: 
{: .no_toc }
List all active behaviors for selected units.

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > getb
    	(List all active behaviors for selected units)
    > getbehavior
    	(List all active behaviors for selected units)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `getselectedunits`

### 🔍 Syntax:
{: .no_toc }
(`getselectedunits` | `gsu`) `[PlayerId]`

### ✏ Description: 
{: .no_toc }
Get all selected units from a specific player.

### ⚙ Parameters:
{: .no_toc }
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		Define which player to get all the units.
    	Default:	The player id of whoever used this command.

### 🔧 Examples:
{: .no_toc }
    > gsu
    	(Get all selected units from whoever uses this command)
    > getselectedunits 6
    	(Get all selected units from Player 6)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `getunitownership`

### 🔍 Syntax:
{: .no_toc }
(`getunitownership` | `guo`) 

### ✏ Description: 
{: .no_toc }
Gets the Ownership (Player ID) of selected unit(s).

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > guo
    	(Gets the Ownership (Player ID) of selected unit(s).)
    > getunitownership
    	(Gets the Ownership (Player ID) of selected unit(s).)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `getunits`

### 🔍 Syntax:
{: .no_toc }
(`getunits` | `gu`) `[PlayerId]`

### ✏ Description: 
{: .no_toc }
Get all units owned by a specific player.

### ⚙ Parameters:
{: .no_toc }
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		Define which player to get all the units.
    	Default:	The player id of whoever used this command.

### 🔧 Examples:
{: .no_toc }
    > gu
    	(Get all units owned by whoever uses this command.)
    > getunits 7
    	(Get all units owned by Player 7)
    > getunits 15
    	(Get all units owned by Player 15 (Player 15 usually are neutral mercenary camps.))

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `getweapon`

### 🔍 Syntax:
{: .no_toc }
(`getweapon` | `getw`) 

### ✏ Description: 
{: .no_toc }
Get all weapons (Basic Attack) from selected unit(s). Usually found in `<CWeapon* id='xxx'>`

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > getw
    	(Get all weapons from selected units)
    > getweapon
    	(Get all weapons from selected units)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `killallunits`

### 🔍 Syntax:
{: .no_toc }
(`killallunits` | `kau`) `[PlayerId]`

### ✏ Description: 
{: .no_toc }
Kill all units owned by a specific player.
Unlike other commands that accept a player ID, this command also accepts Player 0 (Neutral).
>Note: In most maps, the Core is owned by Player 11 (left team) and Player 12 (right team). Killing it will instantly destroy the core and end the game.

### ⚙ Parameters:
{: .no_toc }
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		Define which player to get all the units.
    	Default:	The player id of whoever used this command.

### 🔧 Examples:
{: .no_toc }
    > kau
    	(Kill all units owned by whoever uses this command.)
    > killallunits 7
    	(Kill all units owned by Player 7)
    > killallunits 15
    	(Kill all units owned by Player 15 (Player 15 usually are neutral mercenary camps.))

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `killunits`

### 🔍 Syntax:
{: .no_toc }
(`killunits` | `ku`) 

### ✏ Description: 
{: .no_toc }
Instantly kill all selected unit(s).

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > ku
    	(Instantly kill all selected unit(s).)
    > killunits
    	(Instantly kill all selected unit(s).)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `playanimation`

### 🔍 Syntax:
{: .no_toc }
(`playanimation` | `pa`) `<AnimationId>`

### ✏ Description: 
{: .no_toc }
Play an Animation for selected unit(s).
>Note: There are Walk, Attack, A to Z animations etc

### ⚙ Parameters:
{: .no_toc }
    <AnimationId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the Animation ID to be played on selected unit(s)

### 🔧 Examples:
{: .no_toc }
    > playanimation Attack
    	(Play the Attack Animation for selected unit(s))
    > pa Walk
    	(Play the Walk animation for selected unit(s))

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `removeanimation`

### 🔍 Syntax:
{: .no_toc }
(`removeanimation` | `rma`) `<AnimationId>`

### ✏ Description: 
{: .no_toc }
Remove an Animation from selected unit(s).
>Note: There are Walk, Attack, A to Z animations etc

### ⚙ Parameters:
{: .no_toc }
    <AnimationId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the Animation ID to be removed from selected unit(s)

### 🔧 Examples:
{: .no_toc }
    > removeanimation Attack
    	(Stop the Attack Animation for selected unit(s))
    > rma Walk
    	(Stop the Walk animation for selected unit(s))

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `removebehavior`

### 🔍 Syntax:
{: .no_toc }
(`removebehavior` | `rmb`) `<BehaviorId>`

### ✏ Description: 
{: .no_toc }
Remove a behavior from selected unit(s). Behaviors are generally found in `<CBehavior*>`, such as `<CBehaviorBuff id="xxx">` or `<CBehaviorAbility id="xxx">`.
>Tip: Use the [`getbehavior`](#cmd-getbehavior) command to list active behaviors.

### ⚙ Parameters:
{: .no_toc }
    <BehaviorId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the behavior id to be removed from selected units

### 🔧 Examples:
{: .no_toc }
    > removebehavior MedivhArcaneBrillianceItem
    	(Remove Medivh's Arcane Brilliance Ability from selected units)
    > rmb PermaInvulnerable
    	(No longer makes all selected units permanent Invulnerable)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `removecollision`

### 🔍 Syntax:
{: .no_toc }
(`removecollision` | `rmcol`) 

### ✏ Description: 
{: .no_toc }
Remove collision for selected unit(s).
>Note: This may conflict with non-collision units such as Medivh's Raven form. Avoid using this command on those units.

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > rmcol
    	(Disable Collision for selected unit(s).)
    > removecollision
    	(Disable Collision for selected unit(s).)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `removeeffect`

### 🔍 Syntax:
{: .no_toc }
(`removeeffect` | `rme`) `<EffectId>`

### ✏ Description: 
{: .no_toc }
Remove an effect from selected unit(s). Effects are generally found in `<CEffect*>`, such as `<CEffectSet id="xxxx">` or `<CEffectCreatePersistent id="xxx">`.

### ⚙ Parameters:
{: .no_toc }
    <EffectId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the effect id to be removed from selected unit(s).

### 🔧 Examples:
{: .no_toc }
    > removeeffect MedivhPolyBombPersistent
    	(Remove Medivh's Polybomb effect from selected unit(s))

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `removeeffectcamera`

### 🔍 Syntax:
{: .no_toc }
(`removeeffectcamera` | `rmec`) `<EffectId>`

### ✏ Description: 
{: .no_toc }
Remove an effect from the center of the camera. Effects are generally found in `<CEffect*>`, such as `<CEffectSet id="xxxx">` or `<CEffectCreatePersistent id="xxx">`.

### ⚙ Parameters:
{: .no_toc }
    <EffectId>
    	Required:	true
    	Type:		string
    	Usage:		Defines the effect id to be removed from the center of the camera.

### 🔧 Examples:
{: .no_toc }
    > removeeffectcamera DropUnderworldPowerupPersistent
    	(Remove Haunted Mines Skulls from camera location)
    > rmec UnderworldBossRootsCreatePersistent
    	(Remove Haunted Mines's boss root animation from camera location)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `removeweapon`

### 🔍 Syntax:
{: .no_toc }
(`removeweapon` | `rmw`) `<WeaponID>`

### ✏ Description: 
{: .no_toc }
Remove a weapon (Basic Attack) from selected unit(s). Usually found in `<CWeapon* id='xxx'>`

### ⚙ Parameters:
{: .no_toc }
    <WeaponID>
    	Required:	true
    	Type:		string
    	Usage:		The ID of the weapon

### 🔧 Examples:
{: .no_toc }
    > rmw AnaHeroWeapon
    	(Remove Ana's weapon from selected unit(s))
    > removeweapon DVaMechWeapon
    	(Remove D.va mech mode's weapon from selected unit(s))

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `replaceunit`

### 🔍 Syntax:
{: .no_toc }
(`replaceunit` | `rpu`) `<TargetUnitId>`

### ✏ Description: 
{: .no_toc }
Replace all selected units with the target unit.
>Note: Use with caution. Unexpected behavior may occur if the target unit does not exist or if a unit dies during the replacement. If this happens, use the debug menu to respawn your hero.

### ⚙ Parameters:
{: .no_toc }
    <TargetUnitId>
    	Required:	true
    	Type:		string
    	Usage:		Define the selected units to be replaced with. You can get the id from <CUnit id="xxx"> in the game XML files.

### 🔧 Examples:
{: .no_toc }
    > rpu HeroRaynor
    	(Replace all selected unit(s) to Raynor Hero.)
    > replaceunit CatapultMinion
    	(Replace all selected unit(s) to Catapult Minion.)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `sendactormessage`

### 🔍 Syntax:
{: .no_toc }
(`sendactormessage` | `sam`) `<ActorMessage>`

### ✏ Description: 
{: .no_toc }
Send an Actor Message for selected unit(s). Generally from `<CActor*>`, the `<on send="xxx">`.
>Note: The command allows spaces for the parameter, since most actor messages have spaces.

### ⚙ Parameters:
{: .no_toc }
    <ActorMessage>
    	Required:	true
    	Type:		string
    	Usage:		Defines the Actor Message to be sent. (This parameter allows spaces.)

### 🔧 Examples:
{: .no_toc }
    > sendactormessage AnimPlay Spell Spell,A 0 -1.000000 -1.000000 1.000000 AsTimeScale
    	(Play the A Spell animation, different on each hero)
    > sam StatusIncrement StatusBarHide
    	(Hide the status bar, HP bar)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `summon` (✔ UI)

### 🔍 Syntax:
{: .no_toc }
(`summon` | `sum`) `<UnitId>` `[Amount]` `[PlayerId]` `[Scale]`

### ✏ Description: 
{: .no_toc }
Spawn unit(s) at the center of the camera.
>Note: Newly summoned units are automatically added to the selection group.
>Note: To control summoned units, enable multi-selection via the [`alliancecontrolteamselection`](#cmd-alliancecontrolteamselection) command or QA Cheat Menu (`ts`, and also `/ac` if the unit does not belong to you). They will behave like Vikings and Samuro with Illusion Master.
>Note: If your hero is Samuro, multi-selection may behave unexpectedly due to Blizzard's implementation.

### ⚙ Parameters:
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

### 🔧 Examples:
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

### 🖼 UI Availability:
{: .no_toc }
- ✔ **Yes.** Use the command `summonui` or `sumui` to toggle the UI counterpart of this command.

## 💭 Command: `togglenoweaponcd`

### 🔍 Syntax:
{: .no_toc }
(`togglenoweaponcd` | `tnwcd`) 

### ✏ Description: 
{: .no_toc }
Continuously reset the weapon (auto attack) cooldown, effectively increasing attack speed.

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > tnwcd
    	(Continuously reset the weapon (auto attack) cooldown)
    > togglenoweaponcd
    	(Continuously reset the weapon (auto attack) cooldown)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `toggleoutputid`

### 🔍 Syntax:
{: .no_toc }
(`toggleoutputid` | `toi`) 

### ✏ Description: 
{: .no_toc }
Toggle unit ID display mode. When enabled, left-clicking a unit shows its ID on screen.

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > toi
    	(Toggle displaying units' id mode.)
    > toggleoutputid
    	(Toggle displaying units' id mode.)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `unitproperty`

### 🔍 Syntax:
{: .no_toc }
(`unitproperty` | `up`) `<type>` `[value]`

### ✏ Description: 
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

### ⚙ Parameters:
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

### 🔧 Examples:
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

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**
