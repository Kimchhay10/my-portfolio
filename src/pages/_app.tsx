import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { SideBarProvider } from "../hooks/system/useSideBar";
import {appWithTranslation} from 'next-i18next'
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

export default appWithTranslation(MyApp);
