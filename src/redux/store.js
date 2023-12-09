<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit"
import clienteSlicer from "./clienteSlicer";
import categoriaSlicer from "./categoriaSlicer";
import fornecedorSlicer from "./fornecedorSlicer";
import produtoSlicer from "./produtoSlicer";

const store = configureStore({
    reducer : {
        cliente: clienteSlicer,
        categoria: categoriaSlicer,
        fornecedor: fornecedorSlicer,
        produto: produtoSlicer
    }
})

=======
import { configureStore } from "@reduxjs/toolkit"
import clienteSlicer from "./clienteSlicer";
import categoriaSlicer from "./categoriaSlicer";
import fornecedorSlicer from "./fornecedorSlicer";
import produtoSlicer from "./produtoSlicer";

const store = configureStore({
    reducer : {
        cliente: clienteSlicer,
        categoria: categoriaSlicer,
        fornecedor: fornecedorSlicer,
        produto: produtoSlicer
    }
})

>>>>>>> feat/versao-andre
export default store;