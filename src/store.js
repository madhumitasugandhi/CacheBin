import { configureStore } from "@reduxjs/toolkit";
import  pasteReducer  from "./redux/pasteSclice";

export const store = configureStore({
    reducer:{
        pastes: pasteReducer,
    },
})