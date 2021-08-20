import React from 'react'
import ActionItem from '../ActionItem/ActionItem'
import behaviorData from './behaviorData'
import AddAction from '../AddAction/AddAction'

class Behaviors extends React.Component {
    constructor() {
        super()
        this.state = {
            newbehavior: '',
            behaviors: behaviorData
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleChange(e) {
        const {value} = e.target
        this.setState({ newbehavior: value })
    }

    handleSubmit(e) {
        e.preventDefault()
        if (behaviorData.length >= 100) {
            alert('Limit of 100 Behaviors reached')
            return
        }
        const idMap = behaviorData.map(behavior => behavior.id)
        for (let i = 0; i < 100; i++) {
            if (!idMap.includes(i)) {
                behaviorData.push(
                    {
                        id: i,
                        userInput: this.state.newbehavior,
                        type: 'increment',
                        counter: 0
                    }
                )
                break
            }
        }
        this.setState(prev => {
            return {
                ...prev,
                newbehavior: ''
            }
        })
    }

    handleClick(e) {
        const behaviorId = e.target.id
        for (let i = 0; i < behaviorData.length; i++) {
            if (behaviorData[i].id === parseInt(behaviorId)) {
                behaviorData[i].counter++
                break
            }
        }
        this.setState({ behaviors: behaviorData })
        console.log(behaviorData)
    }

    render() {
        const allBehaviors = this.state.behaviors.map(item =>
            <ActionItem
                key={item.id}
                id={item.id}
                item={item}
                handleClick={this.handleClick}
            />
        )

        return (
            <div className='action-plate'>
                <div className='action-list'>
                    {allBehaviors}
                </div>
                <AddAction
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    value={this.state.newbehavior}
                    section='Behavior'    
                />
            </div>
        )
    }
}

export default Behaviors