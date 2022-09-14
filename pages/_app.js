import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Layout from '../components/Layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <div className=''>
        {getLayout(<Component {...pageProps} />)}
    </div>

  )

}

export default MyApp
