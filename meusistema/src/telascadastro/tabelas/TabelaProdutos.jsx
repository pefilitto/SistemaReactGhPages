import { Container, Table } from "react-bootstrap";
import Menu from '../../templates/menu'
import Cabecalho from "../../templates/cabecalho";
export default function TabelaProdutos() {
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
            }}>PRODUTOS CADASTRADOS</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Quantidade Estoque</th>
                        <th>Categoria</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pincel de Cerdas Macias</td>
                        <td>R$15,00</td>
                        <td>1000</td>
                        <td>Pincel</td>
                        <td>Pincel com cabo laranjado, cerdas macias e próprio para o uso em paredes</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}