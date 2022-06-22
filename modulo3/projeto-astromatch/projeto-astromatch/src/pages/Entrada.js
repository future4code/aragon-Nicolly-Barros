import styled, { keyframes } from 'styled-components'

const BotaoEntrada = styled.button`
    
    border: 0 solid;
    border-radius: 3px;
    background: white;
    color: #FC4F4F;
    font-weight: bold;
    height: 30px;
    margin-top: 10px;
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

    &:hover{
        background:#FC4F4F;
        color:white;
    };
`

const TituloEntrada = styled.section`
    font-size: 70px;
    color:white;

    @media(max-width: 700px) {
        font-size: 50px
  }
`

const Animacao = keyframes`
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position:100% 50%;
    }

    100%{
        background-position:0% 50%;
    }
`

const ContainerEntrada = styled.div`
    background: linear-gradient(45deg, #F76E11, #FF9F45, #FFBC80, #FC4F4F);
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-size: 200% 100%;
    animation: ${Animacao} 10s ease infinite;
    

    @media(max-width: 700px) {
        padding:20px;
        margin-bottom: 30px;
  }

`

const TextoEntrada = styled.div`
    color:white;
    
`

function Entrada(props) {
    return (
        <ContainerEntrada>
            <TituloEntrada>
                OrangeMatch
            </TituloEntrada>
            <TextoEntrada>Feito para você encontrar a sua metade da laranja 🍊 </TextoEntrada>
            <BotaoEntrada onClick={() => { props.mudarDePagina("perfis") }}> Entrar</BotaoEntrada>
        </ContainerEntrada>
    )
}

export default Entrada;