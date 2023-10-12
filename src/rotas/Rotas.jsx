import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TelaCadastroCliente from '../telascadastro/TelaCadastroCliente';
import TelaFornecedor from '../telascadastro/TelaFornecedor';
import TelaProdutos from '../telascadastro/TelaProdutos';
import TelaCategorias from '../telascadastro/TelaCategorias';
import TelaLogin from '../telascadastro/TelaLogin';

export default function Rotas() {
    return (
        <BrowserRouter basename='/SistemaReactGhPages'>
            <Routes>
                <Route path='/' element={<TelaCadastroCliente/>}></Route>
                <Route path='/cadastroclientes' element={<TelaCadastroCliente />} />
                <Route path='/cadastrofornecedores' element={<TelaFornecedor />} />
                <Route path='/cadastrocategorias' element={<TelaCategorias />} />
                <Route path='/cadastroprodutos' element={<TelaProdutos />} />
                <Route path='/login' element={<TelaLogin/>}/>
            </Routes>
        </BrowserRouter>
    );
}
