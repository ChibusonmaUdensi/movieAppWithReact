import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice/counterSlice";
import { movieApi } from "../Service/api";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        [movieApi.reducerPath]:movieApi.reducer
    },
    middleware: (getDafaultMiddleWare) => 
        getDafaultMiddleWare().concat(movieApi.middleware),
})

setupListeners(store.dispatch)
export default store;