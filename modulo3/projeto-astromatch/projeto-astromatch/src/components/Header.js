import styled from 'styled-components'

const Botoes = styled.button`
    
    border: 0 solid;
    border-radius: 3px;
    background: white;
    color: #FC4F4F;
    font-weight: bold;
    height: 30px;
    margin-right:20px;
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

    &:hover{
        background: #FC4F4F;
        color:white;
    };

    @media(max-width: 700px) {
    margin-right:0; 
    margin-bottom:5px;
  }

`
const ContainerHeader = styled.div`
    background:white;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
    border-bottom: 3px solid #FF9F45;

   

    @media(max-width: 700px) {
    flex-direction: column;
    justify-items:center;
    align-items:center;  
  }
`


const TituloHeader = styled.h1`
    margin-left:20px;
    color: #FC4F4F;
    
`

function Header(props) {
    return (
        <ContainerHeader>
            <TituloHeader>  
                OrangeMatch
                <img src="https://revistauniversosustentavelsse.files.wordpress.com/2013/07/laranja.jpg" width="40px"></img>
            </TituloHeader>
            {props.pagina === "perfis"
                ? <Botoes onClick={()=>{props.mudarDePagina("matches")}}>Ver seus Matches</Botoes>
                : <Botoes onClick={()=>{props.mudarDePagina("perfis")}}>Voltar para Perfis</Botoes>
            }

        </ContainerHeader>
    );
}

export default Header;