import React from 'react'

function AddBehavior() {
    return (
        <div className='add-item'>
            <input
                type='text'
                placeholder='Add a new behavior'
                name='addBehavior'
                id='addBehavior'
                className='user-input-text-box'
            />
        </div>
    )
}

export default AddBehavior