import { useState } from 'react';
import { Player } from "./components/player/Player";
import "./AudioApp.css"


export const AudioApp = () => {
    const [songs, setSongs] = useState([
        
            {
              id: 1,
              title: "Five Tone Scale",
              artist: "Vocal Bootcamp", 
              warmUpGoalsId: 1,
              typeNameId: 1,
              audioURL: "https://drive.google.com/uc?export=download&id=1d0G_0eY2kEUDeb2x3l2v7iNxdIpv0Nrc"
            }
    
    ])
    
    const [ currentSongIndex, setCurrentSongIndex] = useState(0)
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1) 
  
  return (
    <div className="AudioApp">
      <Player songs={songs[currentSongIndex]} nextSong={songs[nextSongIndex]} />
    </div>
  )
  
  
  
  }