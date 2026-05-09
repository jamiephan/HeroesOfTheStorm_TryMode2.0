---
title: 📚 Players Library
nav_order: 3
last_modified_date: Sat, 09 May 2026 15:25:50 GMT
parent: Usage
---

# 📚 Players Library (`LibPlayers.galaxy`):
{: .no_toc }
Commands related to players, such as scoreboard, respawn timer, etc.
- Table of Contents
{:toc}

---

## 💭 Command: `addalltalent`

### 🔍 Syntax:
{: .no_toc }
(`addalltalent` | `aat`) `<HeroId>` `[PlayerId]`

### ✏ Description: 
{: .no_toc }
** ***DEPRECATED: Please use [`selectalltalent`](#cmd-selectalltalent-description) command instead.*** **

Add all talents to a player.
The `HeroId` can be either the ID of `<CHero id="xxx">`, which will add all of the talents from that hero to the player, or it can be `ALL`, which will add ALL the talents in the game to the player.
>Note: Some of the talents won't work, so you might want to experiment a bit.

### ⚙ Parameters:
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

### 🔧 Examples:
{: .no_toc }
    > aat Tyrande
    	(Add all the talents from Tyrande to the player whoever uses the command)
    > addalltalent Firebat 2
    	(Add all the talents from Blaze to Player 2)
    > aat ALL
    	(Add ALL the talents from the game to the player whoever uses the command)
    > addalltalent ALL 10
    	(Add ALL the talents from the game to the player 10)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `addqueststack`

### 🔍 Syntax:
{: .no_toc }
(`addqueststack` | `aqs`) `<stacks>` `[PlayerId]`

### ✏ Description: 
{: .no_toc }
Add a specific amount of quest stacks to a player.

### ⚙ Parameters:
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

### 🔧 Examples:
{: .no_toc }
    > aqs 10
    	(Add 10 quest stacks to whoever uses this command)
    > addqueststack 20 6
    	(Add 20 quest stacks to Player 6.)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `addtalent`

### 🔍 Syntax:
{: .no_toc }
(`addtalent` | `adt`) `<TalentId>` `[PlayerId]`

### ✏ Description: 
{: .no_toc }
Add a talent to a player, generally found in `<CTalent id="xxxx">`.
>Note: Some of the talents won't work, so you might want to experiment a bit.

### ⚙ Parameters:
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

### 🔧 Examples:
{: .no_toc }
    > addtalent MedivhForceOfWillArcaneExplosion
    	(Add Medivh's Arcane Explosion Talent to whoever uses this command)
    > adt MalfurionCelestialAlignment 2
    	(add Malfurion's Celestial Alignment Talent to Player 2)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `difficultyai`

### 🔍 Syntax:
{: .no_toc }
(`difficultyai` | `diffai`) `[PlayerID]` `[DifficultyID]`

### ✏ Description: 
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

### ⚙ Parameters:
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

### 🔧 Examples:
{: .no_toc }
    > diffai
    	(Get the AI difficulty for whoever uses this command)
    > diffai 2 11
    	(Set the AI difficulty for Player 2 to HeroAIMedium)
    > difficultyai 6
    	(Get the AI difficulty for Player 6)
    > difficultyai 7 9
    	(Set the AI difficulty for Player 7 to HeroAIEasy)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `disableai`

### 🔍 Syntax:
{: .no_toc }
(`disableai` | `disai`) `[PlayerID]`

### ✏ Description: 
{: .no_toc }
Disable AI for a player.

>Note: This also disables AI for units summoned via the [summon](#cmd-summon) command.

### ⚙ Parameters:
{: .no_toc }
    [PlayerID]
    	Required:	false
    	Type:		integer
    	Usage:		The Player ID for the AI to be disabled
    	Default:	The player id of whoever used this command.

### 🔧 Examples:
{: .no_toc }
    > disai
    	(Disable AI for whoever use this command)
    > disai 10
    	(Disable AI for Player 10)
    > disableai 2
    	(Disable AI for Player 2)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `disabletalent`

### 🔍 Syntax:
{: .no_toc }
(`disabletalent` | `dist`) `<TalentId>`

### ✏ Description: 
{: .no_toc }
Disable a talent for all players. Generally found in `<CTalent id="xxxx">`.
>Note: This only locks the talent selection. If a player has already taken the talent, it will not be affected.

### ⚙ Parameters:
{: .no_toc }
    <TalentId>
    	Required:	true
    	Type:		string
    	Usage:		The talent id to be disabled.

### 🔧 Examples:
{: .no_toc }
    > disabletalent RagnarosLavaWave
    	(Disable Rag's Lava Wave talent, similar to ARAM.)
    > dist MaievUmbralBindPursuitOfVengeance 0
    	(Disable Maiev's Pursuit Of Vengeance talent)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `enableai`

### 🔍 Syntax:
{: .no_toc }
(`enableai` | `enai`) `[PlayerID]`

### ✏ Description: 
{: .no_toc }
Enable AI for a player.

>Note: This also enables AI for units summoned via the [summon](#cmd-summon) command.

### ⚙ Parameters:
{: .no_toc }
    [PlayerID]
    	Required:	false
    	Type:		integer
    	Usage:		The Player ID for the AI to be enabled
    	Default:	The player id of whoever used this command.

### 🔧 Examples:
{: .no_toc }
    > enai
    	(Enable AI for whoever use this command)
    > enai 10
    	(Enable AI for Player 10)
    > enableai 2
    	(Enable AI for Player 2)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `enabletalent`

### 🔍 Syntax:
{: .no_toc }
(`enabletalent` | `ent`) `<TalentId>`

### ✏ Description: 
{: .no_toc }
Enable a disabled talent for all players. Generally found in `<CTalent id="xxxx">`.

### ⚙ Parameters:
{: .no_toc }
    <TalentId>
    	Required:	true
    	Type:		string
    	Usage:		The talent id to be enabled.

### 🔧 Examples:
{: .no_toc }
    > enabletalent RagnarosLavaWave
    	(Enable Rag's Lava Wave talent, which was disabled in ARAM.)
    > ent MaievUmbralBindPursuitOfVengeance
    	(Enable Maiev's Pursuit Of Vengeance talent)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `experience`

### 🔍 Syntax:
{: .no_toc }
(`experience` | `xp`) `<Amount>` `[PlayerId]` `[SourceId]`

### ✏ Description: 
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

### ⚙ Parameters:
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

### 🔧 Examples:
{: .no_toc }
    > xp 10
    	(Grant 10 xp to whoever use this command)
    > experience 100 6
    	(Grant 100 xp to Player 6)
    > experience 100 1 2
    	(Grant 100 xp to Player 1 with its source set to minions)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `getcatalog`

### 🔍 Syntax:
{: .no_toc }
(`getcatalog` | `gcl`) `<CatalogReference>` `[PlayerID]`

### ✏ Description: 
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

### ⚙ Parameters:
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

### 🔧 Examples:
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

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `modifycatalog`

### 🔍 Syntax:
{: .no_toc }
(`modifycatalog` | `mcl`) `<CatalogReference>` `<value>` `[PlayerID]`

### ✏ Description: 
{: .no_toc }
Directly modify a Catalog value (a.k.a XMLs) for a player in runtime.

For how to obtain and construct `CatalogReference`, Please refer to the [`getcatalog`](#cmd-getcatalog-description) command.

**Caveats:**
 - Some of the fields are READ-ONLY, meaning it cannot be modified, e.g `Unit,HeroChromie,PlaneArray[Air]` (Unable to make Chromie become an air unit like Medivh Raven). This would require an override to the XML instead (see [modding.md](modding.md)).
 - The catalog modification is applied after parental inheritance, meaning it is not possible to modify a parent (`parent="xxx"`) and have the change apply to all child catalogs. You must apply it to each child catalog individually.
 - It is not possible to "create" a value that does not exist after the map has loaded. Only existing values (after inheriting from a parent) can be modified.

### ⚙ Parameters:
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

### 🔧 Examples:
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

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `modifycatalogvalue`

### 🔍 Syntax:
{: .no_toc }
(`modifycatalogvalue` | `mcv`) `<CatalogType>` `<CatalogEntry>` `<CatalogField>` `<value>` `[PlayerID]`

### ✏ Description: 
{: .no_toc }
Directly modify a catalog value (i.e., XML data) for a player at runtime.

For how to obtain and construct `CatalogReference`, please refer to the [`getcatalog`](#cmd-getcatalog-description) command.

This is similar to the [`modifycatalog`](#cmd-modifycatalog-description) command, but uses the `CatalogFieldValueSet()` function directly. If the regular `modifycatalog` command does not work, try this one.

> Note: This command format is a bit different from the `modifycatalog` command, as it does not require the `CatalogReference` to be separated by comma. Instead, it is separated by space.

> Note: due to unknown reason, `<CItemClass>` and `<CItemContainer>` currently does not work with this command.

### ⚙ Parameters:
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

### 🔧 Examples:
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

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `removealltalent`

### 🔍 Syntax:
{: .no_toc }
(`removealltalent` | `rmat`) `<HeroId>` `[PlayerId]`

### ✏ Description: 
{: .no_toc }
Remove all talents from a player.
The `HeroId` can be either the ID of `<CHero id="xxx">`, which will remove all of the talents from that hero from the player, or it can be `ALL`, which will remove ALL the talents in the game from the player.
>Note: Some of the talents won't work, so you might want to experiment a bit.

### ⚙ Parameters:
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

### 🔧 Examples:
{: .no_toc }
    > rmat Tyrande
    	(Remove all the talents from Tyrande from the player whoever uses the command)
    > removealltalent Firebat 2
    	(Remove all the talents from Blaze from Player 2)
    > rmat ALL
    	(Remove ALL the talents from the game from the player whoever uses the command)
    > removealltalent ALL 10
    	(Remove ALL the talents from the game from Player 10)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `removequeststack`

### 🔍 Syntax:
{: .no_toc }
(`removequeststack` | `rqs`) `<stacks>` `[PlayerId]`

### ✏ Description: 
{: .no_toc }
Remove a specific amount of quest stacks from a player.

### ⚙ Parameters:
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

### 🔧 Examples:
{: .no_toc }
    > rqs 10
    	(Remove 10 quest stacks from whoever uses this command)
    > removequeststack 20 6
    	(Remove 20 quest stacks from Player 6.)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `removetalent`

### 🔍 Syntax:
{: .no_toc }
(`removetalent` | `rmt`) `<TalentId>` `[PlayerId]`

### ✏ Description: 
{: .no_toc }
Remove a talent from a player, generally found in `<CTalent id="xxxx">`.
>Note: Some of the talents won't work, so you might want to experiment a bit.

### ⚙ Parameters:
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

### 🔧 Examples:
{: .no_toc }
    > removetalent MedivhForceOfWillArcaneExplosion
    	(Remove Medivh's Arcane Explosion Talent from whoever uses this command)
    > rmt MalfurionCelestialAlignment 2
    	(Remove Malfurion's Celestial Alignment Talent from Player 2)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `resetoverlay`

### 🔍 Syntax:
{: .no_toc }
(`resetoverlay` | `rol`) 

### ✏ Description: 
{: .no_toc }
Reset to the default overlay, removing all custom overlays.

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > rol
    	(Reset to the default overlay.)
    > resetoverlay
    	(Reset to the default overlay.)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `respawnpoint`

### 🔍 Syntax:
{: .no_toc }
(`respawnpoint` | `rsp`) `<Action>` `[PlayerId/all]`

### ✏ Description: 
{: .no_toc }
Modify the respawn point for a player. Either at the current camera location or its default location.

### ⚙ Parameters:
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

### 🔧 Examples:
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

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `respawntime`

### 🔍 Syntax:
{: .no_toc }
(`respawntime` | `rst`) `<seconds>`

### ✏ Description: 
{: .no_toc }
Override the current respawn timer for all players.
>Note: Due to system limitations, setting the value to 0 will be automatically changed to 0.0625 (1 game tick).

### ⚙ Parameters:
{: .no_toc }
    <seconds>
    	Required:	true
    	Type:		float
    	Usage:		The respawn time to be set for all players

### 🔧 Examples:
{: .no_toc }
    > respawntime 99
    	(Set the respawn timer to 99 seconds)
    > rst 0
    	(Set the respawn timer to 0.0625 seconds (1 game tick))

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `selectalltalent`

### 🔍 Syntax:
{: .no_toc }
(`selectalltalent` | `sat`) `[PlayerId]`

### ✏ Description: 
{: .no_toc }
Select all talents for a player. Ever wonder what a Q and AA build Zeratul at the same time would feel like? Or a Varian with Twin Blade+Smash+Taunt and triple banners?
>Note: This uses the built-in `libGame_gf_TalentsChooseTalentForPlayer()` function, which adds talents for the player's current hero only. Summoned hero units do not count. Unlike the `addalltalent` command, this works reliably most of the time.

### ⚙ Parameters:
{: .no_toc }
    [PlayerId]
    	Required:	false
    	Type:		integer
    	Usage:		The target player id to have the talent being selected.
    	Default:	The player id of whoever used this command.

### 🔧 Examples:
{: .no_toc }
    > sat
    	(Select all the talents for player whoever uses the command)
    > selectalltalent
    	(Select all the talents for player whoever uses the command)
    > sat 6
    	(Select all the talents for player 6)
    > selectalltalent 6
    	(Select all the talents for player 6)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `setmasteryring`

### 🔍 Syntax:
{: .no_toc }
(`setmasteryring` | `smr`) `<MasteryRingLevel>`

### ✏ Description: 
{: .no_toc }
Set the Mastery Ring level. The ring below the hero will be automatically updated.
>Note: If the new level is lower than the current one, you may need to respawn (e.g., suicide) the selected units.

### ⚙ Parameters:
{: .no_toc }
    <MasteryRingLevel>
    	Required:	true
    	Type:		integer
    	Usage:		The level of the mastery ring to be set.

### 🔧 Examples:
{: .no_toc }
    > setmasteryring 0
    	(Remove the mastery ring from the player)
    > smr 3
    	(Set the mastery ring to Level 3.)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `setoverlay`

### 🔍 Syntax:
{: .no_toc }
(`setoverlay` | `sol`) `<OverlayPath>`

### ✏ Description: 
{: .no_toc }
Set the in-game overlay (e.g., the golden overlay for Uther's Divine Shield).
>Note: The path is relative to `*.storm*/base.stormdata/`, usually with the extension `*.StormCutscene`.

### ⚙ Parameters:
{: .no_toc }
    <OverlayPath>
    	Required:	true
    	Type:		string
    	Usage:		The path of the overlay file, relative to base.stormdata.

### 🔧 Examples:
{: .no_toc }
    > sol Cutscenes/GameUI_InvulnerableOverlay.StormCutscene
    	(Set the overlay to "Invulnerable", e.g Divine Shield / Sanctification.)
    > setoverlay cutscenes\gameui_gorgeoverlay.stormcutscene
    	(Set the overlay to Stitches Gorge.)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `setscore`

### 🔍 Syntax:
{: .no_toc }
(`setscore` | `score`) `<Field>` `<Value>` `[PlayerId]`

### ✏ Description: 
{: .no_toc }
Set the score for the scoreboard (some values are visible on the Tab screen). Useful when testing talents that interact with scoreboard values, such as Zagara's Infest.
>Note: The Infest internal function is capped at `524%` (maximum fixed value); further details are out of scope here.
You can obtain these FIELDs from `ScoreValueData.xml` in `heroesdata.stormmod`
>Note: Some fields uses Integer and some uses Fixed. However because this function is unified using `PlayerScoreValueSetFromInt()`, all decimals will be removed. As such, the max value for fixed is `524287` and `2147483647` for Integer. This limitation might change later.

### ⚙ Parameters:
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

### 🔧 Examples:
{: .no_toc }
    > setscore HeroDamage 0
    	(Set the field "Hero Damage" to 0 for the player who use this command.)
    > score SoloKill 524287
    	(Set the field "Kills" to 5242873 for the player who use this command)
    > score Healing 1000 2
    	(Set the field "Healing" to 1000 for the player 2)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `toggleai`

### 🔍 Syntax:
{: .no_toc }
(`toggleai` | `togai`) `[PlayerID]`

### ✏ Description: 
{: .no_toc }
Toggle AI for a player.

>Note: This also enables/disables AI for units summoned via the [summon](#cmd-summon) command.

### ⚙ Parameters:
{: .no_toc }
    [PlayerID]
    	Required:	false
    	Type:		integer
    	Usage:		The Player ID for the AI to be enabled/disabled
    	Default:	The player id of whoever used this command.

### 🔧 Examples:
{: .no_toc }
    > togai
    	(Toggle AI for whoever use this command)
    > togai 10
    	(Toggle AI for Player 10)
    > toggleai 2
    	(Toggle AI for Player 2)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `togglemassquest`

### 🔍 Syntax:
{: .no_toc }
(`togglemassquest` | `tmq`) `[stacks]`

### ✏ Description: 
{: .no_toc }
Toggle mass quest completion mode, granting stacks every game tick (0.0625s) for whoever uses this command.
>Note: Useful for heroes with truly infinite stacking such as Zul'jin or Nazeebo. However, due to integer/floating-point overflow, after reaching a certain stack count the functionality may overflow — for example, Nazeebo's HP may reduce to 1 when at maximum stacks with the level 4 bonus HP-per-stack talent.

### ⚙ Parameters:
{: .no_toc }
    [stacks]
    	Required:	false
    	Type:		integer
    	Usage:		The amount of stacks to add every game tick (0.0625s)
    	Default:	1

### 🔧 Examples:
{: .no_toc }
    > tmq 10
    	(Enable mass quest completion mode and give 10 stacks every game tick if not enabled)
    > togglemassquest
    	(Disable mass quest completion mode if enabled)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `togglepausegametalent`

### 🔍 Syntax:
{: .no_toc }
(`togglepausegametalent` | `tpgt`) 

### ✏ Description: 
{: .no_toc }
Toggle whether to pause the game when viewing talents, similar to heroes tutorial.

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > tpgt
    	(Toggle whether to pause the game when viewing talents)
    > togglepausegametalent
    	(Toggle whether to pause the game when viewing talents)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**

## 💭 Command: `toggletalenttree`

### 🔍 Syntax:
{: .no_toc }
(`toggletalenttree` | `ttt`) 

### ✏ Description: 
{: .no_toc }
Toggle the display of the talents selection tree.

### ⚙ Parameters:
{: .no_toc }
    None

### 🔧 Examples:
{: .no_toc }
    > ttt
    	(Toggle the display of the talents selection tree.)
    > toggletalenttree
    	(Toggle the display of the talents selection tree.)

### 🖼 UI Availability:
{: .no_toc }
- ❌ **Not Implemented**
