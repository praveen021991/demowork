import React from 'react';

const Player = (props) => {
    return (
        <div>
            <h2>Player name: {props.name}</h2>
            <p>Player age: {props.age}</p>
        </div>
    )
    
}

export default Player;