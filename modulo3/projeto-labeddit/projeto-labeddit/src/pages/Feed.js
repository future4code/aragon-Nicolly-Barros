import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { GlobalContext } from "../global/GlobalState";
import useForm from "../hooks/useForm";
import { toGoLogin } from "../routes/coordinator";
import { createNewPost } from "../services/requests";

export default function Feed() {
    const navigate = useNavigate()

    const { form, onChange, clear } = useForm({ title: "", body: "" });

    const context = useContext(GlobalContext);
    const { posts, pagina } = context.states;
    const { setPagina } = context.setters;
    const { getPosts } = context.getters;

    useEffect(() => {
        const token = window.localStorage.getItem("token-labeddit")
        if (!token) {
            toGoLogin(navigate)
        }

        getPosts(pagina)
        console.log(posts)
    }, [])

    const trocarPagina = (sum) => {
        const proxPagina = pagina + sum;

        setPagina(proxPagina);
        getPosts(proxPagina);
    };

    const criarPost = (e) => {
        e.preventDefault()

        createNewPost(form, clear, getPosts)
    }

    const listaPosts = posts.length === 0 ? (
        <p>Carregando...</p>
    ) : posts.map((post) => {
        return (
            <PostCard
                key={post.id}
                post={post}
                paginaFeed={true}
            />
        )
    })

    return (
        <>
            <Header
                page={"feed"}
            />

            <hr />

            <h2>Criar novo post</h2>
            <form onSubmit={criarPost}>
                <label htmlFor={"title"}> Título: </label>
                <input
                    id={"title"}
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                    pattern={"^.{5,}$"}
                    title={"O nome deve ter no mínimo 5 caracteres"}
                    required
                />
                <br />
                <label htmlFor={"body"}> Texto do post: </label>
                <input
                    id={"body"}
                    type={"text"}
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    pattern={"^.{5,}$"}
                    title={"O nome deve ter no mínimo 5 caracteres"}
                    required
                />
                <br />
                <button type={"submit"}>Criar Post</button>
            </form>

            <hr />

            {pagina !== 1 &&
                <button onClick={() => trocarPagina(-1)}>Voltar página</button>
            }
            <span> Página {pagina} </span>
            {posts.length &&
                <button onClick={() => trocarPagina(1)}>Próxima página</button>
            }

            <hr />

            <h2>Lista de posts</h2>
            {listaPosts}

        </>
    )
}