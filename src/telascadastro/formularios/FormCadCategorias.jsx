import { Container, Form, Row, Col, FloatingLabel, Button, Alert } from 'react-bootstrap'
import Menu from '../../templates/menu'
import Cabecalho from "../../templates/cabecalho";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editar, inserir } from '../../redux/categoriaSlicer'

export default function FormCadCategoria(props) {
    const {
        conteudo,
        modoEdicao,
        setModoEdicao,
        categoriaParaEdicao,
        setCategoriaParaEdicao,
    } = props;

    const [formValidado, setFormValidado] = useState(false);
    const estadoCategoriaInicial = categoriaParaEdicao;
    const [categoria, setCategoria] = useState(estadoCategoriaInicial);
    const [mostrarAlertSucesso, setMostrarAlertSucesso] = useState(false);
    const [mostrarAlertEdicao, setMostrarAlertEdicao] = useState(false);
    const [alertCategoriaCadastrada, setAlertCategoriaCadastrada] = useState(false);
    const {status, estado, listaCategorias} = useSelector((state) => state.categoria);
    const dispatch = useDispatch();

    const categoriaVazia = {
        tipoProduto: '',
        tamanho: ''
    }

    function insereCategoria(tipo, tamanho) {
        const novaCategoria = {
            tipoProduto: tipo,
            tamanho: tamanho
        }
        return novaCategoria;
    }

    function manipularMudancas(e) {
        const componente = e.currentTarget;
        setCategoria({ ...categoria, [componente.name]: componente.value })
    }

    function buscaCategoria(listaCategorias, tipo, tamanho) {
        return listaCategorias.find((element) => element.tipoProduto === tipo && element.tamanho === tamanho) !== undefined;
    }

    function manipularSubmissao(e) {
        const form = e.currentTarget;

        const tipo = document.querySelector('#tipoProduto').value;
        const tamanho = document.querySelector('#tamanho').value;

        const categoria = insereCategoria(tipo, tamanho);

        if (form.checkValidity()) {
            if (!modoEdicao) {
                if (!buscaCategoria(listaCategorias, tipo, tamanho)) {
                    dispatch(inserir(categoria));
                    setMostrarAlertSucesso(true);
                    setTimeout(() => setMostrarAlertSucesso(false), 2000);
                }
                else {
                    setAlertCategoriaCadastrada(true);
                    setCategoria(categoriaVazia)
                    setTimeout(() => setAlertCategoriaCadastrada(false), 2000);
                }
            }
            else {
                dispatch(editar(categoria));
                setMostrarAlertEdicao(true);
                setTimeout(() => setMostrarAlertEdicao(false), 2000);
                setModoEdicao(false);
                setCategoriaParaEdicao(categoriaVazia)
            }
            setCategoria(categoriaVazia);
            setFormValidado(false);
        }
        else {
            setFormValidado(true);
        }
        e.stopPropagation();
        e.preventDefault();
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
            }}>CADASTRO DE CATEGORIAS</h1>
            {mostrarAlertSucesso && (
                <Alert variant="success">
                    Categoria cadastrada com sucesso!
                </Alert>
            )}
            {mostrarAlertEdicao && (
                <Alert variant="success">
                    Categoria editada com sucesso!
                </Alert>
            )}
            {alertCategoriaCadastrada && (
                <Alert variant='warning'>
                    Ops... categoria já cadastrada!
                </Alert>
            )}
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <FloatingLabel controlId="floatingSelect" label="Tipo de Produto:">
                            <Form.Select aria-label="Tipo de Produto" id='tipoProduto' name='tipoProduto' onChange={manipularMudancas} value={categoria.tipoProduto}>
                                <option value="Pincel">Pincel</option>
                                <option value="Galão de Tinta">Galão de tinta</option>
                                <option value="Galão de Massa">Galão de Massa Corrida</option>
                                <option value="Desempenadeira">Desempenadeira</option>
                                <option value="Lixa">Lixa</option>
                                <option value="MascaraPF1">Mascara PF1</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>

                    <Col>
                        <FloatingLabel controlId="floatingSelect" label="Tamanho:">
                            <Form.Select aria-label="Tamanho" id='tamanho' name='tamanho' onChange={manipularMudancas} value={categoria.tamanho}>
                                <option value="P">Pequeno</option>
                                <option value="M">Medio</option>
                                <option value="G">Grande</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row style={{
                    marginTop: "2%"
                }}>
                    <Button style={{ marginLeft: "1%", width: "10%", marginRight: "10px" }} type="submit" variant={"success"} id='botaoConfirmar'>Cadastrar</Button>
                    <Button style={{ width: "10%", marginRight: "10px" }} type="button" variant={"secondary"} onClick={() => conteudo(false)}>Cadastrados</Button>
                </Row>
            </Form>
        </Container>

    )
}