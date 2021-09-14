import React from 'react'
import ActionItem from '../ActionItem/ActionItem'

function ActiveGoals(props) {
    const allGoals = props.goals.map(item =>
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
        <div className={'action-list'}>
            {allGoals}
        </div>
    )
}

export default ActiveGoals