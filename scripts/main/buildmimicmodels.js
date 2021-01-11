const buildMimicXML = require('./helper/buildmimicXML');

const prefix = 'UN';

buildMimicXML({
  catalogTypeRegex: /^CModel/i,
  saveLocation: process.env.TOOLS_MIMC_MODEL_XML_GENERATION_LOCATION,
  generation: {
    header: {
      generatedCommand: 'npm run build:mimicmodels',
      description: [
        'It will find all <CModel*> and map to a <CUnit>,',
        'That allow a model to be spawned as a Unit.',
        `To prevent collision, all Mimic Models Unit's id will have prefixed "${prefix}"`,
      ],
    },
    pre: [
      {
        CUnit: {
          $: {
            id: `${prefix}_t`,
            parent: 'StormHero',
          },
          BehaviorArray: [
            {
              $: { Link: 'PermaInvulnerable' },
            },
          ],
          WeaponArray: [
            {
              $: { Link: 'FootmanMinion' },
            },
          ],
        },
      },
    ],
    main: (type, xmlData) => {
      const { id } = xmlData.$;
      // console.log(`Mapped Model ${id} to Unit ${prefix}${id}.`);
      return [
        {
          CUnit: {
            $: {
              id: `${prefix}${id}`,
              parent: `${prefix}_t`,
            },
          },
        },
        {
          CActorUnit: {
            $: {
              id: `${prefix}${id}`,
              parent: 'GenericUnitStandard',
              unitName: `${prefix}${id}`,
            },
            Model: {
              $: {
                value: id,
              },
            },
          },
        },
      ];
    },
  },
});
