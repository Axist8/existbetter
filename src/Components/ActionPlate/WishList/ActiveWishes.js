import React from 'react'
import ActionItem from '../ActionItem/ActionItem'

function ActiveWishes(props) {
    const allWishes = props.wishes.map(item =>
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
            {allWishes}
        </div>
    )
}

export default ActiveWishes