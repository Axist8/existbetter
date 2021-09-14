import React from 'react'
import ActionItem from '../ActionItem/ActionItem'

function CompletedItems(props) {
    const allCompletedItems = props.completedItems.map(item =>
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
            {allCompletedItems}
        </div>
    )
}

export default CompletedItems