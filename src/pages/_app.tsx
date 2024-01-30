import { type AppType } from "next/app";

import { api } from "kk/utils/api";

import "kk/styles/globals.css";
import { ChakraProvider } from '@chakra-ui/react'


const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
  <ChakraProvider>
  <Component {...pageProps} />
</ChakraProvider>
};

export default api.withTRPC(MyApp);
