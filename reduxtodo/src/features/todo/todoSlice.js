import { createSlice, nanoid } from "@reduxjs/toolkit";

// initially store kaisa dikhna chahiya
const initialState = {
    todos: [{
        id: 1,
        text: "Hello world"
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
            id: nanoid(),
            text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload ? {...todo, text: action.payload} : todo)
        },
    }
})

// because they individually help to update the state individually
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

// need to export because store.js do not able to maintain store if he has no knowlege of these reducers
export default todoSlice.reducer




