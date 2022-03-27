import React from 'react'
import Fade from 'react-reveal/Fade'

const SearchTask = ({ search, setSearch }) => {
    return (
        <Fade right>
            <form onSubmit={e => e.preventDefault()}>
                <input value={search} onChange={e => setSearch(e.target.value)} id='SearchTask' type="text" placeholder='Search task here..' />
                <label htmlFor="SearchTask">Search Task</label>
            </form>
        </Fade>
    )
}

export default SearchTask