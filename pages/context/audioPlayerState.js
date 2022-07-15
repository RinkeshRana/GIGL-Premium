import AudioPlayerContext from "./audioPlayerContext";
import { useState } from "react";

const audioPlayerState = (props) => {
    const [play, setPlay] = useState(true);

    const togglePlay = () => {
        setPlay(!play);
    }


 
  // This will return functions that will be used to update the state
  return (
    <AudioPlayerContext.Provider value={{ play, togglePlay }}>
      {props.children}
    </AudioPlayerContext.Provider>
  );
};

export default audioPlayerState;
