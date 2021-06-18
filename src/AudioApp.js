import { useState } from 'react';
import { Player } from "./components/player/Player";

export const AudioApp = () => {
    const [songs, setSongs] = useState([
        
            {
              id: 1, 
              warmUpGoalsId: 1,
              typeNameId: 1,
              audioURL: "https://drive.google.com/uc?export=download&id=1d0G_0eY2kEUDeb2x3l2v7iNxdIpv0Nrc"
            }
    
    ])
    
    const [ currentSongIndex, setCurrentSongIndex] = useState(0)
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1) 
  
  return (
    <div className="AudioApp">
      <Player song={song[currentSongIndex]} nextSong={songs[nextSongIndex]} />
    </div>
  )
  
  
  
  }