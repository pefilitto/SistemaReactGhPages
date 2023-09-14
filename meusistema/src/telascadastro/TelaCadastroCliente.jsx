import { Container } from "react-bootstrap";
import FormCadCliente from "./formularios/FormCadCliente";
import TabelaClientes from "./tabelas/TabelaClientes";
import { useState } from "react";

export default function TelaCadastroCliente() {
    const [exibirFormulario, setExibirFormulario] = useState(true);
    const [listaClientes, setListaClientes] = useState([]);

    return (
        <Container>
            {exibirFormulario ? (
                <FormCadCliente
                    estado={setExibirFormulario}
                    listaClientes={listaClientes}
                    setListaClientes={setListaClientes}
                />
            ) : (
                <TabelaClientes
                    estado={setExibirFormulario}
                    listaClientes={listaClientes}
                />
            )}
        </Container>
    )
}
