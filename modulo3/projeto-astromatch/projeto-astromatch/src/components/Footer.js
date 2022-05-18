import styled from 'styled-components'


const Rodape = styled.div`
    border: 1px black solid;
    border-radius:4px;
    display:flex;
    align-items:center;
    justify-content:center;
`
function Footer() {
    return (
        <Rodape>
            <h4>Todos os direitos reservados ©</h4>
        </Rodape>
    );
}

export default Footer;