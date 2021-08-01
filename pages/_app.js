import '../styles/globals.css'
import NavBar from "../components/NavBar/NavBar";
import {Box} from "@material-ui/core";
import {Image} from "@material-ui/icons";

function MyApp({ Component, pageProps }) {
  return (
  <>


    <NavBar />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
