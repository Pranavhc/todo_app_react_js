import React from 'react';
import Fade from 'react-reveal/Fade'
import { FaTrashAlt, FaCheckSquare, FaSquare } from 'react-icons/fa'

const Task = ({ task, handleCheck, handleDelete }) => {
    return (
        <Fade top>
            <article className='task'>
                <Fade bottom>
                    <div className='CheckBox' onClick={() => handleCheck(task.id)}>
                        {task.checked ? <FaCheckSquare /> : <FaSquare />}
                    </div>
                    <div className='taskTitle'>
                        <p>{task.title}</p>
                    </div>
                </Fade>
                <FaTrashAlt onClick={() => handleDelete(task.id)} />
            </article >
        </Fade>
    )
}

export default Task;