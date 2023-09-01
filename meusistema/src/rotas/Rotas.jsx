import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormCadProduto from "../telascadastro/formularios/FormCadProduto";
import FormCadFornecedor from "../telascadastro/formularios/FormCadFornecedor";
import FormCadCliente from "../telascadastro/formularios/FormCadCliente";
import FormCadCategoria from "../telascadastro/formularios/FormCadCategorias";
import TabelaClientes from "../telascadastro/tabelas/TabelaClientes";
import TabelaProdutos from "../telascadastro/tabelas/TabelaProdutos";
import TabelaFornecedores from "../telascadastro/tabelas/TabelaFornecedores";
import TabelaCategorias from "../telascadastro/tabelas/TabelaCategorias"
import TelaCadastroCliente from '../telascadastro/ExibeClientesCadastrados';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<FormCadCliente/>}></Route>
                <Route path="/cadastroclientes" element={<TelaCadastroCliente />} />
                <Route path="/cadastrofornecedores" element={<FormCadFornecedor />} />
                <Route path="/cadastrocategorias" element={<FormCadCategoria />} />
                <Route path="/cadastroprodutos" element={<FormCadProduto />} />

                <Route path="/tabelaclientes" element={<TabelaClientes />} />
                <Route path="/tabelaprodutos" element={<TabelaProdutos />} />
                <Route path="/tabelafornecedores" element={<TabelaFornecedores />} />
                <Route path="/tabelacategorias" element={<TabelaCategorias />} />
            </Routes>
        </BrowserRouter>
    );
}
