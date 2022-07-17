import "../styles/globals.css";
import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import BookState from "../context/BookState";
import AudioState from "../context/AudioState";
import AudioPlayerState from "../context/AudioPlayerState";
import LoadingBar from "react-top-loading-bar";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
  }, []);

  return (
    <>
      <LoadingBar
        color="#E5E7EB"
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <BookState>
        <AudioState>
          <AudioPlayerState>
            <Component {...pageProps} />
          </AudioPlayerState>
        </AudioState>
      </BookState>
      <Footer />
    </>
  );
}

export default MyApp;
