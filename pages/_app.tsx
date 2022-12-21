// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

import Layout from "../components/layouts/default";

import "styles/globals.css";

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
}) {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
