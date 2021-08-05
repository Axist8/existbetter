import React from 'react'
import TodoItem from './TodoItem/TodoItem'
import AddTodo from './AddTodo/AddTodo'
import './todo.css'
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
            console.log(updatedTodos)
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const allTodos = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)

        return (
            <div className='action-container'>
                <div className='todo-list'>
                    {allTodos}
                </div>
                <AddTodo />
            </div>
        )
    }
}

export default Todo