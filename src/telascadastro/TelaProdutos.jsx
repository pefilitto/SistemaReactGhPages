import { useState } from "react";
import FormCadProdutos from "./formularios/FormCadProduto";
import TabelaProdutos from "./tabelas/TabelaProdutos";
import { Container } from 'react-bootstrap'

export default function TelaProdutos() {
    const [telaProdutos, setTelaProdutos] = useState(true);
    const [listaProdutos, setListaProdutos] = useState([])
    return (
        <Container>
            {telaProdutos ? (
                <FormCadProdutos
                    conteudo={setTelaProdutos}
                    listaProdutos={listaProdutos}
                    setListaProdutos={setListaProdutos}
                />
            ) : (
                <TabelaProdutos
                    conteudo={setTelaProdutos}
                    listaProdutos={listaProdutos}
                />
            )}
        </Container>
    )
}