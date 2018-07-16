import React from 'react';

const Game = (props) => {
    return(
        <div>
            <h2>Game type:{props.name}</h2>
            <p>Game players:{props.players}</p>
            <input type="text" 
                onChange={props.change} 
                value={props.name}/>
            </div>
    )

}
export default Game;