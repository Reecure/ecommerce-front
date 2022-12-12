import { AppProps } from "next/app";
import "../public/tailwind.css";
import { FC } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

interface Props {
  children: React.ReactNode;
}

const Noop: FC<Props> = ({ children }) => <>{children}</>;

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
