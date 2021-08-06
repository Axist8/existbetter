import React from 'react'

function AddGoal() {
    return (
        <div className='add-item'>
            <input
                type='text'
                placeholder='Add a new goal'
                name='addGoal'
                id='addGoal'
                className='user-input-text-box'
            />
        </div>
    )
}

export default AddGoal