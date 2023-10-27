import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "../recursos/estado";

const categoriaSlicer = createSlice({
    name: 'categoria',
    initialState:{
        status: ESTADO.Ocioso,
        mensagem: '',
        listaCategorias: []  
    },
    reducers:{
        inserir:(estado, action) => {
            estado.listaCategorias.push(action.payload)
        },
        editar: (estado, action) => {
            const listaTemporaria = estado.listaCategorias.filter(categoria => categoria.tipoProduto !== action.payload.tipoProduto)
            estado.listaCategorias = [...listaTemporaria, action.payload]
           
        },
        excluir: (estado, action) => {
            estado.listaCategorias = estado.listaCategorias.filter(categoria => categoria.tipoProduto !== action.payload.tipoProduto)
        }
    }
})

export const {inserir, editar, excluir} = categoriaSlicer.actions;
export default categoriaSlicer.reducer;