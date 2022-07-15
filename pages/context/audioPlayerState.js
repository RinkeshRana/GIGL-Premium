import AudioPlayerContext from "./audioPlayerContext";
import { useState } from "react";

const audioPlayerState = (props) => {
    const [play, setPlay] = useState(true);

    const togglePlay = () => {
        setPlay(!play);
    }

    const [currentAudio, setCurrentAudio] = useState("")



 
  // This will return functions that will be used to update the state
  return (
    <AudioPlayerContext.Provider value={{ play, togglePlay, currentAudio, setCurrentAudio }}>
      {props.children}
    </AudioPlayerContext.Provider>
  );
};

export default audioPlayerState;
