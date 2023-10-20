import { createSlice } from "@reduxjs/toolkit"
import ESTADO from "../recursos/estado"

const clienteSlicer = createSlice({
    name: 'cliente',
    initialState:{
        status: ESTADO.Ocioso,
        mensagem: '',
        listaClientes: []
    },
    reducers:{
        //no parametro é passado o estado atual do cliente que será alterado e a action que irá alterá-lo
        inserir:(estado, action) => {
            estado.listaClientes.push(action.payload);
        },
        excluir: (estado, action) => {
            estado.listaClientes = estado.listaClientes.filter(cliente => cliente.cpf !== action.payload.cpf);
        },
        editar: (estado, action) => {
            //Atualizar implicara em excluir o cliente da lista e adiciona-lo novamente com os dados atualizados
            const listaTemporariaCliente = estado.listaClientes.filter(cliente => cliente.cpf !== action.payload.cpf);
            estado.listaClientes = [...listaTemporariaCliente, action.payload];
        }
    }
})

//Exportando as actions que alteram o estado de 'cliente'
export const { inserir, excluir, editar } = clienteSlicer.actions;

//Exportando o redutor para ser usado na store
export default clienteSlicer.reducer; 