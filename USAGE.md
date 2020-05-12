# How to Use

Generally, most of the functionalities are using chat commands. Simply type the commands in the chat box (like how you would normally chat with teammates).
>Note: Remember to either use `allies` or `all` chat channel when try to use the commands. Public chat channels and Private Messages (PM) does not work.

Most commands have a short alias command, they both have identical functionality.

The commands documentation sits on each modules. Please see below:

## Modules

| Module Name|File|Lib Id| Brief functionality|
|:------------- |:------------- |:-------------|:-----|
| Module Loader|`LibModuleLoader.galaxy`|`libMODL`|A unified Module Loader Lib that allows you to choose which module to load,|
| Utilities|`LibUtilities.galaxy`|`libUTIL`|A Module that have utilities tools such as "Toggle Fog Of War", "Toggle UI", etc.|
| Units |`LibUnits.galaxy`|`libUNIT`|Commands that are related to Players, eg, scoreboard, respawn timer, etc|
| Players |`LibPlayers.galaxy`|`libPLYR`|Commands that are related to units, eg, spawn, kill, etc|
| Builder Mode |`LibBuilderMode.galaxy`|`libBULM`|A Builder Module that allows you to place objects anywhere in the map.|
| FPS Mode|`LibFPSMode.galaxy`|`libFPSM`|A FPS Module that allows you to see the map in first person camera.|
| Free Camera Mode|`LibFreeCameraMode.galaxy`|`libFRCM`|Free Camera Mode allows you to change the angle of the camera easily.|
| Funny Module |`LibFunny.galaxy`|`libFUNY`|Some random code that I put in when I am boring.|


## Utilities Module (`LibUtilities.galaxy`)

This module contains various of utilities command such as restarting try mode, etc

### `togglefogofwar` | `tfow`

Toggle Fog Of War. This can enable or disable full map vision (fog of war).

    Parameters: 
        none

    Example:
        tfow
        togglefogofwar

### `toggleui` | `tui`

Toggle User Interface. This can hide or show all the UIs including HP bar, talents panel, floating combat text, abilities bar etc. 

> Note: If UI is off, all abilites will be disabled.

    Parameters: 
        none

    Example:
        tui
        toggleui

### `togglecdr` | `tcdr`

Toggle Mass CDR. This will constantly set cooldowns and mana (energy) to 0s and 100% respectively. As the try mode's "Toggle Cooldown" have an internal cooldown.

    Parameters: 
        none

    Example:
        tcdr
        togglecdr

### `clear` | `cls` `[seconds]`

Allow to clear all text messages, including chat and debug messages.
 

    Parameters:
        [seconds]
        	Data type: Float
            Requirements: Optional
            Description: Defines the delay to clear text messages in seconds.
            Default Value: 0.0
        
    Example:
        cls
        (Clear all texts instantly)
        clear
        (Clear all texts after 5.4 seconds)

### `restartgame` | `re` 

Allow to restart and reload the map, without exit and re-enter it. This is extremely useful when you want to try the new modified XML files or scripts.
 
>Note: It will **NOT** reload or add mods from `Includes.xml` automatically. You will need to actually exit the map and re-enter if you need to do so.

    Parameters:
        None
        
    Example:
        re
        restart

### `startgame` | `sg`

Start the game instantly (Open gate, announcement etc).
 
    Parameters:
        None
        
    Example:
        sg
        startgame

### `endgame` | `eg`

End the game instantly and kick all players.
 
    Parameters:
        None
        
    Example:
        eg
        endgame

### `wingame` | `wg` `<TeamID>`

Instantly declare a win the game for the team.

Generally Left team is **Team 1** (Order) and the Right team is **Team 2** (Chaos).
 

    Parameters:
        <TeamID>
        	Data type: Integer
            Requirements: Required
            Description: Defines the team ID to win
        
    Example:
        wg 1
        wingame 2


## Units (`LibUnits.galaxy`)

This module are the commands related to selected units, such as kill, spawn, etc.

### `summon` | `sum` `UNITNAME` `[Player]` `[Amount]`

Spawn unit(s) at the centre of your camera location.
    
>Note: It will also enable multi-selection, like Vikings and Samuro with Illusion Master. However, there are some issues that have conflict to `/ac` QA Cheat menu, hence, I recommend you first turn `/ac` on if you would like to use this command. 

