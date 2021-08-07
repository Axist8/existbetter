import React from 'react'
import AddGoal from './AddGoal/AddGoal'
import ActionItem from '../ActionItem/ActionItem'
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
            const updatedGoals = prev.goals.map(goal => {
                if (goal.id === id) {
                    return {
                        ...goal,
                        completed: !goal.completed
                    }
                }
                return goal
            })
            return {
                goals: updatedGoals
            }
        })
    }

    render() {
        const allGoals = this.state.goals.map(item => <ActionItem key={item.id} item={item} handleChange={this.handleChange} />)

        return (
            <div className='action-plate'>
                <div className='action-list'>
                    {allGoals}
                </div>
                <AddGoal />
            </div>
        )
    }
}

export default Goals