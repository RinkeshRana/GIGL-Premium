import React, { useContext } from "react";
import { IoMdPlay, IoMdPause } from "react-icons/io";
import AudioPlayerContext from "../context/audioPlayerContext";

const AudioParts = (props) => {
  const { currentAudio, setCurrentAudio, setIsAudioPlaying } =
    useContext(AudioPlayerContext);

  const playAudio = () => {
    setCurrentAudio(props.url);
    setIsAudioPlaying(true);
  };
  return (
    <div>
      <div className="w-auto h-28   flex items-center justify-center">
        <div className="bg-slate-800 rounded-lg h-20 text-white w-8/12 flex justify-between ">
          <div className="p-6 text-2xl font-bold">{`Part ${
            props.index + 1
          }`}</div>
          <div className="text-white p-5   float-right ">
            {currentAudio === props.url ? (
              <IoMdPause className="text-2xl hover:cursor-no-drop hover:scale-110 disabled:opacity-75 " />
            ) : (
              <IoMdPlay
                onClick={playAudio}
                className="text-2xl hover:scale-110 hover:cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioParts;
