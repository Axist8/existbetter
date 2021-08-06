import React from 'react'

function AddRoutine() {
    return (
        <div className='add-item'>
            <input
                type='text'
                placeholder='Add a new routine'
                name='addRoutine'
                id='addRoutine'
                className='user-input-text-box'
            />
        </div>
    )
}

export default AddRoutine