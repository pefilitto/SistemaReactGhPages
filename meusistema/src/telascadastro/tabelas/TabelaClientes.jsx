import { Container, Table, Row, Button } from "react-bootstrap";
import Menu from '../../templates/menu'
import Cabecalho from "../../templates/cabecalho";
export default function TabelaClientes(props) {
    const { estado, listaClientes } = props;
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
                    {listaClientes.map((cliente, index) => (
                        <tr key={index}>
                            <td>{cliente.cpf}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.endereco} / {cliente.numero}</td>
                            <td>{cliente.cidade}</td>
                            <td>{cliente.cep}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Button style={{ width: "15%", marginRight: "10px" }} type="button" variant={"secondary"} onClick={() => estado(true)}>Novo Cliente</Button>

        </Container>
    );
}