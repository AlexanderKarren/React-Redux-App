import React, { useEffect, useState } from 'react'
import SearchForm from './SearchForm'
import CharCard from './CharCard'
import { getData } from '../actions/characterActions'
import { connect } from 'react-redux'
import './CharList.css'

const CharList = props => {
    const [query, setQuery] = useState("");
    const { getData } = props;

    useEffect(() => getData(), [getData]);

    return (
        <div className="char-list">
            <SearchForm query={query} setQuery={setQuery}/>
            {props.characters.map(character => {
                let foundMatch = false;
                Object.values(character).forEach(value => {
                    if (typeof value === "string") {
                        if (value.toLowerCase().includes(query.toLowerCase())) {
                            foundMatch = true;
                        }
                    }
                    else if (typeof value === "object") {
                        value.forEach(subValue => {
                            if (typeof subValue === "string") {
                                if (subValue.toLowerCase().includes(query.toLowerCase())) {
                                    foundMatch = true;
                                }
                            }
                        })
                    }
                })
                return (foundMatch && <CharCard key= {character.id} character={character} />)
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        characters: state.characters,
        isFetchingData: state.isFetchingData,
        error: state.error
    }
}

export default connect(mapStateToProps, { getData })(CharList);