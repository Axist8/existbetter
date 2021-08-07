import React from 'react'
import './actionItem.css'

function ActionItem(props) {
    return (
        <div className='action-item'>
            <button className='action-button'>{props.item.type === 'checkmark' ? 'x' : '+'}</button>
            <p className='action-text'>{props.item.userInput}</p>
        </div>
    )
}

export default ActionItem