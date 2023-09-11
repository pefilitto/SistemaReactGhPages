import { Container, Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap'
import Menu from '../../templates/menu'
import Cabecalho from "../../templates/cabecalho";
import { useState } from 'react';
export default function FormCadCliente(props) {
    //Os atributos desse objeto devem estar associados aos atributos do formulario
    const [cliente, setCliente] = useState({
        cpf: '',
        nome: '',
        endereco: '',
        numero: '',
        bairro: '',
        cidade: '',
        uf: '',
        cep: ''
    });

    const estadoInicialCliente = {
        cpf: '',
        nome: '',
        endereco: '',
        numero: '',
        bairro: '',
        cidade: '',
        uf: '',
        cep: ''
    }
    
    const [formValidado, setFormValidado] = useState(false)

    function manipularMudancas(e){
        const componente = e.currentTarget;
        setCliente({...cliente,[componente.name]:componente.value})
    }

    function manipularSubmissao(e){
        const form = e.currentTarget;
        if(form.checkValidity()){
            //mandar os dados para o backend
            //limpar os dados do formulario
            setFormValidado(true);
            setCliente(estadoInicialCliente);
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
                                required/>
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
                                required/>
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
                                required/>
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
                                required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a cidade!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <FloatingLabel controlId="floatingSelect" label="UF:">
                            <Form.Select 
                                aria-label="Unidades Federativas brasileiras"
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
                                required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o bairro!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Button style={{marginLeft: "1%",width: "10%", marginRight: "10px"}} type="submit" variant={"success"} id='botaoConfirmar' onClick={manipularSubmissao}>Cadastrar</Button>
                    <Button style={{width: "10%", marginRight: "10px"}} type="button" variant={"secondary"} onClick={() => props.estado(false)}>Cadastrados</Button>
                </Row>
            </Form>
        </Container>
    )
}