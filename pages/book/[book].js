import React, { useContext } from "react";
import Styles from "../../styles/Book.module.css";
import {
  TbPlayerSkipForward,
  TbPlayerSkipBack,
  TbPlayerPlay,
  TbPlayerPause,
} from "react-icons/tb";
import { useRouter } from "next/router";
import BookContext from ".././context/bookContext";
import AudioParts from "../components/AudioParts";

const book = () => {
  // getting user book
  const { getBook } = useContext(BookContext);
  const currentBook = getBook();
  console.log(currentBook);

  const router = useRouter();
  try {
    const thumbnailUrl = currentBook.thumbnailUrl;
    console.log(thumbnailUrl);
  } catch (error) {}

  return (
    <div className="w-full bg-slate-900">
      <div className="h-2 bg-red-light"></div>
      <div className="flex items-center justify-center h-screen bg-red-lightest">
        <div
          className="bg-slate-800 w-64  shadow-lg rounded-lg"
          style={Styles.book}
        >
          <img
            className="w-full rounded block"
            src={`${currentBook.thumbnailUrl}`}
            alt="Album Pic"
          />
          <div className="flex">
            <div className="w-full p-8">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {currentBook.title}
                  </h3>
                </div>
              </div>
              <div className="flex justify-between items-center mt-8">
                <div className="text-white">
                  <TbPlayerSkipBack
                    size={35}
                    className="hover:cursor-pointer hover:scale-110"
                  />
                </div>
                <div className="text-white p-6 width={30} height={30} rounded-full bg-red-light shadow-lg">
                  <TbPlayerPlay
                    size={35}
                    className="hover:cursor-pointer hover:scale-110"
                  />
                </div>
                <div className="text-white">
                  <TbPlayerSkipForward
                    size={35}
                    className="hover:cursor-pointer hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mx-8 py-4">
            <div className="flex justify-between text-sm text-white">
              <p>0:40</p>
              <p>4:20</p>
            </div>
            <div className="mt-1">
              <div className="h-1 bg-grey-dark rounded-full">
                <div className="w-1/5 h-1 bg-red-light rounded-full relative">
                  <span className="w-4 h-4 bg-red absolute pin-r pin-b -mb-1 rounded-full shadow"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" ml-40 h-3/4 w-2/4 bg-slate-800 shadow-lg text-white overflow-auto ">
          <div className="p-4 text-justify">
            dangerouslySetInnerHTML={currentBook.description}
          </div>
        </div>
      </div>
      <AudioParts />
    </div>
  );
};

export default book;
