import { Container, Table, Button } from "react-bootstrap";
import Menu from '../../templates/menu'
import Cabecalho from "../../templates/cabecalho";
export default function TabelaProdutos(props) {
    const { conteudo, listaProdutos } = props;
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
                    {
                        listaProdutos.map((produto, index) => (
                            <tr key={index}>
                                <td>{produto.nome}</td>
                                <td>{produto.preco}</td>
                                <td>{produto.qtdEstoque}</td>
                                <td>{produto.categoria}</td>
                                <td>{produto.descricao}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <Button style={{ width: "15%", marginRight: "10px" }} type="button" variant={"secondary"} onClick={() => conteudo(true)}>Novo Produto</Button>
        </Container>
    )
}