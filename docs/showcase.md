[◁ Back to Home](index.md)

# Showcase

<sup>*(Generated from [showcase.json](https://github.com/jamiephan/HeroesOfTheStorm_TryMode2.0/blob/master/docs/gen/showcase.json) at Sat, 25 Apr 2026 13:16:23 GMT)*</sup>

Showcase of Try Mode maps, mods, and other creations by the community! If you have something to share, please submit a PR with your creation's metadata in the `docs/gen/showcase` folder!

## Table of Contents

- [Deckard With Free Drawing - Scroll of Freedom](#deckard-with-free-drawing---scroll-of-freedom)
- [Dehaka With Spawn Brush Ability](#dehaka-with-spawn-brush-ability)

---

## Deckard With Free Drawing - Scroll of Freedom

**Author:** [KurumiStella](https://www.reddit.com/r/heroesofthestorm/comments/pc1m9h/deckards_scroll_of_sealing_but_you_can_draw/)

Regular Deckard, but with an extra ability to freely draw any area and apply the Scroll of Sealing Effect to it. I call it the Scroll of Freedom!

<video src="https://i.imgur.com/tZ2uBxo.mp4" controls></video>

### Relative Files

<details>
<summary><code>Drawing.xml</code></summary>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Catalog>

  <const id="$DrawingSearchImpact" value="DeckardScrollOfSealingEnemyImpactSet" />

  <CButton id="DrawingButton" parent="StormButtonParent">
    <Icon value="Assets\Textures\storm_ui_icon_deckard_scroll_of_sealing_b.dds" />
  </CButton>

  <CUnit id="HeroDeckard">
    <BehaviorArray Link="DrawingItem" />
  </CUnit>

  <CBehaviorAbility id="DrawingItem">
    <Buttons Face="DrawingButton" Type="AbilCmd" AbilCmd="Drawing,Execute" />
  </CBehaviorAbility>

  <CAbilEffectInstant id="Drawing">
    <PrepEffect value="DismountDecloakCasterSet" />
    <Effect value="DrawingInitialSet" />
    <Cost>
      <Vital index="Energy" value="0" />
      <Cooldown TimeUse="5" />
    </Cost>
    <UninterruptibleArray index="Cast" value="1" />
    <UninterruptibleArray index="Channel" value="1" />
    <UninterruptibleArray index="Finish" value="1" />
    <CmdButtonArray index="Execute" DefaultButtonFace="DrawingButton" />
    <FinishTime value="2" />
  </CAbilEffectInstant>

  <CEffectSet id="DrawingInitialSet">
    <EffectArray value="DrawingCreatePersistent" />
    <EffectArray value="DrawingApplyInkRemainingDummyBehavior" />
    <TargetLocationType value="Point" />
  </CEffectSet>

  <CEffectApplyBehavior id="DrawingApplyInkRemainingDummyBehavior">
    <Behavior value="InkRemainingDummyBehavior" />
  </CEffectApplyBehavior>

  <CBehaviorBuff id="InkRemainingDummyBehavior">
    <BehaviorCategories index="Restorable" value="1" />
    <Duration value="2" />
    <InfoFlags index="AlwaysUseGameText" value="1" />
  </CBehaviorBuff>

  <CEffectCreatePersistent id="DrawingCreatePersistent">
    <ExpireEffect value="DrawingSearch" />
    <RevealRadius value="3.5" />
    <RevealFlags index="Unfog" value="1" />
    <OffsetVectorStartLocation Value="OriginPoint" />
    <ExpireDelay value="2" />
  </CEffectCreatePersistent>

  <!-- <CEffectSet id="DrawingSearchSet">
    <EffectArray value="DrawingSearch" />
  </CEffectSet> -->

  <CEffectEnumArea id="DrawingSearch">
    <LaunchLocation Value="CasterUnit" />
    <SearchFilters value="-;Player,Ally,Neutral,ImmuneToAOE,Missile,Item,Stasis,Dead,Hidden,Invulnerable" />
    <AreaArray Effect="DeckardScrollOfSealingEnemyImpactSet">
      <VertexArray X="-6" Y="4" />
      <VertexArray Y="-6.5" />
      <VertexArray X="6" Y="4" />
      <VertexArray X="0" Y="0" />
      <VertexArray X="0" Y="0" />
      <VertexArray X="0" Y="0" />
      <VertexArray X="0" Y="0" />
      <VertexArray X="0" Y="0" />
      <VertexArray X="0" Y="0" />
      <VertexArray X="0" Y="0" />
      <VertexArray X="0" Y="0" />
      <VertexArray X="0" Y="0" />
      <VertexArray X="0" Y="0" />
      <VertexArray X="0" Y="0" />
      <VertexArray X="0" Y="0" />
      <VertexArray X="0" Y="0" />
      <IndexArray X="1" Y="1" Z="15" />
      <IndexArray X="15" Y="2" Z="14" />
      <IndexArray X="2" Y="3" Z="13" />
      <IndexArray X="14" Y="4" Z="12" />
      <IndexArray X="3" Y="5" Z="11" />
      <IndexArray X="13" Y="6" Z="10" />
      <IndexArray X="4" Y="7" Z="9" />
      <IndexArray X="12" Y="8" Z="8" />
      <IndexArray X="5" Y="9" Z="7" />
      <IndexArray X="11" Y="10" Z="6" />
      <IndexArray X="6" Y="11" Z="5" />
      <IndexArray X="10" Y="12" Z="4" />
      <IndexArray X="7" Y="13" Z="3" />
      <IndexArray X="9" Y="14" Z="2" />
      <IndexArray X="8" Y="15" Z="1" />
    </AreaArray>
    <RevealerParams Duration="0.75" ShapeExpansion="1">
      <RevealFlags index="Unfog" value="1" />
    </RevealerParams>
    <SearchFlags index="DoActorSearch" value="1" />
  </CEffectEnumArea>

</Catalog>
```

</details>

<details>
<summary><code>LibDrawing.galaxy</code></summary>

```cpp
include "TriggerLibs/NativeLib"

//--------------------------------------------------------------------------------------------------
// Library: Deckard
//--------------------------------------------------------------------------------------------------
// Validating: templates

// Constants
const int libDRAW_gv_vertices = 16;
const int libDRAW_gv_playerNumber = 16;

// Structures
struct libDRAW_gs_MousePos {
    fixed lv_x;
    fixed lv_y;
};

// Variable Declarations
bool[libDRAW_gv_playerNumber + 1] libDRAW_gv_playerDebug;
libDRAW_gs_MousePos[libDRAW_gv_playerNumber + 1] libDRAW_gv_playerMousePos;
bool[libDRAW_gv_playerNumber + 1] libDRAW_gv_playerIsCastingAbil;
int[libDRAW_gv_playerNumber + 1][libDRAW_gv_vertices + 1] libDRAW_gv_playerTextTags;

// Trigger Declarations
trigger libDRAW_gt_Init;
trigger libDRAW_gt_MouseMove;
trigger libDRAW_gt_DrawingAbilityUsed;
trigger libDRAW_gt_ToggleDebugMessage;

// Library Initialization
void libDRAW_InitVariables ();

//--------------------------------------------------------------------------------------------------
// Library: Deckard
//--------------------------------------------------------------------------------------------------
// Validating: templates

// External Library Initialization
void libDRAW_InitLibraries () {
    libNtve_InitVariables();
}

// Variable Initialization
bool libDRAW_InitVariables_completed = false;

void libDRAW_InitVariables () {
    int init_i;
    int init_j;

    if (libDRAW_InitVariables_completed) {
        return;
    }

    libDRAW_InitVariables_completed = true;

    for (init_i = 0; init_i <= libDRAW_gv_playerNumber; init_i += 1) {
        for (init_j = 0; init_j <= libDRAW_gv_vertices; init_j += 1) {
            libDRAW_gv_playerTextTags[init_i][init_j] = c_textTagNone;
        }
    }
}

// Triggers
//--------------------------------------------------------------------------------------------------
// Trigger: Init
//--------------------------------------------------------------------------------------------------
bool libDRAW_gt_Init_Func (bool testConds, bool runActions) {
    // Automatic Variable Declarations
    // Actions
    if (!runActions) {
        return true;
    }

    UIDisplayMessage(PlayerGroupAll(), c_messageAreaDebug, StringToText("Type \"toggledebug\" in chat for to toggle debug message"));
    return true;
}

//--------------------------------------------------------------------------------------------------
void libDRAW_gt_Init_Init () {
    libDRAW_gt_Init = TriggerCreate("libDRAW_gt_Init_Func");
    TriggerAddEventMapInit(libDRAW_gt_Init);
}

//--------------------------------------------------------------------------------------------------
// Trigger: Mouse Move
//--------------------------------------------------------------------------------------------------
bool libDRAW_gt_MouseMove_Func (bool testConds, bool runActions) {
    // Automatic Variable Declarations
    // Actions
    if (!runActions) {
        return true;
    }

    libDRAW_gv_playerMousePos[EventPlayer()].lv_x = EventMouseMovedPosXWorld();
    libDRAW_gv_playerMousePos[EventPlayer()].lv_y = EventMouseMovedPosYWorld();
    if (((libDRAW_gv_playerDebug[EventPlayer()] == true) && (libDRAW_gv_playerIsCastingAbil[EventPlayer()] == false))) {
        UIDisplayMessage(PlayerGroupSingle(EventPlayer()), c_messageAreaSubtitle, StringToText((("UNP: " + FixedToString(PointGetX(UnitGetPosition(UnitGroupUnit(UnitGroupSelected(EventPlayer()), 1))), c_fixedPrecisionAny)) + (" | " + FixedToString(PointGetY(UnitGetPosition(UnitGroupUnit(UnitGroupSelected(EventPlayer()), 1))), c_fixedPrecisionAny)))));
        UIDisplayMessage(PlayerGroupSingle(EventPlayer()), c_messageAreaSubtitle, StringToText((("MSP: " + FixedToString(libDRAW_gv_playerMousePos[EventPlayer()].lv_x, c_fixedPrecisionAny)) + (" | " + FixedToString(libDRAW_gv_playerMousePos[EventPlayer()].lv_y, c_fixedPrecisionAny)))));
    }

    return true;
}

//--------------------------------------------------------------------------------------------------
void libDRAW_gt_MouseMove_Init () {
    libDRAW_gt_MouseMove = TriggerCreate("libDRAW_gt_MouseMove_Func");
    TriggerAddEventMouseMoved(libDRAW_gt_MouseMove, c_playerAny);
}

//--------------------------------------------------------------------------------------------------
// Trigger: Drawing Ability Used
//--------------------------------------------------------------------------------------------------
bool libDRAW_gt_DrawingAbilityUsed_Func (bool testConds, bool runActions) {
    // Variable Declarations
    int lv_i;
    fixed lv_currentMouseX;
    fixed lv_currentMouseY;
    fixed lv_offsetX;
    fixed lv_offsetY;
    string lv_catalogValueX;
    string lv_catalogValueY;
    int lv_playerId;

    // Automatic Variable Declarations
    int auto4F58C785_ae;
    const int auto4F58C785_ai = 1;
    int auto9C416A19_ae;
    const int auto9C416A19_ai = 1;
    int auto1CCEF87E_ae;
    const int auto1CCEF87E_ai = 1;
    int auto7AA8DEE8_ae;
    const int auto7AA8DEE8_ai = 1;

    // Variable Initialization
    lv_catalogValueX = "";
    lv_catalogValueY = "";
    lv_playerId = UnitGetOwner(EventUnit());

    // Actions
    if (!runActions) {
        return true;
    }

    libDRAW_gv_playerIsCastingAbil[lv_playerId] = true;
    UnitSetFacing(EventUnit(), 90.0, 0.0);
    UnitIssueOrder(EventUnit(), Order(AbilityCommand("stop", 0)), c_orderQueueReplace);
    auto4F58C785_ae = (libDRAW_gv_vertices - 1);
    lv_i = 0;
    for ( ; ( (auto4F58C785_ai >= 0 && lv_i <= auto4F58C785_ae) || (auto4F58C785_ai < 0 && lv_i >= auto4F58C785_ae) ) ; lv_i += auto4F58C785_ai ) {
        TextTagDestroy(libDRAW_gv_playerTextTags[lv_playerId][lv_i]);
    }
    auto9C416A19_ae = (libDRAW_gv_vertices - 1);
    lv_i = 0;
    for ( ; ( (auto9C416A19_ai >= 0 && lv_i <= auto9C416A19_ae) || (auto9C416A19_ai < 0 && lv_i >= auto9C416A19_ae) ) ; lv_i += auto9C416A19_ai ) {
        lv_currentMouseX = libDRAW_gv_playerMousePos[lv_playerId].lv_x;
        lv_currentMouseY = libDRAW_gv_playerMousePos[lv_playerId].lv_y;
        lv_offsetX = (PointGetX(UnitGetPosition(EventUnit())) - lv_currentMouseX);
        lv_offsetY = (PointGetY(UnitGetPosition(EventUnit())) - lv_currentMouseY);
        CatalogFieldValueSet(c_gameCatalogEffect, "DrawingSearch", "AreaArray[" + IntToString(0) + "].VertexArray[" + IntToString(lv_i) + "].X", lv_playerId, FixedToString(lv_offsetX, c_fixedPrecisionAny));
        CatalogFieldValueSet(c_gameCatalogEffect, "DrawingSearch", "AreaArray[" + IntToString(0) + "].VertexArray[" + IntToString(lv_i) + "].Y", lv_playerId, FixedToString(lv_offsetY, c_fixedPrecisionAny));
        TextTagCreate(StringToText("X"), 24, Point(lv_currentMouseX, lv_currentMouseY), 0.0, true, false, PlayerGroupSingle(EventPlayer()));
        TextTagSetColor(TextTagLastCreated(), c_textTagColorText, Color(0.00, 100.00, 0.00));
        libDRAW_gv_playerTextTags[lv_playerId][lv_i] = TextTagLastCreated();
        if ((libDRAW_gv_playerDebug[lv_playerId] == true)) {
            UIDisplayMessage(PlayerGroupSingle(lv_playerId), c_messageAreaSubtitle, StringToText((("SMP: " + FixedToString(lv_currentMouseX, c_fixedPrecisionAny)) + (" | " + FixedToString(lv_currentMouseY, c_fixedPrecisionAny)))));
            UIDisplayMessage(PlayerGroupSingle(lv_playerId), c_messageAreaSubtitle, StringToText((("OFS: " + FixedToString(lv_offsetX, c_fixedPrecisionAny)) + (" | " + FixedToString(lv_currentMouseY, c_fixedPrecisionAny)))));
        }

        Wait(0.125, c_timeGame);
    }
    if ((libDRAW_gv_playerDebug[lv_playerId] == true)) {
        UIClearMessages(PlayerGroupSingle(lv_playerId), c_messageAreaDebug);
        UIDisplayMessage(PlayerGroupSingle(lv_playerId), c_messageAreaDebug, StringToText("======= Catalog Value ======="));
        auto1CCEF87E_ae = (libDRAW_gv_vertices - 1);
        lv_i = 0;
        for ( ; ( (auto1CCEF87E_ai >= 0 && lv_i <= auto1CCEF87E_ae) || (auto1CCEF87E_ai < 0 && lv_i >= auto1CCEF87E_ae) ) ; lv_i += auto1CCEF87E_ai ) {
            lv_catalogValueX = CatalogReferenceGet((((("Effect,DrawingSearch,AreaArray[0].VertexArray[" + IntToString(lv_i)) + "].X"))), lv_playerId);
            lv_catalogValueY = CatalogReferenceGet((((("Effect,DrawingSearch,AreaArray[0].VertexArray[" + IntToString(lv_i)) + "].Y"))), lv_playerId);
            UIDisplayMessage(PlayerGroupSingle(lv_playerId), c_messageAreaDebug, StringToText(((lv_catalogValueX + " | ") + lv_catalogValueY)));
        }
        UIDisplayMessage(PlayerGroupSingle(lv_playerId), c_messageAreaDebug, StringToText("======= Catalog Value ======="));
    }

    auto7AA8DEE8_ae = (libDRAW_gv_vertices - 1);
    lv_i = 0;
    for ( ; ( (auto7AA8DEE8_ai >= 0 && lv_i <= auto7AA8DEE8_ae) || (auto7AA8DEE8_ai < 0 && lv_i >= auto7AA8DEE8_ae) ) ; lv_i += auto7AA8DEE8_ai ) {
        TextTagDestroy(libDRAW_gv_playerTextTags[lv_playerId][lv_i]);
    }
    libDRAW_gv_playerIsCastingAbil[lv_playerId] = false;
    return true;
}

//--------------------------------------------------------------------------------------------------
void libDRAW_gt_DrawingAbilityUsed_Init () {
    libDRAW_gt_DrawingAbilityUsed = TriggerCreate("libDRAW_gt_DrawingAbilityUsed_Func");
    TriggerAddEventUnitAbility(libDRAW_gt_DrawingAbilityUsed, null, StringToAbilCmd("Drawing"), c_unitAbilStageExecute, false);
}

//--------------------------------------------------------------------------------------------------
// Trigger: Toggle Debug Message
//--------------------------------------------------------------------------------------------------
bool libDRAW_gt_ToggleDebugMessage_Func (bool testConds, bool runActions) {
    // Automatic Variable Declarations
    // Actions
    if (!runActions) {
        return true;
    }

    libDRAW_gv_playerDebug[EventPlayer()] = !(libDRAW_gv_playerDebug[EventPlayer()]);
    if ((libDRAW_gv_playerDebug[EventPlayer()] == true)) {
        UIDisplayMessage(PlayerGroupSingle(EventPlayer()), c_messageAreaDebug, StringToText("Debug Message Enabled"));
    }
    else {
        UIClearMessages(PlayerGroupSingle(EventPlayer()), c_messageAreaAll);
        UIDisplayMessage(PlayerGroupSingle(EventPlayer()), c_messageAreaDebug, StringToText("Debug Message Disabled"));
    }
    return true;
}

//--------------------------------------------------------------------------------------------------
void libDRAW_gt_ToggleDebugMessage_Init () {
    libDRAW_gt_ToggleDebugMessage = TriggerCreate("libDRAW_gt_ToggleDebugMessage_Func");
    TriggerAddEventChatMessage(libDRAW_gt_ToggleDebugMessage, c_playerAny, "toggledebug", true);
}

void libDRAW_InitTriggers () {
    libDRAW_gt_Init_Init();
    libDRAW_gt_MouseMove_Init();
    libDRAW_gt_DrawingAbilityUsed_Init();
    libDRAW_gt_ToggleDebugMessage_Init();
}

//--------------------------------------------------------------------------------------------------
// Library Initialization
//--------------------------------------------------------------------------------------------------
bool libDRAW_InitLib_completed = false;

void libDRAW_InitLib () {
    if (libDRAW_InitLib_completed) {
        return;
    }

    libDRAW_InitLib_completed = true;

    libDRAW_InitLibraries();
    libDRAW_InitVariables();
    libDRAW_InitTriggers();
}

```

</details>

<details>
<summary><code>LibraryList.xml</code></summary>

```xml
<?xml version="1.0" encoding="utf-8"?>
<TriggerData>
    <Library Id="DEKD" External="TriggerLibs/LibDrawing" SharedExt="0"/>
</TriggerData>
```

</details>

---

## Dehaka With Spawn Brush Ability

**Author:** [KurumiStella](https://github.com/Kurumi-Stella/Heroes-of-the-storm-random-maps)

Regular Dehaka, but with an extra ability to spawn a brush anywhere! You can Brushstalk (Z), get movement speed, etc, anywhere you like!

<video src="https://i.imgur.com/S1gRZho.mp4" controls></video>

### Relative Files

<details>
<summary><code>DehakaWithSpawnBrush.xml</code></summary>

```xml
<?xml version="1.0" encoding="us-ascii"?>
<Catalog>

  <!-- Constants -->
  <const id="$DehakaSpawnBrushAbilityCooldown" value="60" />
  <const id="$DehakaSpawnBrushUnitTimedLife" value="15" />
  <const id="$DehakaSpawnBrushUnitSightRadius" value="10" />
    <!-- Temp Button Face -->
  <const id="$DehakaSpawnBrushAbilityButtonFace" value="DehakaSpawnBrushAbility" />

  <!-- Add Talent to Dehaka, T1C4 -->
  <!-- <CHero id="Dehaka">
    <TalentTreeArray Talent="DehakaSpawnBrush" Tier="1" Column="4" />
  </CHero> -->

  <!-- Define the Talent -->
  <!-- <CTalent id="DehakaSpawnBrush">
    <Face value="$DehakaSpawnBrushAbilityButtonFace" />
    <Abil value="DehakaSpawnBrush" />
    <RankArray>
      <BehaviorArray value="DehakaSpawnBrushItem" />
    </RankArray>
    <Active value="1" />
  </CTalent> -->

  <!-- Was thinking to make it as a talent -->
  <!-- But its easier to play with if its a baseline ability, hmm... -->

  <CUnit id="HeroDehaka">
    <BehaviorArray Link="DehakaSpawnBrushItem" />
  </CUnit>

  <CButton id="DehakaSpawnBrushAbility" parent="StormButtonParent">
    <Icon value="Assets\Textures\storm_ui_icon_dehaka_brushstalker_a.dds"/>
  </CButton>

  <!-- Gives this behavior when Talent Selected -->
  <CBehaviorAbility id="DehakaSpawnBrushItem">
    <Buttons Face="$DehakaSpawnBrushAbilityButtonFace" Type="AbilCmd" AbilCmd="DehakaSpawnBrush,Execute" />
  </CBehaviorAbility>

  <!-- The Spawn Brush Ability -->
  <CAbilEffectTarget id="DehakaSpawnBrush">
    <AbilityCategories index="Control" value="1" />
    <PrepEffect value="DismountDecloakCasterSet" />
    <Effect value="DehakaSpawnBrushInitialSet" />
    <Flags index="ClearLastMoveTarget" value="1" />
    <Flags index="RequireTargetVision" value="0" />
    <Cost>
      <Cooldown TimeUse="$DehakaSpawnBrushAbilityCooldown" />
    </Cost>
    <Range value="500" />
    <Arc value="360" />
    <CastIntroTime value="0" />
    <CastOutroTime value="0.25" />
    <PlaceUnit value="DehakaSpawnBrushUnit" />
    <CmdButtonArray index="Execute" DefaultButtonFace="$DehakaSpawnBrushAbilityButtonFace" />
  </CAbilEffectTarget>

  <!-- When the Button was pressed -->
  <CEffectSet id="DehakaSpawnBrushInitialSet">
    <EffectArray value="DehakaSpawnBrushInitialPersistent" />
    <TargetLocationType value="Point" />
    <ValidatorArray value="TargetLocationIsPathable" />
    <ValidatorArray value="TargetPointWalkable" />
  </CEffectSet>

  <!-- Do something on the point -->
  <CEffectCreatePersistent id="DehakaSpawnBrushInitialPersistent">
    <ExpireEffect value="DehakaSpawnBrushCreateUnit" />
    <RevealRadius value="1.5" />
    <RevealFlags index="Unfog" value="1" />
  </CEffectCreatePersistent>

  <!-- KEKW -->
  <!-- <CEffectCreatePersistent id="DehakaSpawnBrushInitialPersistent">
    <OffsetFacingFallback Value="TargetPoint" />
    <PeriodCount value="9" />
    <PeriodicEffectArray value="DehakaSpawnBrushCreateUnit" />
    <PeriodicOffsetArray X="1.733" Y="1.454" />
    <PeriodicOffsetArray X="0.393" Y="2.228" />
    <PeriodicOffsetArray X="-1.131" Y="1.959" />
    <PeriodicOffsetArray X="-2.126" Y="0.774" />
    <PeriodicOffsetArray X="-2.126" Y="-0.774" />
    <PeriodicOffsetArray X="-1.131" Y="-1.959" />
    <PeriodicOffsetArray X="0.393" Y="-2.228" />
    <PeriodicOffsetArray X="1.733" Y="-1.454" />
    <PeriodicOffsetArray X="2.262" />
    <PeriodicPeriodArray value="0" />
  </CEffectCreatePersistent> -->

  <!-- Create the DehakaSpawnBrushUnit Unit-->
  <CEffectCreateUnit id="DehakaSpawnBrushCreateUnit">
    <WhichLocation Value="TargetPoint" />
    <SpawnUnit value="DehakaSpawnBrushUnit" />
    <SpawnEffect value="DehakaSpawnBrushUnitSpawnSet" />
  </CEffectCreateUnit>

  <!-- Add some effect to the unit -->
  <CEffectSet id="DehakaSpawnBrushUnitSpawnSet">
    <EffectArray value="DehakaSpawnBrushUnitApplyTimedLifeBehavior" />
  </CEffectSet>

  <!-- Add a timed life behavior -->
  <CEffectApplyBehavior id="DehakaSpawnBrushUnitApplyTimedLifeBehavior">
    <Behavior value="DehakaSpawnBrushUnitTimedLife" />
  </CEffectApplyBehavior>

  <!-- The Time life Behavior -->
  <CBehaviorBuff id="DehakaSpawnBrushUnitTimedLife" parent="StormTimedLife">
    <DisplayDuration index="Enemy" value="0" />
    <DisplayDuration index="Neutral" value="0" />
    <DisplayDuration index="Ally" value="1" />
    <Duration value="$DehakaSpawnBrushUnitTimedLife" />
  </CBehaviorBuff>


  <!-- DehakaSpawnBrushUnit Unit -->

  <!-- Instead of directly spawning Storm_KingsCrest_Shrubbery -->
  <!-- Need to do some workaround wrapper for to insert -->
  <!-- "CustomUnitStatusFrame" into the brush unit -->
  <!-- So that it can display a duration bar -->

  <CUnit id="DehakaSpawnBrushUnit" parent="Storm_KingsCrest_Shrubbery">
    <!-- Unselectable some-how make the duration bar not visible -->
    <FlagArray index="Unselectable" value="0" />
    <Sight value="$DehakaSpawnBrushUnitSightRadius" />
  </CUnit>

  <CActorUnit id="DehakaSpawnBrushUnit" parent="StormUnitBase" unitName="DehakaSpawnBrushUnit">
    <!-- Copied From <CActorUnit id="Storm_KingsCrest_Shrubbery" /> -->
    <!-- Apparently you cannot parent a <CActorUnit> with a unitName in it-->
    <VisibleOpacity value="0.500000" />
    <VisibleOpacityBlendDuration value="0.250000" />
    <SnapshotActor value="SnapshotNoOpacity" />
    <HighlightTooltip value="Unit/Name/Bogus" />
    <!-- A little minimap icon -->
    <MinimapIconScale value="1.000000" />
    <!-- Add the Unit frame to display the duration -->
    <CustomUnitStatusFrame value="UnitStatus/IndestructibleTimedUnitStatusFrameTemplate" />
  </CActorUnit>

  <CModel id="DehakaSpawnBrushUnit" parent="Storm_KingsCrest_Shrubbery" />

  <!-- ===================================================================== -->


  <!-- Literally copied everything from <CActorUnit id="HeroDehaka" /> -->
  <!-- because you cannot parent a <CActorUnit> with a unitName in it -->


  <CActorUnit id="HeroDehaka" parent="StormHeroStandard" unitName="HeroDehaka">
    <!-- The added animation when the spawn brush button was pressed -->
    <On Terms="Abil.DehakaSpawnBrush.SourceCastStart" Send="AnimPlay Attack Attack,C 0 -1.000000 -1.000000 1 AsTimeScale" />

    <Remove Terms="AnimDone; AnimName Taunt" Send="Signal ApplyReady" />
    <Remove Terms="AnimPlay; AnimName Spell" Send="TimerSet 0.750000 UnitWalkingCheckDelay" />
    <On Terms="ActorCreation" Send="StatusSet AttackOrder 0" />
    <On Terms="WeaponStart.*.AttackStart; IsStatus AttackOrder 0" Send="AnimPlay Attack Attack,A" />
    <On Terms="WeaponStart.*.AttackStart; IsStatus AttackOrder 1; !ValidateUnit CasterHasPickedAnUltimate" Send="AnimPlay Attack Attack,B" />
    <On Terms="WeaponStart.*.AttackStart; IsStatus AttackOrder 1; ValidateUnit CasterHasPickedAnUltimate" Send="AnimPlay Attack Attack,X" />
    <On Terms="WeaponStart.*.AttackStart; IsStatus AttackOrder 2" Send="AnimPlay Attack Attack,C" />
    <On Terms="WeaponStart.*.AttackStart; IsStatus AttackOrder 3; !ValidateUnit CasterHasPickedAnUltimate" Send="AnimPlay Attack Attack,D" />
    <On Terms="WeaponStart.*.AttackStart; IsStatus AttackOrder 3; ValidateUnit CasterHasPickedAnUltimate" Send="AnimPlay Attack Attack,Y" />
    <On Terms="Effect.DehakaHeroWeaponImpactSet.Start" Send="StatusIncrement AttackOrder" />
    <On Terms="StatusIncrement.*.AttackOrder; IsStatus AttackOrder 4" Send="StatusSet AttackOrder 0" />
    <On Terms="Effect.DehakaHeroWeaponDamage.Start; At Caster" Send="Create DehakaWeaponBase" />
    <On Terms="Abil.DehakaBrushstalker.SourceCastStart; !ValidatePlayer DehakaHasBrushstalkerApexPredator" Send="AnimPlay StandWorkStart Stand,Work,Start PlayForever,NonLooping -1.000000 -1.000000 1.000000 AsTimeScale" />
    <On Terms="Abil.DehakaBrushstalker.SourceCastStart; ValidatePlayer DehakaHasBrushstalkerApexPredator" Send="AnimPlay StandWorkStart Stand,Work,Start PlayForever,NonLooping -1.000000 -1.000000 1.250000 AsTimeScale" />
    <On Terms="Abil.DehakaBrushstalker.SourceCastStop" Send="TimerSet 0.187500 ClearStandWork" />
    <On Terms="TimerExpired; TimerName ClearStandWork" Send="AnimClear StandWorkStart 0.250000" />
    <On Terms="Behavior.DehakaBrushstalkerDurationBehavior.On" Send="AnimPlay Spell Stand,Work,End 0 0.000000 -1.000000 1.000000 AsTimeScale" />
    <On Terms="Behavior.DehakaBrushstalkerTravelBehavior.On" Send="StatusIncrement StatusBarHide" />
    <On Terms="Behavior.DehakaBrushstalkerDurationBehavior.Off" Send="StatusDecrement StatusBarHide" />
    <On Terms="Behavior.DehakaBrushstalkerTravelBehavior.On" Target="_HeroRing" Send="SetVisibility" />
    <On Terms="Behavior.DehakaBrushstalkerDurationBehavior.Off" Target="_HeroRing" Send="SetVisibility 1" />
    <On Terms="Abil.DehakaBrushstalker.TargetOn; IsActorLocalPlayer" Send="Create DehakaBrushSearchOn" />
    <On Terms="Abil.DehakaBrushstalker.TargetOn; IsActorLocalPlayer" Target="::Terrain" Send="TerrainSetShrubClustersVisible" />
    <On Terms="Abil.DehakaBrushstalker.TargetOff; IsActorLocalPlayer" Send="Create DehakaBrushSearchOff" />
    <On Terms="Abil.DehakaBrushstalker.TargetOff; IsActorLocalPlayer" Target="::Terrain" Send="TerrainSetShrubClustersVisible Clear" />
    <On Terms="UnitDeath" Target="::Terrain" Send="TerrainSetShrubClustersVisible Clear" />
    <On Terms="Abil.DehakaDrag.SourceCastStart" Send="AnimPlay Spell Spell,A 0 -1.000000 -1.000000 1.000000 AsTimeScale" />
    <On Terms="Signal.*.DehakaDragBeamCreation" Send="RefSetFromMsg ::actor.DehakaDragBeamReference ::Sender" />
    <On Terms="Behavior.HeroGenericRecentlyTeleported.On" Target="::actor.DehakaDragBeamReference" Send="Destroy Immediate" />
    <On Terms="Signal.*.DragTargetDummyCreated" Send="RefSetFromMsg ::actor.DragTarget ::Sender" />
    <On Terms="Signal.*.DragTargetDummyCreated" Send="HostSiteOpsSet ::Host {SOpBasicScopeFollow SOpDragForwardGuide}" />
    <On Terms="StatusOn.*.TimeStopPaused; ValidateUnit DehakaHasDragChannel" Send="HostSiteOpsSet ::Host {SOpBasicScopeFollow SOpDragForwardGuide} 1 1" />
    <On Terms="StatusOff.*.TimeStopPaused; ValidateUnit DehakaHasDragChannel" Send="HostSiteOpsSet ::Host {SOpBasicScopeFollow SOpDragForwardGuide}" />
    <On Terms="Behavior.DehakaDragChannelBehavior.Off; !ValidateUnit Mounted" Send="HostSiteOpsSet ::Host SOpBasicScopeFollow" />
    <On Terms="Effect.DehakaDragTalentFinalSet.Start; !ValidateUnit Mounted" Send="HostSiteOpsSet ::Host SOpBasicScopeFollow" />
    <On Terms="Abil.DehakaDarkSwarm.SourceCastStart" Send="AnimPlay Spell Spell,B 0 -1.000000 -1.000000 1.000000 AsTimeScale" />
    <On Terms="Abil.DehakaDarkSwarm.SourceCastStart" Send="AnimBracketStart Unpowered Stand,Unpowered,Start Stand,Unpowered Stand,Unpowered,End" />
    <On Terms="Behavior.DehakaDarkSwarm.Off" Send="AnimBracketStop Unpowered" />
    <On Terms="Abil.DehakaIsolation.SourceCastStart" Send="AnimPlay Spell Spell,C 0 -1.000000 -1.000000 1.000000 AsTimeScale" />
    <On Terms="Abil.DehakaAdaptation.SourceCastStart" Send="AnimPlay Spell Spell,D 0 -1.000000 -1.000000 1.000000 AsTimeScale" />
    <On Terms="Behavior.DehakaBurrowChannel.On" Send="AnimPlay Burrow Burrow,Start 0 -1.000000 0.000000 -1.000000 AsAutomatic 0.000000 13" />
    <On Terms="AnimDone; AnimPlaying Burrow Burrow,Start" Send="AnimPlay Burrow Burrow PlayForever 0.000000 -1.000000 -1.000000 AsAutomatic 0.000000 15" />
    <On Terms="Behavior.DehakaBurrowChannel.On" Send="AnimGroupRemove Ready" />
    <On Terms="Behavior.DehakaBurrowChannel.On" Send="AnimClear Ready" />
    <On Terms="Behavior.DehakaBurrowChannel.On" Send="TimerKill StandReadyOutroDuration" />
    <On Terms="Behavior.DehakaBurrowChannel.On" Send="AnimBracketStop Unpowered" />
    <On Terms="Behavior.DehakaBurrowChannel.Off" Send="TimerSet 5.000000 StandReadyOutroDuration" />
    <On Terms="Behavior.DehakaBurrowChannel.Off" Send="AnimClear Burrow" />
    <On Terms="AnimDone; AnimPlayingProps Burrow,End" Send="AnimGroupApply Ready" />
    <On Terms="Behavior.DehakaBurrowChannel.Off" Send="AnimPlay Burrow Burrow,End" />
    <On Terms="Effect.DehakaBurrowRemoveBehavior.Start" Send="AnimClear Burrow" />
    <On Terms="Effect.DehakaBurrowRemoveBehavior.Start" Send="AnimPlay Spell Burrow,End 0 -1.000000 -1.000000 1.000000 AsTimeScale" />
    <On Terms="UnitMovementUpdate.*.Walk; ValidateUnit DehakaBurrowed" Target="DehakaBurrowFX" Send="Signal Walk" />
    <On Terms="UnitMovementUpdate.*.Stand; ValidateUnit DehakaBurrowed" Target="DehakaBurrowFX" Send="Signal Stand" />
    <On Terms="Abil.DehakaEssenceCollection.SourceCastStart" Send="AnimPlay Spell Spell,E 0 -1.000000 -1.000000 1.000000 AsTimeScale" />
    <On Terms="ActorCreation; !ValidateUnit CasterHasPickedAnUltimate" Send="AnimPlay Cover Cover PlayForever" />
    <On Terms="Behavior.Ultimate1Unlocked.On" Send="Signal UltimatePicked" />
    <On Terms="Behavior.Ultimate2Unlocked.On" Send="Signal UltimatePicked" />
    <On Terms="Signal.*.UltimatePicked; !AnimPlaying Spell; !AnimPlayingName Attack" Send="AnimPlay Spell Spell,F" />
    <On Terms="Signal.*.UltimatePicked" Send="Create DehakaArmGrowthFXLeft" />
    <On Terms="Signal.*.UltimatePicked" Send="Create DehakaArmGrowthFXRight" />
    <On Terms="Signal.*.UltimatePicked" Send="Create DehakaArmGrowthGlaze" />
    <On Terms="Signal.*.UltimatePicked" Send="AnimPlay CoverEnd Cover,End" />
    <On Terms="Signal.*.UltimatePicked" Send="AnimClear Cover" />
    <On Terms="Signal.*.UltimatePicked" Target="::PortraitGameSelf" Send="Signal DoRegrow" />
    <On Terms="Behavior.Ultimate1Unlocked.Off" Send="AnimPlay Cover Cover PlayForever" />
    <On Terms="Behavior.Ultimate2Unlocked.Off" Send="AnimPlay Cover Cover PlayForever" />
    <On Terms="AnimPlay; AnimName Taunt" Send="AnimGroupApply Ready" />
    <On Terms="AnimPlay; AnimName Taunt" Send="AnimClear Ready" />
    <On Terms="AnimPlay; AnimName Taunt" Send="TimerKill StandReadyOutroDuration" />
    <On Terms="AnimPlay; AnimName Taunt" Send="TimerSet 5.000000 StandReadyOutroDuration" />
    <PortraitActor value="DehakaPortrait" />
    <PortraitModel value="DehakaPortrait" />
    <GroupIcon>
      <Image value="Assets\Textures\storm_ui_ingame_partyframe_dehaka.dds" />
    </GroupIcon>
    <HeroIcon value="Assets\Textures\UI_targetportrait_Hero_dehaka.dds" />
    <MinimapIcon value="Assets\Textures\storm_ui_minimapicon_dehaka.dds" />
    <UnitIcon value="Assets\Textures\UI_targetportrait_Hero_dehaka.dds" />
    <Wireframe>
      <Image value="Assets\Textures\UI_targetportrait_Hero_dehaka.dds" />
    </Wireframe>
    <ModelFlags index="AutomateGlobalLoops" value="0" />
    <AbilSoundArray AbilCmd="DehakaBrushstalker,Execute" Sound="DehakaBase_VOX_CastingZ" />
    <AbilSoundArray AbilCmd="DehakaBurrow,Execute" Sound="DehakaBase_VOX_CastingE" />
    <AbilSoundArray AbilCmd="DehakaDrag,Execute" Sound="DehakaBase_VOX_CastingQ" />
    <AbilSoundArray AbilCmd="DehakaDarkSwarm,255" Sound="DehakaBase_VOX_CastingW" />
    <AbilSoundArray AbilCmd="DehakaIsolation,Execute" Sound="DehakaBase_Ultimate1Used" />
    <AbilSoundArray AbilCmd="DehakaAdaptation,Execute" Sound="DehakaBase_Ultimate2Used" />
    <AbilSoundArray AbilCmd="DehakaEssenceCollection,Execute" Sound="DehakaBase_VOX_CastingD" />
    <ErrorArray Error="NotEnoughEnergy" Sound="DehakaBase_LowMana" />
    <SoundArray index="Ready" value="DehakaBase_Revive" />
    <SoundArray index="Yes" value="DehakaBase_Yes" />
    <SoundArray index="Attack" value="DehakaBase_Attack" />
    <SoundArray index="Pissed" value="DehakaBase_Pissed" />
    <MinimapIconBackgroundScale value="0.950000" />
  </CActorUnit>
</Catalog>
```

</details>

---
