import React from 'react'
import './routineItem.css'

function RoutineItem(props) {
    return (
        <div>
            <input 
                id={props.item.id}
                name={props.item.id}
                type='checkbox'
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <label htmlFor={props.item.id}>{props.item.userInput}</label>
            <hr />
        </div>
    )
}

export default RoutineItem