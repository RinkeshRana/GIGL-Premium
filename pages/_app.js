import '../styles/globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import BookState from './context/bookState'
import AudioState from './context/audioState'
import AudioPlayerState from './context/audioPlayerState'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    <BookState>
      <AudioState>
      <AudioPlayerState>
  <Component {...pageProps} />
      </AudioPlayerState>
      </AudioState>
  </BookState>
  <Footer/>
  </>)
}

export default MyApp
