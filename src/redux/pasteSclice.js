import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pastes:localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem)("pastes")
    : []
}

export const pasteSclice = createSlice({
    name: 'pastes',
    initialState,
    reducers: {
        addToPastes: (state, action) => {
            
        },
        updateToPastes: (state, action) => {
           
        },
        reSetAllPastes: (state, action) => {
           
        },
        removeFromPastes:(state, action)=>{

        },
    },

})

export const {addToPastes, updateToPastes, reSetAllPastes, removeFromPastes} = pasteSclice.actions

export default pasteSclice.reducer