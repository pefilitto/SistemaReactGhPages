import { Container } from "react-bootstrap";
import FormCadCliente from "./formularios/FormCadCliente";
import TabelaClientes from "./tabelas/TabelaClientes";
import { useState } from "react";

export default function TelaCadastroCliente() {
    const [exibirFormulario, setExibirFormulario] = useState(true);
    const [listaClientes, setListaClientes] = useState([]);
    const [clienteParaEdicao, setClienteParaEdicao] = useState({
        cpf: '',
        nome: '',
        endereco: '',
        numero: '',
        bairro: '',
        cidade: '',
        uf: '',
        cep: ''
    })
    const [modoEdicao, setModoEdicao] = useState(false);

    return (
        <Container>
            {exibirFormulario ? (
                <FormCadCliente
                    estado={setExibirFormulario}
                    listaClientes={listaClientes}
                    setListaClientes={setListaClientes}
                    modoEdicao={modoEdicao}
                    setModoEdicao={setModoEdicao}
                    clienteParaEdicao={clienteParaEdicao}
                    setClienteParaEdicao={setClienteParaEdicao}
                />
            ) : (
                <TabelaClientes
                    estado={setExibirFormulario}
                    listaClientes={listaClientes}
                    setListaClientes={setListaClientes}
                    modoEdicao={modoEdicao}
                    setModoEdicao={setModoEdicao}
                    clienteParaEdicao={clienteParaEdicao}
                    setClienteParaEdicao={setClienteParaEdicao}
                />
            )}
        </Container>
    )
}
