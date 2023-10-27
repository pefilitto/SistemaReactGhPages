import TabelaCategorias from "./tabelas/TabelaCategorias";
import FormCadCategoria from "./formularios/FormCadCategorias";
import { Container } from 'react-bootstrap';
import { useState } from "react";

export default function TelaCategorias() {
    const [telaCategorias, setTelaCategorias] = useState(true);
    const [categoriaParaEdicao, setCategoriaParaEdicao] = useState({})
    const [modoEdicao, setModoEdicao] = useState(false);
    return (
        <Container>
            {telaCategorias ? (
                <FormCadCategoria
                    conteudo={setTelaCategorias}
                    setCategoriaParaEdicao={setCategoriaParaEdicao}
                    modoEdicao={modoEdicao}
                    setModoEdicao={setModoEdicao}
                    categoriaParaEdicao={categoriaParaEdicao}
                />
            ) : (
                <TabelaCategorias
                    conteudo={setTelaCategorias}
                    setModoEdicao={setModoEdicao}
                    setCategoriaParaEdicao={setCategoriaParaEdicao}
                />
            )}
        </Container>
    )
}