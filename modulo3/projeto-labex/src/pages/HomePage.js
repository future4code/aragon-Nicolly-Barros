import Header from "../components/Header";
import ViagemCard from "../components/ViagemCard";

export default function HomePage() {

    return (
        <div>
            <Header
                paginaAtual={"home"}
            />
            <h3>Increva-se em uma nova viagem</h3>
            <hr />
            <ViagemCard />

        </div>
    );
}