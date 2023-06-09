import "../styles/styles.css";
import MainContainer from "../components/mainContainer";

export default function MyApp({ Component, pageProps }) {
  return(
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  )
}