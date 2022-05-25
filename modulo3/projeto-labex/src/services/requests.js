import axios from "axios";
import { paginaAdmin } from "../routes/coordinator";
import { URL, AUTH } from "../constants/urls";

export const loginAdm = (email, senha, navigate)=>{
    const body = {
        email: email,
        password: senha
    }

    axios.post(`${URL}/${AUTH}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            alert("Login efetuado com sucesso, aguarde!")
            paginaAdmin(navigate)
        })
        .catch((err) => {
            console.log(err.message)
            alert("Email e/ou senha inválido, tente novamente.")
        })
}

export const deletarViagem = (id, getData)=>{
    const deletar = window.confirm("Certeza que deseja deletar essa viagem?")

        if (deletar) {
            axios.delete(`${URL}/${AUTH}/trips/${id}`, {
                headers: {
                    auth: localStorage.getItem("token")
                }
            })
                .then((res) => {
                    alert("Viagem deletada com sucesso!")
                    getData()
                })
                .catch((err) => {
                    console.log(err.message)
                })
        }
}