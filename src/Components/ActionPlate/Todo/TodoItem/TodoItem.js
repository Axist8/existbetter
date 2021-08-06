import React from 'react'

function TodoItem(props) {
    
    return (
        <div className='check-item'>
            <input
                id={props.item.id}
                name={props.item.id}
                type='checkbox'
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <label htmlFor={props.item.id}><span className='checkmark'>{props.item.todo}</span></label>
        </div>
    )
}

export default TodoItem