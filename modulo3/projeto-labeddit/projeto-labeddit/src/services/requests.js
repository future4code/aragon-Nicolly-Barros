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


export const createNewComment = (form, clear, getComentarios, idPost) => {

    const body = {
        body: form.body
    };

    axios.post(`${URL}/posts/${idPost}/comments`, body, {
        headers: {
            authorization: localStorage.getItem("token-labeddit")
        }
    })
        .then((res) => {
            alert("Comentário publicado com sucesso!")
            getComentarios(idPost)
            clear()
        })
        .catch((err) => {
            alert("Erro ao publicar comentário!")
            console.log(err)
        })
}


export const createPostVote = (idPost, direction, getPosts) => {

    const body = {
        direction: direction
    };

    axios.post(`${URL}/posts/${idPost}/votes`, body, {
        headers: {
            authorization: localStorage.getItem("token-labeddit")
        }
    })
        .then((res) => {
            getPosts()
        })
        .catch((err) => {
            alert("Erro ao votar.")
            console.log(err)
        })
}


export const createCommentVote = (idComentario, direction, getComentarios, idPost) => {

    const body = {
        direction: direction
    };

    axios.post(`${URL}/comments/${idComentario}/votes`, body, {
        headers: {
            authorization: localStorage.getItem("token-labeddit")
        }
    })
        .then((res) => {
            getComentarios(idPost)
        })
        .catch((err) => {
            alert("Erro ao votar.")
            console.log(err)
        })
}


export const changePostVote = (idPost, direction, getPosts) => {

    const body = {
        direction: direction
    };

    axios.put(`${URL}/posts/${idPost}/votes`, body, {
        headers: {
            authorization: localStorage.getItem("token-labeddit")
        }
    })
        .then((res) => {
            getPosts()
        })
        .catch((err) => {
            alert("Erro ao mudar voto.")
            console.log(err)
        })
}


export const changeCommentVote = (idComentario, direction, getComentarios, idPost) => {

    const body = {
        direction: direction
    };

    axios.put(`${URL}/comments/${idComentario}/votes`, body, {
        headers: {
            authorization: localStorage.getItem("token-labeddit")
        }
    })
        .then((res) => {
            getComentarios(idPost)
        })
        .catch((err) => {
            alert("Erro ao mudar voto.")
            console.log(err)
        })
}


export const deletePostVote = (idPost, getPosts) => {

    axios.delete(`${URL}/posts/${idPost}/votes`, {
        headers: {
            authorization: localStorage.getItem("token-labeddit")
        }
    })
        .then((res) => {
            getPosts()
        })
        .catch((err) => {
            alert("Erro ao deletar voto.")
            console.log(err)
        })
}


export const deleteCommentVote = (idComentario, getComentarios, idPost) => {

    axios.delete(`${URL}/comments/${idComentario}/votes`, {
        headers: {
            authorization: localStorage.getItem("token-labeddit")
        }
    })
        .then((res) => {
            getComentarios(idPost)
        })
        .catch((err) => {
            alert("Erro ao deletar voto.")
            console.log(err)
        })
}