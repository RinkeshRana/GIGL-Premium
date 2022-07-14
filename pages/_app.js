import '../styles/globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import BookState from './context/bookState'
import AudioState from './context/audioState'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    <BookState>
      <AudioState>
  <Component {...pageProps} />
      </AudioState>
  </BookState>
  <Footer/>
  </>)
}

export default MyApp
