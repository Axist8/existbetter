import React from 'react'
import ActionItem from '../ActionItem/ActionItem'
import wishListData from './wishListData'
import AddAction from '../AddAction/AddAction'

class WishList extends React.Component {
    constructor() {
        super()
        this.state = {
            completedTab: false,
            newWish: '',
            wishList: wishListData.active,
            completedWishes: wishListData.completed
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleSwitch = this.handleSwitch.bind(this)
    }
    
    handleChange(e) {
        const {value} = e.target
        this.setState({ newWish: value })
    }

    handleSubmit(e) {
        e.preventDefault()
        const active = wishListData.active
        if (active.length >= 100) {
            alert('Limit of 100 Wishes reached')
            return
        }
        const idMap = active.map(wish => wish.id)
        for (let i = 0; i < 100; i++) {
            if (!idMap.includes(i)) {
                wishListData.active.push(
                    {
                        id: i,
                        userInput: this.state.newWish,
                        type: 'checkmark'
                    }
                )
                break
            }
        }
        this.setState(prev => {
            return {
                ...prev,
                completedTab: false,
                newWish: ''
            }
        })
    }

    handleClick(e) {
        const wishId = e.target.id
        const active = wishListData.active
        for (let i = 0; i < active.length; i++) {
            const dataId = active[i].id
            if (parseInt(wishId) === dataId) {
                const comp = wishListData.completed
                const compIdMap = comp.map(item => item.id)
                for (let j = 0; j < 200; j++) {
                    if (comp.length >= 100) {
                        comp.pop()
                    }
                    if (!compIdMap.includes(j)) {
                        comp.unshift(
                            {
                                id: j,
                                userInput: active[i].userInput,
                                type: 'complete'
                            }
                        )
                        break
                    }
                }
                active.splice(i, 1)
            }
        }
        this.setState(prev => prev)
    }

    handleSwitch() {
        this.setState({
            completedTab: !this.state.completedTab
        })
    }

    render() {
        const allWishes = this.state.wishList.map(item =>
            <ActionItem
                key={item.id}
                id={item.id}
                item={item}
                handleClick={this.handleClick}
            />
        )

        const completed = this.state.completedWishes.map(item =>
            <ActionItem
                key={item.id}
                id={item.id}
                item={item}
            />
        )

        const actionContent = this.state.completedTab ?
            completed : allWishes

        return (
            <div className='action-plate'>
                <div className='action-list-container'>
                    <div className='active-switch'>
                        <div className='active-title-container'>
                            <h4 className='active-title'>
                                {this.state.completedTab ? 'complete' : 'active'}
                            </h4>
                        </div>
                        <button className='switch' onClick={this.handleSwitch}>
                            ⇋
                        </button>
                    </div>
                    <div className='action-list'>
                        {actionContent}
                    </div>
                </div>
                <AddAction
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    value={this.state.newWish}
                    section='Wish'    
                />
            </div>
        )
    }
}

export default WishList