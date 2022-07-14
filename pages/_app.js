import '../styles/globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import BookState from './context/bookState'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <BookState>
    <Navbar />
  <Component {...pageProps} />
  <Footer/>
  </BookState>
  </>)
}

export default MyApp
