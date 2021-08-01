import React from 'react'
import TodoItem from './TodoItem/TodoItem'
import AddTodo from './AddTodo/AddTodo'
import './todo.css'
import todoData from './todoData'

function Todo() {
    const allTodos = todoData.map(todo => <TodoItem todo={todo.todo} todoID={todo.todoID} />)

    return (
        <div className='todo-container'>
            <div className='todo-list'>
                {allTodos}
            </div>
            <AddTodo />
        </div>
    )
}

export default Todo