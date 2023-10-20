import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "../recursos/estado";

const fornecedorSlicer = createSlice({
    name: 'fornecedor',
    initialState: {
        status: ESTADO.Ocioso,
        mensagem: '',
        listaFornecedor: []
    },
    reducers: {
        inserir: (estado, action) => {
            estado.listaFornecedor.push(action.payload);
        },
        editar: (estado, action) => {
            const listaTemporaria = estado.listaFornecedor.filter(fornecedor => fornecedor.cnpj !== action.payload.cnpj);
            estado.listaFornecedor = [...listaTemporaria, action.payload];
        },
        excluir: (estado, action) => {
            estado.listaFornecedor = estado.listaFornecedor.filter(fornecedor => fornecedor.cnpj !== action.payload.cnpj);
        }
    }
})

export const {inserir, editar, excluir} = fornecedorSlicer.actions
export default fornecedorSlicer.reducer