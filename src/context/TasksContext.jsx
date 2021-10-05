import React, { createContext, useReducer } from "react";

const TasksContext = createContext();

// const  initialState = [
//         {
//         title: "Task 1",
//         status: "uncompleted"
//         },
//         {
//         title: "Task 2",
//         status: "completed"
//         },
//         {
//         title: "Task 3",
//         status: "deleted"
//         }
//     ];
const initialState = localStorage.getItem("todoList") 
                    ? JSON.parse(localStorage.getItem("todoList")) 
                    : JSON.parse(localStorage.setItem("todoList", JSON.stringify([])));

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