import React from 'react';
import axios from 'axios';
import CriarPlaylist from './CriarPlaylist';
import Musicas from './Musicas';
import styled from 'styled-components'

const Playlist = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    width:30%;
`

const ContainerGeral = styled.div`
    display:grid;
    display: grid;
   justify-items: center;
   font-size: 25px ;
`

const BotaoExcluir =styled.button`
    margin-left: 5px;
    background-color: white;
    color:red;
    border-radius:10px;
    border-color:red;
    &:hover{
        background-color: red;
        color:white
    }
`
const BotaoMusicas=styled.button`
    margin-left: 5px;
    background-color: white;
    color:black;
    border-radius:3px;
    &:hover{
        background-color: black;
        color:white
    }
`


class VerPlaylists extends React.Component {

    state = {
        playlists: [],
        tela: "playlists",
        id: "",
    }

    componentDidMount = () => {
        this.mostrarPlaylists()
    }

    componentDidUpdate = () => {
        this.mostrarPlaylists()
    }

    mostrarPlaylists = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
            headers: {
                Authorization: "nicoly-barros-aragon"
            }
        })
            .then((response) => {
                /* console.log(response.data.result) */
                this.setState({ playlists: response.data.result.list })
            })
            .catch((error) => {
                alert("Erro ao carregar playlists!");
                console.log(error.message)
            })
    }

    deletarPlaylist = (idPlaylist) => {
        if (window.confirm("Tem certeza que deseja excluir?")) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}`, {
                headers: {
                    Authorization: "nicoly-barros-aragon"
                }
            }).then((response) => {
                console.log(response.data)
                alert("Playlist apagada com sucesso!");
                this.mostrarPlaylists();
            }).catch((error) => {
                console.log(error)
                alert("Erro ao apagar playlist.");
            })
        }
    }


    mudarTela = (idPlaylist) => {
        if (this.state.tela === "playlists") {
            this.setState({ tela: "musicas", id: idPlaylist })
        } else {
            this.setState({ tela: "playlists", id: "" })
        }
    }

    render() {
        
        const renderizaPlaylists = this.state.playlists.map((playlist) => {
            return <Playlist key={playlist.id}>
                <p >♬ {playlist.name}</p>
                <div>
                    <BotaoMusicas onClick={() => this.mudarTela(playlist.id)}>Músicas</BotaoMusicas>
                    <BotaoExcluir onClick={() => this.deletarPlaylist(playlist.id)}>X</BotaoExcluir>
                </div>
            </Playlist>
        })
        return (
            <div>
                {this.state.tela === "playlists"
                    ? (
                        <ContainerGeral>
                            <CriarPlaylist />
                            <hr/>
                            <h3>Suas playlists</h3>
                            {renderizaPlaylists}
                        </ContainerGeral>
                    )
                    :
                    (<div>
                        <Musicas
                            idPlaylist={this.state.id}
                            mudarTela={this.mudarTela}
                        />
                    </div>)}

            </div>
        );
    }
}

export default VerPlaylists;