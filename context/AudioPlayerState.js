import AudioPlayerContext from "./audioPlayerContext";
import { useState } from "react";

const AudioPlayerState = (props) => {
  const [currentAudio, setCurrentAudio] = useState("");
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  // This will return functions that will be used to update the state
  return (
    <AudioPlayerContext.Provider
      value={{
        currentAudio,
        setCurrentAudio,
        isAudioPlaying,
        setIsAudioPlaying,
      }}
    >
      {props.children}
    </AudioPlayerContext.Provider>
  );
};

export default AudioPlayerState;
