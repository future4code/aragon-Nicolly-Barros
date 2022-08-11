import { PostDatabase } from "../database/PostDatabase"
import { ICreatePostDTO, IDeletePostInputDTO, IGetPosts, IGetPostsInputDTO, IGetPostsOutputDTO, ILikeDB, ILikePostInputDTO, Post } from "../models/Post"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }

    public getPosts = async (input: IGetPostsInputDTO) => {
        const token = input.token

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido/ausente.")
        }

        const postsDB = await this.postDatabase.getPosts()

        /* const posts = postsDB.map((postDB: Post )=> {
            
            const post = new Post (
                postDB.id,
                postDB.content,
                postDB.userId,
                postDB.likes
            )

            const postResponse: IGetPosts = {
                id: post.getId(),
                content: postDB.getContent(),
                userId: postDB.getUserId(),
                likes:postDB.getLikes()
            }

            return post
        }) */

        const response = {
            postsDB
        }

        return response
    }

    public createPost = async (input: ICreatePostDTO) => {
        const token = input.token
        const content = input.content

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido/ausente.")
        }

        if (!content) {
            throw new Error("Parâmetro ausente.");
        }

        if (content.length < 1) {
            throw new Error("Parâmetro 'content' inválido.");
        }

        const id = this.idGenerator.generate()

        const post = new Post(
            id,
            content,
            payload.id
        )

        await this.postDatabase.createPost(post)

        const response = {
            message: "Post publicado!"
        }

        return response
    }

    public deletePost = async (input: IDeletePostInputDTO) => {
        const token = input.token
        const id = input.id

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido/ausente.")
        }

        const findPost = await this.postDatabase.findPostById(id)

        if (!findPost) {
            throw new Error("Post não encontrado.")
        }

        if (payload.role === USER_ROLES.NORMAL) {
            if (payload.id !== findPost.user_id) {
                throw new Error("Somente admins podem deletar posts de outros usuários.");
            }
        }

        await this.postDatabase.deletePost(id)

        const response = {
            message: "Post deletado com sucesso!"
        }

        return response
    }

    public likePost = async (input: ILikePostInputDTO) => {
        const token = input.token
        const id = input.id

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido/ausente.")
        }

        const findPostById = await this.postDatabase.findPostById(id)

        if(!findPostById){
            throw new Error("Post não encontrado.");
        }

        const findLikePost = await this.postDatabase.findLikePost(id, payload.id)

        if (findLikePost) {
            throw new Error("Você já curtiu esse post.");
        }

        const idPost = this.idGenerator.generate()

        const newLike: ILikeDB = {
            id : idPost,
            post_id : id,
            user_id : payload.id
        }
        
        await this.postDatabase.likePost(newLike)

        const response = {
            message: "Post curtido!"
        }

        return response

    }
}