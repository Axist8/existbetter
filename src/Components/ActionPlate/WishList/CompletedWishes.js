import React from 'react'
import ActionItem from '../ActionItem/ActionItem'

function CompletedWishes(props) {
    const allCompletedWishes = props.completedWishes.map(item =>
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
            {allCompletedWishes}
        </div>
    )
}

export default CompletedWishes