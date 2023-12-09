import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import ESTADO from "../recursos/estado"

const urlBase = "http://localhost:3000/cliente"

export const buscarCliente = createAsyncThunk("cliente/buscarCliente", async () => {
    try{
        const resposta = await fetch(urlBase, {method: "GET"});
        
        const dados = await resposta.json();
        if(resposta.ok){
            return {
                status: dados.status,
                listaClientes: dados.cliente
            }
        }
        else{
            return {
                status: false,
                mensagem: dados.mensagem
            }
        }
    }
    catch (erro) {
        return {
            status: false,
            mensagem: "Nao foi possivel buscar os clientes do banco: " + erro.message
        }
    }
});

export const excluirCliente = createAsyncThunk("cliente/excluirCliente", async (cliente) => {
    try{
        const resposta = await fetch(`${urlBase}/${cliente.cpf}`, {
            method: "DELETE"
        })
    
        const dados = await resposta.json();
        if(resposta.ok){
            return {
                status: dados.status,
                mensagem: dados.mensagem
            }
        }
        else{
            return {
                status: false,
                mensagem: dados.mensagem
            }
        }
    }
    catch(e) {
        return {
            status: false,
            mensagem: "Erro ao excluir cliente: " + e.message
        }
    }
})

export const gravarCliente = createAsyncThunk("cliente/gravarCliente", async(cliente) => {
    const resposta = await fetch(urlBase, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(cliente)
    }).catch(e => {
        return {
            status: false,
            mensagem: "Erro ao cadastrar cliente: " + e.message
        }
    })

    const dados = await resposta.json();
    if(resposta.ok){
        return {
            status: dados.status,
            codigoGerado: dados.codigoGerado,
            mensagem: dados.mensagem
        }
    }
    else{
        return {
            status: false,
            mensagem: dados.mensagem
        }
    }
});

export const alterarCliente = createAsyncThunk("cliente/alterarCliente", async (cliente) => {
    const resposta = await fetch(`${urlBase}/${cliente.cpf}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cliente)
    })

    const dados = await resposta.json();
    if(resposta.ok){
        return {
            status: dados.status,
            mensagem: dados.mensagem
        }
    }
    else{
        return {
            status: false,
            mensagem: dados.mensagem
        }
    }
})

const clienteSlicer = createSlice({
    name: 'cliente',
    initialState:{
        status: ESTADO.Ocioso,
        mensagem: '',
        listaClientes: []
    },
    reducers:{
    },
    extraReducers: (builder) => {
        builder
            .addCase(gravarCliente.pending, (state, action) => {
                state.estado = ESTADO.Pendente,
                state.mensagem = "Cadastrando cliente..."
            })
            .addCase(gravarCliente.fulfilled, (state, action) => {
                state.estado = ESTADO.Ocioso,
                state.listaClientes.push(action.payload),
                state.mensagem = action.payload.mensagem
            })
            .addCase(gravarCliente.rejected, (state, action) => {
                state.estado = ESTADO.Erro,
                state.mensagem = action.error.message
            })

            .addCase(buscarCliente.pending, (state, action) => {
                state.estado = ESTADO.Pendente,
                state.mensagem = "Buscando clientes..."
            })
            .addCase(buscarCliente.fulfilled, (state, action) => {
                state.estado = ESTADO.Ocioso,
                state.listaClientes = action.payload.listaClientes,
                state.mensagem = action.payload.mensagem
            })
            .addCase(buscarCliente.rejected, (state, action) => {
                state.estado = ESTADO.Erro,
                state.mensagem = action.error.message
            })

            .addCase(excluirCliente.pending, (state, action) => {
                state.estado = ESTADO.Pendente,
                state.mensagem = "Excluindo cliente..."
            })
            .addCase(excluirCliente.fulfilled, (state, action) => {
                state.estado = ESTADO.Ocioso
                state.listaClientes = state.listaClientes.filter(cliente => cliente.cpf !== action.payload.cpf)
                state.mensagem = action.payload.mensagem
            })
            .addCase(excluirCliente.rejected, (state, action) => {
                state.estado = ESTADO.Erro,
                state.mensagem = action.error.message
            })

            .addCase(alterarCliente.pending, (state, action) => {
                state.estado = ESTADO.Pendente,
                state.mensagem = "Atualizando cliente..."
            })
            .addCase(alterarCliente.fulfilled, (state, action) => {
                state.estado = ESTADO.Ocioso;
                const index = state.listaClientes.findIndex(cliente => cliente.cpf === action.payload.cpf);
                state.listaClientes[index] = action.payload.cliente,
                state.mensagem = action.payload.mensagem
            })
            .addCase(alterarCliente.rejected, (state, action) => {
                state.estado = ESTADO.Erro,
                state.mensagem = action.error.message
            })
    }
})

//Exportando o redutor para ser usado na store
export default clienteSlicer.reducer; 