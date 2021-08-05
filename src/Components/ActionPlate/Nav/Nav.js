import React from 'react';
import './nav.css'

function Nav(props) {

    return (
        <nav>
            <div id='menu'>
                <h3 onClick={() => props.handleClick('Routines')} id='Routines' className='neon noSelect'>Routines</h3>
                <p className='dot'>•</p>
                <h3 onClick={() => props.handleClick('Behaviors')} id='Behaviors' className='noSelect'>Behaviors</h3>
                <p className='dot'>•</p>
                <h3 onClick={() => props.handleClick('Todo')} id='Todo' className='noSelect'>To Dos</h3>
                <p className='dot'>•</p>
                <h3 onClick={() => props.handleClick('Goals')} id='Goals' className='noSelect'>Goals</h3>
                <p className='dot'>•</p>
                <h3 onClick={() => props.handleClick('WishList')} id='WishList' className='noSelect'>Wish List</h3>
            </div>
        </nav>
    )
}

export default Nav;