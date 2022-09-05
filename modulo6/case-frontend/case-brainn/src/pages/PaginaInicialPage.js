import { useContext } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { GlobalContext } from "../global/GlobalState";
import { SectionLeft } from "./styled";
import logo from '../assets/logo.png';

export default function PaginaInicial() {
    const context = useContext(GlobalContext);
    const { currentColor } = context.states;
    return (
        <>
        <SectionLeft style={{ background: currentColor }}>
          <Header />
          <h1>
            <span style={{ margin: '10px' }}>
              <img width="30vw" src={logo} />
            </span>
            SELECIONE UM SORTEIO
          </h1>
          <Footer/>
        </SectionLeft>
        </>
    )
}