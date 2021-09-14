import React, {useState} from 'react'
import AddAction from '../AddAction/AddAction'
import useActiveTab from '../../../hooks/useActiveTab'
import ActiveItems from './ActiveItems'
import CompletedItems from './CompletedItems'

function CheckMarkList({section}) {
    const [activeTab, handleSwitch] = useActiveTab()
    const [newActiveItem, setNewActiveItem] = useState('')
    const [activeItems, setActiveItems] = useState([])
    const [completedItems, setCompletedItems] = useState([])

    function handleChange(e) {
        const {value} = e.target
        setNewActiveItem(value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const idMap = activeItems.map(goal => goal.id)
        for (let i = 0; i < (activeItems.length + 1); i++) {
            if (!idMap.includes(i)) {
                setActiveItems(prev => {
                    return [
                        ...prev,
                        {
                            id: i,
                            userInput: newActiveItem,
                            type: 'checkmark',
                            active: true
                        }
                    ]
                })
                break
            }
        }
        if (!activeTab) handleSwitch()
        setNewActiveItem('')
    }

    function handleClick(id) {
        if (completedItems.length === 50) {
            const deletedGoal = completedItems.slice(0, -1)
            setCompletedItems(deletedGoal)
        }
        const idMap = completedItems.map(goal => goal.id)
        for (let i = 0; i < 50; i++) {
            if (!idMap.includes(i)) {
                const completedGoal = activeItems.find(goal => goal.id === id)
                setCompletedItems(prev => [{...completedGoal, id: i, type: 'complete'}, ...prev])
                break
            }
        }
        const updatedActiveItems = activeItems.filter(goal => goal.id !== id)
        setActiveItems(updatedActiveItems)
    }

    function handleEdit(id, edit) {
        const updatedActiveItems = activeItems.map(goal => {
            if (goal.id === id) goal.userInput = edit
            return goal
        })
        setActiveItems(updatedActiveItems)
    }

    function handleDelete(id, complete) {
        if (complete) {
            const updatedcompletedItems = completedItems.filter(goal => {
                return goal.id !== id
            })
            setCompletedItems(updatedcompletedItems)
        } else {
            const updatedActiveItems = activeItems.filter(goal => {
                return goal.id !== id
            })
            setActiveItems(updatedActiveItems)
        }
    }

    function handleMakeActive(id) {
        const renewedGoal = completedItems.find(goal => goal.id === id)
        const updatedActiveItems = [{...renewedGoal, type: 'checkmark'}, ...activeItems]
        setActiveItems(updatedActiveItems)
        handleDelete(id, true)
    }

    return (
        <div className='action-plate'>
            <div className='action-list-container'>
                <div className='active-switch'>
                    <div className='active-title-container'>
                        <h4 className='active-title'>
                            {activeTab ?  'active' : 'complete'} ✧ {section}s
                        </h4>
                    </div>
                    <button className='switch' onClick={handleSwitch}>
                        ⇋
                    </button>
                </div>
                {
                    activeTab ? 
                        <ActiveItems
                            activeItems={activeItems}
                            handleClick={handleClick}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}    
                        /> 
                        : 
                        <CompletedItems
                            completedItems={completedItems}
                            handleDelete={handleDelete}
                            handleMakeActive={handleMakeActive}
                        />}
            </div>
            <AddAction
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                value={newActiveItem}
                section={section}
            />
        </div>
    )
}

export default CheckMarkList