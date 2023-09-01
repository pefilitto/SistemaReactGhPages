import { Container, Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap'
import Menu from '../../templates/menu'
import Cabecalho from "../../templates/cabecalho";
export default function FormCadCategoria(props) {
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
            <Form>
                <Row>
                    <Col>
                        <FloatingLabel controlId="floatingSelect" label="Tipo de Produto:">
                            <Form.Select aria-label="Tipo de Produto">
                                <option value="Pincel" selected>Pincel</option>
                                <option value="GalãoTinta">Galão de tinta</option>
                                <option value="GalãoMassa">Galão de Massa Corrida</option>
                                <option value="Desempenadeira">Desempenadeira</option>
                                <option value="Lixa">Lixa</option>
                                <option value="MascaraPF1">Mascara PF1</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>

                    <Col>
                        <FloatingLabel controlId="floatingSelect" label="Tamanho:">
                            <Form.Select aria-label="Tamanho">
                                <option value="P" selected>Pequeno</option>
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
                    <Button style={{ width: "10%", marginRight: "10px" }} type="button" variant={"secondary"} onClick={() => props.conteudo(false)}>Cadastrados</Button>
                </Row>
            </Form>
        </Container>

    )
}