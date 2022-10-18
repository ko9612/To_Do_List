import React from 'react';
import TodoItem from './TodoItem';
import './Todo.css';

const TodoList = ({todos,onDelete,onCheck}) => {
    return (
        <ul className='TodoList'>
            {
                todos.map(todos=>
                <TodoItem key={todos.id} todos={todos} onDelete={onDelete} onCheck={onCheck}/>)
            }
        </ul>
    );
};

export default TodoList;