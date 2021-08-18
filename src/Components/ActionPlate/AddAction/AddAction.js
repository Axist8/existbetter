import React from 'react'

function AddAction(props) {
    const placeholder = 'Add a new ' + props.section
    const inputName = 'new' + props.section
    return (
        <form className='add-item' onSubmit={props.handleSubmit}>
            <input
                type='text'
                placeholder={placeholder}
                name={inputName}
                onChange={props.handleChange}
                value={props.value}
                className='user-input-text-box'
                required
            />
        </form>
    )
}

export default AddAction