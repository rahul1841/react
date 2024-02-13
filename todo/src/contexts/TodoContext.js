import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos : [
        {
            id: 1,
            todo: "Todo Name",
            isCompleted: false,
        }
    ],

    addTodo: (todo) => {},
    updateTodo: (todo, id) => {},
    ToogleComplete: (id) => {},
    deleteTodo: (id) => {}


})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}