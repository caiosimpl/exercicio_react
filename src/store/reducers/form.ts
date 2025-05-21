import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nome: '',
    peso: '',
    altura: '',
    idade: '',
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setNome: (state, action) => {
            state.nome = action.payload
        },
        setPeso: (state, action) => {
            state.peso = action.payload
        },
        setAltura: (state, action) => {
            state.altura = action.payload
        },
        setIdade: (state, action) => {
            state.idade = action.payload
        }
    }
})

export const { setNome, setPeso, setAltura, setIdade} = formSlice.actions
export default formSlice.reducer