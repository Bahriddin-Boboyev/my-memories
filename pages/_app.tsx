import "@/styles/globals.css";
import "../styles/app.scss";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";
import AppContext from "@/context/app-context";

export default function App({ Component, pageProps }: AppProps) {
  const [nameContext, setNameContext] = useState(false);
  return (
    <AppContext.Provider value={{ nameContext, setNameContext }}>
      <Component {...pageProps} />;
    </AppContext.Provider>
  );
}
