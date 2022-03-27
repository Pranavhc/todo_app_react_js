import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = ({ length }) => {
    return (
        <Fade top>
            <footer>
                <h2>{length} {length === 1 ? "Task" : "Tasks"}</h2>
            </footer>
        </Fade>
    )
}

export default Footer;