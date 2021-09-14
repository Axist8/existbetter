import React, {useState} from 'react'
import AddAction from '../AddAction/AddAction'
import useActiveTab from '../../../hooks/useActiveTab'
import ActiveTodos from './ActiveTodos'
import CompletedTodos from './CompletedTodos'

function Todo() {
    const [activeTab, handleSwitch] = useActiveTab()
    const [newTodo, setNewTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [completedTodos, setCompletedTodos] = useState([])

    function handleChange(e) {
        const {value} = e.target
        setNewTodo(value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const idMap = todos.map(todo => todo.id)
        for (let i = 0; i < (todos.length + 1); i++) {
            if (!idMap.includes(i)) {
                setTodos(prev => {
                    return [
                        ...prev,
                        {
                            id: i,
                            userInput: newTodo,
                            type: 'checkmark',
                            active: true
                        }
                    ]
                })
                break
            }
        }
        if (!activeTab) handleSwitch()
        setNewTodo('')
    }

    function handleClick(id) {
        if (completedTodos.length === 50) {
            const deletedTodo = completedTodos.slice(0, -1)
            setCompletedTodos(deletedTodo)
        }
        const idMap = completedTodos.map(cTodo => cTodo.id)
        for (let i = 0; i < 50; i++) {
            if (!idMap.includes(i)) {
                const completedTodo = todos.find(todo => todo.id === id)
                setCompletedTodos(prev => [{...completedTodo, id: i, type: 'complete'}, ...prev])
                break
            }
        }
        const updatedTodos = todos.filter(todo => todo.id !== id)
        setTodos(updatedTodos)
    }

    function handleEdit(id, edit) {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) todo.userInput = edit
            return todo
        })
        setTodos(updatedTodos)
    }

    function handleDelete(id, complete) {
        if (complete) {
            const updatedCompletedTodos = completedTodos.filter(todo => {
                return todo.id !== id
            })
            setCompletedTodos(updatedCompletedTodos)
        } else {
            const updatedTodos = todos.filter(todo => {
                return todo.id !== id
            })
            setTodos(updatedTodos)
        }
    }

    function handleMakeActive(id) {
        const renewedTodo = completedTodos.find(todo => todo.id === id)
        const updatedTodos = [{...renewedTodo, type: 'checkmark'}, ...todos]
        setTodos(updatedTodos)
        handleDelete(id, true)
    }

    return (
        <div className='action-plate'>
            <div className='action-list-container'>
                <div className='active-switch'>
                    <div className='active-title-container'>
                        <h4 className='active-title'>
                            {activeTab ?  'active' : 'complete'} ✧ Todos
                        </h4>
                    </div>
                    <button className='switch' onClick={handleSwitch}>
                        ⇋
                    </button>
                </div>
                {
                    activeTab ? 
                        <ActiveTodos
                            todos={todos}
                            handleClick={handleClick}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}    
                        /> 
                        : 
                        <CompletedTodos
                            completedTodos={completedTodos}
                            handleDelete={handleDelete}
                            handleMakeActive={handleMakeActive}    
                        />}
            </div>
            <AddAction
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                value={newTodo}
                section='Todo'
            />
        </div>
    )
}

export default Todo