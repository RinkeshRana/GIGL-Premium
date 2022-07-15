import React, { useState, useRef, useEffect } from "react";
import {
  TbPlayerSkipForward,
  TbPlayerSkipBack,
  TbPlayerPlay,
  TbPlayerPause,
} from "react-icons/tb";

const AudioPlayer = () => {
  // useState
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isPlaying, setIsPlaying] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [duration, setDuration] = useState(0);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentTime, setCurrentTime] = useState(0);

  // references
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const audioPlayer = useRef();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const progressBar = useRef();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnMinutes} : ${returnSeconds}`;
  };
  const togglePlayPause = () => {
    const preValue = isPlaying;
    setIsPlaying(!preValue);

    if (!preValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    setCurrentTime(progressBar.current.value);
  };
  return (
    <div className="flex flex-wrap w-64 justify-center -ml-8">
      <div className="flex w-auto justify-center ml-7">
        <div className="text-white w-12 ">{calculateTime(currentTime)}</div>

        {/* progressbar */}
        <div>
          <input
            type="range"
            name=""
            id=""
            defaultValue="0"
            ref={progressBar}
            onChange={changeRange}
            className="text-white"
          />
        </div>

        {/* duration */}
        <div className="text-white w-20">
          {duration && !isNaN(duration) && calculateTime(duration)}
        </div>
      </div>

      <div className="flex gap-5 mt-4 ">
        <audio
          src="https://audio.greatideasgreatlife.com/audios/1042_5745_1643382390.mp3"
          ref={audioPlayer}
        ></audio>

        <button className="text-white  text-center">
          <TbPlayerSkipBack
            size={35}
            className="hover:cursor-pointer hover:scale-110"
          />
        </button>
        <button onClick={togglePlayPause} className="text-white ml-8">
          {" "}
          {isPlaying ? (
            <TbPlayerPause />
          ) : (
            <TbPlayerPlay
              size={35}
              className="hover:cursor-pointer hover:scale-110"
            />
          )}
        </button>
        <button className="text-white ml-8">
          <TbPlayerSkipForward
            size={35}
            className="hover:cursor-pointer hover:scale-110"
          />
        </button>
      </div>
      {/* currect time */}
    </div>
  );
};

export default AudioPlayer;
