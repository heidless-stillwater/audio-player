import {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "J.A.D",
      artist: "Louis Stoolwater",
      img_src: "./images/JAD-194x194-0.png",
      src: "./music/JAD.mp3"
    },
    {
      title: "drive",
      artist: "Louis Stoolwater",
      img_src: "./images/drive-194x194-0.png",
      src: "./music/drive.mp3"
    },
    {
      title: "wayfaring stranger",
      artist: "Louis Stoolwater",
      img_src: "./images/wayfaring-194x194-0.png",
      src: "./music/wayfaring-stranger.mp3"
    },
    {
      title: "postal",
      artist: "Louis Stoolwater",
      img_src: "./images/postal-194x194-0.png",
      src: "./music/postal.mp3"
    },
    {
      title: "stone me",
      artist: "Louis Stoolwater",
      img_src: "./images/stone-me-194x194-0.png",
      src: "./music/stone me.mp3"
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
    <div className="App">
      <Player 
        currentSongIndex = {currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex = {nextSongIndex}
        songs = {songs}
      />
    </div>
  );
}

export default App;
