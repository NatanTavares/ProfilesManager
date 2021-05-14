import { Provider } from "next-auth/client";

import { GlobalStyle } from "../styles/globals";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
