import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { SideBarProvider } from "../hooks/system/useSideBar";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextUIProvider>
        <SideBarProvider>
          <Component {...pageProps} />
        </SideBarProvider>
      </NextUIProvider>
    </>
  );
}

export default MyApp;
