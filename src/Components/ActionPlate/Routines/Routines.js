import React from 'react'
import RoutineItem from './RoutineItem/RoutineItem'
import AddRoutine from './AddRoutine/AddRoutine'
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
            const updatedRoutines = prev.routines.map(routine => {
                if (routine.id === id) {
                    return {
                        ...routine,
                        completed: !routine.completed
                    }
                }
                return routine
            })
            return {
                routines: updatedRoutines
            }
        })
    }

    render() {
        const allRoutines = this.state.routines.map(item => <RoutineItem key={item.id} item={item} handleChange={this.handleChange} />)

        return (
            <div className='action-container'>
                <div className='action-list'>
                    {allRoutines}
                </div>
                <AddRoutine />
            </div>
        )
    }
}

export default Routines