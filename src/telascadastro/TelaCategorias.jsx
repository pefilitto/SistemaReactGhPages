import TabelaCategorias from "./tabelas/TabelaCategorias";
import FormCadCategoria from "./formularios/FormCadCategorias";
import { Container } from 'react-bootstrap';
import { useState } from "react";

export default function TelaCategorias() {
    const [telaCategorias, setTelaCategorias] = useState(true);
    const [listaCategorias, setListaCategorias] = useState([]);
    return (
        <Container>
            {telaCategorias ? (
                <FormCadCategoria
                    conteudo={setTelaCategorias}
                    listaCategorias={listaCategorias}
                    setListaCategorias={setListaCategorias}
                />
            ) : (
                <TabelaCategorias
                    conteudo={setTelaCategorias}
                    listaCategorias={listaCategorias}
                />
            )}
        </Container>
    )
}