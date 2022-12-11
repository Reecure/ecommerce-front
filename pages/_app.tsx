import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { store } from "../redux/store";
import "../assets/main.css";
import { FC } from "react";

const Noop = ({ children }: any) => <>{children}</>;

function MyApp({ Component, pageProps }: any & { Component: { Layout: FC } }) {
  const Layout = Component.Layout ?? Noop;

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
