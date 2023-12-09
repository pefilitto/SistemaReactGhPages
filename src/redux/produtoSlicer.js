<<<<<<< HEAD
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ESTADO from "../recursos/estado";

const urlBase = "http://localhost:3000/produto"

export const buscarProdutos = createAsyncThunk('produto/buscarProdutos', async () => {
    try {
        const resposta = await fetch(urlBase, { method: "GET" });
        const dados = await resposta.json();
        if (dados.status) {
            return {
                status: dados.status,
                mensagem: dados.mensagem,
                listaProdutos: dados.produto
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

export const excluirProduto = createAsyncThunk("produto/excluirProdutos", async (produto) => {
    try {
        const resposta = await fetch(`${urlBase}/${produto.codigo}`, {
            method: "DELETE",
        })

        const dados = await resposta.json();
        if (resposta.ok) {
            return {
                status: dados.status,
                mensagem: dados.mensagem
            }
        }
        else {
            return {
                status: false,
                mensagem: dados.mensagem
            }
        }
    } catch (e) {
        return {
            status: false,
            mensagem: "Erro ao excluir do banco de dados: " + e.message
        }
    }

})

export const gravarProdutos = createAsyncThunk("produto/gravarProdutos", async (produto) => {
    console.log("Produto chegou aqui: " + JSON.stringify(produto))
    const resposta = await fetch(urlBase, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    })

    const dados = await resposta.json();
    if (dados.status) {
        return {
            status: dados.status,
            mensagem: dados.mensagem,
            codigoGerado: dados.codigoGerado
        }
    }
    else {
        return {
            status: false,
            mensagem: dados.mensagem
        }
    }
})

export const alterarProduto = createAsyncThunk("produto/alterarProduto", async (produto) => {
    const resposta = await fetch(`${urlBase}/${produto.codigo}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(produto)
    }).catch(e => {
        return {
            status: false,
            mensagem: "Erro ao atualizar produto: " + e.message
        }
    })

    const dados = await resposta.json();
    if (resposta.ok) {
        return {
            status: dados.status,
            mensagem: dados.mensagem
        }
    }
    else {
        return {
            status: false,
            mensagem: dados.mensagem
        }
    }
})

const produtoSlice = createSlice({
    name: "produto",
    initialState: {
        estado: ESTADO.Ocioso,
        mensagem: "",
        listaProdutos: []
    },
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
                    state.listaProdutos = action.payload.listaProdutos
                }
                else {
                    state.estado = ESTADO.Erro;
                    state.mensagem = action.payload.mensagem;
                }
            })

            .addCase(buscarProdutos.rejected, (state, action) => {
                state.estado = ESTADO.Erro;
                state.mensagem = action.error.message
            })

            /* Adicionando agora os casos para a manipulação de gravar produtos que pode assumir 3 casos:
                - Pending ou pendente
                - Fulfilled ou concluída
                - Rejected ou rejeitada
            */
            .addCase(gravarProdutos.pending, (state, action) => {
                state.estado = ESTADO.Pendente,
                state.mensagem = "Processando a requisição..."
            })

            .addCase(gravarProdutos.fulfilled, (state, action) => {
                state.estado = ESTADO.Ocioso;
                state.mensagem = action.payload.mensagem;
                state.listaProdutos.push(action.payload)
            })

            .addCase(gravarProdutos.rejected, (state, action) => {
                state.estado = ESTADO.Erro;
                state.mensagem = action.payload.mensagem
            })

            .addCase(excluirProduto.pending, (state, action) => {
                state.estado = ESTADO.Pendente,
                    state.mensagem = "Excluindo produto..."
            })
            .addCase(excluirProduto.fulfilled, (state, action) => {
                state.estado = ESTADO.Ocioso,
                state.listaProdutos = state.listaProdutos.filter(produto => produto.codigo !== action.payload.codigo),
                state.mensagem = action.payload.mensagem
            })
            .addCase(excluirProduto.rejected, (state, action) => {
                state.estado = ESTADO.Erro;
                state.mensagem = action.error.message
            })

            .addCase(alterarProduto.pending, (state, action) => {
                state.estado = ESTADO.Pendente;
                state.mensagem = "Alterando produtos..."
            })
            .addCase(alterarProduto.fulfilled, (state, action) => {
                state.estado = ESTADO.Ocioso;
                const index = state.listaProdutos.findIndex(produto => produto.codigo === action.payload.codigo);
                state.listaProdutos[index] = action.payload.produto;
                state.mensagem = action.payload.mensagem
            })
            .addCase(alterarProduto.rejected, (state, action) => {
                state.estado = ESTADO.Erro;
                state.mensagem = action.error.message
            })

        //Fazer aqui os casos para a manipulação e atualização dos produtos

        //Fazer aqui os casos para a manipulação da exclusão dos produtos
    }
})

=======
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ESTADO from "../recursos/estado";

const urlBase = "http://localhost:3000/produto"

export const buscarProdutos = createAsyncThunk('produto/buscarProdutos', async () => {
    try {
        const resposta = await fetch(urlBase, { method: "GET" });
        const dados = await resposta.json();
        if (dados.status) {
            return {
                status: dados.status,
                mensagem: dados.mensagem,
                listaProdutos: dados.produto
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

export const excluirProduto = createAsyncThunk("produto/excluirProdutos", async (produto) => {
    try {
        const resposta = await fetch(`${urlBase}/${produto.codigo}`, {
            method: "DELETE",
        })

        const dados = await resposta.json();
        if (resposta.ok) {
            return {
                status: dados.status,
                mensagem: dados.mensagem
            }
        }
        else {
            return {
                status: false,
                mensagem: dados.mensagem
            }
        }
    } catch (e) {
        return {
            status: false,
            mensagem: "Erro ao excluir do banco de dados: " + e.message
        }
    }

})

export const gravarProdutos = createAsyncThunk("produto/gravarProdutos", async (produto) => {
    console.log("Produto chegou aqui: " + JSON.stringify(produto))
    const resposta = await fetch(urlBase, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    })

    const dados = await resposta.json();
    if (dados.status) {
        return {
            status: dados.status,
            mensagem: dados.mensagem,
            codigoGerado: dados.codigoGerado
        }
    }
    else {
        return {
            status: false,
            mensagem: dados.mensagem
        }
    }
})

export const alterarProduto = createAsyncThunk("produto/alterarProduto", async (produto) => {
    const resposta = await fetch(`${urlBase}/${produto.codigo}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(produto)
    }).catch(e => {
        return {
            status: false,
            mensagem: "Erro ao atualizar produto: " + e.message
        }
    })

    const dados = await resposta.json();
    if (resposta.ok) {
        return {
            status: dados.status,
            mensagem: dados.mensagem
        }
    }
    else {
        return {
            status: false,
            mensagem: dados.mensagem
        }
    }
})

const produtoSlice = createSlice({
    name: "produto",
    initialState: {
        estado: ESTADO.Ocioso,
        mensagem: "",
        listaProdutos: []
    },
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
                    state.listaProdutos = action.payload.listaProdutos
                }
                else {
                    state.estado = ESTADO.Erro;
                    state.mensagem = action.payload.mensagem;
                }
            })

            .addCase(buscarProdutos.rejected, (state, action) => {
                state.estado = ESTADO.Erro;
                state.mensagem = action.error.message
            })

            /* Adicionando agora os casos para a manipulação de gravar produtos que pode assumir 3 casos:
                - Pending ou pendente
                - Fulfilled ou concluída
                - Rejected ou rejeitada
            */
            .addCase(gravarProdutos.pending, (state, action) => {
                state.estado = ESTADO.Pendente,
                state.mensagem = "Processando a requisição..."
            })

            .addCase(gravarProdutos.fulfilled, (state, action) => {
                state.estado = ESTADO.Ocioso;
                state.mensagem = action.payload.mensagem;
                state.listaProdutos.push(action.payload)
            })

            .addCase(gravarProdutos.rejected, (state, action) => {
                state.estado = ESTADO.Erro;
                state.mensagem = action.payload.mensagem
            })

            .addCase(excluirProduto.pending, (state, action) => {
                state.estado = ESTADO.Pendente,
                    state.mensagem = "Excluindo produto..."
            })
            .addCase(excluirProduto.fulfilled, (state, action) => {
                state.estado = ESTADO.Ocioso,
                state.listaProdutos = state.listaProdutos.filter(produto => produto.codigo !== action.payload.codigo),
                state.mensagem = action.payload.mensagem
            })
            .addCase(excluirProduto.rejected, (state, action) => {
                state.estado = ESTADO.Erro;
                state.mensagem = action.error.message
            })

            .addCase(alterarProduto.pending, (state, action) => {
                state.estado = ESTADO.Pendente;
                state.mensagem = "Alterando produtos..."
            })
            .addCase(alterarProduto.fulfilled, (state, action) => {
                state.estado = ESTADO.Ocioso;
                const index = state.listaProdutos.findIndex(produto => produto.codigo === action.payload.codigo);
                state.listaProdutos[index] = action.payload.produto;
                state.mensagem = action.payload.mensagem
            })
            .addCase(alterarProduto.rejected, (state, action) => {
                state.estado = ESTADO.Erro;
                state.mensagem = action.error.message
            })

        //Fazer aqui os casos para a manipulação e atualização dos produtos

        //Fazer aqui os casos para a manipulação da exclusão dos produtos
    }
})

>>>>>>> feat/versao-andre
export default produtoSlice.reducer;