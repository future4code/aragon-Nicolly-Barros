import { tags } from "../database/migrations/data"
import { ProductDatabase } from "../database/ProductDatabase"
import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import { IGetProductsInputDTO, IGetProductsOutputDTO, IPostProductInputDTO, IPostProductOutputDTO, IProductDB, Product } from "../models/Products"
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
        const search = input.search

        if (search) {
            const productsDB = await this.productDataBase.getProductsBySearch(search)

            const products = productsDB.map(productDB => {
                return new Product(
                    productDB.id,
                    productDB.name
                )
            })

            for (let product of products) {
                const tags: string[] = []
                const tagsDB: any = await this.productDataBase.getTags(product.getId())

                for (let tag of tagsDB) {
                    tags.push(tag.tag)
                }

                product.setTags(tags)
            }

            const response: IGetProductsOutputDTO = {
                products
            }

            return response
        }

        const productsDB = await this.productDataBase.getProducts()

        const products = productsDB.map(productDB => {
            return new Product(
                productDB.id,
                productDB.name
            )
        })

        for (let product of products) {
            const tags: string[] = []
            const tagsDB: any = await this.productDataBase.getTags(product.getId())

            for (let tag of tagsDB) {
                tags.push(tag.tag)
            }

            product.setTags(tags)
        }

        const response: IGetProductsOutputDTO = {
            products
        }

        console.log("ta na business")
        return response

    }


    public getProductsTags = async (input: IGetProductsInputDTO) => {
        const search = input.search

        const tag = await this.productDataBase.getIdTag(search)

        const tagId = tag.map(item => item.id)

        const products = await this.productDataBase.getSearchProductsByTag(tagId[0])

        const response = {
            products: products
        }

        return response
    }


    public postProduct = async (input: IPostProductInputDTO) => {
        const name = input.name
        const token = input.token
        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Missing or invalid token.")
        }

        if (!name) {
            throw new RequestError("Missing param.")
        }

        if (typeof name !== "string") {
            throw new RequestError("Invalid name param.")
        }

        if (name.length < 1) {
            throw new RequestError("Invalid name param.")
        }

        const id = this.idGenerator.generate()

        const newProduct = new Product(
            id,
            name.toUpperCase()
        )

        await this.productDataBase.postProduct(newProduct)

        const response: IPostProductOutputDTO = {
            message: "Product added successfully!"
        }

        return response
    }
}
