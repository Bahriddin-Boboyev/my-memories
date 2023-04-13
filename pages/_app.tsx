import "@/styles/globals.css";
import "../styles/app.scss";
import type { AppProps } from "next/app";
import axios from "axios";

axios.interceptors.request.use((request): any => {
  console.log(request);
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
