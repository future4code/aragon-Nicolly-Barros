import styled from "styled-components";

export const ContainerLogin = styled.div`
  height: calc(100vh - 108px);
  display: flex;
  justify-content: center;
  align-items:center;
  background: linear-gradient(50deg, #FCF69C, #55D8C1, #FF6FB5, #AB46D2);
  height: 100vh;

`
export const TituloLogin = styled.h1`
  color: #ba68c8;
`

export const Formulario = styled.form`
    display:grid;
    grid-template-columns: 1fr;
    
`
export const DadosContainer = styled.section`
    display:grid;
    grid-template-columns: 1fr;
    border: 3px solid #590696;
    border-radius: 5px;
    padding:5%;
    height: 60%;
    background-color: white;


`