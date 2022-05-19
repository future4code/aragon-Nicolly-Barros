import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const BotaoCriar = styled.button`
    margin-left: 5px;
    background-color: white;
    border-radius: 3px;
    color:black;
    &:hover{
        background-color: black;
        color:white
    }
`

class CriarPlaylist extends React.Component {

    state = {
        nomePlaylist: "",
    }

    onChangePlaylist = (event) => {
        this.setState({ nomePlaylist: event.target.value })
    }

    criandoPlaylist = () => {
        const body = {
            name: this.state.nomePlaylist,
        };

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
            headers: {
                Authorization: "nicoly-barros-aragon"
            }
        }).then((response) => {
            alert(`Playlist criada com sucesso!`)
            console.log(response.data)
            this.setState({ nomePlaylist: "" });
        }).catch((error) => {
            alert(`Erro ao criar playlist! Já existe uma playlist com um nome semelhante.`)
            console.log(error.response.data)
        })
    }


    render() {
        return (
            <div>
                <label>
                   <p> Criar playlist:</p>
                    <input
                        value={this.state.nomePlaylist}
                        onChange={this.onChangePlaylist}
                        placeholder="Nome da playlist"
                    />
                    <BotaoCriar onClick={this.criandoPlaylist}>Criar</BotaoCriar>
                </label>
            </div>
        );
    }
}

export default CriarPlaylist;