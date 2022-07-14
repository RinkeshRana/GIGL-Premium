import React from "react";
import { IoMdPlay } from "react-icons/io";

const AudioParts = () => {
  return (
    <div>
      <div className="w-auto h-28  flex items-center justify-center">
        <div className="bg-slate-800 h-20 text-white w-8/12 flex justify-between ">
          <div className="p-6 text-2xl font-bold">Part 1</div>
          <div className="text-white p-5 float-right">
            <IoMdPlay
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
