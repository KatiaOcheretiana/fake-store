import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { StrictMode } from "react";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App.tsx";
import Loader from "./components/Loader.tsx";
import "./index.css";
import { persistor, store } from "./lib/redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
