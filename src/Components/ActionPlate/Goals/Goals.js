import React from 'react'
import ActionItem from '../ActionItem/ActionItem'
import goalsData from './goalsData'
import AddAction from '../AddAction/AddAction'

class Goals extends React.Component {
    constructor() {
        super()
        this.state = {
            completedTab: false,
            newGoal: '',
            goals: goalsData.active,
            completedGoals: goalsData.completed
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleSwitch = this.handleSwitch.bind(this)
    }
    
    handleChange(e) {
        const {value} = e.target
        this.setState({ newGoal: value })
    }

    handleSubmit(e) {
        e.preventDefault()
        const active = goalsData.active
        if (active.length >= 100) {
            alert('Limit of 100 Goals reached')
            return
        }
        const idMap = active.map(goal => goal.id)
        for (let i = 0; i < 100; i++) {
            if (!idMap.includes(i)) {
                goalsData.active.push(
                    {
                        id: i,
                        userInput: this.state.newGoal,
                        type: 'checkmark'
                    }
                )
                break
            }
        }
        this.setState(prev => {
            return {
                ...prev,
                completedTab: false,
                newGoal: ''
            }
        })
    }

    handleClick(e) {
        const goalId = e.target.id
        const active = goalsData.active
        for (let i = 0; i <active.length; i++) {
            const dataId = active[i].id
            if (parseInt(goalId) === dataId) {
                const comp = goalsData.completed
                const compIdMap = comp.map(item => item.id)
                for (let j = 0; j < 200; j++) {
                    if (comp.length >= 100) {
                        comp.pop();
                    }
                    if (!compIdMap.includes(j)) {
                        comp.unshift(
                            {
                                id: j,
                                userInput: active[i].userInput,
                                type: 'complete'
                            }
                        )
                        break
                    }
                }
                active.splice(i, 1)
            }
        }
        this.setState(prev => prev)
    }

    handleSwitch() {
        this.setState({
            completedTab: !this.state.completedTab
        })
    }

    render() {
        const allGoals = this.state.goals.map(item =>
            <ActionItem
                key={item.id}
                id={item.id}
                item={item}
                handleClick={this.handleClick}
            />
        )

        const completed = this.state.completedGoals.map(item =>
            <ActionItem
                key={item.id}
                id={item.id}
                item={item}
            />
        )

        const actionContent = this.state.completedTab ?
            completed : allGoals

        return (
            <div className='action-plate'>
                <div className='action-list-container'>
                    <div className='active-switch'>
                        <div className='active-title-container'>
                            <h4 className='active-title'>{this.state.completedTab ? 'complete' : 'active'}</h4>
                        </div>
                        <button className='switch' onClick={this.handleSwitch}>
                            ⇋
                        </button>
                    </div>
                    <div className='action-list'>
                        {actionContent}
                    </div>
                </div>
                <AddAction
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    value={this.state.newGoal}
                    section='Goal'
                />
            </div>
        )
    }
}

export default Goals