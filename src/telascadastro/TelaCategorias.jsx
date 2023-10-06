import TabelaCategorias from "./tabelas/TabelaCategorias";
import FormCadCategoria from "./formularios/FormCadCategorias";
import { Container } from 'react-bootstrap';
import { useState } from "react";

export default function TelaCategorias() {
    const [telaCategorias, setTelaCategorias] = useState(true);
    const [listaCategorias, setListaCategorias] = useState([]);
    const [categoriaParaEdicao, setCategoriaParaEdicao] = useState({})
    const [modoEdicao, setModoEdicao] = useState(false);
    return (
        <Container>
            {telaCategorias ? (
                <FormCadCategoria
                    conteudo={setTelaCategorias}
                    listaCategorias={listaCategorias}
                    setListaCategorias={setListaCategorias}
                    setCategoriaParaEdicao={setCategoriaParaEdicao}
                    modoEdicao={modoEdicao}
                    setModoEdicao={setModoEdicao}
                    categoriaParaEdicao={categoriaParaEdicao}
                />
            ) : (
                <TabelaCategorias
                    conteudo={setTelaCategorias}
                    listaCategorias={listaCategorias}
                    setListaCategorias={setListaCategorias}
                    setModoEdicao={setModoEdicao}
                    setCategoriaParaEdicao={setCategoriaParaEdicao}
                />
            )}
        </Container>
    )
}