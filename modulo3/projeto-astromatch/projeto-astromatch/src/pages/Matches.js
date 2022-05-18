import axios from "axios";
import React, { useEffect, useState } from "react";
import { URL, PATH } from '../constants/urls';


function Matches() {

    const [listaMatches, setListaMatches] = useState([])

    useEffect(() => {
        pegarMatches()
    }, [])

    const pegarMatches = () => {
        axios.get(`${URL}/${PATH}/matches`)
            .then((res) => {
                console.log(res.data);
                setListaMatches(res.data.matches);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    const mostrarMatches = listaMatches && listaMatches.map((match) => {
        return <div key={match.id}>
            <img
                src={match.photo}
                alt={`foto de ${match.name}`}
                height={"32px"}
            ></img>

            <span>{match.name}</span>
            <hr />
        </div>
    })

    return (
        <div>
            <h1>Seus Matches</h1>
            {mostrarMatches}
        </div>
    );
}

export default Matches;