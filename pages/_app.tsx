import { AppProps } from 'next/app'
import 'react-toastify/dist/ReactToastify.css';
import '../styles/global.css'
import { AppProvider } from "../context/appContext"
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <ToastContainer position="bottom-right" />
    </AppProvider>
  )
    
}
