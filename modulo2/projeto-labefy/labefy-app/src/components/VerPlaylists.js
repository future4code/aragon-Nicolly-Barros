import React from 'react';
import axios from 'axios';

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
            this.setState({ playlists: response.data })
        }).catch((error) => {
            alert("Erro ao carregar playlists!");
            console.log(error.response.data)
        })
    } */

    render() {
       /*  const renderizaPlaylists = this.state.playlists.map((playlist)=>{
            return <p key={playlist.id}>{playlist.name}</p>
        }) */
        return (
            <div>
                {/* <h3>Playlists</h3>
                {renderizaPlaylists} */} 
            </div>
        );
    }
}

export default VerPlaylists;