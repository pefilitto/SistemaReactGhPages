import { Container, Form, Row, Col, FloatingLabel, Button, Alert } from 'react-bootstrap'
import Menu from '../../templates/menu'
import Cabecalho from "../../templates/cabecalho";
import { useState } from 'react';

export default function FormCadCategoria(props) {
    const {
        conteudo,
        listaCategorias,
        setListaCategorias,
        modoEdicao,
        setModoEdicao,
        categoriaParaEdicao,
        setCategoriaParaEdicao,
    } = props;

    const [formValidado, setFormValidado] = useState(false);
    const estadoCategoriaInicial = categoriaParaEdicao;
    const [categoria, setCategoria] = useState(estadoCategoriaInicial);
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

    function manipularSubmissao(e) {
        const form = e.currentTarget;

        const tipo = document.querySelector('#tipoProduto').value;
        const tamanho = document.querySelector('#tamanho').value;

        const categoria = insereCategoria(tipo, tamanho);
        
        if (form.checkValidity()) {
            if (!modoEdicao) {
                setListaCategorias([...listaCategorias, categoria]);
            }
            else {
                setListaCategorias([...listaCategorias.filter((item) => item.tipoProduto !== categoria.tipoProduto), categoria]);
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