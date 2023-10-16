import { configureStore } from "@reduxjs/toolkit"
import clienteSlicer from "./clienteSlicer";

const store = configureStore({
    reducer : {
        cliente: clienteSlicer
    }
})

export default store;