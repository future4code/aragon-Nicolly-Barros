import { useNavigate } from "react-router-dom";
import { comeBack, toGoLogin } from "../routes/coordinator";


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
                return <section>
                    <h1>LabEddit</h1>
                </section>
            case "signup":
                return <section>
                    <h1>LabEddit</h1>
                </section>
            case "feed":
                return <section>
                    <h1>Bem-vindo(a), {localStorage.getItem("userEmail")}!</h1>
                    <button onClick={logout}>Sair</button>
                </section>
            case "detalhesPost":
                return <section>
                    <h1>LabEddit</h1>
                    <button onClick={ () => comeBack(navigate) } >Voltar</button>
                </section>
        }
    }
    return (
        <header>

            {renderizaHeader()}
        </header>
    )
}