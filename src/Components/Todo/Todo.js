import React from 'react'
import TodoItem from './TodoItem/TodoItem'
import AddTodo from './AddTodo/AddTodo'
import './todo.css'

function Todo() {
    return (
        <div className='todo-container'>
            <div className='todo-list'>
                <TodoItem todo='learn react what happens if this is really long' todoID='todo1' />
                <TodoItem todo='learn react' todoID='todo1' />
            </div>
            <AddTodo />
        </div>
    )
}

export default Todo