import { Button, Container, Table, Alert } from "react-bootstrap";
import Menu from '../../templates/menu'
import Cabecalho from "../../templates/cabecalho";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buscarCategorias, excluirCategoria } from '../../redux/categoriaSlicer'

export default function TabelaCategorias(props) {
    const { conteudo, setModoEdicao, setCategoriaParaEdicao } = props;
    const dispatch = useDispatch();
    const { estado, listaCategorias, mensagem } = useSelector(state => state.categoria)
    const [mostrarAlert, setMostrarAlert] = useState(false);

    useEffect(() => {
        dispatch(buscarCategorias());
    }, [dispatch]);

    function verificaEstado(estado){
        while(estado == 2){
            setMostrarAlert(true)    
        }
        setTimeout(() => setMostrarAlert(false), 2000)

        if(estado == 1){
            setMostrarAlert(true)
            setTimeout(() => setMostrarAlert(false), 2000)
        }
        else{
            setMostrarAlert(true)
            setTimeout(() => setMostrarAlert(false), 2000)
        }
    }

    function editarCategoria(categoria) {
        setModoEdicao(true);
        setCategoriaParaEdicao(categoria);
        conteudo(true);
    }

    function excluir(categoria) {
        if (confirm("Deseja realmente excluir essa categoria?")) {
            dispatch(excluirCategoria(categoria));
            verificaEstado(estado);
            dispatch(buscarCategorias());
        }
    }
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
            }}>CATEGORIAS CADASTRADAS</h1>
            {
                mostrarAlert && (
                    <Alert variant="danger">
                        {mensagem}
                    </Alert>
                )
            }
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Tamanho</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaCategorias && listaCategorias.length > 0 ? (
                            listaCategorias.map((categoria, index) => (
                                <tr key={index}>
                                    <td>{categoria.tipoProduto}</td>
                                    <td>{categoria.tamanho}</td>
                                    <td style={{
                                        display: 'flex',
                                        textAlign: 'center',
                                        justifyContent: 'space-evenly',
                                    }}>
                                        <Button variant="warning" onClick={() => editarCategoria(categoria)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                            </svg>
                                        </Button>
                                        <Button variant="danger" onClick={() => excluir(categoria)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                            </svg>
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">Nenhuma categoria encontrada.</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <Button style={{ width: "15%", marginRight: "10px" }} type="button" variant={"secondary"} onClick={() => conteudo(true)}>Nova Categoria</Button>
        </Container>
    )
}