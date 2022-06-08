import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../global/GlobalState";
import { changeCommentVote, createCommentVote, deleteCommentVote } from "../services/requests";


export default function ComentarioCard(props) {

    const context = useContext(GlobalContext);
    const { getComentarios } = context.getters;

    const [naoGostei, setNaoGostei] = useState(false);
    const [gostei, setGostei] = useState(false);

    useEffect(() => {
        if (props.comentario.userVote) {
            props.comentario.userVote === 1 ? setGostei(true) : setNaoGostei(true)
        }
    }, [props.comentario.userVote])

    const converterData = (date) => {
        const day = date.substring(8, 10)
        const month = date.substring(5, 7)
        const year = date.substring(0, 4)
        return `${day}/${month}/${year}`
    }

    const escolherVoto = (votacao) => {
        if (votacao === "sim") {
            if (naoGostei) {
                changeCommentVote (props.comentario.id, 1, getComentarios, props.comentario.postId)

                setGostei(true)
                setNaoGostei(false)
            } else {
                createCommentVote(props.comentario.id, 1, getComentarios, props.comentario.postId)

                setGostei(true)
            }
        } else {
            if (gostei) {
                changeCommentVote(props.comentario.id, -1, getComentarios, props.comentario.postId)

                setGostei(false)
                setNaoGostei(true)
            } else {
                createCommentVote(props.comentario.id, -1, getComentarios, props.comentario.postId)

                setNaoGostei(true)
            }
        }
    }

    const removerVoto = (votacao) => {
        deleteCommentVote(props.comentario.id, getComentarios, props.comentario.postId)

        votacao === "sim" ? setGostei(false) : setNaoGostei(false)
    }

    const renderizaBotoes = (
        <>
            {props.comentario.userVote && naoGostei
                ? <button onClick={()=> removerVoto("nao")}>Remover voto "Não Gostei"</button>
                : <button onClick={()=> escolherVoto("nao")}>{gostei ? `Mudar voto para "Não Gostei"` : `Votar em "Não Gostei"`}</button>
            }

            <br/>

            {props.comentario.userVote && gostei
                ? <button onClick={()=> removerVoto("sim")}>Remover voto "Gostei"</button>
                : <button onClick={()=> escolherVoto("sim")}>{naoGostei ? `Mudar voto para "Gostei"` : `Votar em "Gostei"`}</button>
            }

        </>
    )

    return (
        <>
            <h3>{props.comentario.body}</h3>
            <span><b>Autor: </b>{props.comentario.userId}</span>
            <p>Criado em {converterData(props.comentario.createdAt)}</p>

            <p>Votos: {props.comentario.voteSum ? props.comentario.voteSum : 0}</p>
            {renderizaBotoes}

            <hr />
        </>
    )
}