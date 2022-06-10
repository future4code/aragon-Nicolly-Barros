import { useNavigate } from "react-router-dom";
import { comeBack, toGoLogin } from "../routes/coordinator";
import styled from "styled-components";
import Logo from "../images/logo.png"

const MainHeader = styled.header`
    background-color: #EC994B;
    padding: 10px;
    border-radius: 2px;
    color: white;
    font-size: 30px;
`

const HeaderSection = styled.section`
    display:flex;
    align-items:center;

`

export default function Header(props) {
    const navigate = useNavigate()

    const logout = () => {
        if (window.confirm("Tem certeza de que deseja sair?")) {

            localStorage.removeItem("token-labeddit");
            localStorage.removeItem("userEmail");
            toGoLogin(navigate)
            alert("Logout com sucesso!");
        }
    }

    const renderizaHeader = () => {
        switch (props.page) {
            case "login":
                return <HeaderSection>
                    <h1>Iddeia</h1>
                    <img src={Logo} height="40px" />
                </HeaderSection>
            case "signup":
                return <HeaderSection>
                    <h1>Iddeia</h1>
                    <img src={Logo} height="40px"/>
                </HeaderSection>
            case "feed":
                return <section>
                    <h1>Bem-vindo(a), {localStorage.getItem("userEmail")}!</h1>
                    <button onClick={logout}>Sair</button>
                </section>
            case "detalhesPost":
                return <section>
                    <h1>Iddeia</h1>
                    <button onClick={ () => comeBack(navigate) } >Voltar</button>
                </section>
        }
    }
    return (
        <MainHeader>
            {renderizaHeader()}
        </MainHeader>
    )
}