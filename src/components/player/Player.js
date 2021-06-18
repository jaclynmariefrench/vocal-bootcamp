import React from 'react'
import { PlayerDetails } from "./PlayerDetails";

export const Player = (props) => {
    return (
        <div className="c-player">
            <audio> </audio>
            <h4>Playing now </h4>
           <PlayerDetails song={props.song}/> 
            // CONTROLS
            <p><strong>next up:</strong>{props.nextSong.title} by {props.nextSong.artist}</p>
        </div>
    )
}


 