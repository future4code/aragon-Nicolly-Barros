import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../global/GlobalState";
import { toGoPostDetails } from "../routes/coordinator";
import { changePostVote, createPostVote, deletePostVote } from "../services/requests";
import styled from "styled-components";

const Card = styled.main`
    display:flex;
    border: 2px solid white;
    width: 50%;
    background-color:white;
    border-radius: 5px;
    margin-bottom: 20px;

`

const Container = styled.div`
    display:grid;
    justify-items:center;
`

const ContainerDados = styled.section`
    margin-left: 5px;

`

const Imagem = styled.img` 
    border-radius:5px;
    height:100%;
`
const TituloPost = styled.h1` 
    font-size: 40px;
    text-align: center;
    color: #EC994B;
`

const Botao = styled.button` 
    color: white;
    margin-bottom: 2px;
    background-color: #EC994B;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        background-color: #15133C;
        color: #EC994B;
    }

`

export default function PostCard(props) {

    const navigate = useNavigate();

    const [naoGostei, setNaoGostei] = useState(false);
    const [gostei, setGostei] = useState(false);

    const context = useContext(GlobalContext);
    const { setPostDetails } = context.setters;
    const { getPosts } = context.getters;

    useEffect(() => {
        if (props.post.userVote) {
            props.post.userVote === 1 ? setGostei(true) : setNaoGostei(true)
        }
    }, [props.post.userVote])

    const converterData = (date) => {
        const day = date.substring(8, 10)
        const month = date.substring(5, 7)
        const year = date.substring(0, 4)
        return `${day}/${month}/${year}`
    }

    const verComentarios = () => {
        setPostDetails(props.post)

        toGoPostDetails(navigate, props.post.id)
    }

    const escolherVoto = (votacao) => {
        if (votacao === "sim") {
            if (naoGostei) {
                changePostVote(props.post.id, 1, getPosts)

                setGostei(true)
                setNaoGostei(false)
            } else {
                createPostVote(props.post.id, 1, getPosts)

                setGostei(true)
            }
        } else {
            if (gostei) {
                changePostVote(props.post.id, -1, getPosts)

                setGostei(false)
                setNaoGostei(true)
            } else {
                createPostVote(props.post.id, -1, getPosts)

                setNaoGostei(true)
            }
        }
    }

    const removerVoto = (votacao) => {
        deletePostVote(props.post.id, getPosts)

        votacao === "sim" ? setGostei(false) : setNaoGostei(false)
    }


    const renderizaBotoes = props.paginaFeed && (
        <>
            {props.post.userVote && naoGostei
                ? <Botao onClick={() => removerVoto("nao")}>Remover voto "Não Gostei"</Botao>
                : <Botao onClick={() => escolherVoto("nao")}>{gostei ? `Mudar voto para "Não Gostei"` : `Votar em "Não Gostei"`}</Botao>
            }

            <br />

            {props.post.userVote && gostei
                ? <Botao onClick={() => removerVoto("sim")}>Remover voto "Gostei"</Botao>
                : <Botao onClick={() => escolherVoto("sim")}>{naoGostei ? `Mudar voto para "Gostei"` : `Votar em "Gostei"`}</Botao>
            }

        </>
    )

    return (
        <Container>

            <Card>
                <section>
                    <Imagem src={"https://picsum.photos/300/400?random=" + props.post.id} />
                </section>

                <ContainerDados>
                    <p>Autor: {props.post.userId} - {converterData(props.post.createdAt)}</p>
                    <TituloPost>{props.post.title}</TituloPost>
                    <h1>Descrição: {props.post.body}</h1>
                    <p>Votos: {props.post.voteSum ? props.post.voteSum : 0}</p>
                    {renderizaBotoes}
                    <p>Comentários: {props.post.commentCount ? props.post.commentCount : 0}</p>
                    {props.paginaFeed && <Botao  onClick={verComentarios}>Ver comentários</Botao >}
                </ContainerDados>

            </Card>

        </Container>
    )
}