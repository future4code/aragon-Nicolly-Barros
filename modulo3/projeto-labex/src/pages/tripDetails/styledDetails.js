import styled from "styled-components";

export const ContainerGeral= styled.div`
    background: linear-gradient(50deg, #FCF69C, #55D8C1, #FF6FB5, #AB46D2);
    height:100%;
`

export const HeaderDetail = styled.section`
    display:flex;
    justify-content: space-between;
    align-items:center;
    background-color: white;
    padding-left: 10px;
    padding-right: 10px;
`

export const TituloHeader = styled.h1`
    color:#ba68c8;
`

export const CardCandidato = styled.div `
    border: 3px solid #AB46D2;
    border-radius: 5px;
    margin: 2%;
    padding: 3%;
    background-color: white;
`

export const ListaCandidatos = styled.section`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media(max-width: 700px) {
        display:grid;
        grid-template-columns: 1fr;
  }
`

export const ListaAprovados = styled.div`
    font-size: 20px;
    margin-left: 4%;
    color: #AB46D2;
    padding-bottom: 2%;
`

export const TituloBody = styled.h2`
    margin-left: 2%;
    color: #AB46D2;
`