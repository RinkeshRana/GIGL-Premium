import AudioPlayerContext from "./audioPlayerContext";
import { useState } from "react";

const audioPlayerState = (props) => {
  const [currentAudio, setCurrentAudio] = useState("");

  // This will return functions that will be used to update the state
  return (
    <AudioPlayerContext.Provider value={{ currentAudio, setCurrentAudio }}>
      {props.children}
    </AudioPlayerContext.Provider>
  );
};

export default audioPlayerState;
