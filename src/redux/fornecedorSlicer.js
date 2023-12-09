import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ESTADO from "../recursos/estado";

const urlBase = "http://localhost:3000/fornecedor"

export const gravarFornecedor = createAsyncThunk("fornecedor/gravarFornecedor", async (fornecedor) => {
    try{
        const resposta = await fetch(urlBase, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fornecedor)
        })
    
        if (resposta.ok) {
            const dados = await resposta.json();
    
            return {
                status: dados.status,
                codigoGerado: dados.codigoFornecedor,
                mensagem: dados.mensagem
            }
        }
        else {
            return {
                status: false,
                mensagem: "Nao foi possivel gravar o fornecedor"
            }
        }
    }
    catch(e) {
        return {
            status: false,
            mensagem: "Erro ao cadastrar fornecedor: " + e.message
        }
    }
})

export const buscarFornecedor = createAsyncThunk("fornecedor/buscarFornecedor", async () => {
    try {
        const resposta = await fetch(urlBase, {
            method: "GET"
        });

        if (resposta.ok) {
            const dados = await resposta.json();

            return {
                status: dados.status,
                listaFornecedor: dados.fornecedores,
            }
        }
        else {
            return {
                status: false,
                mensagem: "Erro ao buscar fornecedores"
            }
        }
    }
    catch (erro) {
        return {
            status: false,
            mensagem: "Erro ao buscar fornecedores: " + erro.message
        }
    }
});

export const excluirFornecedor = createAsyncThunk("fornecedor/excluirFornecedor", async (fornecedor) => {
    try{
        const resposta = await fetch(`${urlBase}/${fornecedor.cnpj}`, {
            method: "DELETE"
        })
    
        if (resposta.ok) {
            const dados = await resposta.json();
    
            return {
                status: dados.status,
                mensagem: dados.mensagem
            }
        }
        else {
            return {
                status: false,
                mensagem: "Nao foi possivel excluir o fornecedor"
            }
        }
    }
    catch (e) {
        return {
            status: false,
            mensagem: "Erro ao excluir fornecedor: " + e.message
        }
    }
});

export const alterarFornecedor = createAsyncThunk("fornecedor/alterarFornecedor", async (fornecedor) => {
    try{
        const resposta = await fetch(`${urlBase}/${fornecedor.cnpj}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fornecedor)
        })

        if(resposta.ok){
            const dados = await resposta.json();

            return {
                status: dados.status,
                mensagem: dados.mensagem
            }
        }
        else{
            return {
                status: false,
                mensagem: "Nao foi possivel atualizar o fornecedor"
            }
        }
    }
    catch(e) {
        return {
            status: false,
            mensagem: "Erro ao atualizar fornecedor: " + e.message
        }
    }
})

const fornecedorSlicer = createSlice({
    name: 'fornecedor',
    initialState: {
        status: ESTADO.Ocioso,
        mensagem: '',
        listaFornecedor: []
    },
    reducers: {
        /*inserir: (estado, action) => {
            estado.listaFornecedor.push(action.payload);
        },
        editar: (estado, action) => {
            const listaTemporaria = estado.listaFornecedor.filter(fornecedor => fornecedor.cnpj !== action.payload.cnpj);
            estado.listaFornecedor = [...listaTemporaria, action.payload];
        },
        excluir: (estado, action) => {
            estado.listaFornecedor = estado.listaFornecedor.filter(fornecedor => fornecedor.cnpj !== action.payload.cnpj);
        }*/
    },
    extraReducers: (builder) => {
        builder
            .addCase(gravarFornecedor.pending, (state, action) => {
                state.estado = ESTADO.Pendente,
                    state.mensagem = "Gravando cliente..."
            })
            .addCase(gravarFornecedor.fulfilled, (state, action) => {
                state.estado = ESTADO.Ocioso,
                    state.listaFornecedor.push(action.payload.fornecedor),
                    state.mensagem = action.payload.mensagem
            })
            .addCase(gravarFornecedor.rejected, (state, action) => {
                state.estado = ESTADO.Erro,
                    state.mensagem = action.error.message
            })

            .addCase(buscarFornecedor.pending, (state, action) => {
                state.estado = ESTADO.Pendente,
                    state.mensagem = "Buscando fornecedores..."
            })
            .addCase(buscarFornecedor.fulfilled, (state, action) => {
                state.estado = ESTADO.Ocioso,
                    state.listaFornecedor = action.payload.listaFornecedor,
                    state.mensagem = action.payload.mensagem
            })
            .addCase(buscarFornecedor.rejected, (state, action) => {
                state.estado = ESTADO.Erro,
                    state.mensagem = action.error.message
            })

            .addCase(excluirFornecedor.pending, (state, action) => {
                state.estado = ESTADO.Pendente,
                state.mensagem = "Excluindo fornecedor..."
            })
            .addCase(excluirFornecedor.fulfilled, (state, action) => {
                state.estado = ESTADO.Ocioso,
                state.listaFornecedor = state.listaFornecedor.filter(fornecedor => fornecedor.cnpj !== action.payload.cnpj),
                state.mensagem = action.payload.mensagem
            })
            .addCase(excluirFornecedor.rejected, (state, action) => {
                state.estado = ESTADO.Erro,
                state.mensagem = action.error.message
            })

            .addCase(alterarFornecedor.pending, (state, action) => {
                state.estado = ESTADO.Pendente,
                state.mensagem = "Atualizando fornecedor"
            })
            .addCase(alterarFornecedor.fulfilled, (state, action) => {
                state.estado = ESTADO.Ocioso;
                const index = state.listaFornecedor.findIndex(fornecedor => fornecedor.cnpj === action.payload.cnpj);
                state.listaFornecedor[index] = action.payload.fornecedor;
                state.mensagem = action.payload.mensagem
            })
            .addCase(alterarFornecedor.rejected, (state, action) => {
                state.estado = ESTADO.Erro,
                state.mensagem = action.error.message
            })
    }
})

export default fornecedorSlicer.reducer