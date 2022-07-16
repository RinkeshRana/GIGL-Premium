import React, { useContext } from "react";
import Styles from "../../styles/Book.module.css";
import { useRouter } from "next/router";
import BookContext from ".././context/bookContext";
import AudioPlayerContext from ".././context/audioPlayerContext";
import AudioParts from "../components/AudioParts";
import AudioPlayer from "../components/AudioPlayer";

const book = (props) => {
  const { getBook } = useContext(BookContext);
  const { play, togglePlay, currentAudio, setCurrentAudio } = useContext(AudioPlayerContext);
  // audioUrl is the url of the all audio file
  let audioUrl = [];
  const bookData = props.bookData.url;
  for (const key in bookData) {
    audioUrl[key] = bookData[key].url;
  }
  // setCurrentAudio(audioUrl[0]);
  // getting user book
  const currentBook = getBook();

  const router = useRouter();
  
let index = 0
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
                  <h3 className="md:text-l font-bold text-sm text-white">
                    {currentBook.title}
                  </h3>
                </div>
              </div>
              <div className="flex justify-between items-center mt-8">
               <AudioPlayer audioUrl={audioUrl} />
              </div>
            </div>
          </div>
          <div className="mx-8 py-4">
            
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
      {bookData.map((data, index) => (
        <AudioParts key={data.id} index={index} id={data.id} url={data.url}  />
      ) 
      )
      }
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
