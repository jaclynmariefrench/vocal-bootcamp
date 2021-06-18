import { useState, useEffect } from "react";
import Player from "./player/Player";
import "./AudioApp.css";

function AudioApp() {
  const [songs] = useState([

    {
      title: "Soprano Five Tone Scale",
      artist: "Vocal Bootcamp",
      src: "./music/SOPRANO_5_tone.mp3"
    },
    {
      title: "Soprano 1.5 Scale",
      artist: "Vocal Bootcamp",
      src: "./music/SOPRANO_1.5_scale.mp3"
    },
    {
      title: "Soprano Zing Octave Slide",
      artist: "Vocal Bootcamp",
      src: "./music/SOPRANO_zing_slides.mp3"
    },
    {
      title: "Soprano Octave Repeater",
      artist: "Vocal Bootcamp",
      src: "./music/SOPRANO_octave_repeater.mp3"
    }
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

