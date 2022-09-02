import { useContext, useEffect } from "react";
import Header from "../components/Header";
import { GlobalContext } from "../global/GlobalState";

export default function QuinaPage() {
  const context = useContext(GlobalContext);
  const { concurso, loteriaConcurso } = context.states;
  const { getConcurso } = context.getters;

  useEffect(() => {
    const [idConcurso] = loteriaConcurso?.filter((loteria) => {
      return loteria.loteriaId === 1;
    });

    getConcurso(idConcurso?.concursoId);
  }, []);

  const data = new Date(concurso?.data).toLocaleDateString();

  const numeros = concurso.numeros?.map((numero) => {
    return <li>{numero}</li>;
  });

  return (
    <>
      <main>
        <Header />
        <section>
          <h1>QUINA</h1>
          <p>CONCURSO</p>
          <p>
            {concurso.id} - {data}
          </p>
        </section>

        <section>
          <ul>{numeros}</ul>
        </section>
      </main>
    </>
  );
}
