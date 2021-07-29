import React from 'react'
import './todoItem.css'

function TodoItem() {
    return (
        <div className='todo-item'>
            <div className='todo-item-container'>
                <input id='todo1' name='todo1' type='checkbox' />
                <label htmlFor='todo1'><span className='checkmark'>Insert Todo here I wqonder what will happoen if its relaly l,nong</span></label>
            </div>
            <div className='todo-item-container'>
                <input id='todo2' name='todo2' type='checkbox' />
                <label htmlFor='todo2'><span className='checkmark'>Insert Todo here</span></label>
            </div>
        </div>
    )
}

export default TodoItem