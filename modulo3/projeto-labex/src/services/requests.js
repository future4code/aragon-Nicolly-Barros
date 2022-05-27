import axios from "axios";
import { paginaAdmin } from "../routes/coordinator";
import { URL, AUTH } from "../constants/urls";


export const loginAdm = (email, senha, navigate) => {
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



export const criarViagem = (body, clear, getData) => {

    axios.post(`${URL}/${AUTH}/trips`, body, {
        headers: {
            auth: localStorage.getItem("token")
        }
    })
        .then((res) => {
            alert("Viagem criada com sucesso!")
            clear();
            getData();
        })
        .catch((err) => {
            alert("Campos preenchidos incorretamente, tente novamente.")
            console.log(err.message)
        })
}


export const envioCandidatura = (body, idTrip, clear) => {

    axios.post(`${URL}/${AUTH}/trips/${idTrip}/apply`, body)
        .then((res) => {
            alert("Incrição feita com sucesso, aguarde nosso contato.")
            clear()
        })
        .catch((err) => {
            alert("Erro ao se inscrever na viagem.")
            console.log(err.message)
        })
}




export const aprovarCandidato = (idTrip, candidateId, decisao, getData) => {
    const body = {
        approve: decisao
    }

    axios.put(`${URL}/${AUTH}/trips/${idTrip}/candidates/${candidateId}/decide`, body, {
        headers: {
            auth: localStorage.getItem("token")
        }
    })
    .then(()=>{
        decisao ? 
        alert("Candidato aprovado com sucesso!")
        : alert("Candidato reprovado com sucesso!")

        getData()
    })
    .catch((err)=>{
        console.log(err.message)
        alert("Erro ao aprovar/reprovar candidato.")
    })
}



export const deletarViagem = (id, getData) => {
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
                alert("Erro ao deletar viagem.")
                console.log(err.message)
            })
    }
}