import { Container, Table, Button } from "react-bootstrap";
import Menu from '../../templates/menu'
import Cabecalho from "../../templates/cabecalho";
export default function TabelaFornecedores(props) {
    const { conteudo, listaFornecedor } = props;
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
                        <th>CEP</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaFornecedor.map((fornecedor, index) => (
                            <tr key={index}>
                                <td>{fornecedor.cnpj}</td>
                                <td>{fornecedor.nome}</td>
                                <td>{fornecedor.endereco}/{fornecedor.numero}</td>
                                <td>{fornecedor.cidade}</td>
                                <td>{fornecedor.cep}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <Button style={{ width: "15%", marginRight: "10px" }} type="button" variant={"secondary"} onClick={() => conteudo(true)}>Novo Fornecedor</Button>
        </Container>
    )
}