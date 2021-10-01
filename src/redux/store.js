import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './main/slice';

export default configureStore({
    reducer: {
        main:mainReducer
    },
})