import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { GlobalContext } from "../global/GlobalState";
import useForm from "../hooks/useForm";
import { toGoLogin } from "../routes/coordinator";
import { createNewPost } from "../services/requests";
import Arrow1 from "../images/arrow>.png";
import Arrow2 from "../images/arrow<.png";
import styled from "styled-components"


const TituloCriar = styled.h3` 
    color: #EC994B;
    cursor: pointer;
`

const ContainerCriar = styled.form` 
    display: flex;
    padding:20px;
`

const Input = styled.input`
    border-radius: 3px;
    padding: 3px;
    border: 1px solid #EC994B;

`

const Label = styled.label` 
    color: #EC994B;
    margin-left: 20px;
    font-size: 20px;
`

const SectionPosts = styled.section`
    background-color:#EC994B;
`

const Paginacao = styled.section`
    display:flex;
    align-items: center;
    color: white;
    justify-content:center;
`



export default function Feed() {
    const navigate = useNavigate()

    const { form, onChange, clear } = useForm({ title: "", body: "" });

    const context = useContext(GlobalContext);
    const { posts, pagina, novoPost } = context.states;
    const { setPagina, setNovoPost } = context.setters;
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

    const botaoNovoPost = () => {
        setNovoPost(!novoPost)
    }

    const Botao = styled.button` 
    color: #15133C;
    margin-left: 20px;
    font-size: 17px;
    background-color: #EC994B;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        background-color: #15133C;
        color: #EC994B;
    }

`

    return (
        <>
            <Header
                page={"feed"}
            />

            <TituloCriar onClick={botaoNovoPost}>Criar novo post</TituloCriar>

            {novoPost ? (

                <ContainerCriar onSubmit={criarPost}>
                    <Label htmlFor={"title"}> Título:  </Label>
                    <Input
                        id={"title"}
                        name={"title"}
                        value={ContainerCriar.title}
                        onChange={onChange}
                        pattern={"^.{5,}$"}
                        title={"O nome deve ter no mínimo 5 caracteres"}
                        required
                    />
                    <br />
                    <Label htmlFor={"body"}> Texto do post:  </Label>
                    <Input
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
                    <Botao type={"submit"}>Criar Post</Botao>
                </ContainerCriar>

            ) : (
                <></>
            )}



            <SectionPosts>
                <Paginacao>
                    {pagina !== 1 &&
                        <img src={Arrow2} onClick={() => trocarPagina(-1)} />
                    }
                    <span> Página {pagina} </span>
                    {posts.length &&
                        <img src={Arrow1} onClick={() => trocarPagina(1)} />
                    }
                </Paginacao>

                {listaPosts}
            </SectionPosts>

        </>
    )
}