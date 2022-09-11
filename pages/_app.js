import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className=''>
      <Header/>
      <Component {...pageProps} />
    </div>
  )

}

export default MyApp
