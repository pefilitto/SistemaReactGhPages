import { useState } from "react";
import FormCadProdutos from "./formularios/FormCadProduto";
import TabelaProdutos from "./tabelas/TabelaProdutos";
import { Container } from 'react-bootstrap'

export default function TelaProdutos() {
    const [telaProdutos, setTelaProdutos] = useState(true);
    const [listaProdutos, setListaProdutos] = useState([]);
    const [produtoParaEdicao, setProdutoParaEdicao] = useState({})
    const [modoEdicao, setModoEdicao] = useState(false);
    return (
        <Container>
            {telaProdutos ? (
                <FormCadProdutos
                    conteudo={setTelaProdutos}
                    listaProdutos={listaProdutos}
                    setListaProdutos={setListaProdutos}
                    modoEdicao={modoEdicao}
                    setModoEdicao={setModoEdicao}
                    produtoParaEdicao={produtoParaEdicao}
                    setProdutoParaEdicao={setProdutoParaEdicao}
                />
            ) : (
                <TabelaProdutos
                    conteudo={setTelaProdutos}
                    listaProdutos={listaProdutos}
                    setListaProdutos={setListaProdutos}
                    setModoEdicao={setModoEdicao}
                    setProdutoParaEdicao={setProdutoParaEdicao}
                />
            )}
        </Container>
    )
}