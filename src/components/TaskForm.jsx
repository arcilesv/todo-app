import React, { useContext, useState } from 'react';

//Context
import TasksContext from '../context/TasksContext';

const TaskForm = () => {
    const [inputTask, setInputTask] = useState("");
    const { state, dispatch } =  useContext(TasksContext);

    const handleInput = (event) => {
        event.preventDefault();
        if (state.find(element => element.title.toLowerCase() === inputTask.toLowerCase())){
            alert("Todo already exist!!")
        }else {
            dispatch( {
                type: "ADD",
                payload: {
                    title: inputTask,
                    status: "uncompleted"
                }
            });
            setInputTask("");
        }
    }
    
    return(
        <form className="search-bar" onSubmit={handleInput}>
            <input 
                type="text" 
                placeholder="Enter a new task..."
                onChange={event => setInputTask(event.target.value)}
                value={inputTask}
                required/>
            <button>+</button>
        </form>
    );
};

export default TaskForm;