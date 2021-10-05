import React, { useContext } from 'react';

//Context
import TasksContext from '../context/TasksContext';

const TodoItem = ({task}) => {
    const { dispatch } = useContext(TasksContext);

    const handleTaskStatus = (event) => {
        switch (event.target.innerText) {
            case "Complete":
                dispatch({
                    type:"COMPLETE",
                    payload: task.title
                })
                break;
            case "Delete":
                dispatch({
                    type:"DELETE",
                    payload: task.title
                })
                break;
            case "Trash":
            dispatch({
                type:"TRASH",
                payload: task.title
            })
            break;
            case "Restore":
                dispatch({
                    type:"RESTORE",
                    payload: task.title
                })
                break;
            default:
                break;
        }
    }

    return (
        task.status === "uncompleted" || task.status === "completed" ? (
            <div className="task-container">
                <span>{task.title}</span>
                <button onClick={handleTaskStatus} className={task.status === "uncompleted"? "btn btn-green" : "btn btn-yellow"}>
                    {task.status === "uncompleted"? "Complete" : "Delete"}
                </button>
            </div>
        ) : (
            <div className="task-container">
                <span>{task.title}</span>
                <div>
                    <button onClick={handleTaskStatus} className="btn btn-blue">Restore</button>
                    <button onClick={handleTaskStatus} className="btn btn-red">Trash</button>
                </div>
            </div>
        )
    );
};

export default TodoItem;