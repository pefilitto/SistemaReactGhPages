import TabelaCategorias from "./tabelas/TabelaCategorias";
import FormCadCategoria from "./formularios/FormCadCategorias";
import { Container } from 'react-bootstrap';
import { useState } from "react";

export default function TelaCategorias(){
    const [telaCategorias, setTelaCategorias] = useState(true)

    return(
        <Container>
            {telaCategorias ? <FormCadCategoria conteudo={setTelaCategorias}/> : <TabelaCategorias conteudo={setTelaCategorias}/>}
        </Container>
    )
}