import TabelaFornecedores from "./tabelas/TabelaFornecedores";
import FormCadFornecedor from "./formularios/FormCadFornecedor";
import { Container } from 'react-bootstrap'
import { useState } from "react";

export default function TelaFornecedor() {
    const [exibirFornecedor, setExibirFornecedor] = useState(true)
    const [listaFornecedor, setListaFornecedor] = useState([]);
    return (
        <Container>
            {exibirFornecedor ? (
                <FormCadFornecedor 
                    conteudo={setExibirFornecedor}
                    listaFornecedor={listaFornecedor}
                    setListaFornecedor={setListaFornecedor}
                />
            ) : (
                <TabelaFornecedores
                    conteudo={setExibirFornecedor}
                    listaFornecedor={listaFornecedor} 
                />
            )}
        </Container>
    )
}