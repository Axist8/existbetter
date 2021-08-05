import React from 'react'
import CheckItem from '../CheckItem/CheckItem'
import AddWish from './AddWish/AddWish'
import './wishList.css'
import wishListData from './wishListData'

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

        })
    }

    render() {
        const allWishes = this.state.wishList.map(item => <CheckItem key={item.id} item={item} handleChange={this.handleChange} />)

        return (
            <div className='action-container'>
                <div className='wish-list'>
                    {allWishes}
                </div>
                <AddWish />
            </div>
        )
    }
}

export default WishList