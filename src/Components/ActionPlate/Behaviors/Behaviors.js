import React from 'react'
import ActionItem from '../ActionItem/ActionItem'
import AddBehavior from './AddBehavior/AddBehavior'
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
        const allBehaviors = this.state.behaviors.map(item => <ActionItem key={item.id} item={item} handleChange={this.handleChange} />)

        return (
            <div className='action-plate'>
                <div className='action-list'>
                    {allBehaviors}
                </div>
                <AddBehavior />
            </div>
        )
    }
}

export default Behaviors