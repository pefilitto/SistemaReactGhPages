import { Container, Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap'
import Menu from '../../templates/menu'
import Cabecalho from "../../templates/cabecalho";
import { useState } from 'react';
export default function FormCadCliente(props) {
    //Os atributos desse objeto devem estar associados aos atributos do formulario
    const {
        estado,
        listaClientes,
        setListaClientes,
        modoEdicao,
        setModoEdicao,
        clienteParaEdicao,
        setClienteParaEdicao,
    } = props;
    const [formValidado, setFormValidado] = useState(false);
    const estadoInicialCliente = clienteParaEdicao;
    const [cliente, setCliente] = useState(estadoInicialCliente);
    //const [listaLocalStorage, setListaLocalStorage] = useState([])

    const clienteVazio = {
        cpf: '',
        nome: '',
        endereco: '',
        numero: '',
        bairro: '',
        cidade: '',
        uf: 'SP',
        cep: ''
    }

    function preencheCliente(cpf, nome, endereco, numero, bairro, uf, cidade, cep) {
        const estadoClientePreenchido = {
            cpf: cpf,
            nome: nome,
            endereco: endereco,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            uf: uf,
            cep: cep
        }
        return estadoClientePreenchido
    }

    function manipularMudancas(e) {
        const componente = e.currentTarget;
        setCliente({ ...cliente, [componente.name]: componente.value })
    }

    function manipularSubmissao(e) {
        const form = e.currentTarget;

        const cpf = document.getElementById('cpf').value;
        const nome = document.getElementById('nome').value;
        const endereco = document.getElementById('endereco').value;
        const numero = document.getElementById('numero').value;
        const bairro = document.getElementById('bairro').value;
        const cidade = document.getElementById('cidade').value;
        const uf = document.querySelector('#uf').value
        const cep = document.getElementById('cep').value;

        if (cpf && nome && endereco && numero && bairro && cidade && uf && cep) {
            const clientePreenchido = preencheCliente(cpf, nome, endereco, numero, bairro, uf, cidade, cep);

            if (form.checkValidity()) {
                //mandar os dados para o backend
                //limpar os dados do formulario
                if (!modoEdicao) {
                    setListaClientes([...listaClientes, clientePreenchido]);
                    //Caso quisesse salvar em localStorage
                    //setListaLocalStorage(() => {
                    //    localStorage.setItem("clientes",JSON.stringify ([...listaLocalStorage, clientePreenchido]));
                    //})
                }
                else {
                    //Exibir aqui a lista de clientes filtrada
                    setListaClientes([...listaClientes.filter((itemCliente) => itemCliente.cpf !== cliente.cpf), cliente]);
                    setModoEdicao(false);
                    setClienteParaEdicao(clienteVazio);
                }
                setCliente(clienteVazio);
                setFormValidado(false);
            }
            else {
                setFormValidado(true);
            }
        }
        else{
            //Colocar aqui o alert de preencher todos os campos
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
            }}>CADASTRO DE CLIENTE</h1>
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="CPF:"
                                className="mb-3"
                            >

                                <Form.Control
                                    type="text"
                                    placeholder="000.000.000-00"
                                    id="cpf"
                                    name="cpf"
                                    onChange={manipularMudancas}
                                    value={cliente.cpf}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o cpf!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nome Completo:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text" placeholder="Informe o nome completo"
                                    id="nome"
                                    name="nome"
                                    onChange={manipularMudancas}
                                    value={cliente.nome}
                                    required />
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
                                <Form.Control
                                    type="text"
                                    placeholder="Avenida/Rua/Alameda/Viela ..."
                                    id="endereco"
                                    onChange={manipularMudancas}
                                    value={cliente.endereco}
                                    name="endereco"
                                    required />
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
                                <Form.Control
                                    type="text"
                                    placeholder="Nº"
                                    id="numero"
                                    onChange={manipularMudancas}
                                    value={cliente.numero}
                                    name="numero"
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o número!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Bairro:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Bairro/Vila..."
                                    id="bairro"
                                    onChange={manipularMudancas}
                                    value={cliente.bairro}
                                    name="bairro"
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o bairro!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={5}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Cidade"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Cidade"
                                    id="cidade"
                                    onChange={manipularMudancas}
                                    value={cliente.cidade}
                                    name="cidade"
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a cidade!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <FloatingLabel controlId="floatingSelect" label="UF:">
                            <Form.Select
                                aria-label="Unidades Federativas brasileiras"
                                id='uf'
                                name='uf'
                                onChange={manipularMudancas}
                                value={cliente.uf}
                                required>
                                <option value="SP" selected>São Paulo</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="CEP:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="CEP"
                                    id="cep"
                                    onChange={manipularMudancas}
                                    value={cliente.cep}
                                    name="cep"
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o bairro!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Button style={{ marginLeft: "1%", width: "10%", marginRight: "10px" }} type="submit" variant={"success"} id='botaoConfirmar' onClick={manipularSubmissao}>Cadastrar</Button>
                    <Button style={{ width: "10%", marginRight: "10px" }} type="button" variant={"secondary"} onClick={() => estado(false)}>Cadastrados</Button>
                </Row>
            </Form>
        </Container>
    )
}