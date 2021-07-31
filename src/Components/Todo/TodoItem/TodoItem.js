import React from 'react'
import './todoItem.css'

function TodoItem(props) {
    return (
        <div className='todo-item'>
            <div className='todo-item-container'>
                <input id={props.todoID} name={props.todoID} type='checkbox' />
                <label htmlFor={props.todoID}><span className='checkmark'>{props.todo}</span></label>
            </div>
        </div>
    )
}

export default TodoItem