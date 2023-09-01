import { Container, Table, Row, Button } from "react-bootstrap";
import Menu from '../../templates/menu'
import Cabecalho from "../../templates/cabecalho";
export default function TabelaClientes(props) {
    return (
        <Container>
            <Cabecalho conteudo="Sistema de Gestão Comercial" />
            <Menu />
            <h1 style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#333", /* Cor do texto */
                marginBottom: "20px",
                marginTop: "20px",
            }}>CLIENTES CADASTRADOS</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>CPF</th>
                        <th>Nome</th>
                        <th>Endereço/Nº</th>
                        <th>Cidade/UF</th>
                        <th>CEP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>000.000.000-00</td>
                        <td>Maria Aparecida Fake</td>
                        <td>Rua das Flores, n° 2569</td>
                        <td>Presidente Prudente/SP</td>
                        <td>19015-000</td>
                    </tr>
                </tbody>
            </Table>

            <Button style={{ width: "15%", marginRight: "10px" }} type="button" variant={"secondary"} onClick={() => props.estado(true)}>Novo Cliente</Button>

        </Container>
    );
}