import TabelaFornecedores from "./tabelas/TabelaFornecedores";
import FormCadFornecedor from "./formularios/FormCadFornecedor";
import { Container } from 'react-bootstrap'
import { useState } from "react";

export default function TelaFornecedor(){
    const [exibirFornecedor, setExibirFornecedor] = useState(true)

    return(
        <Container>
            {exibirFornecedor ? <FormCadFornecedor conteudo={setExibirFornecedor}/> : <TabelaFornecedores conteudo={setExibirFornecedor}/>}
        </Container>
    )
}