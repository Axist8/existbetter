import React from 'react'
import AddGoal from './AddGoal/AddGoal'
import CheckItem from '../CheckItem/CheckItem'
import './goals.css'
import goalsData from './goalsData'

class Goals extends React.Component {
    constructor() {
        super()
        this.state = {
            goals: goalsData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prev => {

        })
    }

    render() {
        const allGoals = this.state.goals.map(item => <CheckItem key={item.id} item={item} handleChange={this.handleChange} />)

        return (
            <div className='action-container'>
                <div className='goals-list'>
                    {allGoals}
                </div>
                <AddGoal />
            </div>
        )
    }
}

export default Goals