import React, { useState } from "react";
import Header from "../components/Header";
import Matches from "./Matches";
import Perfis from "./Perfil";
import Entrada from './Entrada';

function PaginaAtual() {

  const [paginaAtual, setPaginaAtual] = useState("entrada")

  const renderizaPagina = () => {
    switch (paginaAtual) {
      case "perfis":
        return <Perfis />
      case "matches":
        return <Matches />
      case "entrada":
        return <Entrada
          pagina={paginaAtual}
          mudarDePagina={mudarDePagina}
        />
      default:
        return alert("Erro ao carregar página, atualize o site.")
    }
  }

  const mudarDePagina = (paginaRecebida) => {
    setPaginaAtual(paginaRecebida)
  }


  return (
    <div>
      
      {paginaAtual === "entrada"
        ?  renderizaPagina() 
        : <div>
          <Header
            pagina={paginaAtual}
            mudarDePagina={mudarDePagina}
          />
          {renderizaPagina()}
        </div>
      }

    </div>
  );
}

export default PaginaAtual;