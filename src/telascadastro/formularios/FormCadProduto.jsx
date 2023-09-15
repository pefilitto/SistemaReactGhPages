import { Container, Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap'
import Menu from '../../templates/menu'
import Cabecalho from "../../templates/cabecalho";
import { useState } from 'react';
export default function FormCadProdutos(props) {
    const { conteudo, listaProdutos, setListaProdutos } = props;
    const [formValidado, setFormValidado] = useState(false);
    const [produto, setProduto] = useState({
        nome: '',
        preco: '',
        qtdEstoque: '',
        categoria: '',
        descricao: ''
    })

    const produtoInicial = {
        nome: '',
        preco: '',
        qtdEstoque: '',
        categoria: '',
        descricao: ''
    }

    function criaProduto(nome, preco, qtdEstoque, categoria, descricao){
        const produtoInserido = {
            nome: nome,
            preco: preco,
            qtdEstoque: qtdEstoque,
            categoria: categoria,
            descricao: descricao
        }
        return produtoInserido;
    }

    function manipularMudancas(e){
        const componente = e.currentTarget;
        setProduto({...produto, [componente.name] : componente.value})
    }

    function manipularSubmissao(e){
        const form = e.currentTarget;

        const nome = document.getElementById('nome').value;
        const preco = document.getElementById('preco').value;
        const qtdEstoque = document.getElementById('qtdEstoque').value;
        const categoria = document.getElementById('categoria').value;
        const descricao = document.getElementById('descricao').value;

        const produto = criaProduto(nome, preco, qtdEstoque, categoria, descricao);

        if(form.checkValidity()){
            setFormValidado(true);
            setListaProdutos([...listaProdutos, produto])
            setProduto(produtoInicial);
            setFormValidado(false);
        }
        else{
            setFormValidado(false);
        }
        e.stopPropagation();
        e.preventDefault();
    }
    return (
        <Container>
            <Cabecalho conteudo="Sistema de Gestão Comercial" />
            <Menu/>
            <h1 style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#333", /* Cor do texto */
                marginBottom: "20px",
                marginTop: "20px",
            }}>CADASTRO DE PRODUTOS</h1>
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
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
                                controlId="floatingInput"
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
                                controlId="floatingInput"
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
                                controlId="floatingInput"
                                label="Categoria"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Nº" id="categoria" name="categoria" value={produto.categoria} onChange={manipularMudancas} />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a categoria!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>  
                <Row>
                    <Col md={15}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
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
                    <Button style={{marginLeft: "1%",width: "10%", marginRight: "10px"}} type="submit" variant={"success"} id='botaoConfirmar'>Cadastrar</Button>
                    <Button style={{width: "10%", marginRight: "10px"}} type="button" variant={"secondary"} onClick={() => conteudo(false)}>Cadastrados</Button>
                </Row>
            </Form>
        </Container>

    )
}