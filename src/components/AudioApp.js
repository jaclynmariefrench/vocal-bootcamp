import { useState, useEffect, useContext } from "react";
import Player from "./player/Player";
import "./AudioApp.css";
import { WarmUpContext } from "./generator/warmUpProvider";


function AudioApp() {
  const [songs] = useState([

    {
      title: "Soprano Five Tone Scale",
      artist: "Vocal Bootcamp",
      src: "./music/SOPRANO_5_tone.mp3",
      typeNameId: 1
    },
    {
      title: "Soprano 1.5 Scale",
      artist: "Vocal Bootcamp",
      src: "./music/SOPRANO_1.5_scale.mp3",
      typeNameId: 1
    },
    {
      title: "Soprano Zing Octave Slide",
      artist: "Vocal Bootcamp",
      src: "./music/SOPRANO_zing_slides.mp3",
      typeNameId: 1
    },
    {
      title: "Soprano Octave Repeater",
      artist: "Vocal Bootcamp",
      src: "./music/SOPRANO_octave_repeater.mp3",
      typeNameId: 1
    },
    {
      title: "Alto 5 tone scale",
      artist: "Vocal Bootcamp",
      src: "./music/ALTO_5_tone.mp3",
      typeNameId: 2
    },
    {
      title: "Alto 1.5 scale",
      artist: "Vocal Bootcamp",
      src: "./music/ALTO_1.5_scale.mp3",
      typeNameId: 2
    },
    {
      title: "Alto Zing Octave Slide",
      artist: "Vocal Bootcamp",
      src: "./music/ALTO_zing_slides.mp3",
      typeNameId: 2
    },
    {
      title: "Alto Octave Repeater",
      artist: "Vocal Bootcamp",
      src: "./music/ALTO_octave_repeater.mp3",
      typeNameId: 2
    },
    {
      title: "Tenor 5 tone scale",
      artist: "Vocal Bootcamp",
      src: "./music/TENOR_5_tone.mp3",
      typeNameId: 3
    },
    {
      title: "Tenor 1.5 Scale",
      artist: "Vocal Bootcamp",
      src: "./music/TENOR_1.5_scale.mp3",
      typeNameId: 3
    },
    {
      title: "Tenor Octave Repeater",
      artist: "Vocal Bootcamp",
      src: "./music/TENOR_octave_repeater.mp3",
      typeNameId: 3
    },
    {
      title: "Tenor Zing Octave Slide",
      artist: "Vocal Bootcamp",
      src: "./music/TENOR_zing_slides.mp3",
      typeNameId: 3
    },
    {
      title: "Bass 5 tone scale",
      artist: "Vocal Bootcamp",
      src: "./music/BASS_5_tone.mp3",
      typeNameId: 4
    },
    {
      title: "Bass 1.5 Scale",
      artist: "Vocal Bootcamp",
      src: "./music/BASS_1.5_scale.mp3",
      typeNameId: 4
    },
    {
      title: "Bass Octave Repeater",
      artist: "Vocal Bootcamp",
      src: "./music/BASS_octave_repeater.mp3",
      typeNameId: 4
    },
    {
      title: "Bass Zing Octave Slide",
      artist: "Vocal Bootcamp",
      src: "./music/BASS_zing_slides.mp3",
      typeNameId: 4
    }
  ]);

  const {getWarmUps} = useContext(WarmUpContext)
  const [warmUps, setWarmUps] = useState([])
  
  useEffect(()=> {
    getWarmUps()
    .then(
      data => setWarmUps(data)
    )
  }, [])

  

  useEffect(()=> {
    const filteredSongs = songs.filter(s=> {
      
        if(s.typeNameId === warmUps.typeNameId) {
        return filteredSongs
      }
    
  }, [warmUps])})
  
 
console.log(filteredSongs)

// const filteredSong = songs.filter(s=> s.typeNameId === 1)



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

