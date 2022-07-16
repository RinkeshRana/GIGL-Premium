import React, {useContext, useEffect} from "react";
import { IoMdPlay ,IoMdPause } from "react-icons/io";
import AudioContext from "../context/audioContext";
import AudioPlayerContext from "../context/audioPlayerContext";

const AudioParts = (props) => {
  const {getCounter, setNextCounter} = useContext(AudioContext);
  const {currentAudio, setCurrentAudio} = useContext(AudioPlayerContext);



  // console.log(props);
  const playAudio = () => {
    let audio = new Audio(props.url);
    setCurrentAudio(props.url);
    audio.play();
  }
  return (
    <div>
      <div className="w-auto h-28   flex items-center justify-center">
        <div className="bg-slate-800 rounded-lg h-20 text-white w-8/12 flex justify-between ">
          <div className="p-6 text-2xl font-bold">{`Part ${props.index+1}`}</div>
          <div className="text-white p-5 float-right">
            <IoMdPlay onClick={playAudio}
              size={35}
              className="hover:cursor-pointer hover:scale-110 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioParts;
