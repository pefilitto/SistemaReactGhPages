import { Button, Container, Table } from "react-bootstrap";
import Menu from '../../templates/menu'
import Cabecalho from "../../templates/cabecalho";
export default function TabelaCategorias(props){
    return(
        <Container>
            <Cabecalho conteudo="Sistema de Gestão Comercial" />
            <Menu/>
            <h1 style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#333", /* Cor do texto */
                marginBottom: "20px",
                marginTop: "20px",
            }}>CATEGORIAS CADASTRADAS</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Tamanho</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Máscara PF1</td>
                        <td>G</td>
                    </tr>
                </tbody>
            </Table>
            <Button style={{ width: "15%", marginRight: "10px" }} type="button" variant={"secondary"} onClick={() => props.conteudo(true)}>Nova Categoria</Button>
        </Container>
    )
}