import React from 'react';
import Logo from '../Logo/Logo'
import "./title.css"

function Title() {
    return (
        <div id='title'>
            <h1 id='exist'>Exist</h1>
            <div id='logo'>
                <Logo />
            </div>
            <h1 id='better'>Better</h1>
        </div>
    )
}

export default Title