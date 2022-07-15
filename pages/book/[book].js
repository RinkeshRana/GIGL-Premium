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
import AudioPlayerContext from ".././context/audioPlayerContext";
import AudioParts from "../components/AudioParts";
import AudioPlayer from "../components/AudioPlayer";

const book = (props) => {
  // audioUrl is the url of the all audio file
  let audioUrl = [];
  const bookData = props.bookData.url;
  for (const key in bookData) {
    audioUrl[key] = bookData[key].url;
  }
  console.log(audioUrl);

  // getting user book
  const { getBook } = useContext(BookContext);
  const { play, togglePlay } = useContext(AudioPlayerContext);
  const currentBook = getBook();

  const router = useRouter();

  const audioButton = () => {
    console.log("play and pause audio.");
    let audio = new Audio(audioUrl[0]);
    if (!play) {
      console.log("audiourl",audioUrl);
      console.log("audiourl[0]", audioUrl[0]);
      audio.play();
    }else{
      audio.pause()
      audioUrl[0].pause;
    }
  };

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
               <AudioPlayer/>
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
        <div className=" ml-40 h-3/4 w-2/4 bg-slate-800 hidden md:block shadow-lg rounded-lg text-white overflow-auto ">
          <div className="p-4 text-justify">
            <div
              dangerouslySetInnerHTML={{ __html: currentBook.description }}
            />
          </div>
        </div>
      </div>
      {bookData.map((data) => (
        <AudioParts key={data.id} id={data.id} url={data.url} />
      ))}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { book } = context.query;
  if (book == "null") {
    return {
      props: { bookData: null }, // will be passed to the page component as props
    };
  }
  const respose = await fetch(
    `https://api.greatideasgreatlife.com/v3.5/books/surl/book/${book}`,
    {
      method: "get",
      headers: new Headers({
        Host: "api.greatideasgreatlife.com",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjMxNTU3ODYsImlhdCI6MTY1NTIxNjAxOH0.GF498DxzpSV6DTAz5anTYpsYfmxji_l3PlZwvUIBEUg",
      }),
    }
  );
  const bookData = await respose.json();
  return {
    props: { bookData }, // will be passed to the page component as props
  };
}
export default book;
