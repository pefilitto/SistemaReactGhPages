import { useState } from "react";
import FormCadProdutos from "./formularios/FormCadProduto";
import TabelaProdutos from "./tabelas/TabelaProdutos";
import { Container } from 'react-bootstrap'

export default function TelaProdutos() {
    const [telaProdutos, setTelaProdutos] = useState(true);
    const [produtoParaEdicao, setProdutoParaEdicao] = useState({})
    const [modoEdicao, setModoEdicao] = useState(false);
    return (
        <Container>
            {telaProdutos ? (
                <FormCadProdutos
                    conteudo={setTelaProdutos}
                    modoEdicao={modoEdicao}
                    setModoEdicao={setModoEdicao}
                    produtoParaEdicao={produtoParaEdicao}
                    setProdutoParaEdicao={setProdutoParaEdicao}
                />
            ) : (
                <TabelaProdutos
                    conteudo={setTelaProdutos}
                    setModoEdicao={setModoEdicao}
                    setProdutoParaEdicao={setProdutoParaEdicao}
                />
            )}
        </Container>
    )
}