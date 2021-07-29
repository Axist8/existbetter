import React from 'react'
import Title from './Title/Title'
import Nav from './Nav/Nav'
import SignIn from './SignIn/SignIn'
import './header.css'

function Header() {
    return (
        <header>
            <SignIn />
            <Title />
            <Nav />
        </header>
    )
}

export default Header