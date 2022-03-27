import React from 'react'
import Task from './Task'
import Fade from 'react-reveal/Fade'

const Content = ({ tasks, handleCheck, handleDelete }) => {
    return (
        <main>
            {tasks.length ?
                (tasks.map(task => <Task key={task.id} task={task} handleDelete={handleDelete} handleCheck={handleCheck} />)) :
                <Fade top><h2 style={{ textAlign: "center", marginTop: "4rem" }}>No Tasks To Show</h2></Fade>
            }
        </main>
    )
}

export default Content