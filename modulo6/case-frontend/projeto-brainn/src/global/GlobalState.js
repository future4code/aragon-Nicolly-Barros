import axios from "axios";
import { createContext, useState } from "react";

export const GlobalContext = createContext()

export default function GlobalState(props) {
    const [loterias, setLoterias] = useState([])
    const [concurso, setConcurso] = useState([])
    const [loteriaConcurso, setLoteriaConcurso] = useState([])

    const getLoterias = () => {
        axios.get(`http://brainn-api-loterias.herokuapp.com/api/v1/loterias`)
            .then((res) => {
                setLoterias(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const getLoteriaConcurso = () => {
        axios.get(`http://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos`)
            .then((res) => {
                setLoteriaConcurso(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getConcurso = (id) => {
        axios.get(`http://brainn-api-loterias.herokuapp.com/api/v1/concursos/${id}`)
            .then((res) => {
                setConcurso(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const states = {
        loterias,
        concurso,
        loteriaConcurso
    }

    const setters = {
        setLoterias,
        setLoteriaConcurso,
        setConcurso
    }

    const getters = {
        getLoterias,
        getLoteriaConcurso,
        getConcurso
    }

    return (
        <GlobalContext.Provider value={{states, setters, getters}}>
            {props.children}
        </GlobalContext.Provider>
    )
}