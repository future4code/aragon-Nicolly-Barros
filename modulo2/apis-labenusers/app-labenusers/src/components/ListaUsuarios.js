import React from 'react';
import axios from 'axios';
import DetalhesUsuario from './DetalhesUsuario';


class ListaUsuarios extends React.Component {

  state = {
    listaUsuarios: [],
    page: "listaUsuarios",
    id: "",
    name: ""
  }

  componentDidMount() {
    this.buscarLista();
  }

  buscarLista = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "nicoly-barros-aragon"
      }
    })
      .then((response) => {
        console.log(response.data)
        this.setState({ listaUsuarios: response.data })
      })
  }

  deletarUsuario = (idUsuario) => {
    if (window.confirm("Tem certeza que deseja excluir?")) {
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUsuario}`, {
        headers: {
          Authorization: "nicoly-barros-aragon"
        }
      }).then((response) => {
        console.log(response.data)
        alert("Usuário apagado com sucesso!");
        this.buscarLista();
      }).catch((error) => {
        console.log(error)
        alert("Erro ao apagar usuário.");
      })
    }
  }

  mudandoPagina = idUsuario => {
    if (this.state.page === "listaUsuarios") {
      this.setState({ page: "detalhesUsuairo", id: idUsuario });
    } else {
      this.setState({ page: "listaUsuarios", id: "" });
    }
  }

  onChangeBuscaPorNome = (event) =>{
    this.setState({ name : event.target.value})
  }

  pesquisandoPorNome = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.name}&email=
    `, {
      headers: {
        Authorization: "nicoly-barros-aragon"
      }
    }).then(response => {
      this.setState({ listaUsuarios: response.data });
    })
    .catch(error => {
      alert("Erro ao procurar usuário");
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        {this.state.page === "listaUsuarios" ? (
          <div>
            <h3>Lista de Usuários</h3>
            <ul>
              {this.state.listaUsuarios.map((usuario) => {
                return (
                  <li key={usuario.id}>
                    <span onClick={() => this.mudandoPagina(usuario.id)}>
                      {usuario.name}
                    </span>
                    <button onClick={() => this.deletarUsuario(usuario.id)}>delete</button>
                  </li>
                )
              })}
            </ul>

            <hr />

            <h3>Procurar Usuários</h3>
            <input
              placeholder="Nome para busca"
              type="text"
              value={this.state.name}
              onChange={this.onChangeBuscaPorNome}
            />
            <button onClick={this.pesquisandoPorNome}>Buscar</button>
          </div>
        ) : (
          <DetalhesUsuario 
          idUsuario = {this.state.id}
          mudandoPagina={this.mudandoPagina}
          />
        )} 

      </div>
    );
  }
}

export default ListaUsuarios;
