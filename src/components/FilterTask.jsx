import React, { useContext } from 'react';
import { useState } from 'react';

//Components
import TodoList from './TodoList';

//Context
import TasksContext from '../context/TasksContext'
import { useEffect } from 'react/cjs/react.development';

const FilterTask = () => {
    const { state } = useContext(TasksContext);
    const [filteredArray, setFilteredArray] = useState(state);
    const [selectedRadio, setSelectedRadio] = useState('all')
    

    useEffect(() => {
        const handleFilterStatus = () => {
            switch (selectedRadio) {
                case "all":
                    setFilteredArray(state);
                    break;
                case "completed":
                    setFilteredArray(state.filter( item => item.status === 'completed'))
                    break;
                case "uncompleted":
                    setFilteredArray(state.filter( item => item.status === 'uncompleted'))
                    break;
                case "deleted":
                    setFilteredArray(state.filter( item => item.status === 'deleted'))
                    break;
                default:
                    break;
            }
        };
        handleFilterStatus();
        localStorage.setItem("todoList", JSON.stringify(state));
    },[state,selectedRadio])

    return(
        <>
        <div className="filter-container" onChange={event => setSelectedRadio(event.target.value) }>
            <label>
                <input type="radio" value="all" name="filter" defaultChecked /> All
            </label>
            <label>
                <input type="radio" value="completed" name="filter" /> Completed
            </label>
            <label>
                <input type="radio" value="uncompleted" name="filter" /> Uncompleted
            </label>
            <label>
                <input type="radio" value="deleted" name="filter" /> Deleted
            </label>
        </div>
        <TodoList tasks={filteredArray}/>
        </>
    );
};

export default FilterTask;