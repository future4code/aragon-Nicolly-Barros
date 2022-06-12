import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ComentarioCard from "../components/ComentarioCard";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { GlobalContext } from "../global/GlobalState";
import useForm from "../hooks/useForm";
import { toGoLogin } from "../routes/coordinator";
import { createNewComment } from "../services/requests";
import styled from "styled-components";

const ContainerGeral = styled.div` 
    display: grid;
    justify-items:center;
`

const CardDetails = styled.section`
    margin-top: 20px;
    border: 2px solid black;
    width: 50%;
    background-color:white;
    border-radius: 5px;
`

export default function PostDetails() {
    const navigate = useNavigate()
    const params = useParams()

    const context = useContext(GlobalContext);
    const { postDetails, comentarios } = context.states;
    const { getComentarios } = context.getters;

    const { form, onChange, clear } = useForm({ body: "" });

    useEffect(() => {
        const token = window.localStorage.getItem("token-labeddit");

        if (!token) {
            toGoLogin(navigate);
        }

        getComentarios(postDetails.id)
    }, [])

    const criarComentario = (e) => {
        e.preventDefault()

        createNewComment(form, clear, getComentarios, postDetails.id)
    }

    const listaComentarios = comentarios.length ? comentarios.map((comentario) => {
        return (
            <ComentarioCard
                key={comentario.id}
                comentario={comentario}
            />
        )
    }) : (
        <p>Não há comentarios ainda, seja o primeiro a comentar!</p>
    )


    return (
        <>
            <Header
                page={"detalhesPost"}
            />

            <ContainerGeral>
                <CardDetails>
                    <PostCard
                        key={postDetails.id}
                        post={postDetails}
                        paginaFeed={false}
                    />
                </CardDetails>

                <section>
                    <h2>Escreva seu comentário</h2>
                    <form onSubmit={criarComentario}>
                        <label htmlFor={"body"}> Comentário: </label>
                        <input
                            id={"body"}
                            type={"text"}
                            name={"body"}
                            value={form.body}
                            onChange={onChange}
                            required
                        />
                        <br />
                        <button type={"submit"}>Comentar</button>
                    </form>
                </section>
                <hr />

                <section>
                    <h2>Comentários</h2>
                    {listaComentarios}
                </section>
            </ContainerGeral>
        </>
    )
}