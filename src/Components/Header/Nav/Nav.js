import React from 'react';
import './nav.css'

function Nav() {
    return (
        <nav>
            <div id='menu'>
                <h3>Routines</h3>
                <p className='dot'>•</p>
                <h3>Behaviors</h3>
                <p className='dot'>•</p>
                <h3>To Dos</h3>
                <p className='dot'>•</p>
                <h3>Goals</h3>
                <p className='dot'>•</p>
                <h3>Wish List</h3>
            </div>
        </nav>
    )
}

export default Nav;