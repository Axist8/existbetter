import React, {useState} from 'react'
import AddAction from '../AddAction/AddAction'
import useActiveTab from '../../../hooks/useActiveTab'
import ActiveWishes from './ActiveWishes'
import CompletedWishes from './CompletedWishes'

function WishList() {
    const [activeTab, handleSwitch] = useActiveTab()
    const [newWish, setNewWish] = useState('')
    const [wishes, setWishes] = useState([])
    const [completedWishes, setCompletedWishes] = useState([])

    function handleChange(e) {
        const {value} = e.target
        setNewWish(value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const idMap = wishes.map(wish => wish.id)
        for (let i = 0; i < (wishes.length + 1); i++) {
            if (!idMap.includes(i)) {
                setWishes(prev => {
                    return [
                        ...prev,
                        {
                            id: i,
                            userInput: newWish,
                            type: 'checkmark',
                            active: true
                        }
                    ]
                })
                break
            }
        }
        if (!activeTab) handleSwitch()
        setNewWish('')
    }

    function handleClick(id) {
        if (completedWishes.length === 50) {
            const deletedWish = completedWishes.slice(0, -1)
            setCompletedWishes(deletedWish)
        }
        const idMap = completedWishes.map(wish => wish.id)
        for (let i = 0; i < 50; i++) {
            if (!idMap.includes(i)) {
                const completedWish = wishes.find(wish => wish.id === id)
                setCompletedWishes(prev => [{...completedWish, id: i, type: 'complete'}, ...prev])
                break
            }
        }
        const updatedwishes = wishes.filter(wish => wish.id !== id)
        setWishes(updatedwishes)
    }

    function handleEdit(id, edit) {
        const updatewishes = wishes.map(wish => {
            if (wish.id === id) wish.userInput = edit
            return wish
        })
        setWishes(updatewishes)
    }

    function handleDelete(id, complete) {
        if (complete) {
            const updatedcompletedWishes = completedWishes.filter(wish => {
                return wish.id !== id
            })
            setCompletedWishes(updatedcompletedWishes)
        } else {
            const updatedwishes = wishes.filter(wish => {
                return wish.id !== id
            })
            setWishes(updatedwishes)
        }
    }

    function handleMakeActive(id) {
        const renewedWish = completedWishes.find(wish => wish.id === id)
        const updatedwishes = [{...renewedWish, type: 'checkmark'}, ...wishes]
        setWishes(updatedwishes)
        handleDelete(id, true)
    }

    return (
        <div className='action-plate'>
            <div className='action-list-container'>
                <div className='active-switch'>
                    <div className='active-title-container'>
                        <h4 className='active-title'>
                            {activeTab ?  'active' : 'complete'} ✧ wishes
                        </h4>
                    </div>
                    <button className='switch' onClick={handleSwitch}>
                        ⇋
                    </button>
                </div>
                {
                    activeTab ? 
                        <ActiveWishes
                            wishes={wishes}
                            handleClick={handleClick}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}    
                        /> 
                        : 
                        <CompletedWishes
                            completedWishes={completedWishes}
                            handleDelete={handleDelete}
                            handleMakeActive={handleMakeActive}
                        />}
            </div>
            <AddAction
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                value={newWish}
                section='wish'
            />
        </div>
    )
}

export default WishList