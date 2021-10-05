import TodoItem from './TodoItem';
import React from './TodoItem';

const TodoList = ({ tasks }) => {
    return(
        tasks.length > 0 
        ? <div className="todo-list-container">
        {
            tasks.map( (task, index) => (
                <TodoItem task={task} key={index}/>
            ))
        }
        </div>
        :
        <h1 className="todo-message">No ToDos here!!</h1> 
        
    );
};

export default TodoList;