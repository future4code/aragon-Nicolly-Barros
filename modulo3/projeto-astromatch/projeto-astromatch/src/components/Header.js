import styled from 'styled-components'

const Buttoes = styled.button`
    border-radius: 3px;
    border-color: red;
    background: white;
    color: red;
    font-weight: bold;
    height: 30px;
    margin-right:20px;

    &:hover{
        color:black;
    };
`
const ContainerHeader = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
    border: 1px solid black;
    border-radius:4px;
    padding-bottom: 20px;

    @media(max-width: 700px) {
    flex-direction: column;
    justify-items:center;
    align-items:center;  
  }
`

const TituloHeader = styled.h1`
    padding-bottom: 10px;
`

function Header(props) {
    return (
        <ContainerHeader>
            <TituloHeader>
                <img src={"https://i.pinimg.com/originals/95/f8/ba/95f8ba73202d02f978792093c0afcafe.gif"} width={"40px"}></img>
                Astromatch
                <img src={"https://i.pinimg.com/originals/95/f8/ba/95f8ba73202d02f978792093c0afcafe.gif"} width={"40px"}></img>
            </TituloHeader>
            {props.pagina === "perfis"
                ? <Buttoes onClick={props.irParaMatches}>Ver seus Matches</Buttoes>
                : <Buttoes onClick={props.irParaPerfis}>Voltar para Perfis</Buttoes>
            }
        </ContainerHeader>
    );
}

export default Header;