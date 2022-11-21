import React from 'react'
import "../styles/characters.css"

function CharacterCard({character}) {
    return (
        <div className="character-card">
            <img src={character.image}/>
            <p>{character.name}</p>
            <a href={`/details/${character.id}`}><button>See Details</button></a>
        </div>
    )
}

export default CharacterCard