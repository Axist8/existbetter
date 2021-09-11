import React, {useState} from 'react'
import Nav from './Nav/Nav'
import Routines from './Routines/Routines'
import Behaviors from './Behaviors/Behaviors'
import Goals from './Goals/Goals'
import WishList from './WishList/WishList'
import Todo from './Todo/Todo'

import './actionPlate.css'

function ActionPlate() {
    const [currentPanel, setCurrentPanel] = useState('Routines')

    function handleClick(newPanel) {
        document.getElementById('Routines').classList.remove('neon')
        document.getElementById('Behaviors').classList.remove('neon')
        document.getElementById('Todo').classList.remove('neon')
        document.getElementById('Goals').classList.remove('neon')
        document.getElementById('WishList').classList.remove('neon')

        setCurrentPanel(newPanel)

        document.getElementById(newPanel).classList.add('neon')
    }

    return (
        <div className='action-plate-and-nav-container'>
            <div className='action-plate-container'>
                {currentPanel === 'Routines' ? <Routines /> : null}
                {currentPanel === 'Behaviors' ? <Behaviors /> : null}
                {currentPanel === 'Todo' ? <Todo /> : null}
                {currentPanel === 'Goals' ? <Goals /> : null}
                {currentPanel === 'WishList' ? <WishList /> : null}
            </div>
            
            <Nav handleClick={handleClick} currentPanel={currentPanel} />
        </div>
    )
}

export default ActionPlate