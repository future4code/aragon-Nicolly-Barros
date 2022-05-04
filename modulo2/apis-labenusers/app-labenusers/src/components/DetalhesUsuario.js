import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const DetalhesTitulo = styled.h3`
    color:orange;
`

const BotaoEditar = styled.button`
    color: white;
    background-color: orange;
    border-radius: 3px;
    font-size: 14px;
    margin-top:10px;
    
    &:hover {
        background-color: black;
        color:orange;
    };
`

const BotaoVoltar = styled.button`
    color: white;
    background-color: orange;
    border-radius: 3px;
    font-size: 14px;
    
    &:hover {
        background-color: black;
        color:orange;
    };
`

class DetalhesUsuario extends React.Component {
    state = {
        detalhesUsuario: {},
        editarUsuario: "editarBotao",
        name: "",
        email: ""
    }


    componentDidMount() {
        this.detalhesUsuario();
    }

    detalhesUsuario = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.idUsuario}`, {
            headers: {
                Authorization: "nicoly-barros-aragon"
            }
        }).then((response) => {
            this.setState({ detalhesUsuario: response.data });
        }).catch((error) => {
            console.log(error);
        });
    };

    botaoEditarUsuario = () => {
        if (this.state.editarUsuario === "editarBotao") {
            this.setState({ editarUsuario: "usuarioEditar" });
        } else {
            this.setState({ editarUsuario: "editarBotao" });
        }
    };

    onChangeInputNome = event => {
        const novoNome = event.target.value;

        this.setState({ name: novoNome });
    };

    onChangeInputEmail = event => {
        const novoEmail = event.target.value;

        this.setState({ email: novoEmail });
    };

    editarUsuario = () => {
        const body = {
            name: this.state.name,
            email: this.state.email
        };

        axios
            .put(
                `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.idUsuario
                }`,
                body, {
                headers: {
                    Authorization: "nicoly-barros-aragon"
                }
            })
            .then(() => {
                this.setState({ name: "", email: "" });
                this.detalhesUsuario();
                this.botaoEditarUsuario();
                alert(`Usuário ${this.state.name} editado com sucesso!`);
            })
            .catch(error => {
                alert("Erro ao criar o usuário");
                console.log(error);
            });
    };


    render() {
        const editarUsuario =
            this.state.editarUsuario === "editarBotao" ? (
                <BotaoEditar onClick={this.botaoEditarUsuario}>Editar usuário</BotaoEditar>
            ) : (
                <div>
                    <input
                        placeholder="Nome"
                        type="text"
                        value={this.state.name}
                        onChange={this.onChangeInputNome}
                    />
                    <input
                        placeholder="E-mail"
                        type="email"
                        value={this.state.email}
                        onChange={this.onChangeInputEmail}
                    />
                    <button onClick={this.editarUsuario}>Salvar edição</button>
                </div>
            );
        return (
            <div>

                <BotaoVoltar onClick={this.props.mudandoPagina}>
                    Voltar para lista de usuários
                </BotaoVoltar>

                <DetalhesTitulo>Detalhes do usuário:</DetalhesTitulo>

                <div>
                    <p>Nome: {this.state.detalhesUsuario.name}</p>
                    <p>Email: {this.state.detalhesUsuario.email}</p>
                </div>
                <div>{editarUsuario}</div>

            </div>
        );
    };
}

export default DetalhesUsuario;