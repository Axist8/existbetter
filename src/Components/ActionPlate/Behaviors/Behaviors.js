import React from 'react'
import BehaviorItem from './BehaviorItem/BehaviorItem'
import AddBehavior from './AddBehavior/AddBehavior'
import './behaviors.css'
import behaviorData from './behaviorData'

class Behaviors extends React.Component {
    constructor() {
        super()
        this.state = {
            behaviors: behaviorData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prev => {

        })
    }

    render() {
        const allBehaviors = this.state.behaviors.map(item => <BehaviorItem key={item.id} item={item} handleChange={this.handleChange} />)

        return (
            <div className='action-container'>
                <div className='behavior-list'>
                    {allBehaviors}
                </div>
                <AddBehavior />
            </div>
        )
    }
}

export default Behaviors