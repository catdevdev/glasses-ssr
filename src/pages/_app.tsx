import "@/app/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { setupStore, wrapper } from "../app/store/store";

// const store = setupStore();

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
};

export default App;
