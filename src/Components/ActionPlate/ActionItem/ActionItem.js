import React, { useState, useRef } from 'react'
import './actionItem.css'


function ActionItem(props) {
    const [ userInput, setUserInput ] = useState(props.item.userInput)

    const menuOptionsRef = useRef(null)
    const editPanelRef = useRef(null)

    const inputName = 'edit' + props.section

    let buttonContent;
    if (props.item.type === 'checkmark' && props.item.active) {
        buttonContent = '✔️'
    } else if (props.item.type === 'checkmark' && !props.item.active) {
        buttonContent = '✖️'
    }
    else buttonContent = '+'

    function toggleEditMenu() {
        if (editPanelRef.current.classList.contains('visible')) {
            editPanelRef.current.classList.toggle('visible')
            setUserInput(props.item.userInput)
            return
        }
        menuOptionsRef.current.classList.toggle('visible')
    }

    function toggleEditInput(e) {
        e.preventDefault()
        menuOptionsRef.current.classList.toggle('visible')
        editPanelRef.current.classList.toggle('visible')
    }

    function handleChange(e) {
        const { value } = e.target
        setUserInput(value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.handleEdit(props.id, userInput)
        editPanelRef.current.classList.toggle('visible')
    }

    function handleDelete(e) {
        e.preventDefault()
        props.handleDelete(props.item.id)
    }

    return (
        <div className='action-item'>
            <div className='edit-and-text'>
                <div
                    className='popup-btn'
                    onClick={toggleEditMenu}
                >⋮
                </div>
                <div className='popup-container'>
                    <span className='popup' ref={menuOptionsRef}>
                        <button
                            className='edit-btn'
                            onClick={toggleEditInput}
                        >Edit</button>
                        <button
                            className='edit-btn'
                            onClick={handleDelete}
                        >Delete</button>
                    </span>
                </div>
                <form className='popup-input' ref={editPanelRef}>
                    <textarea rows='4' cols='26'
                        name={inputName}
                        value={userInput}
                        onChange={handleChange}
                        className='action-edit'
                        required
                    />
                    <button
                        className='submit-edit'
                        onClick={handleSubmit}
                    >⚫</button>
                </form>
                <p className='action-text'>{userInput}</p>
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
                    onClick={() => props.handleClick(props.item.id)}
                    id={props.id}
                >
                    {buttonContent}
                </button>}
            </div>
        </div>
    )
}

export default ActionItem