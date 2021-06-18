import React, { useContext } from 'react'
import { PlayerDetails } from "./PlayerDetails";
import { PlayerControls } from "./PlayerControls"


export const Player = (props) => {

    return (
        <div className="c-player">
            <audio> </audio>
            <h4>Playing now </h4>
           <PlayerDetails songs={props.audioURL}/> 
            <PlayerControls/>
            <p><strong>next up:</strong> Something by Something</p>
        </div>
    )
}


 