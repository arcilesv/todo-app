import React from 'react';

//Components 
import TasksForm from '../components/TaskForm';
import FilterTask from '../components/FilterTask';

const Main = () => {
    return (
        <>
        <h1>ToDo List App</h1>
        <TasksForm/>
        <FilterTask/>
        </>
    );
};

export default Main;