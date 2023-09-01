import { useState } from "react";
import FormCadProdutos from "./formularios/FormCadProduto";
import TabelaProdutos from "./tabelas/TabelaProdutos";
import { Container } from 'react-bootstrap'

export default function TelaProdutos(){
    const [telaProdutos, setTelaProdutos] = useState(true);

    return(
        <Container>
            {telaProdutos ? <FormCadProdutos conteudo={setTelaProdutos}/> : <TabelaProdutos conteudo={setTelaProdutos}/>}
        </Container>
    )
}