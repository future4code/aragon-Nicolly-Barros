import { useNavigate } from "react-router-dom";
import { comeBack, toGoLogin } from "../routes/coordinator";
import styled from "styled-components";
import Logo from "../images/logo.png"
import Logout from "../images/logout.png"
import Voltar from "../images/voltar.png"

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

const FeedSection = styled.section`
    display:flex;
    justify-content: space-between;
    align-items: center;
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
                return <FeedSection>
                    <h3>Bem-vindo(a), {localStorage.getItem("userEmail")}<img src={Logo} height="30px"/></h3>
                    <img onClick={logout} src={Logout} height="40px"/>
                </FeedSection>
            case "detalhesPost":
                return <FeedSection>
                    <h1>Iddeia <img src={Logo} height="30px" /></h1>
                    <img src={Voltar}  onClick={ () => comeBack(navigate) } height="40px"/>
                </FeedSection>
        }
    }
    return (
        <MainHeader>
            {renderizaHeader()}
        </MainHeader>
    )
}