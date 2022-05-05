import React from 'react'
/* import axios from 'axios'; */

class VerPlaylists extends React.Component {
    /* state = {
        playlists: [],
    }

    mostrarLista = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
            headers: {
                Authorization: "nicoly-barros-aragon"
            }
        }).then((response) => {
            console.log(response.data)
            this.setState({ listaUsuarios: response.data })
        }).catch((error) => {
            alert("Erro ao carregar playlists!");
            console.log(error.response.data)
        })
    } */

    render() {
        return (
            <div>
                <h3>Playlists</h3>

                {/* {this.state.playlists.map((playlist)=>{
                    return <p>{playlist.nome}</p>
                })} */}
            </div>
        );
    }
}

export default VerPlaylists;