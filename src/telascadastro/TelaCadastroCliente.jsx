import { Container } from "react-bootstrap";
import FormCadCliente from "./formularios/FormCadCliente";
import TabelaClientes from "./tabelas/TabelaClientes";
import { useState } from "react";
import { useSelector } from "react-redux";


export default function TelaCadastroCliente() {
    const [exibirFormulario, setExibirFormulario] = useState(true);
    const [clienteParaEdicao, setClienteParaEdicao] = useState({})
    const [modoEdicao, setModoEdicao] = useState(false);
    return (
        <Container>
            {exibirFormulario ? (
                <FormCadCliente
                    conteudo={setExibirFormulario}
                    modoEdicao={modoEdicao}
                    setModoEdicao={setModoEdicao}
                    clienteParaEdicao={clienteParaEdicao}
                    setClienteParaEdicao={setClienteParaEdicao}
                />
            ) : (
                <TabelaClientes
                    conteudo={setExibirFormulario}
                    setModoEdicao={setModoEdicao}
                    setClienteParaEdicao={setClienteParaEdicao}
                />
            )}
        </Container>
    )
}
