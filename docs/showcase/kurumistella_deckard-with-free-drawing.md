---
title: Deckard With Free Drawing - Scroll of Freedom
nav_order: 0
last_modified_date: Sat, 09 May 2026 16:29:07 GMT
parent: Community Showcases
---

---

## Deckard With Free Drawing - Scroll of Freedom

**Author:** [KurumiStella](https://www.reddit.com/r/heroesofthestorm/comments/pc1m9h/deckards_scroll_of_sealing_but_you_can_draw/)

Regular Deckard, but with an extra ability to freely draw any area and apply the Scroll of Sealing Effect to it. I call it the Scroll of Freedom!

<video src="https://i.imgur.com/tZ2uBxo.mp4" controls></video>

### File: `Drawing.xml`
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

### File: `LibDrawing.galaxy`
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

### File: `LibraryList.xml`
```xml
<?xml version="1.0" encoding="utf-8"?>
<TriggerData>
    <Library Id="DEKD" External="TriggerLibs/LibDrawing" SharedExt="0"/>
</TriggerData>
```

