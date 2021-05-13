import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";

// import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
            rel="stylesheet"
          />

          <title>Profiles Manager</title>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
