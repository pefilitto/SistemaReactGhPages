import { Container, Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap'
import Menu from '../../templates/menu'
import Cabecalho from "../../templates/cabecalho";
import { useState } from 'react';

export default function FormCadFornecedor(props) {
    const { conteudo, listaFornecedor, setListaFornecedor } = props;
    const [formValidado, setFormValidado] = useState(false)
    const [fornecedor, setFornecedor] = useState({
        cnpj: '',
        nome: '',
        endereco: '',
        numero: '',
        cidade: '',
        cep: ''
    })

    const fornecedorInicial = {
        cnpj: '',
        nome: '',
        endereco: '',
        numero: '',
        cidade: '',
        cep: ''
    }

    function manipularMudancas(e){
        const componente = e.currentTarget;
        setFornecedor({...fornecedor, [componente.name]:componente.value})
    }

    function criaFornecedor(cnpj, nome, endereco, numero, cidade, cep) {
        const fornecedorInserido = {
            cnpj: cnpj,
            nome: nome,
            endereco: endereco,
            numero: numero,
            cidade: cidade,
            cep: cep
        }
        return fornecedorInserido
    }

    function manipularSubmissao(e) {
        const form = e.currentTarget

        const cnpj = document.getElementById('cnpj').value
        const nome = document.getElementById('nome').value
        const endereco = document.getElementById('endereco').value
        const numero = document.getElementById('numero').value
        const cidade = document.getElementById('cidade').value
        const cep = document.getElementById('cep').value

        const fornecedor = criaFornecedor(cnpj, nome, endereco, numero, cidade, cep);

        if (form.checkValidity()) {
            setFormValidado(true);
            setListaFornecedor([...listaFornecedor, fornecedor]);
            setFornecedor(fornecedorInicial);
            setFormValidado(false);
        }
        else {
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
            }}>CADASTRO DE FORNECEDORES</h1>
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="CNPJ:"
                                className="mb-3"
                            >

                                <Form.Control type="text" placeholder="000.000.000/0000-00" id="cnpj" name="cnpj" value={fornecedor.cnpj} onChange={manipularMudancas} required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o CNPJ!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nome da Empresa:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Informe o nome da empresa" id="nome" name="nome" value={fornecedor.nome} onChange={manipularMudancas} required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={10}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Endereço:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Avenida/Rua/Alameda/Viela ..." id="endereco" name="endereco" value={fornecedor.endereco} onChange={manipularMudancas} />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o endereço!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Número"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Nº" id="numero" name="numero" value={fornecedor.numero} onChange={manipularMudancas} />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o número!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Cidade"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Cidade" id="cidade" name="cidade" value={fornecedor.cidade} onChange={manipularMudancas} />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a cidade!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="CEP:"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="CEP" id="cep" name="cep" value={fornecedor.cep} onChange={manipularMudancas} />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o CEP!</Form.Control.Feedback>
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