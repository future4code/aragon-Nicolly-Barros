import axios from "axios";
import { createContext, useState } from "react";
import { URL } from "../contants/urls";


export const GlobalContext = createContext()


export default function GlobalState(props) {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        axios.get(`${URL}/posts?page=1&size=10`, {
            headers: {
                authorization: localStorage.getItem("token-labeddit")
            }
        })
            .then((res) => {
                setPosts(res.data)
            })
            .catch((err) => {
                alert("Erro ao carregar posts.")
                console.log(err)
            })
    }

    const states = {
        posts
    }

    const setters = {
        setPosts
    }

    const getters = {
        getPosts
    }

    return (
        <GlobalContext.Provider value={{ states, setters, getters }}>
            {props.children}
        </GlobalContext.Provider>
    )
}