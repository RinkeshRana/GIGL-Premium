import React, { useState, useRef, useEffect, useContext } from "react";
import {
  TbPlayerSkipForward,
  TbPlayerSkipBack,
  TbPlayerPlay,
  TbPlayerPause,
} from "react-icons/tb";

import AudioPlayerContext from ".././context/audioPlayerContext";

const AudioPlayer = (props) => {
  const { currentAudio, setCurrentAudio } = useContext(AudioPlayerContext);
  const audioUrl = props.audioUrl;
  const [index, setIndex] = useState(0);
  setCurrentAudio(audioUrl[index]);
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [
    audioPlayer?.current?.loadedmetadata,
    audioPlayer?.current?.readyState,
    audioPlayer?.current?.duration,
  ]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    if (audioPlayer.current === null) {
      return;
    } else {
      progressBar.current.value = audioPlayer.current.currentTime;
      changePlayerCurrentTime();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const nextAudio = async () => {
    progressBar.current.value = 0;
    setIndex((index + 1) % audioUrl.length);
    await setCurrentAudio(audioUrl[index]);
    audioPlayer.current.play();
    animationRef.current = requestAnimationFrame(whilePlaying);
    audioPlayer.current.currentTime = 0;
    animationRef.current = requestAnimationFrame(whilePlaying);
    setIsPlaying(true);
  };

  const prevAudio = () => {
    //whrite code to update state and chage audio index
    if (index > 0) {
      setIndex(index - 1);
      setCurrentAudio(audioUrl[index - 1]);
    } else {
      setIndex(audioUrl.length - 1);
      setCurrentAudio(audioUrl[audioUrl.length - 1]);
    }
    //end of code
  };

  return (
    <div className="flex flex-wrap w-64 justify-center -ml-8">
      <div className="flex w-auto justify-center ml-7">
        <div className="text-white w-12 ml-1">{calculateTime(currentTime)}</div>

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
        <audio src={currentAudio} ref={audioPlayer}></audio>

        <button onClick={prevAudio} className="text-white   text-center">
          <TbPlayerSkipBack
            size={35}
            className="hover:cursor-pointer hover:scale-110"
          />
        </button>
        <button onClick={togglePlayPause} className="text-white ml-8">
          {" "}
          {isPlaying ? (
            <TbPlayerPause
              size={35}
              className="hover:cursor-pointer hover:scale-110"
            />
          ) : (
            <TbPlayerPlay
              size={35}
              className="hover:cursor-pointer hover:scale-110"
            />
          )}
        </button>
        <button onClick={nextAudio} className="text-white ml-8">
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
