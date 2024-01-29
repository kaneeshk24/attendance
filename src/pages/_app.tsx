import { type AppType } from "next/app";

import { api } from "kk/utils/api";

import "kk/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
