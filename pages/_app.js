// pages/_app.js

import '../styles/normalize.css';
import '../styles/hamburgers.css';
import '../styles/styles.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
