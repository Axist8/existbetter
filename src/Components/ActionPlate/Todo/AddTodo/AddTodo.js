import React from 'react'

function AddTodo() {
    return (
        <div className='add-item'>
            <input
                type='text'
                placeholder='Add a new todo'
                name='addTodo'
                id='addTodo'
                className='user-input-text-box'
            />
        </div>
    )
}

export default AddTodo