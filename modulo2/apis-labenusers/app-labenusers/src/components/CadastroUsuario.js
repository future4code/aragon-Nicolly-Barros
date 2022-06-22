import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const SecaoCadastro = styled.section `
    display:flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 60px ;
`

const Botao1 = styled.button `
    color: white;
    background-color: orange;
    border-radius: 3px;
    margin-left: 5px;
    font-size: 14px;
    
    &:hover {
        background-color: black;
        color:orange;
    };
`

const Botao2 = styled.button `
    color: white;
    background-color: orange;
    border-radius: 3px;
    font-size: 14px;
    
    &:hover {
        background-color: black;
        color:orange;
    };
`

class CadastroUsuario extends React.Component {

    state = {
        name: "",
        email: "",
    }

    onChangeNome = (event) => {
        this.setState({ name: event.target.value })
    }

    onChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    criandoUsuarios = () => {
        const body = {
            name: this.state.name,
            email: this.state.email
        };

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers: {
                Authorization: "nicoly-barros-aragon"
            }
        }).then((response) => {
            alert(`Usúario(a) ${this.state.name} cadastrado(a) com sucesso!`)
            console.log(response.data)
            this.setState({ name: "", email: "" });
        }).catch((error) => {
            alert(`Erro ao criar usuário(a)!`)
            console.log(error.response.data)
        })

    }


    render() {
        return (
            <div>

                <h3>  Cadastre o aluno aqui 👇 </h3>
                <SecaoCadastro>
                    <label>
                        <input
                            placeholder="Nome"
                            type="text"
                            value={this.state.name}
                            onChange={this.onChangeNome}
                        ></input>
                    </label>

                    <label>
                        <input
                            placeholder="E-mail"
                            type="email"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        ></input>
                    </label>

                    <Botao1 onClick={this.criandoUsuarios}>Criar usuário</Botao1>
                </SecaoCadastro>

                <h3> Para editar, consultar ou excluir cadastros, clique aqui 👇 </h3>
                <Botao2 onClick={this.props.telaLista}>
                    Ver lista de usuários
                </Botao2>
            </div>
        );
    }
}

export default CadastroUsuario;
