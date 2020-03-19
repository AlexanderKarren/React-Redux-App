import React from 'react'
import { ReactSVG } from 'react-svg'
import './Search.css'

const SearchForm = props => {
    const handleChange = event => props.setQuery(event.target.value)
    return (
        <div className="search">
            <form>
                <ReactSVG src="search.svg" />
                <input type="text" onChange={handleChange} value={props.query}/>
                <ReactSVG src="clear.svg" className="clear" onClick={() => props.setQuery("")}/>
            </form>
        </div>
    )
}

export default SearchForm;