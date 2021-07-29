import React from 'react'
import TodoItem from './TodoItem/TodoItem'
import AddTodo from './AddTodo/AddTodo'
import './todo.css'

function Todo() {
    return (
        <div className='todo-list'>
            <div className='glass-plate'></div>
            <div className='todo-content'>
                <TodoItem todoName='' />
                <AddTodo />
            </div>
        </div>
    )
}

export default Todo