import { createSlice } from '@reduxjs/toolkit'
import reducers from "./reducers";

export const mainSlice = createSlice({
    name: 'main',
    initialState: {
        items: localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [],
        selected: [],
        modal: false
    },
    reducers:reducers,
})

export const { addItem,toggleModal,clearItems,selectItems } = mainSlice.actions

export default mainSlice.reducer