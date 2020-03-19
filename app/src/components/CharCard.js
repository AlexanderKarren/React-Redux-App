import React from 'react'
import './CharCard.css'

export default function CharCard(props) {
    return (
        <div className="char-card">
            <img src={props.character.img} alt={props.character.name} />
            <div className="info">
                <h2 style={(props.character.name.length >= 20) ? {fontSize: "1.3rem"} : {fontSize: "1.7rem"}}>{props.character.name}</h2>
                <p className={(props.character.status.toLowerCase().includes("alive")) ? "alive" : "dead"}>{props.character.status}</p>
                <div className="sub-info">
                    <p><span>Occupation</span></p>
                    <p style={(props.character.occupation[0].length >= 30) ? {fontSize: "1rem"} : {fontSize: "1.2rem"}}>{props.character.occupation[0]}</p>
                </div>
                <div className="sub-info">
                    <p><span>Nickname:</span> {props.character.nickname}</p>
                </div>
                <div className="sub-info">
                    <p><span>Played by:</span> {props.character.portrayed}</p>
                    <p><span>On:</span> {props.character.category}</p>
                </div>
            </div>
        </div>
    )
}
