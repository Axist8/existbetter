import React from 'react'
import ActionItem from '../ActionItem/ActionItem'
import AddTodo from './AddTodo/AddTodo'
import todoData from './todoData'

class Todo extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prev => {
            const updatedTodos = prev.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const allTodos = this.state.todos.map(item => <ActionItem key={item.id} item={item} handleChange={this.handleChange} />)

        return (
            <div className='action-plate'>
                <div className='action-list'>
                    {allTodos}
                </div>
                <AddTodo />
            </div>
        )
    }
}

export default Todo