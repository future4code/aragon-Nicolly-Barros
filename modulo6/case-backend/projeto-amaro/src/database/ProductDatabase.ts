import { IProductDB } from "../models/Products";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "Amaro_Products"
    public static TABLE_TAGS = "Amaro_Tags"
    public static TABLE_TAGS_PRODUCTS = "Amaro_Tags_Products"

    public getProducts = async (): Promise<IProductDB[] | undefined> => {
        const result: IProductDB[] = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .select()

        return result
    }

    public getTags = async (id: string): Promise<IProductDB[] | undefined> => {

        const [result] = await BaseDatabase.connection.raw(`
        SELECT Amaro_Tags.tag
        FROM Amaro_Tags_Products
        JOIN Amaro_Tags
        ON Amaro_Tags_Products.tag_id = Amaro_Tags.id
        WHERE Amaro_Tags_Products.product_id = ${id};`)

        return result
    }

}