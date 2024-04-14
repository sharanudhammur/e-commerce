import { configureStore } from "@reduxjs/toolkit"
import todoSlice from "../features/todo/todoSlice"
import userSlice from "../features/todo/userSlice"

export const store = configureStore({
    reducer: {
        todoSlice,
        userSlice
    },
})