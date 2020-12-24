import { NextComponentType } from "next";
import { Provider } from "next-auth/client";
import Head from "next/head";
import "../styles/globals.scss";

function MyApp({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  pageProps: { [key: string]: any };
}) {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <title>Mood Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
