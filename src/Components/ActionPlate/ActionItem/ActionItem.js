import React from 'react'
import './actionItem.css'

function toggleEditMenu(e) {
    const targetId = e.target.id + '1'
    document.getElementById(targetId).classList.toggle('visible')
}

function toggleEditInput(e) {
    e.preventDefault()
    const parentId = e.target.parentNode.id
    const targetId = parentId + '1'
    document.getElementById(parentId).classList.toggle('visible')
    document.getElementById(targetId).classList.toggle('visible')
    
}

function ActionItem(props) {
    let buttonContent;
    if (props.item.type === 'checkmark') buttonContent = '✔️'
    else buttonContent = '+'

    const thisId = props.section + props.id
    const thisIdPlus = thisId + '1'
    const thisIdPlusPlus = thisIdPlus + '1'

    const inputName = 'new' + props.section

    return (
        <div className='action-item'>
            <div className='edit-and-text'>
                <div id={thisId}
                    className='popup-btn'
                    onClick={toggleEditMenu}
                >⋮
                </div>
                <div className='popup-container'>
                    <span className='popup' id={thisIdPlus}>
                        <button
                            className='edit-btn'
                            onClick={toggleEditInput}
                        >Edit</button>
                        <button
                            className='edit-btn'
                            onClick={props.handleDelete}
                        >Delete</button>
                    </span>
                </div>
                <form className='popup-input' id={thisIdPlusPlus}>
                    <textarea rows='4' cols='26'
                        name={inputName}
                        value={props.value}
                        onChange={props.handleEdit}
                        className='action-edit'
                        required
                    />
                    <button className='submit-edit'>⚫</button>
                </form>
                <p className='action-text'>{props.item.userInput}</p>
            </div>
            <div className='action-controls'>
                {props.item.type === 'increment' ?
                    <p className='counter-container'>
                        <span className='counter'>{props.item.counter}</span>
                    </p>
                    : null
                }
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