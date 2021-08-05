import React from 'react'
import RoutineItem from './RoutineItem/RoutineItem'
import AddRoutine from './AddRoutine/AddRoutine'
import './routines.css'
import routineData from './routineData'

class Routines extends React.Component {
    constructor() {
        super()
        this.state = {
            routines: routineData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prev => {

        })
    }

    render() {
        const allRoutines = this.state.routines.map(item => <RoutineItem key={item.id} item={item} handleChange={this.handleChange} />)

        return (
            <div className='action-container'>
                <div className='routine-list'>
                    {allRoutines}
                </div>
                <AddRoutine />
            </div>
        )
    }
}

export default Routines