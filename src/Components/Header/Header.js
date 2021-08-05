import React from 'react'
import Title from './Title/Title'
import SignIn from './SignIn/SignIn'
import './header.css'

function Header() {
    return (
        <header>
            <SignIn />
            <Title />
        </header>
    )
}

export default Header