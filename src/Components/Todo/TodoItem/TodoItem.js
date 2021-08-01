import React from 'react'
import './todoItem.css'

function TodoItem(props) {
    return (
        <div className='todo-item'>
            <input id={props.todoID} name={props.todoID} type='checkbox' />
            <label htmlFor={props.todoID}><span className='checkmark'>{props.todo}</span></label>
            <hr />
        </div>
    )
}

export default TodoItem