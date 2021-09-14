import React, {useState, useRef} from 'react'
import ActionItem from '../ActionItem/ActionItem'
import AddAction from '../AddAction/AddAction'

function Behaviors() {
    const [newBehavior, setNewBehavior] = useState('')
    const [behaviors, setBehaviors] = useState([])

    const itemRef = useRef(null)

    const allBehaviors = behaviors.map(item => 
        <ActionItem
            key={item.id}
            id={item.id}
            item={item}
            handleClick={handleClick}
            ref={itemRef}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )

    function handleChange(e) {
        const {value} = e.target
        setNewBehavior(value)
    }

    function handleClick(id) {
        const updatedBehaviors = behaviors.map(behavior => {
            if (behavior.id === id) {
                behavior.counter++
            }
            return behavior
        })
        setBehaviors(updatedBehaviors)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (behaviors.length >= 50) {
            alert('Limit of 50 Behaviors reacched')
            return
        }
        const idMap = behaviors.map(behavior => behavior.id)
        for (let i = 0; i < 100; i++) {
            if (!idMap.includes(i)) {
                setBehaviors(prev => {
                    return [
                        ...prev,
                        {
                            id: i,
                            userInput: newBehavior,
                            type: 'increment',
                            counter: 0
                        }
                    ]
                })
                break
            }
        }
        setNewBehavior('')
    }

    function handleEdit(id, edit) {
        const updatedBehaviors = behaviors.map(behavior => {
            if (behavior.id === id) behavior.userInput = edit
            return behavior
        })
        setBehaviors(updatedBehaviors)
    }

    function handleDelete(id) {
        const updatedBehaviors = behaviors.filter(behavior => {
            return behavior.id !== id
        })
        setBehaviors(updatedBehaviors)
    }
    
    return (
        <div className='action-plate behavior-plate'>
            <div className='action-list-container'>
                <div className='active-switch'>
                    <div className='active-title-container'>
                        <h4 className='active-title'>
                            behaviors
                        </h4>
                    </div>
                    <div></div>
                </div>
                <div className='action-list'>
                    {allBehaviors}
                </div>
            </div>
            <AddAction
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                value={newBehavior}
                section='behavior' 
            />
        </div>
    )
}

export default Behaviors