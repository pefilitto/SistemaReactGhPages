import { Container, Table, Button } from "react-bootstrap";
import Menu from '../../templates/menu'
import Cabecalho from "../../templates/cabecalho";
export default function TabelaFornecedores(props) {
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
            }}>FORNECEDORES CADASTRADOS</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>CNPJ</th>
                        <th>Nome da Empresa</th>
                        <th>Endereço/Nº</th>
                        <th>Cidade/UF</th>
                        <th>Bairro</th>
                        <th>CEP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>00.000.000/0000-00</td>
                        <td>Sherwin Willians</td>
                        <td>Rua das Flores, n° 2569</td>
                        <td>São Paulo - SP</td>
                        <td>Moema</td>
                        <td>19015-000</td>
                    </tr>
                </tbody>
            </Table>
            <Button style={{ width: "15%", marginRight: "10px" }} type="button" variant={"secondary"} onClick={() => props.conteudo(false)}>Novo Fornecedor</Button>
        </Container>
    )
}