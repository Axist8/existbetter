import React from 'react'

function AddWish() {
    return (
        <div className='add-item'>
            <input
                type='text'
                placeholder='Add a new wish'
                name='addWish'
                id='addWish'
                className='user-input-text-box'
            />
        </div>
    )
}

export default AddWish