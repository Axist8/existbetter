import React from 'react'

function RoutineItem(props) {
    return (
        <div className='check-item'>
            <input 
                id={props.item.id}
                name={props.item.id}
                type='checkbox'
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <label htmlFor={props.item.id}>{props.item.userInput}</label>
        </div>
    )
}

export default RoutineItem