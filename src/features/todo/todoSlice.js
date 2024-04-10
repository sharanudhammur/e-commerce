import { createSlice, nanoId } from "@reduxjs/toolkit"

const initialState = {
    todo: [{ name: "hello" }]
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, actions) => {
            console.log("hello", state, actions)
            // state
            console.log(state.todo.push({ name: "hello2" }))
        }
    }
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer