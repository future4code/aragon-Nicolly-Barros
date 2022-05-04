import React from 'react';
import axios from 'axios';

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
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers: {
                Authorization: "nicoly-barros-aragon"
            }
        }).then((response) => {
            alert (`Usúario ${this.state.name} criado com sucesso!`)
            console.log(response.data)
            this.setState({ name: "", email: "" });
        }).catch((error) => {
            alert (`Erro ao criar usuário!`)
            console.log(error.message)
        })
    }


    render() {
        return (
            <div>
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

                <button onClick={this.criandoUsuarios}>Criar usuário</button>
            </div>
        );
    }
}

export default CadastroUsuario;
