import React from "react";
import axios from "axios";
import styled from "styled-components"

const ContainerMusica = styled.div`
    border: 1px black solid;
    width: 40%;
    border-radius:6px;
    text-align:center;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    margin-bottom:5px;
`
const ContainerGeral = styled.div`
    display: grid;
    justify-items: center;
`
const BotaoExcluir = styled.button`
    background-color: white;
    color:red;
    margin:5px;
    border-radius:10px;
    border-color:red;
    &:hover{
        background-color: red;
        color:white
    }
`

const BotaoVoltar = styled.button`
    margin-left:5px;
    background-color: white;
    color:black;
    border-radius:3px;
    &:hover{
        background-color: black;
        color:white
    }
`

const BotaoAdicionar = styled.button`
    margin-left:5px;
    background-color: white;
    color:black;
    border-radius:3px;
    &:hover{
        background-color: black;
        color:white
    }
`


class Musicas extends React.Component {
    state = {
        musicas: [],
        name: "",
        artist: "",
        url: "",
        adicionarMusica: "adicionarMusica"
    }

    componentDidMount = () => {
        this.mostrarMusicas()
    }

    onChangeName = (event) => {
        this.setState({ name: event.target.value })
    }

    onChangeArtist = (event) => {
        this.setState({ artist: event.target.value })
    }

    onChangeUrl = (event) => {
        this.setState({ url: event.target.value })
    }


    mostrarMusicas = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`,
            {
                headers: {
                    Authorization: "nicoly-barros-aragon"
                }
            })
            .then((response) => {
                this.setState({ musicas: response.data.result.tracks })
            })
            .catch((error) => {
                console.log(error.message)
            })
    }


    adicionarMusica = () => {
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`, body, {
            headers: {
                Authorization: "nicoly-barros-aragon"
            }
        }).then((response) => {
            console.log(response.data)
            alert("Música adicionada com sucesso!")
            this.mostrarMusicas()
            this.setState({name:"", artist:"", url:""})
        }).catch((error) => {
            console.log(error.message)
        })
    }

    deletarMusica = (idMusica) => {
        if (window.confirm("Tem certeza que deseja excluir?")) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks/${idMusica}`, {
                headers: {
                    Authorization: "nicoly-barros-aragon"
                }
            }).then((response) => {
                console.log(response.data)
                alert("Música apagada com sucesso!");
                this.mostrarMusicas();
            }).catch((error) => {
                console.log(error)
                alert("Erro ao apagar música.");
            })
        }
    }

    botaoAdicionarMusica = () => {
        if (this.state.adicionarMusica === "adicionarMusica") {
            this.setState({ adicionarMusica: "musicaAdicionar" });
        } else {
            this.setState({ adicionarMusica: "adicionarMusica" });
        }
    };

    render() {
        const adicionarMusica =
            this.state.adicionarMusica === "adicionarMusica" ? (
                <BotaoAdicionar onClick={this.botaoAdicionarMusica}>Adicionar música</BotaoAdicionar>
            ) : (
                <div>
                    <label>
                        <input
                            placeholder="Nome da música"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        >
                        </input>


                        <input
                            placeholder="Nome da banda/artista"
                            value={this.state.artist}
                            onChange={this.onChangeArtist}
                        >
                        </input>


                        <input
                            placeholder="Arquivo/URL"
                            value={this.state.url}
                            onChange={this.onChangeUrl}
                        >
                        </input>

                        <BotaoAdicionar onClick={this.adicionarMusica}>Adicionar</BotaoAdicionar>
                        <br/>
                    </label>
                </div>
            );
        return (
            <div>

                {adicionarMusica}
                <BotaoVoltar onClick={this.props.mudarTela}>Voltar</BotaoVoltar>

                <ContainerGeral>
                    <h3>Músicas</h3>
                    {this.state.musicas.map((musica) => {
                        return <ContainerMusica key={musica.id}>
                            <p>Música: {musica.name}</p>
                            <p>Banda: {musica.artist}</p>
                            <audio controls="controls" src={musica.url}></audio>

                            <BotaoExcluir onClick={() => this.deletarMusica(musica.id)}>x</BotaoExcluir>

                        </ContainerMusica>
                    })}
                </ContainerGeral>

            </div>
        )
    }
}

export default Musicas;