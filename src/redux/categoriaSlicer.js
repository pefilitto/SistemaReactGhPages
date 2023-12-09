import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ESTADO from "../recursos/estado";

const urlBase = "http://localhost:3000/categoria"

export const buscarCategorias = createAsyncThunk("categoria/buscarCategorias", async () => {
    try {
        const resposta = await fetch(urlBase, { method: "GET" })
        const dados = await resposta.json();

        if (resposta.ok) {
            return {
                status: dados.status,
                listaCategorias: dados.categoria,
                codigo: dados.categoria.codigo
            }
        }
        else {
            return {
                status: false,
                listaCategorias: [],
                mensagem: "Ocorreu um erro ao recuperar as categorias da base dados"
            }
        }
    } catch (e) {
        return {
            status: false,
            listaCategorias: [],
            mensagem: "Erro ao consultar categorias: " + e.message
        }
    }
});

export const excluirCategoria = createAsyncThunk("categoria/excluirCategoria", async (categoria) => {
    try {
        const resposta = await fetch(`${urlBase}/${categoria.codigo}`, {
            method: "DELETE",
        });

        if (resposta.ok) {
            const dados = await resposta.json();
            return {
                status: dados.status,
                mensagem: dados.mensagem
            };
        } 
        else {
            return {
                status: false,
                mensagem: "Não foi possível excluir do banco de dados"
            };
        }
    } catch (error) {
        return {
            status: false,
            mensagem: "Erro ao excluir do banco de dados: " + error.message
        };
    }
});

export const alterarCategoria = createAsyncThunk("categoria/alterarCategoria", async (categoria) => {
    const resposta = await fetch(`${urlBase}/${categoria.codigo}`, {
        method: "PATCH", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(categoria)
    }).catch(e => {
        return {
            status: false,
            mensagem: "Erro ao atualizar categoria: " + e.message
        }
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
            mensagem: "Erro ao atualizar categoria"
        }
    }
})


export const gravarCategoria = createAsyncThunk("categoria/gravarCategoria", async (categoria) => {
    const resposta = await fetch(urlBase, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(categoria)
    }).catch((e) => {
        return {
            status: false,
            mensagem: "Não foi possível cadastrar uma categoria: " + e.message
        }
    })
    if (resposta.ok) {
        const dados = await resposta.json();
        return {
            status: dados.status,
            mensagem: dados.mensagem,
            codigoGerado: dados.codigoGerado
        }
    }
    else {
        return {
            status: false,
            mensagem: "Não foi possível cadastrar uma categoria"
        }
    }
})

const categoriaSlicer = createSlice({
    name: 'categoria',
    initialState: {
        estado: ESTADO.Ocioso,
        mensagem: '',
        listaCategorias: []
    },
    reducers: {
        /*inserir:(estado, action) => {
            estado.listaCategorias.push(action.payload)
        },
        editar: (estado, action) => {
            const listaTemporaria = estado.listaCategorias.filter(categoria => categoria.tipoProduto !== action.payload.tipoProduto)
            estado.listaCategorias = [...listaTemporaria, action.payload]
           
        },
        excluir: (estado, action) => {
            estado.listaCategorias = estado.listaCategorias.filter(categoria => categoria.tipoProduto !== action.payload.tipoProduto)
        }*/
    },
    extraReducers: (builder) => {
        builder
            .addCase(gravarCategoria.pending, (state, action) => {
                state.estado = ESTADO.Pendente,
                state.mensagem = "Cadastrando mensagem..."
            })
            .addCase(gravarCategoria.fulfilled, (state, action) => {
                state.estado = ESTADO.Ocioso,
                state.listaCategorias.push(action.payload.categoria)
                state.mensagem = action.payload.mensagem
            })
            .addCase(gravarCategoria.rejected, (state, action) => {
                state.estado = ESTADO.Erro,
                state.mensagem = action.error.message
            })

            .addCase(buscarCategorias.pending, (state, action) => {
                state.estado = ESTADO.Pendente,
                state.mensagem = "Buscando categorias..."
            })
            .addCase(buscarCategorias.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.estado = ESTADO.Ocioso,
                    state.mensagem = action.payload.mensagem,
                    state.listaCategorias = action.payload.listaCategorias
                }
                else {
                    state.estado = ESTADO.Erro;
                    state.mensagem = action.payload.mensagem;
                }
            })
            .addCase(buscarCategorias.rejected, (state, action) => {
                state.estado = ESTADO.Erro;
                state.mensagem = action.error.message;
            })

            .addCase(excluirCategoria.pending, (state, action) => {
                state.estado = ESTADO.Pendente,
                state.mensagem = "Excluindo categoria..."
            })
            .addCase(excluirCategoria.fulfilled, (state, action) => {
                state.estado = ESTADO.Ocioso,
                state.mensagem = action.payload.mensagem,
                state.listaCategorias = state.listaCategorias.filter(categoria => categoria.codigo !== action.payload.codigo);
            })
            .addCase(excluirCategoria.rejected, (state, action) => {
                state.estado = ESTADO.Erro,
                state.mensagem = action.error.message
            })

            .addCase(alterarCategoria.pending, (state) => {
                state.estado = ESTADO.Pendente;
                state.mensagem = 'Alterando categoria...';
              })
              .addCase(alterarCategoria.fulfilled, (state, action) => {
                state.estado = ESTADO.Ocioso;
                const index = state.listaCategorias.findIndex(categoria => categoria.tipoProduto === action.payload.tipoProduto && categoria.tamanho === action.payload.tamanho)
                state.listaCategorias[index] = action.payload.categoria
                state.mensagem = action.payload.mensagem;
              })
              .addCase(alterarCategoria.rejected, (state, action) => {
                state.estado = ESTADO.Erro;
                state.mensagem = action.error.message;
              });
    }
})

//export const {inserir, editar, excluir} = categoriaSlicer.actions;
export default categoriaSlicer.reducer;