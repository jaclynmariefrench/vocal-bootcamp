import { useState, useEffect } from "react";
import Player from "./player/Player";
import "./AudioApp.css";

function AudioApp() {
  const [songs] = useState([
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/on-n-on.mp3",
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/song-2.jpg",
      src: "./music/somebody-new.mp3",
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "./music/on-n-on.mp3",
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/song-4.jpg",
      src: "./music/somebody-new.mp3",
    },
    {
  
      title: "Five Tone Scale",
      artist: "Vocal Bootcamp",
      src:
        "https://drive.google.com/uc?export=download&id=1d0G_0eY2kEUDeb2x3l2v7iNxdIpv0Nrc",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="AudioApp">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default AudioApp;

// import { useState, useEffect } from 'react';
// import Player from "./components/player/Player"
// import "./AudioAudioApp.css"

// export const AudioApp = () => {
//     const [songs] = useState([

//             {
//               id: 1,
//               title: "Five Tone Scale",
//               artist: "Vocal Bootcamp",
//               warmUpGoalsId: 1,
//               typeNameId: 1,
//               audioURL: "https://drive.google.com/uc?export=download&id=1d0G_0eY2kEUDeb2x3l2v7iNxdIpv0Nrc"
//             }

//     ])

//     const [ currentSongIndex, setCurrentSongIndex] = useState(0)
//     const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1)

//     useEffect(() => {
//       setNextSongIndex(() => {
//         if (currentSongIndex + 1 > songs.length - 1) {
//           return 0;
//         } else {
//           return currentSongIndex + 1;
//         }
//       });
//     }, [currentSongIndex]);

//   return (
//     <div className="AudioApp">
//       <Player
//       currentSongIndex={currentSongIndex}
//       setCurrentSongIndex={setCurrentSongIndex}
//       nextSongIndex={nextSongIndex}
//       songs={songs}
//       />
//     </div>
//   )
//     }
