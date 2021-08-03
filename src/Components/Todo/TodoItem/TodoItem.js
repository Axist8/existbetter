import React from 'react'
import './todoItem.css'

function TodoItem(props) {
    return (
        <div className='todo-item'>
            <input
                id={props.item.id}
                name={props.item.id}
                type='checkbox'
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <label htmlFor={props.item.id}><span className='checkmark'>{props.item.todo}</span></label>
            <hr />
        </div>
    )
}

export default TodoItem