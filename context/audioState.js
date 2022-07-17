import AudioContext from "./audioContext";
import { useState } from "react";

const AudioState = (props) => {
  const [conuter, setCounter] = useState(1);

  const getCounter = () => {
    return conuter;
  };

  const setNextCounter = () => {
    return setCounter(conuter + 1);
  };

  // This will return functions that will be used to update the state
  return (
    <AudioContext.Provider value={{ getCounter, setNextCounter }}>
      {props.children}
    </AudioContext.Provider>
  );
};

export default AudioState;
