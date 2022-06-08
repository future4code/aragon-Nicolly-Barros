import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../global/GlobalState";
import { toGoPostDetails } from "../routes/coordinator";
import { changePostVote, createPostVote, deletePostVote } from "../services/requests";


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
                ? <button onClick={()=> removerVoto("nao")}>Remover voto "Não Gostei"</button>
                : <button onClick={()=> escolherVoto("nao")}>{gostei ? `Mudar voto para "Não Gostei"` : `Votar em "Não Gostei"`}</button>
            }

            <br/>

            {props.post.userVote && gostei
                ? <button onClick={()=> removerVoto("sim")}>Remover voto "Gostei"</button>
                : <button onClick={()=> escolherVoto("sim")}>{naoGostei ? `Mudar voto para "Gostei"` : `Votar em "Gostei"`}</button>
            }

        </>
    )

    return (
        <article>

            <h3>{props.post.title}</h3>
            <h4>Autor: {props.post.userId}</h4>
            <p>Postado em: {converterData(props.post.createdAt)}</p>
            <img src={"https://picsum.photos/200/300?random=" + props.post.id} />
            <p>Descrição: {props.post.body}</p>
            <p>Votos: {props.post.voteSum ? props.post.voteSum : 0}</p>
            {renderizaBotoes}
            <p>Comentários: {props.post.commentCount ? props.post.commentCount : 0}</p>
            {props.paginaFeed && <button onClick={verComentarios}>Ver comentários</button>}
            <hr />

        </article >
    )
}