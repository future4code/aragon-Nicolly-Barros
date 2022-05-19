import React, { useState } from "react";
import Header from "../components/Header";
import Matches from "./Matches";
import Perfis from "./Perfil";


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

  const mudarDePagina = (paginaRecebida) =>{
    setPaginaAtual(paginaRecebida)
  }


  return (
    <div>
      <Header 
        pagina={paginaAtual}
        mudarDePagina={mudarDePagina}
      />
      <hr/>
      {renderizaPagina()}

    </div>
  );
}

export default PaginaAtual;