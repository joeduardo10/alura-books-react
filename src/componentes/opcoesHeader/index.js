import styled from "styled-components"

const Opcao = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    font-size: 16px;
    min-width: 120px;
`
const Opcoes = styled.ul`
    display: flex;
`
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <Opcoes>
            { textoOpcoes.map ( (texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ) ) }
        </Opcoes>
    )
}

export default OpcoesHeader