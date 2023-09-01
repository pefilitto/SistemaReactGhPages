import { Container } from "react-bootstrap";
import FormCadCliente from "./formularios/FormCadCliente";
import TabelaClientes from "./tabelas/TabelaClientes";
import { useState } from "react";

export default function TelaCadastroCliente() {
    const [exibirFormulario, setExibirFormulario] = useState(true);

    return (
        <Container>
            {exibirFormulario ? <FormCadCliente estado={setExibirFormulario}  /> : <TabelaClientes estado={setExibirFormulario} />}     
        </Container>
    )
}