import React from 'react'
import ActionItem from '../ActionItem/ActionItem'

function ActiveTodos(props) {
    const allTodos = props.todos.map(item =>
        <ActionItem
            key={item.id}
            id={item.id}
            item={item}
            handleClick={props.handleClick}
            handleEdit={props.handleEdit}
            handleDelete={props.handleDelete}
        />    
    )

    return (
        <div className='action-list'>
            {allTodos}
        </div>
    )
}

export default ActiveTodos