import React from 'react'
import './signIn.css'

function SignIn() {

    function openSignIn() {
        document.getElementById('signInModalContainer').style.display = 'flex'
    }

    function closeSignIn() {
        document.getElementById('signInModalContainer').style.display = 'none'
    }

    return (
        <div className='sign-in-container'>
            <div className='sign-in-modal-container' id='signInModalContainer'>
                <div className='sign-in-modal'>
                    <form className='sign-in-form'>
                        <label htmlFor='username'>Username:</label>
                        <input type='text' name='username' required /><br />
                        <label htmlFor='password'>Password:</label>
                        <input type='text' name='password' required /><br />
                        <div className='buttons'>
                            <button type='submit' className='confirm-btn btn noSelect'>Sign In</button>
                            <button type='button' className='cancel-btn btn noSelect' onClick={closeSignIn}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            <button className='pushable sign-in noSelect' onClick={openSignIn}><span className='front'>Sign In</span></button>
        </div>
    )
}

export default SignIn