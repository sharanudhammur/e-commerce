import { createSlice, nanoId } from "@reduxjs/toolkit"

const initialState = {
    user: [{ name: "hello" }]
}

// Set a value in local storage

// Retrieve the value from local storage
var retrievedValue = localStorage.getItem('myKey');

// console.log(retrievedValue); // This will log 'myValue' to the console


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            // localStorage.setItem('myKey', JSON.stringify([{ name: "hello" }]));
            // console.log("hello", state, actions)
            return {
                ...state,
                user: [...state.user, { name: action.payload }] // Assuming action.payload contains the new todo item
            };
            console.log(state)
            console.log("Current state:", JSON.parse(JSON.stringify(state)));
            // state
            // console.log(state.todo.push({ name: "hello2" }))
        }
    }
})

export const { addTodo } = userSlice.actions

export default userSlice.reducer