import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  FluentProvider,
  teamsLightTheme,
  teamsDarkTheme,
} from "@fluentui/react-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FluentProvider theme={teamsDarkTheme}>
      <Component {...pageProps} />
    </FluentProvider>
  );
}
