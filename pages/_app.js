import BurpleSlider from '@components/BurpleSlider';
import '@styles/globals.css';

function Application({ Component, pageProps }) {
  return (
    <>
      <BurpleSlider />
      <Component {...pageProps} />
    </>
  );
}

export default Application;