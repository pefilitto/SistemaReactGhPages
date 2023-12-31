import { Container, Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap'
import Menu from '../../templates/menu'
import Cabecalho from "../../templates/cabecalho";
import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { alterarProduto, gravarProdutos } from '../../redux/produtoSlicer';
import { buscarCategorias } from '../../redux/categoriaSlicer';

export default function FormCadProdutos(props) {
    const {
        conteudo,
        modoEdicao,
        setModoEdicao,
        produtoParaEdicao,
        setProdutoParaEdicao
    } = props;
    const [formValidado, setFormValidado] = useState(false);
    const estadoInicialProduto = produtoParaEdicao;
    const [produto, setProduto] = useState(estadoInicialProduto);
    const [alertErro, setAlertErro] = useState(false);
    const [mostrarAlert, setMostrarAlert] = useState(false);
    const dispatch = useDispatch();
    const { estado, mensagem } = useSelector((state) => state.produto)
    const { listaCategorias } = useSelector((state) => state.categoria)

    const produtoVazio = {
        nome: '',
        preco: '',
        qtdEstoque: '',
        categoria: '',
        descricao: ''
    }

    function manipularMudancas(e) {
        const componente = e.currentTarget;
        setProduto({ ...produto, [componente.name]: componente.value })
    }

    function criaProduto(codigo, nome, preco, qtdEstoque, categoria, descricao) {
        const produtoInserido = {
            codigo: codigo,
            nome: nome,
            preco: preco,
            qtdEstoque: qtdEstoque,
            categoria: categoria,
            descricao: descricao
        }
        return produtoInserido;
    }

    function manipularMudancas(e) {
        const componente = e.currentTarget;
        setProduto({ ...produto, [componente.name]: componente.value })
    }

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

    function manipularSubmissao(e) {
        const form = e.currentTarget;

        const codigo = estadoInicialProduto.codigo
        const nome = document.getElementById('nome').value;
        const preco = document.getElementById('preco').value;
        const qtdEstoque = document.getElementById('qtdEstoque').value;
        const categoria = document.querySelector("#categoria").value
        const descricao = document.getElementById('descricao').value;

        if (nome && preco && qtdEstoque && categoria && descricao) {
            const produto = criaProduto(codigo, nome, preco, qtdEstoque, categoria, descricao);

            if (form.checkValidity()) {
                if (!modoEdicao) {
                    dispatch(buscarCategorias());
                    dispatch(gravarProdutos(produto));
                    verificaEstado(estado);
                }
                else {
                    dispatch(buscarCategorias());
                    dispatch(alterarProduto(produto));
                    verificaEstado(estado);
                    setModoEdicao(false);
                    setProdutoParaEdicao(produtoVazio)
                }
                setProduto(produtoVazio);
                setFormValidado(false);
            }
            else {
                setFormValidado(true);
            }
        }
        else {
            setAlertErro(true);
            setTimeout(() => setAlertErro(false), 2000);
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
            }}>CADASTRO DE PRODUTOS</h1>
            {mostrarAlert && (
                <Alert variant="dark">
                    {mensagem}
                </Alert>
            )}
            {alertErro && (
                <Alert variant="danger">
                    Preencha todos os campos!
                </Alert>
            )}
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Nome do Produto:"
                                className="mb-3"
                            >

                                <Form.Control type="text" placeholder="Pincel" id="nome" name="nome" value={produto.nome} onChange={manipularMudancas} required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe nome!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Preço:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Informe o preço do produto" id="preco" name="preco" value={produto.preco} onChange={manipularMudancas} required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o preço!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Estoque:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Exemplo: 50" id="qtdEstoque" name="qtdEstoque" value={produto.qtdEstoque} onChange={manipularMudancas} />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a quantidade em estoque!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={10}>
                        <Form.Group>
                            <FloatingLabel
                                label="Categoria"
                                className="mb-3"
                            >
                                <Form.Select id="categoria" name="categoria" value={produto.categoria} onChange={manipularMudancas}>
                                    <option value="">Selecione a categoria</option>
                                    {listaCategorias.map((categoria) => (
                                        <option key={categoria.codigo} value={categoria.codigo}>
                                            {categoria.tipoProduto + " " + categoria.tamanho}
                                        </option>
                                    ))}
                                </Form.Select>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a categoria!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={15}>
                        <Form.Group>
                            <FloatingLabel
                                label="Descrição: "
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Pincel com cerdas duras" id="descricao" name="descricao" value={produto.descricao} onChange={manipularMudancas} />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a descrição!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Button style={{ marginLeft: "1%", width: "10%", marginRight: "10px" }} type="submit" variant={"success"} id='botaoConfirmar'>Cadastrar</Button>
                    <Button style={{ width: "10%", marginRight: "10px" }} type="button" variant={"secondary"} onClick={() => conteudo(false)}>Cadastrados</Button>
                </Row>
            </Form>
        </Container>

    )
}