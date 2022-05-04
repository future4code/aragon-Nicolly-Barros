import React from 'react';
import axios from 'axios';


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
                <button onClick={this.botaoEditarUsuario}>Editar usuário</button>
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
                <h3>Detalhes do usuário:</h3>
                <div>
                    <p>{this.state.detalhesUsuario.name}</p>
                    <p>{this.state.detalhesUsuario.email}</p>
                </div>
                <div>{editarUsuario}</div>
                <hr />
                <button onClick={this.props.mudandoPagina}>
                    Voltar para lista de usuários
                </button>
            </div>
        );
    };
}

export default DetalhesUsuario;