import styled from 'styled-components'

const Buttoes = styled.button`
    
    border: 0 solid;
    border-radius: 3px;
    background: white;
    color: red;
    font-weight: bold;
    height: 30px;
    margin-right:20px;
    margin-top: 10px;
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

    &:hover{
        background:red;
        color:white;
    };

    @media(max-width: 700px) {
    margin-right:0; 
  }

`
const ContainerHeader = styled.div`
    background:white;
    color:red;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
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
                <img alt='gif de corações voando' src={"https://i.gifer.com/UWF.gif"} width={"60px"}></img>
                Astromatch
                <img alt='gif de corações voando' src={"https://i.gifer.com/UWF.gif"} width={"60px"}></img>
            </TituloHeader>
            {props.pagina === "perfis"
                ? <Buttoes onClick={()=>{props.mudarDePagina("matches")}}>Ver seus Matches</Buttoes>
                : <Buttoes onClick={()=>{props.mudarDePagina("perfis")}}>Voltar para Perfis</Buttoes>
            }

        </ContainerHeader>
    );
}

export default Header;