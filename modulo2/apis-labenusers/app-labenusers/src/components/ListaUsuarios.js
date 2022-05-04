import React from 'react';
import axios from 'axios';
import DetalhesUsuario from './DetalhesUsuario';
import styled from 'styled-components'

const Botao1 = styled.button`
    color: white;
    background-color: orange;
    border-radius: 3px;
    font-size: 14px;

    &:hover {
        background-color: black;
        color:orange;
    };
`

const Botao2 = styled.button`
    border-color:orange;
    background-color: white;
    border-radius: 3px;
    margin-left: 5px;
    font-size: 14px;

    &:hover {
        background-color: black;
        color:orange;
    };
`

const BotaoExcluir = styled.button`
  background-color:white;
  color:red;

  &:hover {
        background-color: red;
        color:white;
    };
`

const BotaoEditar =styled.button`
  background-color:white;
  width: 35px;
  margin-right:2px ;

  &:hover {
        background-color: orange;
    };
`

const ContainerUsuario = styled.li`
  display:flex;
  justify-content: space-between;
  padding: 10px;
  margin:5px;
  border:black solid 1px;
  list-style: none;
  width: 40%;
`

const ContainerLista = styled.ul`
  display: grid;
  justify-items: center;
`

const BuscaPorNome = styled.section`
  display:flex;
  flex-direction:row;
  justify-content: center;
  height: 20px ;
  align-items:center;
  margin-top: 30px;
`

const InputBuscar = styled.input`
  margin-left: 5px;
`



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
      }).catch((error) => {
        alert("Erro ao carregar lista de usuários!");
        console.log(error.response.data)
      })
  }

  /* função de deletar usuário, no qual fazemos uma requisição, entre parentes passamos o id do usurio, que é passado no button */
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

  onChangeBuscaPorNome = (event) => {
    this.setState({ name: event.target.value })
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

            <Botao1 onClick={this.props.telaCadastro}>
              Voltar no cadastro
            </Botao1>

            <BuscaPorNome>

              <p> Procurar Usuário: </p>

              <InputBuscar
                placeholder="Nome para busca"
                type="text"
                value={this.state.name}
                onChange={this.onChangeBuscaPorNome}
              />

              <Botao2 onClick={this.pesquisandoPorNome}>🔎</Botao2>

            </BuscaPorNome>



            <ContainerLista>
              {this.state.listaUsuarios.map((usuario) => {
                return (
                  <ContainerUsuario key={usuario.id}>

                    <span >
                      🤖 {usuario.name}
                    </span>

                    <div>
                      <BotaoEditar onClick={() => this.mudandoPagina(usuario.id)}>⚙️</BotaoEditar>
                      <BotaoExcluir onClick={() => this.deletarUsuario(usuario.id)}>x</BotaoExcluir>
                    </div>

                  </ContainerUsuario>
                )
              })}
            </ContainerLista>

          </div>
        ) : (
          <DetalhesUsuario
            idUsuario={this.state.id}
            mudandoPagina={this.mudandoPagina}
          />
        )}

      </div>
    );
  }
}

export default ListaUsuarios;
