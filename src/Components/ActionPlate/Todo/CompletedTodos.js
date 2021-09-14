import React from 'react'
import ActionItem from '../ActionItem/ActionItem'

function CompletedTodos(props) {
    const allCompletedTodos = props.completedTodos.map(item =>
        <ActionItem
            key={item.id}
            id={item.id}
            item={item}
            handleEdit={props.handleEdit}
            handleDelete={props.handleDelete}
        />
    )
    return (
        <div className='action-list'>
            {allCompletedTodos}
        </div>
    )
}

export default CompletedTodos