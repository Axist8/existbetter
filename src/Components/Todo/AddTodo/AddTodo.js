import React from 'react'
import './addTodo.css'

function AddTodo() {
    function openNewTodo() {
        document.getElementById('addTodoModalContainer').style.display = 'flex';
    }

    function closeNewTodo() {
        document.getElementById('addTodoModalContainer').style.display = 'none';
    }

    return (
        <div className='add-todo-container'>
            <div className='add-todo-modal-container' id='addTodoModalContainer'>
                <div className='add-todo-modal'>
                    <form className='add-todo-form'>
                        <label htmlFor='newTodo'>New to-do:</label><br />
                        <input type='text' name='newTodo' required /><br />
                        <div className='buttons'>
                            <button type='submit' className='confirm-btn btn'>Add to-do</button><br />
                            <button type='button' className='cancel-btn btn' onClick={closeNewTodo}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='todo-btns'>
                <button className='pushable' onClick={openNewTodo}><span className='todo-btn front'>Add a To Do</span></button>
                <button className='pushable'><span className='todo-btn front'>Clear todos</span></button>
            </div>
        </div>
    )
}

export default AddTodo