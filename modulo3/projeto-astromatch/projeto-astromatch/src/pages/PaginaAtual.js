import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Matches from "./Matches";
import Perfis from "./Perfil";
import styled from 'styled-components'

const ContainerApp = styled.div`
  display:grid;
  grid-template-rows: 20vh 70vh 10vh;
  align-items:center;
`


function PaginaAtual() {

  const [paginaAtual, setPaginaAtual] = useState("perfis")

  const renderizaPagina = () => {
    switch (paginaAtual) {
      case "perfis":
        return <Perfis />
      case "matches":
        return <Matches />
      default:
        return alert("Erro ao carregar página, atualize o site.")
    }
  }

  const irParaMatches = () => {
    setPaginaAtual("matches")
  }

  const irParaPerfis = () => {
    setPaginaAtual("perfis")
  }

  return (
    <ContainerApp>
      <Header 
        pagina={paginaAtual}
        irParaPerfis={irParaPerfis}
        irParaMatches={irParaMatches}
      />

      {renderizaPagina()}

      <Footer />
    </ContainerApp>
  );
}

export default PaginaAtual;