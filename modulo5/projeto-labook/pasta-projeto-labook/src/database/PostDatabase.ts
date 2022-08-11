import { ILikeDB, IPostDB, Post } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public getPosts = async () => {
        const result = await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .select()

        return result
    }

    public createPost = async (input: Post) => {
        const postDB: IPostDB = {
            id: input.getId(),
            content: input.getContent(),
            user_id: input.getUserId()
        }

        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .insert(postDB)
    }

    public deletePost = async (id: string) => {

        await BaseDatabase
            .connection(PostDatabase.TABLE_LIKES)
            .delete()
            .where("post_id", "=", `${id}`)

        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .delete()
            .where({ id })

    }

    public findPostById = async (id: string) => {
        const postDB: IPostDB[] = await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .select()
            .where({ id })

        return postDB[0]
    }

    public likePost = async (input: ILikeDB) => {
        const newLikeDB: ILikeDB = {
            id: input.id,
            post_id: input.post_id,
            user_id: input.user_id
        }

        await BaseDatabase
            .connection(PostDatabase.TABLE_LIKES)
            .insert(newLikeDB)
    }

    public findLikePost = async (id: string, userId: string) => {
        const postLikeDB: ILikeDB[] = await BaseDatabase
            .connection("Labook_Likes")
            .select()
            .where("user_id", "=", `${userId}`)
            .andWhere("post_id", "=", `${id}`)

        return postLikeDB[0]
    }

    public dislikePost = async (id: string) => {
        await BaseDatabase
        .connection(PostDatabase.TABLE_LIKES)
        .delete()
        .where("post_id", "=", `${id}`)
    }
}