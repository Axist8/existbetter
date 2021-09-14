import React, {useState} from 'react'
import AddAction from '../AddAction/AddAction'
import useActiveTab from '../../../hooks/useActiveTab'
import ActiveGoals from './ActiveGoals'
import CompletedGoals from './CompletedGoals'

function Goals() {
    const [activeTab, handleSwitch] = useActiveTab()
    const [newGoal, setNewGoal] = useState('')
    const [goals, setGoals] = useState([])
    const [completedGoals, setCompletedGoals] = useState([])

    function handleChange(e) {
        const {value} = e.target
        setNewGoal(value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const idMap = goals.map(goal => goal.id)
        for (let i = 0; i < (goals.length + 1); i++) {
            if (!idMap.includes(i)) {
                setGoals(prev => {
                    return [
                        ...prev,
                        {
                            id: i,
                            userInput: newGoal,
                            type: 'checkmark',
                            active: true
                        }
                    ]
                })
                break
            }
        }
        if (!activeTab) handleSwitch()
        setNewGoal('')
    }

    function handleClick(id) {
        if (completedGoals.length === 50) {
            const deletedGoal = completedGoals.slice(0, -1)
            setCompletedGoals(deletedGoal)
        }
        const idMap = completedGoals.map(goal => goal.id)
        for (let i = 0; i < 50; i++) {
            if (!idMap.includes(i)) {
                const completedGoal = goals.find(goal => goal.id === id)
                setCompletedGoals(prev => [{...completedGoal, id: i, type: 'complete'}, ...prev])
                break
            }
        }
        const updatedGoals = goals.filter(goal => goal.id !== id)
        setGoals(updatedGoals)
    }

    function handleEdit(id, edit) {
        const updateGoals = goals.map(goal => {
            if (goal.id === id) goal.userInput = edit
            return goal
        })
        setGoals(updateGoals)
    }

    function handleDelete(id, complete) {
        if (complete) {
            const updatedCompletedGoals = completedGoals.filter(goal => {
                return goal.id !== id
            })
            setCompletedGoals(updatedCompletedGoals)
        } else {
            const updatedGoals = goals.filter(goal => {
                return goal.id !== id
            })
            setGoals(updatedGoals)
        }
    }

    function handleMakeActive(id) {
        const renewedGoal = completedGoals.find(goal => goal.id === id)
        const updatedGoals = [{...renewedGoal, type: 'checkmark'}, ...goals]
        setGoals(updatedGoals)
        handleDelete(id, true)
    }

    return (
        <div className='action-plate'>
            <div className='action-list-container'>
                <div className='active-switch'>
                    <div className='active-title-container'>
                        <h4 className='active-title'>
                            {activeTab ?  'active' : 'complete'} ✧ Goals
                        </h4>
                    </div>
                    <button className='switch' onClick={handleSwitch}>
                        ⇋
                    </button>
                </div>
                {
                    activeTab ? 
                        <ActiveGoals
                            goals={goals}
                            handleClick={handleClick}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}    
                        /> 
                        : 
                        <CompletedGoals
                            completedGoals={completedGoals}
                            handleDelete={handleDelete}
                            handleMakeActive={handleMakeActive}
                        />}
            </div>
            <AddAction
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                value={newGoal}
                section='Goal'
            />
        </div>
    )
}

export default Goals