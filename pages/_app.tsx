import { Provider } from "next-auth/client";
import { FormModalProvider } from "../hooks/FormModalContext";

import { GlobalStyle } from "../styles/globals";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <Provider session={pageProps.session}>
        <FormModalProvider>
          <Component {...pageProps} />
        </FormModalProvider>
      </Provider>
    </>
  );
}

export default MyApp;
