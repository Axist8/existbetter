import React from 'react';
import './nav.css'

function Nav(props) {
    const highlight = ''

    return (
        <nav>
            <div id='menu'>
                <h3 onClick={() => props.handleClick('Routines')} id='Routines' className='neon'>Routines</h3>
                <p className='dot'>•</p>
                <h3 onClick={() => props.handleClick('Behaviors')} id='Behaviors'>Behaviors</h3>
                <p className='dot'>•</p>
                <h3 onClick={() => props.handleClick('Todo')} id='Todo'>To Dos</h3>
                <p className='dot'>•</p>
                <h3 onClick={() => props.handleClick('Goals')} id='Goals'>Goals</h3>
                <p className='dot'>•</p>
                <h3 onClick={() => props.handleClick('WishList')} id='WishList'>Wish List</h3>
            </div>
        </nav>
    )
}

export default Nav;