import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormCadCategoria from "../telascadastro/formularios/FormCadCategorias";
import TabelaClientes from "../telascadastro/tabelas/TabelaClientes";
import TabelaProdutos from "../telascadastro/tabelas/TabelaProdutos";
import TabelaFornecedores from "../telascadastro/tabelas/TabelaFornecedores";
import TabelaCategorias from "../telascadastro/tabelas/TabelaCategorias"
import TelaCadastroCliente from '../telascadastro/TelaCadastroCliente';
import TelaFornecedor from '../telascadastro/TelaFornecedor';
import TelaProdutos from '../telascadastro/TelaProdutos';
import TelaCategorias from '../telascadastro/TelaCategorias';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<TelaCadastroCliente/>}></Route>
                <Route path="/cadastroclientes" element={<TelaCadastroCliente />} />
                <Route path="/cadastrofornecedores" element={<TelaFornecedor />} />
                <Route path="/cadastrocategorias" element={<TelaCategorias />} />
                <Route path="/cadastroprodutos" element={<TelaProdutos />} />
            </Routes>
        </BrowserRouter>
    );
}
