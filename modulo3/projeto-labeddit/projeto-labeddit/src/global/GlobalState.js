import axios from "axios";
import { createContext, useState } from "react";
import { URL } from "../contants/urls";


export const GlobalContext = createContext()


export default function GlobalState(props) {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState({});
    const [comentarios, setComentarios] = useState([]);
    const [pagina, setPagina] = useState(1)

    const getPosts = (paginaAtual) => {
        axios.get(`${URL}/posts?page=${paginaAtual}&size=10`, {
            headers: {
                authorization: localStorage.getItem("token-labeddit")
            }
        })
            .then((res) => {
                setPosts(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const getComentarios = (idPost) => {
        axios.get(`${URL}/posts/${idPost}/comments`, {
            headers: {
                authorization: localStorage.getItem("token-labeddit")
            }
        })
            .then((res) => {
                setComentarios(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const states = {
        posts,
        postDetails,
        comentarios,
        pagina,
    }

    const setters = {
        setPosts,
        setPostDetails,
        setComentarios,
        setPagina,
    }

    const getters = {
        getPosts,
        getComentarios,
    }

    return (
        <GlobalContext.Provider value={{ states, setters, getters }}>
            {props.children}
        </GlobalContext.Provider>
    )
}