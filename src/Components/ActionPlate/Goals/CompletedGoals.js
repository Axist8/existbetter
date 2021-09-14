import React from 'react'
import ActionItem from '../ActionItem/ActionItem'

function CompletedGoals(props) {
    const allCompletedGoals = props.completedGoals.map(item =>
        <ActionItem
            key={item.id}
            id={item.id}
            item={item}
            handleMakeActive={props.handleMakeActive}
            handleDelete={props.handleDelete}
        />
    )

    return (
        <div className={'action-list'}>
            {allCompletedGoals}
        </div>
    )
}

export default CompletedGoals