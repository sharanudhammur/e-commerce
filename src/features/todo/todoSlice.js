import { createSlice, nanoId } from "@reduxjs/toolkit"

const initialState = JSON.parse(localStorage.getItem('todoSlice')) || []

// Set a value in local storage

// Retrieve the value from local storage
var retrievedValue = JSON.parse(localStorage.getItem('todoSlice'))

console.log(retrievedValue)

// console.log(retrievedValue); // This will log 'myValue' to the console


const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // console.log("hello", state, actions)
            // return {
            // ...state,
            // todo: [...state.todo, { name: action.payload }] // Assuming action.payload contains the new todo item
            // };
            console.log(state)
            localStorage.setItem('todoSlice', JSON.stringify([...state, action.payload]));
            console.log("Current state:", JSON.parse(JSON.stringify(state)));
            return [...state, action.payload]
            // state
            // console.log(state.todo.push({ name: "hello2" }))
        }
    }
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer