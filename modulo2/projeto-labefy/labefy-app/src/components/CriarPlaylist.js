import React from 'react'
import axios from 'axios'


class VerPlaylists extends React.Component {

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
            /* alert(`Erro ao criar playlist!`) */
            console.log(error.response.data)
        })
    }


    render() {
        return (
            <div>
                <label>
                    Criar playlist:
                    <input
                        value={this.state.nomePlaylist}
                        onChange={this.onChangePlaylist}
                        placeholder="Nome da playlist"
                    />
                    <button onClick={this.criandoPlaylist}>Criar</button>
                </label>
            </div>
        );
    }
}

export default VerPlaylists;