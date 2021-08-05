import React from 'react'
import Nav from './Nav/Nav'
import Routines from './Routines/Routines'
import Behaviors from './Behaviors/Behaviors'
import Goals from './Goals/Goals'
import WishList from './WishList/WishList'
import Todo from './Todo/Todo'

import './actionPlate.css'

class ActionPlate extends React.Component {
    constructor() {
        super()
        this.state = {
            currentPanel: 'Routines'
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(panel) {
        
        document.getElementById('Routines').classList.remove('neon')
        document.getElementById('Behaviors').classList.remove('neon')
        document.getElementById('Todo').classList.remove('neon')
        document.getElementById('Goals').classList.remove('neon')
        document.getElementById('WishList').classList.remove('neon')
        
        this.setState({
            currentPanel: panel
        })
 
        
        document.getElementById(panel).classList.add('neon')
    }
    
    render() {
        return (
            <div className='app-container'>
                <Nav handleClick={this.handleClick} currentPanel={this.state.currentPanel} />
                <div className='action-plate'>
                    {this.state.currentPanel === 'Routines' ? <Routines /> : null}
                    {this.state.currentPanel === 'Behaviors' ? <Behaviors /> : null}
                    {this.state.currentPanel === 'Todo' ? <Todo /> : null}
                    {this.state.currentPanel === 'Goals' ? <Goals /> : null}
                    {this.state.currentPanel === 'WishList' ? <WishList /> : null}
                </div>
            </div>
        )
    }
}

export default ActionPlate