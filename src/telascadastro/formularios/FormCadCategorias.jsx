import { Container, Form, Row, Col, FloatingLabel, Button, Alert, Spinner } from 'react-bootstrap'
import Menu from '../../templates/menu'
import Cabecalho from "../../templates/cabecalho";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { alterarCategoria, gravarCategoria } from '../../redux/categoriaSlicer'
import ESTADO from '../../recursos/estado';

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
    const [mostrarAlert, setMostrarAlert] = useState(false);
    const { estado, mensagem } = useSelector(state => state.categoria);
    const dispatch = useDispatch();

    const categoriaVazia = {
        tipoProduto: '',
        tamanho: ''
    }

    function insereCategoria(codigo, tipo, tamanho) {
        const novaCategoria = {
            codigo: codigo,
            tipoProduto: tipo,
            tamanho: tamanho
        }
        return novaCategoria;
    }

    function manipularMudancas(e) {
        const componente = e.currentTarget;
        setCategoria({ ...categoria, [componente.name]: componente.value })
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

    async function manipularSubmissao(e) {
        const form = e.currentTarget;

        const codigo = estadoCategoriaInicial.codigo;
        const tipo = document.querySelector('#tipoProduto').value;
        const tamanho = document.querySelector('#tamanho').value;

        const categoria = insereCategoria(codigo, tipo, tamanho);

        if (form.checkValidity()) {
            if (!modoEdicao) {
                setModoEdicao(false);
                dispatch(gravarCategoria(categoria));
                verificaEstado(estado)
            }
            else {
                dispatch(alterarCategoria(categoria));
                verificaEstado(estado)
                setModoEdicao(false);
            }
        }
        else {
            setCategoria(categoriaVazia);
            setFormValidado(false);
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
            {mostrarAlert && (
                <Alert variant="dark">
                    {mensagem}
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