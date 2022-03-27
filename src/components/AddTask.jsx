import React from 'react'
import Fade from 'react-reveal/Fade'

const AddTask = ({ handleOnSubmit, newTask, setNewTask }) => {
    return (
        <Fade left>
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <input value={newTask} onChange={e => setNewTask(e.target.value)} id='AddTask' required maxLength={100} type="text" placeholder='Add task here..' />
                <label htmlFor="AddTask">Add Task</label>
            </form>
        </Fade>
    )
}

export default AddTask