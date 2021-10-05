import React, { createContext, useReducer } from "react";

const TasksContext = createContext();

const initialState = JSON.parse(localStorage.getItem("todoList")) 
                    ? JSON.parse(localStorage.getItem("todoList")) 
                    : [];

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "COMPLETE":
            return state.map( item => {
                if(item.title === action.payload){
                    return {...item, status:"completed"}
                }else {
                    return item
                }  
            })
        case "DELETE":
            return state.map( item => {
                if(item.title === action.payload){
                    return {...item, status:"deleted"}
                }else {
                    return item
                }  
            })
        case "TRASH":
            return state.filter( item => item.title !== action.payload)
        case "RESTORE":
            return state.map( item => {
                if(item.title === action.payload){
                    return {...item, status:"uncompleted"}
                }else {
                    return item
                }  
            })
        default:
            return state;
    }
}

const TasksContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const data =  {state, dispatch};
    return (
        <TasksContext.Provider value={data}>
            { children }
        </TasksContext.Provider>
    )
}

export { TasksContextProvider };
export default TasksContext;