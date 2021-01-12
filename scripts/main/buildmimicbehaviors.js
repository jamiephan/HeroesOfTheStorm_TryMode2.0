const buildMimicXML = require('./helper/buildmimicXML');

const prefix = 'MB';

buildMimicXML({
  catalogTypeRegex: /^CBehaviorBuff/i,
  saveLocation: process.env.TOOLS_MIMC_BEHAVIOR_XML_GENERATION_LOCATION,
  generation: {
    header: {
      generatedCommand: 'npm run build:mimicbehaviors',
      description: [
        'It will find all <CBehaviorBuff> and map to a <CBehaviorAbility>,',
        'This allows to toggle on/off a behavior with the extra item on the hotkey bar.',
        `To prevent collision, all Mimic Behaviors id will have prefixed "${prefix}"`,
        `To use the item, simply add "${prefix}" before a BehaviorBuff's id`,
        `such as "PermaBlind" to "${prefix}Permablind"`,
        // eslint-disable-next-line max-len
        'And add the behavior to selected units, such as with chat command "addbehavior" (adb MBPermaBlind).',
      ],
    },
    main: (type, xmlData) => {
      const { id } = xmlData.$;

      const behaviorAbilID = `${prefix}${id}`;
      const abilBehaviorID = `${behaviorAbilID}_AbilBehavior`;

      // The following will also allows to show a progress bar on the behavior duration,
      // but will lose all of the actor (Art/UI) effects
      // Uncomment the following line
      // const behaviorBuffMapperID = `${behaviorAbilID}_Mapper`;

      const buttonFaceOnID = `${behaviorAbilID}_ToggleOn`;
      const buttonFaceOffID = `${behaviorAbilID}_ToggleOff`;

      // eslint-disable-next-line max-len
      const buttonOnIcon = 'Assets\\Textures\\btn-command-holdposition.dds';
      // eslint-disable-next-line max-len
      const buttonOffIcon = 'Assets\\Textures\\hud_btn_bg_ability_cancel.dds';

      console.log('Mapped Behavior', id, 'to', behaviorAbilID);

      return [
        {
          CBehaviorAbility: {
            $: {
              id: behaviorAbilID,
            },
            Buttons: [
              {
                $: {
                  Face: buttonFaceOnID,
                  Type: 'AbilCmd',
                  AbilCmd: `${abilBehaviorID},On`,
                },
              },
              {
                $: {
                  Face: buttonFaceOffID,
                  Type: 'AbilCmd',
                  AbilCmd: `${abilBehaviorID},Off`,
                },
              },
            ],
          },
        },
        {
          CButton: [
            {
              $: {
                id: buttonFaceOnID,
                parent: 'StormButtonParent',
              },
              Icon: {
                $: {
                  value: buttonOnIcon,
                },
              },
            },
            {
              $: {
                id: buttonFaceOffID,
                parent: 'StormButtonParent',
              },
              Icon: {
                $: {
                  value: buttonOffIcon,
                },
              },
            },
          ],
        },
        {
          CAbilBehavior: {
            $: {
              id: abilBehaviorID,
            },
            Flags: [
              {
                $: { index: 'Toggle', value: 1 },
              },
              {
                $: { index: 'Transient', value: 1 },
              },
            ],
            BehaviorArray: [
              {
                // The following will also allows to show a progress bar on the behavior duration,
                // but will lose all of the actor (Art/UI) effects
                // Change the value to behaviorBuffMapperID
                // $: { value: behaviorBuffMapperID },
                $: { value: id },
              },
            ],
            CmdButtonArray: [
              {
                $: { index: 'On', DefaultButtonFace: buttonFaceOnID },
              },
              {
                $: { index: 'Off', DefaultButtonFace: buttonFaceOffID },
              },
            ],
          },
        },
        // The following will also allows to show a progress bar on the behavior duration,
        // but will lose all of the actor (Art/UI) effects
        // Also change the behaviorBuffMapperID above in CAbilBehavior.BehaviorArray[0].value
        /**
        {
          CBehaviorBuff: {
            $: { id: behaviorBuffMapperID, parent: id },
            InfoFlags: [
              { $: { index: 'AlwaysUseGameText', value: 1 } },
            ],
            BehaviorCategories: [
              { $: { index: 'Restorable', value: 1 } },
            ],
            BuffFlags: [
              { $: { index: 'UpdateDurationWhileDisabled', value: 1 } },
            ],
            DisplayDuration: [
              { $: { index: 'Self', value: 1 } },
              { $: { index: 'Ally', value: 1 } },
              { $: { index: 'Neutral', value: 1 } },
              { $: { index: 'Enemy', value: 1 } },
            ],
          },
        },
        */
      ];
    },
  },
});