>Note: If your hero is Samuro, it will have some weird behavior for multi selection.

    Parameters:
        UNITNAME
        	Data type: Sting
            Requirements: Required
            Description: Provides the command with the unit ID to spawn it.
        [Player]
        	Data type: Integer
            Requirements: Optional
            Description: Define which player to own the unit that spawned. 
            Default Value: Your player ID (obtained from EventPlayer())
        [Amount]
        	Data type: Integer
            Requirements: Optional
            Description: Define how many units to spawn
            Default Value: 1

    Examples:
        summon TownTownHallL2
        	(Summon a tower structure to the player who used the command)
        summon HeroRaynor 1 5
        	(Summon 5 Raynor Hero unit for player 1)
        sum JungleGraveGolemDefender 6
        	(Summon A boss golem defender for player 6)

### `setscale` | `ss` `<SCALE>`

Set the scale of the summon units for the command `summon`.

>Note: `1.0` is default scale for all of the units .

    Parameters:
        <SCALE>
        	Data type: Fixed
            Requirements: Required
            Description: Set the scale for the summon unit afterwards.
    
    Examples:
        setscale 0.1
        	(Set the scale of the summon unit to 0.1 (1/10 of the normal size))
        ss 1.5
        	(Set the scale of the summon unit to 1.5 (50% bigger than normal size))

### `unitproperty` | `up` `<TYPE>` `<VALUE>` 

Allow to modify a selected unit's property, for example Max health, regen, movement speed etc.
 

    Parameters:
        <TYPE>
        	Data type: Integer
            Requirements: Required
            Description: Provides the command with the type of property to modify. See below.
        <VALE>
        	Data type: Real
            Requirements: Required
            Description: Define the value to set. 
        
    Example:
        up 0 1
            (Set the selected units's Current HP to 1)
        unitproperty 6 10000
            (Set the selected unit's Max Energy for 10000 (usually means resource bar, such as mana, Tracer bullet, Chen's brew etc.))

Code for `TYPES`:
    
    0 = c_unitPropLife
    1 = c_unitPropLifePercent
    2 = c_unitPropLifeMax
    3 = c_unitPropLifeRegen
    4 = c_unitPropEnergy
    5 = c_unitPropEnergyPercent
    6 = c_unitPropEnergyMax
    7 = c_unitPropEnergyRegen
    8 = c_unitPropShields
    9 = c_unitPropShieldsPercent
    10 = c_unitPropShieldsMax
    11 = c_unitPropShieldsRegen
    12 = c_unitPropKills
    17 = c_unitPropHeight
    18 = c_unitPropMovementSpeed
    20 = c_unitPropResources
    21 = c_unitPropRadius
    22 = c_unitPropXP
    23 = c_unitPropLevel
    24 = c_unitPropKillXP
    28 = c_unitPropBaseMovementSpeed
    29 = c_unitPropMovementSpeedCurrent
    30 = c_unitPropLifeExpectedPercent


### `getbehavior` | `getb`

List all active behaviors for selected units
 
    Parameters:
        None
        
    Example:
        getb
        getbehavior

### `addbehavior` | `adb` `<BehaviorId>`

