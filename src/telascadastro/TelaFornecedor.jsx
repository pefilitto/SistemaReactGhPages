<<<<<<< HEAD
import TabelaFornecedores from "./tabelas/TabelaFornecedores";
import FormCadFornecedor from "./formularios/FormCadFornecedor";
import { Container } from 'react-bootstrap'
import { useState } from "react";

export default function TelaFornecedor() {
    const [exibirFornecedor, setExibirFornecedor] = useState(true)
    const [fornecedorParaEdicao, setFornecedorParaEdicao] = useState({})
    const [modoEdicao, setModoEdicao] = useState(false);
    return (
        <Container>
            {exibirFornecedor ? (
                <FormCadFornecedor 
                    conteudo={setExibirFornecedor}
                    fornecedorParaEdicao={fornecedorParaEdicao}
                    setFornecedorParaEdicao={setFornecedorParaEdicao}
                    modoEdicao={modoEdicao}
                    setModoEdicao={setModoEdicao}
                />
            ) : (
                <TabelaFornecedores
                    conteudo={setExibirFornecedor}
                    setFornecedorParaEdicao={setFornecedorParaEdicao}
                    setModoEdicao={setModoEdicao}
                />
            )}
        </Container>
    )
=======
import TabelaFornecedores from "./tabelas/TabelaFornecedores";
import FormCadFornecedor from "./formularios/FormCadFornecedor";
import { Container } from 'react-bootstrap'
import { useState } from "react";

export default function TelaFornecedor() {
    const [exibirFornecedor, setExibirFornecedor] = useState(true)
    const [fornecedorParaEdicao, setFornecedorParaEdicao] = useState({})
    const [modoEdicao, setModoEdicao] = useState(false);
    return (
        <Container>
            {exibirFornecedor ? (
                <FormCadFornecedor 
                    conteudo={setExibirFornecedor}
                    fornecedorParaEdicao={fornecedorParaEdicao}
                    setFornecedorParaEdicao={setFornecedorParaEdicao}
                    modoEdicao={modoEdicao}
                    setModoEdicao={setModoEdicao}
                />
            ) : (
                <TabelaFornecedores
                    conteudo={setExibirFornecedor}
                    setFornecedorParaEdicao={setFornecedorParaEdicao}
                    setModoEdicao={setModoEdicao}
                />
            )}
        </Container>
    )
>>>>>>> feat/versao-andre
}