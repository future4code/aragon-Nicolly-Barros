import { IProductDB, ITagDB, ITagsProductsDB } from "../../models/Products"
import { IUserDB, USER_ROLES } from "../../models/User"

export const users: IUserDB[] = [
    {
        id: "101",
        name: "Astrodev",
        email: "astrodev@gmail.com",
        password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC", // bananinha
        role: USER_ROLES.ADMIN
    },
    {
        id: "102",
        name: "Fulano",
        email: "fulano@gmail.com",
        password: "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO", // qwerty00
        role: USER_ROLES.NORMAL
    },
    {
        id: "103",
        name: "Ciclana",
        email: "ciclana@gmail.com",
        password: "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i", // asdfg123
        role: USER_ROLES.NORMAL
    }
]

export const products: IProductDB[] = [
    {
      id: '8371',
      name: 'VESTIDO TRICOT CHEVRON',
    },
    {
      id: '8367',
      name: 'VESTIDO MOLETOM COM CAPUZ MESCLA',
    },
    {
      id: '8363',
      name: 'VESTIDO CURTO MANGA LONGA LUREX',
    },
    {
      id: '8360',
      name: 'VESTIDO FEMININO CANELADO',
    },
    {
      id: '8358',
      name: 'VESTIDO REGATA FEMININO COM GOLA',
    },
    {
      id: '8314',
      name: 'VESTIDO PLISSADO ACINTURADO',
    },
    {
      id: '8311',
      name: 'VESTIDO SLIPDRESS CETIM',
    },
    {
      id: '8310',
      name: 'VESTIDO CURTO PONTO ROMA MANGA',
    },
    {
      id: '8309',
      name: 'VESTIDO MOLETOM COM CAPUZ',
    },
    {
      id: '8301',
      name: 'VESTIDO LONGO CREPE MANGA COMPRIDA',
    },
    {
      id: '8300',
      name: 'VESTIDO MALHA COM FENDA',
    },
    {
      id: '8293',
      name: 'VESTIDO CURTO VELUDO RECORTE GOLA',
    },
    {
      id: '8291',
      name: 'VESTIDO MANGA COMPRIDA COSTAS',
    },
    {
      id: '8264',
      name: 'VESTIDO CURTO VELUDO CRISTAL',
    },
    {
      id: '8119',
      name: 'VESTIDO BABADOS KNIT',
    },
    {
      id: '8110',
      name: 'VESTIDO CUT OUT TRICOT',
    },
    {
      id: '8109',
      name: 'VESTIDO BABADOS HORIZONTAIS',
    },
    {
      id: '8104',
      name: 'VESTIDO BABADO TURTLENECK',
    },
    {
      id: '8091',
      name: 'VESTIDO MIDI VELUDO DECOTADO',
    },
    {
      id: '8083',
      name: 'VESTIDO LONGO ESTAMPADO',
    },
    {
      id: '8080',
      name: 'VESTIDO CURTO RENDA VISCOSE',
    },
    {
      id: '7613',
      name: 'VESTIDO LONGO BABADO',
    },
    {
      id: '7533',
      name: 'VESTIDO COTTON DOUBLE',
    },
    {
      id: "7518",
      name: 'VESTIDO CAMISETA FANCY',
    },
    {
      id: "7516",
      name: 'VESTIDO WRAP FLEUR',
    },
  ];
  export const tags: ITagDB[] = [
    {
      id: "101",
      tag: 'balada',
    },
    {
      id: "102",
      tag: 'neutro',
    },
    {
      id: "103",
      tag: 'delicado',
    },
    {
      id: "104",
      tag: 'festa',
    },
    {
      id: "105",
      tag: 'casual',
    },
    {
      id: "106",
      tag: 'metal',
    },
    {
      id: "107",
      tag: 'colorido',
    },
    {
      id: "108",
      tag: 'estampas',
    },
    {
      id: "109",
      tag: 'passeio',
    },
    {
      id: "110",
      tag: 'workwear',
    },
    {
      id: "111",
      tag: 'viagem',
    },
    {
      id: "112",
      tag: 'descolado',
    },
    {
      id: "113",
      tag: 'moderno',
    },
    {
      id: "114",
      tag: 'inverno',
    },
    {
      id: "115",
      tag: 'liso',
    },
    {
      id: "116",
      tag: 'basics',
    },
    {
      id: "117",
      tag: 'boho',
    },
    {
      id: "118",
      tag: 'elastano',
    },
    ,
    {
      id: "119",
      tag: 'festa',
    },
    {
      id: "120",
      tag: 'couro',
    },
  ];
  export const tagsProducts: ITagsProductsDB[] = [
    {
      id: "1",
      product_id: "8371",
      tag_id: "101",
    },
    {
      id: "2",
      product_id: "8371",
      tag_id: "102",
    },
  ];
  
  
  
  
  