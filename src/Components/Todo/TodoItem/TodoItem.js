import React from 'react'

function TodoItem() {
    return (
        <div className='todo-item'>
            <input id='todo1' name='todo1' type='checkbox' />
            <label htmlFor='todo1'>Insert Todo here</label>
        </div>
    )
}

export default TodoItem