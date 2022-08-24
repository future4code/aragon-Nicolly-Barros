import { BaseDatabase } from "../../src/database/BaseDatabase"
import { IProductDB, ITagDB, ITagsProductsDB, Product } from "../../src/models/Products"


export class ProductDatabaseMock extends BaseDatabase {
    public static TABLE_PRODUCTS = "Amaro_Products"
    public static TABLE_TAGS = "Amaro_Tags"
    public static TABLE_TAGS_PRODUCTS = "Amaro_Tags_Products"

    public getProducts = async (): Promise<IProductDB[] | undefined> => {
        const products: IProductDB[] = [
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
            }
        ];

        return products
    }

    public getProductsBySearch = async (search: string): Promise<IProductDB[] | undefined> => {
        const products: IProductDB[] = [
            {
                id: "8310",
                name: "VESTIDO CURTO PONTO ROMA MANGA",
            },
            {
                id: "8363",
                name: "VESTIDO CURTO MANGA LONGA LUREX",
            }
        ]

        switch (search) {
            case "curto":
                return products
            default:
                return undefined
        }
    }

    public getSearchProductsByTag = async (search: string): Promise<IProductDB[] | undefined> => {
        const products: IProductDB[] = [
            {
                id: "8371",
                name: "VESTIDO TRICOT CHEVRON"
            },
            {
                id: "8311",
                name: "VESTIDO SLIPDRESS CETIM"
            }
        ]

        switch (search) {
            case "balada":
                return products
            default:
                return undefined
        }
    }

    public getIdTag = async (tag: string): Promise<ITagDB[] | undefined> => {
        const tagId: ITagDB[] = [
            {
                id: "101",
                tag: 'balada',
            }
        ]
        
        switch (tag) {
            case "balada":
                return tagId
            default:
                return undefined
        }
    }

    public getTags = async (id: string): Promise<ITagDB[] | undefined> => {
        const tags: ITagDB[] = [
            { id: '103', tag: 'delicado' },
            { id: '105', tag: 'casual' }
        ]
          
        switch (id) {
            case "8301":
                return tags
            default:
                return undefined
        }
    }

    public toProductDBModel = async (product: Product) => {
        const productDB: IProductDB = {
            id: product.getId(),
            name: product.getName()
        }

        return productDB
    }

    public postProduct = async (product: Product) => {

    }

    public addTag = async (tag: ITagsProductsDB) => {

    };

    public verifyProduct = async (id: string): Promise<IProductDB | undefined> => {
        switch (id) {
            case "8301":
                return {
                    id: '8371',
                    name: 'VESTIDO TRICOT CHEVRON',
                  } as IProductDB
            default:
                return undefined
        }
    };

    public verifyProductTag = async (id: string, tag: string): Promise<ITagsProductsDB | undefined> => {
        switch (id + tag) {
            case "8301" + "casual":
              return {
                id: '237',
                product_id: '8301',
                tag_id: '105',
              } as ITagsProductsDB
            default:
                return undefined
        }
    }
}