import Cabecalho from "./cabecalho";
import Rodape from "./rodape";
import Menu from "./menu";
import TelaCadastroCliente from "../telascadastro/ExibeClientesCadastrados";

export default function Pagina(props) {
    return (
        <>
            
            <Menu />
            <div>
                <TelaCadastroCliente/>
                {props.children}
            </div>
            <Rodape conteudo="Conteudo do rodape" />
        </>
    )
}