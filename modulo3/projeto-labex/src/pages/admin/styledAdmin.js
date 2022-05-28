import styled from "styled-components"

export const ContainerViagens = styled.div`
    height: 100%;
    background: linear-gradient(50deg, #FCF69C, #55D8C1, #FF6FB5, #AB46D2);
`

export const CardsLista = styled.section`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media(max-width: 700px) {
        display:grid;
        grid-template-columns: 1fr;
  }
`
export const TituloCriar = styled.h3`
    margin-left: 20px;
    color: white;
    cursor: pointer;
`

export const ContainerCriar = styled.div`
    background-color: white;
    margin: 20px;
    padding:30px;
    border-radius: 5px;
    border: 3px solid #590696;
`

export const Carregando = styled.p`
    color:white;
    font-size: 40px;
    margin-left: 5%;
`