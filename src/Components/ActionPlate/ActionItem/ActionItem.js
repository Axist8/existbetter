import React from 'react'
import './actionItem.css'

function ActionItem(props) {
    let buttonContent;
    if (props.item.type === 'checkmark') buttonContent = '✖'
    else buttonContent = '+'

    return (
        <div className='action-item'>
            {props.item.type === 'complete' ? null :
            <button 
                className='action-button'
                onClick={props.handleClick}
                id={props.id}
            >
                {buttonContent}
            </button>}
            <p className='action-text'>{props.item.userInput}</p>
        </div>
    )
}

export default ActionItem