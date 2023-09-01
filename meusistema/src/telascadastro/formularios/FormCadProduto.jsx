import { Container, Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap'
import Menu from '../../templates/menu'
import Cabecalho from "../../templates/cabecalho";
export default function FormCadProdutos() {
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
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nome do Produto:"
                                className="mb-3"
                            >

                                <Form.Control type="text" placeholder="Pincel" id="nome" name="nome" required />
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
                                <Form.Control type="text" placeholder="Informe o preço do produto" id="preço" name="preço" required />
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
                                <Form.Control type="text" placeholder="Exemplo: 50" id="estoque" name="estoque" />
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
                                <Form.Control type="text" placeholder="Nº" id="categoria" name="categoria" />
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
                                <Form.Control type="text" placeholder="Pincel com cerdas duras" id="descrição" name="descrição" />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a descrição!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Button style={{marginLeft: "1%",width: "10%", marginRight: "10px"}} type="submit" variant={"success"} id='botaoConfirmar'>Cadastrar</Button>
                    <Button style={{width: "10%", marginRight: "10px"}} type="button" variant={"secondary"}>Voltar</Button>
                </Row>
            </Form>
        </Container>

    )
}