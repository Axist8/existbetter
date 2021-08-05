import React from 'react';
import './nav.css'

function Nav(props) {
    const highlight = ''

    return (
        <nav>
            <div id='menu'>
                <h3 onClick={() => props.handleClick('Routines')}>Routines</h3>
                <p className='dot'>•</p>
                <h3 onClick={() => props.handleClick('Behaviors')}>Behaviors</h3>
                <p className='dot'>•</p>
                <h3 onClick={() => props.handleClick('Todo')}>To Dos</h3>
                <p className='dot'>•</p>
                <h3 onClick={() => props.handleClick('Goals')}>Goals</h3>
                <p className='dot'>•</p>
                <h3 onClick={() => props.handleClick('WishList')}>Wish List</h3>
            </div>
        </nav>
    )
}

export default Nav;