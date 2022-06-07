import axios from "axios";
import { URL } from "../contants/urls";
import { toGoFeed } from "../routes/coordinator";


export const postLogin = (form, clear, navigate) => {

    const body = {
        email: form.email,
        password: form.password
    };

    axios.post(`${URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem("token-labeddit", res.data.token);
            localStorage.setItem("userEmail", form.email);

            alert("Login realizado com sucesso!");
            toGoFeed(navigate);
        })
        .catch((err) => {
            alert("Email e/ou senha inválidos! Tente novamente.");
            console.log(err)
            clear();
        });
};


export const postSignup = (form, clear, navigate) => {
    const body = {
        username: form.name,
        email: form.email,
        password: form.password
    };

    axios.post(`${URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem("token-labeddit", res.data.token);
            localStorage.setItem("userEmail", form.email);

            alert("Usuário criado com sucesso!");
            toGoFeed(navigate)
        })
        .catch((err) => {
            alert("Erro ao crir usuário, tente novamente.")
            console.log(err)
            clear()
        })
}

export const createNewPost = (form, clear, getPosts) => {
    const body = {
        title: form.title,
        body: form.body
    }

    axios.post(`${URL}/posts`, body, {
        headers: {
            authorization: localStorage.getItem("token-labeddit")
        }
    })
        .then((res) => {
            alert("Post criado com sucesso!")
            getPosts()
            clear()
        })
        .catch((err) => {
            alert("Não foi possível criar post.")
            console.log(err)
        })
}