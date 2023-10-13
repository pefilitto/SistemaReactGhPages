import { configureStore } from "react-redux"
import clienteSlicer from "./clienteSlicer";

const store = configureStore({
    reducers : {
        cliente: clienteSlicer
    }
})

export default store;