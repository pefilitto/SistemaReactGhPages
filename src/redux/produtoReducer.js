import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ESTADO from "../recursos/estado";

const estadoInicial = {
    estado: ESTADO.Ocioso,
    mensagem: "",
    listaProdutos: []
}

export const buscarProdutos = createAsyncThunk('buscarProdutos', async () => {
    try {
        const resposta = await fetch(urlBase, { method: "GET" });
        const dados = await resposta.json();
        if (dados.status) {
            return {
                status: dados.status,
                mensagem: dados.mensagem,
                listaProdutos: dados.listaProdutos
            }
        }
        else {
            return {
                status: dados.status,
                mensagem: dados.mensagem,
                listaProdutos: []
            }
        }
    }
    catch (erro) {
        return {
            status: false,
            mensagem: dados.mensagem
        }
    }
})

export const gravarProdutos = createAsyncThunk("gravarProdutos", async (produto) => {
    try {
        const resposta = await fetch(urlBase, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: produto
        })

        const dados = resposta.json();
        if (dados.status) {
            produto.codigo = dados.codigoGerado
            return {
                status: dados.mensagem,
                produto,
                mensagem: dados.mensagem
            }
        }
        else {
            return {
                status: dados.mensagem,
                mensagem: dados.mensagem
            }
        }
    }
    catch (erro) {
        return {
            status: false,
            mensagem: "Erro ao gravar produto: " + erro.message
        }
    }
})

const produtoSlice = createSlice({
    name: "produto",
    initialState: estadoInicial,
    reducers: {},
    extraReducers: (builder) => {
        builder
            /* Adicionando os casos para a manipulação de buscar produtos que pode assumir 3 casos:
                - Pending ou pendente
                - Fulfilled ou concluída
                - Rejected ou rejeitada
            */
            .addCase(buscarProdutos.pending, (state, action) => {
                state.estado = ESTADO.Pendente;
                state.mensagem = "Buscando produtos..."
            })

            .addCase(buscarProdutos.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.estado = ESTADO.Ocioso;
                    state.mensagem = action.payload.mensagem;
                    state.listaProdutos = [];
                }
                else {
                    state.estado = ESTADO.Erro;
                    state.mensagem = action.payload.mensagem;
                    state.listaProdutos = [];
                }
            })

            .addCase(buscarProdutos.rejected, (state, action) => {
                state.estado = ESTADO.Erro;
                state
            })

            /* Adicionando agora os casos para a manipulação de gravar produtos que pode assumir 3 casos:
                - Pending ou pendente
                - Fulfilled ou concluída
                - Rejected ou rejeitada
            */
            .addCase(gravarProdutos.pending, (state, action) => {
                state.estado = ESTADO.Pendente,
                    mensagem = "Processando a requisição..."
            })

            .addCase(gravarProdutos.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.estado = ESTADO.Ocioso;
                    state.mensagem = action.payload.mensagem;
                    state.listaProdutos.push(action.payload.produto);
                }
                else {
                    state.estado = ESTADO.Erro;
                    state.mensagem = action.payload.mensagem
                }
            })

            .addCase(gravarProdutos.rejected, (state, action) => {
                state.estado = ESTADO.Erro;
                state.mensagem = action.payload.mensagem
            })

            //Fazer aqui os casos para a manipulação e atualização dos produtos

            //Fazer aqui os casos para a manipulação da exclusão dos produtos
    }
})