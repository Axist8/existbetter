import React from 'react'
import ActionItem from '../ActionItem/ActionItem'
import wishListData from './wishListData'
import AddAction from '../AddAction/AddAction'

class WishList extends React.Component {
    constructor() {
        super()
        this.state = {
            wishList: wishListData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prev => {
            const updatedWishList = prev.wishList.map(wish => {
                if (wish.id === id) {
                    return {
                        ...wish,
                        completed: !wish.completed
                    }
                }
                return wish
            })
            return updatedWishList
        })
    }

    render() {
        const allWishes = this.state.wishList.map(item => <ActionItem key={item.id} item={item} handleChange={this.handleChange} />)

        return (
            <div className='action-plate'>
                <div className='action-list'>
                    {allWishes}
                </div>
                <AddAction />
            </div>
        )
    }
}

export default WishList