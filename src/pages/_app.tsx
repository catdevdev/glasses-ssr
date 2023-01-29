import "@/app/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { setupStore, wrapper } from "../app/store/store";

// const store = setupStore();

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
