import React from 'react'
import ActionItem from '../ActionItem/ActionItem'
import routineData from './routineData'
import AddAction from '../AddAction/AddAction'

class Routines extends React.Component {
    constructor() {
        super()
        this.state = {
            inactiveTab: false,
            newRoutine: '',
            routines: routineData
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleSwitch = this.handleSwitch.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }
    
    handleChange(e) {
        const {value} = e.target
        this.setState({ newRoutine: value })
    }

    handleSubmit(e) {
        e.preventDefault()
        if (routineData.length >= 200) {
            alert('Limit of 200 Routines reached')
            return
        }
        const idMap = routineData.map(routine => routine.id)
        for (let i = 0; i < 200; i++) {
            if (!idMap.includes(i)) {
                routineData.push(
                    {
                        id: i,
                        userInput: this.state.newRoutine,
                        type: 'checkmark'
                    }
                )
                break
            }
        }
        this.setState(prev => {
            return {
                ...prev,
                inactiveTab: false,
                newRoutine: ''
            }
        })
    }

    handleClick(e) {
        const routineId = parseInt(e.target.id)
        const routInd = routineData.findIndex((obj => obj.id === routineId))
        routineData[routInd].type = 'complete'
        this.setState(prev => prev)
    }

    handleSwitch() {
        this.setState({
            inactiveTab: !this.state.inactiveTab
        })
    }

    handleEdit(e) {
        // const routineId = parseInt(e.target.id)
        // const routInd = routineData.find
    }

    render() {
        const activeRoutines = this.state.routines.filter(routine => {
            return routine.type === 'checkmark'
        }).map(item =>
            <ActionItem
                key={item.id}
                id={item.id}
                item={item}
                handleClick={this.handleClick}
                handleEdit={this.handleEdit}
                section='routine'
            />
        )
        
        const inactiveRoutines = this.state.routines.filter(routine => {
            return routine.type === 'complete'
        }).map(item =>
            <ActionItem
                key={item.id}
                id={item.id}
                item={item}
                section='routine'
            />    
        )

        const actionContent = this.state.inactiveTab ?
            inactiveRoutines : activeRoutines

        return (
            <div className='action-plate'>
                <div className='action-list-container'>
                    <div className='active-switch'>
                        <div className='active-title-container'>
                            <h4 className='active-title'>
                                {this.state.inactiveTab ? 'inactive' : 'active'}
                            </h4>
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
                    value={this.state.newRoutine}
                    section='Routine'
                />
            </div>
        )
    }
}

export default Routines