import React from 'react'
import './actionItem.css'

function ActionItem(props) {
    let buttonContent;
    if (props.item.type === 'checkmark') buttonContent = '✖'
    else buttonContent = '+'

    return (
        <div className='action-item'>
            <p className='action-text'>{props.item.userInput}</p>
            <div className='action-controls'>
                {props.item.type === 'increment' ?
                    <p className='counter-container'>
                        <span className='counter'>{props.item.counter}</span>
                    </p>
                    : null
                }
                <button className='edit-btn'>⋮</button>
                {props.item.type === 'complete' ? null :
                <button 
                    className='action-btn'
                    onClick={props.handleClick}
                    id={props.id}
                >
                    {buttonContent}
                </button>}
            </div>
        </div>
    )
}

export default ActionItem