Add a behavior to selected unit(s). Which are generally from `<CBehavior*>`, such as `<CBehaviorBuff>` or `<CBehaviorAbility>`.

    Parameters:
        BehaviorId
        	Data type: String
            Requirements: Required
            Description: Defines the behavior ID to be added

    Example:
        addbehavior MedivhArcaneBrillianceItem
        	(Add Medivh's Arcane Brilliance Ability to selected units)
        adb PermaInvulnerable
        	(Make all selected units permanent Invulnerable)

### `removebehavior` | `rmb` <BehaviorId>

Remove a behavior from selected unit(s). Which are generally from `<CBehavior*>`, such as `<CBehaviorBuff>` or `<CBehaviorAbility>`.

    Parameters:
        BehaviorId
        	Data type: String
            Requirements: Required
            Description: Defines the behavior ID to be removed

    Example:
        removebehavior MedivhArcaneBrillianceItem
        	(Remove Medivh's Arcane Brilliance Ability from selected units)
        rmb PermaInvulnerable
        	(Remove selected unit's permanent Invulnerable behavior)

### `countbehavior` | `ctb` <BehaviorId>

Count the number of a specific behavior from selected unit(s). Which are generally from `<CBehavior*>`, such as `<CBehaviorBuff>` or `<CBehaviorAbility>`.

    Parameters:
        BehaviorId
        	Data type: String
            Requirements: Required
            Description: Defines the behavior ID to be counted

    Example:
        countbehavior MedivhArcaneBrillianceItem
        	(Count the number of Medivh's Arcane Brilliance Ability from selected units)
        ctb PermaInvulnerable
        	(Count selected unit's permanent Invulnerable behavior)

### `addeffect` | `ade` `<EffectId>`

Add an Effect to selected unit(s). Which are generally from `<CEffect*>`, such as `<CEffectSet>` or `<CEffectCreatePersistent>`.

    Parameters:
        EffectId
        	Data type: String
            Requirements: Required
            Description: Defines the Effect ID to be added

    Example:
        addeffect StormSuicide
        	(Make the unit "suicide" aka kill the unit)
        ade MedivhPolyBombPersistent
        	(Make all selected units affected by Medivh's Polybomb)

### `removeeffect` | `rme` `<EffectId>`

Remove an Effect from selected unit(s). Which are generally from `<CEffect*>`, such as `<CEffectSet>` or `<CEffectCreatePersistent>`.

    Parameters:
        EffectId
        	Data type: String
            Requirements: Required
            Description: Defines the Effect ID to be removed

    Example:
        removeeffect MedivhPolyBombPersistent
        	(Remove selected units affected by Medivh's Polybomb)
        rme MedivhPolyBombPersistent
        	(Remove selected units affected by Medivh's Polybomb)

### `addeffectcamera` | `adec` `<EffectId>`

Add an Effect to the camera location. Which are generally from `<CEffect*>`, such as `<CEffectSet>` or `<CEffectCreatePersistent>`.

    Parameters:
        EffectId
        	Data type: String
            Requirements: Required
            Description: Defines the Effect ID to be added

    Example:
        addeffectcamera DropUnderworldPowerupPersistent
        	(Add some Haunted Mines Skulls to camera location)
        adec UnderworldBossRootsCreatePersistent
        	(Add HM's boss root animation to camera location)

### `removeeffectcamera` | `rmec` `<EffectId>`

Remove an Effect from the camera location. Which are generally from `<CEffect*>`, such as `<CEffectSet>` or `<CEffectCreatePersistent>`.

    Parameters:
        EffectId
        	Data type: String
            Requirements: Required
            Description: Defines the Effect ID to be added

    Example:
        removeeffectcamera DropUnderworldPowerupPersistent
        	(Remove Haunted Mines Skulls from camera location)
        rmec UnderworldBossRootsCreatePersistent
        	(RemoveHM's boss root animation from camera location)


### `playanimation` | `pa` `<AnimationId>`

Play an Animation for selected unit(s).

> Note: There are Walk, Attack, A to Z animations etc
    Parameters:
        AnimationId
        	Data type: String
            Requirements: Required
            Description: Defines the Animation ID to be played

    Example:
        playanimation Attack
        	(Play the Attack Animation for selected units)
        pa Walk
        	(Play the Walk animation for selected units)


### `removeanimation` | `rma` `<AnimationId>`

Remove an Animation from selected unit(s).
    Parameters:
        AnimationId
        	Data type: String
            Requirements: Required
            Description: Defines the Animation ID to be removed

    Example:
        removeanimation Attack
        	(Stop the Attack Animation for selected units)
        rma Walk
        	(Stop the Walk animation for selected units)

### `sendactormessage` | `sam` `<ActorMessage>`

Send an Actor Message for selected unit(s). Generally from `<CActor*>`, the `<on send="Actor Message Here">`

>Note: The command allows spaces after `<ActorMessage>`, since most actor messages have spaces.

    Parameters:
        ActorMessage
        	Data type: String, space allowed.
            Requirements: Required
            Description: Defines the Actor Message to be sent

    Example:
        sendactormessage AnimPlay Spell Spell,A 0 -1.000000 -1.000000 1.000000 AsTimeScale
        	(Play the A Spell animation, different on each hero)
        sam StatusIncrement StatusBarHide
        	(Hide the status bar, HP bar)

### `getunitownership` | `guo`

Gets the Ownership (Player ID) of selected unit(s).

    Parameters:
        None

    Example:
        getunitownership
        guo

### `changeunitownership` | `cuo` `<PlayerId>`

Changes ownership of the selected unit(s).

> Note: 0 is neutral, which cannot be selected once owership have changed.

    Parameters:
        PlayerId
        	Data type: Integer
            Requirements: Required
            Description: Defines the Player Id

    Example:
        changeunitownership 1
            (Change all selected units's ownership to Player 1)
        cuo 6
            (Change all selected units's ownership to Player 6)


### `killunits` | `ku`

Instantly kill all the units that are selected.

    Parameters: 
        none

    Example:
        killunits
        ku

### `toggleoutputid` | `toi`

Toggle Display Unit's ID Mode

This can output all the selected Units ID to the left of the screen with a left click.

    Parameters: 
        none

    Example:
        toi
        toggleoutputid


## Players (`LibPlayers.galaxy`)

This Module are commands for Players, such as respawn time, point and scoreboard modifications.

### `togglemassquest` | `tmq`

Toggle Mass Quest completion

This can help to complete "infinite" (generally is just 9001 limit) stacking quest with the interval of **1600 quest stacks per seconds**.

>Note: This is useful on heroes with actual infinite stacking such as Zuljin or Nazeebo. However due to Integer overflow, after reached certain amount for the quest, the actual functionality will be overflowed, such as Nazeebo HP reduced to 1 if having max stacks with lv4 extra HP per stacltalent

    Parameters: 
        none

    Example:
        tmq
        togglemassquest

### `setmasteryring` | `smr` `<MasteryRingLevel>`

Set the current Mastery ring level. The ring below the hero will be automatically updated.

>Notice: If the new Level is lower than the current one, you may need to respawn(e.g suicide) the selected units.

    Parameters:
        MasteryRingLevel
        	Data type: integer
            Requirements: Required
            Description: The level of the Mastery ring to be set.

    Examples:
        setmasteryring 0
        	(No Mastery ring)
        smr 3
        	(Level 3 of Mastery Ring)

### `toggletalenttree` | `ttt`

Toggle Talent Tree

This will disable the selection of talent tree.

>Note: Selected talents prior to disable will still take in effect.

    Parameters: 
        none

    Example:
        ttt
        toggletalenttree

### `togglepausegametalent` | `tpgt`

Toggle pause game when viewing Talent Tree

This will pause the game when viewing talent tree, similar to tutorial mode.

    Parameters: 
        none

    Example:
        tpgt
        togglepausegametalent


### `addtalent` | `adt` `<TalentId>` `[PLAYER]`

Add a talent for a player, generally find it in `<CTalent>`.

>Note: Some of the talents won't work, so you might want to experiment a bit.

    Parameters:
        TalentId
        	Data type: String
            Requirements: Required
            Description: The Talent ID to be added
        PLAYER:
            Data type: Integer
            Requirements: Optional
            Desctioption: Set the target player's ID
            Default Value: Your player ID (obtained from EventPlayer())
            

    Example:
        addtalent MedivhForceOfWillArcaneExplosion
            (Add Medivh's Arcane Explosion Talent to Player 1)
        adt MalfurionCelestialAlignment 2
            (Add Malfurion's Celestial Alignment Talent to Player 2)

### `removetalent` | `rmt` `<TalentId>` `[PLAYER]`

Remove a talent from a player, generally find it in `<CTalent>`.

>Note: Some of the talents won't work, so you might want to experiment a bit.

    Parameters:
        TalentId
        	Data type: String
            Requirements: Required
            Description: The Talent ID to be removed
        PLAYER:
            Data type: Integer
            Requirements: Optional
            Desctioption: Set the target player's ID
            Default Value: Your player ID (obtained from EventPlayer())
            

    Example:
        removetalent MedivhForceOfWillArcaneExplosion
            (Removed Medivh's Arcane Explosion Talent from Player 1)
        rmt MalfurionCelestialAlignment 2
            (Removed Malfurion's Celestial Alignment Talent from Player 2)

### `enabletalent` | `ent` `<TalentId>` `[option]`

Enable or disable a Talent globally, generally find it in `<CTalent>`.

>Note: This only lock the selection of the talent. If the player already took the talent, it will not have any effect on the player.

    Parameters:
        TalentId
        	Data type: String
            Requirements: Required
            Description: The Talent ID to be removed
        option:
            Data type: Integer
            Requirements: Optional
            Desctioption: Either enable or disable the talent
            Values:
                1: Enable the talent
                0: Disable the talent
            Default Value: 1
            

    Example:
        enabletalent RagnarosLavaWave 1
            (Enable Rag's Lava Wave talent, which was disabled in ARAM.)
        ent MaievUmbralBindPursuitOfVengeance 0
            (Disable Maiev's Pursuit Of Vengeance talent)


### `respawntime` | `rst` `<RESPAWNTIME>`

**Override** the current respawn timer for **all** players. 

>Notice: Due to the system limitation, if you set to 0, it will change it to 0.0625 automatically (1 game tick).

    Parameters:
        RESPAWNTIME
        	Data type: Real
            Requirements: Required
            Description: Change the default timer

    Examples:
        respawntime 99
        	(set the respawn timer to 99 seconds)
        rst 0
        	(set the respawn timer to 0.0625 seconds.)


### `setscore` | `score` `<FIELD>` `<VALUE>` `[PLAYER]`

Set the score for the scoreboard (some of them will shows in tab screen). This is good to use when some talents interact with scoreboard such as Zagara's Infest.

>Note: Though Infest internal function limits to 524%, max of Fixed value, but details are out of scope here.

You can obtain these FIELDs from `ScoreValueData.xml` in `heroesdata.stormmod`

>Note: Some fields uses Integer and some uses Fixed. However because this function is unified using `PlayerScoreValueSetFromInt()`, all decimals will be removed. As such, the max value for Fixed is `524287` and `2147483647` for Integer. This limitation might change later 

    Parameters:
        FIELD
        	Data type: String
            Requirements: Required
            Description: Determine the field to modify
        VALUE:
        	Data type: Integer
            Requirements: Required
            Description: Set the value for the field above.
        PLAYER:
            Data type: Integer
            Requirements: Optional
            Desctioption: Set the target player's ID
            Default Value: Your player ID (obtained from EventPlayer())
            

    Example:
        setscore HeroDamage 0
        	(Set the field "Hero Damage" to 0 for the player who use this command)
        score SoloKill 524287
	        (Set the field "Kils" to 5242873 for the player who use this command)
        score Healing 1000 2
            (Set the field "Healing" to 1000 for the player 2)


### `respawnpoint` | `rsp` `ACTION` `PLAYER`

Modify the respawn point for a player. Either at the current camera location or its default location.

    Parameters:
        ACTION:
            set: Set the spawn location for the player(s) at the current camera location.
            reset: Reset the spawn location for the player(s) to its/their default spawn location.
        PLAYER:
            [1-10]: Set the target player for the action above.
            all: Apply the action above to all players (1-10)
            default: EventPlayer(), Player who uses the command 

    Example:
        respawnpoint set all
        	(set the respawn point for all players at the current camera location)
        rsp set
        	(set the respawn point to player who uses the command at the current camera location)
        rsp reset all
        	(reset all player's respawn point to its default respawn location (hall of storms).)


## Builder Mode (`LibBuilderMode.galaxy`)

**This system is still in a early development.**

Builder mode allows you to place objects to anywhere in the map. The units will constantly teleport to your cursor (follow your cursor). Remember to select `/ac` and `ts` in QA menu (this will added automatically in future development).

To use builder mode, select a unit, or units and press `backspace`. Builder mode will then be activated and you can place the units where you like.

To place the unit(s), press `backspace` again to deactivate builder mode.


## FPS Mode (`LibFPSMode.galaxy`)

**This system is still in a early development.**

FPS Mode allows you to look at the map by using a first person camera on your unit. The camera will constantly look forward and turn as well as long as the mode is activated.

To toggle FPS mode, simply use the `fps` chat command.

### Controls:

 - `u` : Move your unit forward. (It will also clear queue commands and **Hold Position** after moved.)
 - `← (arrow key)` : Turn your unit and camera to left.
 - `→ (arrow key)` : Turn your unit and camera to right.
 - `↑ (arrow key)` : Turn your camera upwards.
 - `↓ (arrow key)` : Turn your camera downwards.

## Free Camera Mode (`LibFreeCameraMode.galaxy`)

**This system is still in a early development.**

Free Camera Mode allows you to use `Middle Mouse Wheel` to freely change your camera angel and direction.

To enable or disable, simply use the chat command `tfc` or `togglefreecamera`!

>Note: Camera pan (move the camera by pushing mouse to the edge) will be disabled when free camera mode is active

## Funny Module (`LibFunny.galaxy`)

> Hehe. Find it yourself. 