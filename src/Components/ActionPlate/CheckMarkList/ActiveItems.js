import React from 'react'
import ActionItem from '../ActionItem/ActionItem'

function ActiveItems(props) {
    const allActiveItems = props.activeItems.map(item =>
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
            {allActiveItems}
        </div>
    )
}

export default ActiveItems