import React, {useState} from 'react'
import ActionItem from '../ActionItem/ActionItem'
import AddAction from '../AddAction/AddAction'
import useActiveTab from '../../../hooks/useActiveTab'

function Routines() {
    const [activeTab, handleSwitch] = useActiveTab()
    const [newRoutine, setNewRoutine] = useState('')
    const [routines, setRoutines] = useState([])

    const activeRoutines = routines.filter(routine => {
        return routine.active
    }).map(item => 
        <ActionItem
            key={item.id}
            id={item.id}
            item={item}
            section='routine'
            status='active'
            handleClick={handleClick}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
    const inactiveRoutines = routines.filter(routine => {
        return !routine.active
    }).map(item => 
        <ActionItem
            key={item.id}
            id={item.id}
            item={item}
            section='routine'
            status='inactive'
            handleClick={handleClick}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
    const actionContent = activeTab ? activeRoutines : inactiveRoutines

    function handleChange(e) {
        const {value} = e.target
        setNewRoutine(value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const idMap = routines.map(routine => routine.id)
        for (let i = 0; i < (routines.length + 1); i++) {
            if (!idMap.includes(i)) {
                setRoutines(currentRoutines => {
                    return [...currentRoutines, {
                        id: i,
                        userInput: newRoutine,
                        type: 'checkmark',
                        active: true
                    }]
                })
                break
            }
        }
        if (!activeTab) handleSwitch()
        setNewRoutine('')
    }

    function handleClick(id) {
        const updatedRoutines = routines.map(routine => {
            if (routine.id === id) {
                routine.active = !routine.active
            }
            return routine
        })
        setRoutines(updatedRoutines)
    }

    function handleEdit(id, edit) {
        const updatedRoutines = routines.map(routine => {
            if (routine.id === id) {
                routine.userInput = edit
            }
            return routine
        })
        setRoutines(updatedRoutines)
    }

    function handleDelete(id) {
        const updatedRoutines = routines.filter(routine => {
            return routine.id !== id
        })
        setRoutines(updatedRoutines)
    }

    return (
        <div className='action-plate'>
            <div className='action-list-container'>
                <div className='active-switch'>
                    <div className='active-title-container'>
                        <h4 className='active-title'>
                            {activeTab ? 'active' : 'inactive'} ✧ routines
                        </h4>
                    </div>
                    <button className='switch' onClick={handleSwitch}>
                        ⇋
                    </button>
                </div>
                <div className='action-list'>
                    {actionContent}
                </div>
            </div>
            <AddAction
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                value={newRoutine}
                section='Routine'
            />
        </div>
    )
}

export default Routines