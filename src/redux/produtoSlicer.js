import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "../recursos/estado";

const produtoSlicer = createSlice({
    name: 'produto',
    initialState:{
        status: ESTADO.Ocioso,
        mensagem: '',
        listaProdutos: []
    },
    reducers: {
        inserir: (estado, action) => {
            estado.listaProdutos.push(action.payload);
        },
        editar: (estado, action) => {
            const listaTemporaria = estado.listaProdutos.filter(produto => produto.nomeProduto !== action.payload.nomeProduto);
            estado.listaProdutos = [...listaTemporaria, action.payload];
        },
        excluir: (estado, action) => {
            estado.listaProdutos = estado.listaProdutos.filter(produto => produto.nomeProduto !== action.payload.nomeProduto)
        }
    }
})

export const {inserir, editar, excluir} = produtoSlicer.actions; 
export default produtoSlicer.reducer