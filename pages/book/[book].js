import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import BookContext from "../../context/bookContext";
import AudioParts from "../../components/AudioParts";
import AudioPlayer from "../../components/AudioPlayer";
import Head from "next/head";

const Book = (props) => {
  const router = useRouter();

  const { getBook } = useContext(BookContext);

  // audioUrl is the url of the all audio file
  let audioUrl = [];
  const bookData = props.bookData.url;
  for (const key in bookData) {
    audioUrl[key] = bookData[key].url;
  }
  // setCurrentAudio(audioUrl[0]);
  // getting user book
  const currentBook = getBook();

  useEffect(() => {
    if (currentBook.id === 0) {
      router.push("/");
    }
  }, []);

  return (
    <div className="w-full bg-slate-900">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>:: Welcome to GIGL ::</title>
        <meta
          name="facebook-domain-verification"
          content="61vbivju4za5lh5htup9kodzt22dtd"
        />
      </Head>
      <div className="flex items-center justify-center h-screen bg-red-lightest">
        <div className="bg-slate-800 mt-24 lg:mt-0  w-60 shadow-lg rounded-lg">
          <img
            className="w-full  rounded "
            src={`${currentBook.thumbnailUrl}`}
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
        <div className=" ml-40 h-3/4 w-2/4 bg-slate-800 hidden lg:block shadow-lg rounded-lg text-white overflow-auto ">
          <div className="p-4 text-justify">
            <div
              dangerouslySetInnerHTML={{ __html: currentBook.description }}
            />
          </div>
        </div>
      </div>
      <div className=" mx-auto h-96 w-4/5 bg-slate-800 mt-24 block lg:hidden shadow-lg rounded-lg text-white overflow-auto ">
        <div className="p-4 text-justify">
          <div dangerouslySetInnerHTML={{ __html: currentBook.description }} />
        </div>
      </div>
      <div>
        {bookData.map((data, index) => (
          <AudioParts key={data.id} index={index} id={data.id} url={data.url} />
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { book } = context.query;
  // if (book == "null") {
  //   return {
  //     props: { bookData: null }, // will be passed to the page component as props
  //   };
  // }
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
export default Book;
