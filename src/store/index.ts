import { configureStore } from "@reduxjs/toolkit";

import formReducer from './reducers/form'

export const store = configureStore({
    reducer: {
        form: formReducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>