import { ProductDatabase } from "../database/ProductDatabase"
import { IGetProductsInputDTO, IGetProductsOutputDTO, IProductDB, Product } from "../models/Products"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class ProductBusiness {
    constructor(
        private productDataBase: ProductDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }

    public getProducts = async (input: IGetProductsInputDTO) => {
        const productsDB = await this.productDataBase.getProducts()

        const products = productsDB.map(productDB => {
           return new Product(
               productDB.id,
               productDB.name
           )
        })

        for (let product of products) {
            const tag:string[] = []
            const tags: any = await this.productDataBase.getTags(product.getId())

            for (let tag of tags){
               tag.push(tag.tag)
            }

            /* product.setTags(tag) */
        }


        const response: IGetProductsOutputDTO = {
            products
        }

        return response
    }
}

/* "tags": [
    {
      "tag": "balada"
    },
    {
      "tag": "neutro"
    }
  ] */