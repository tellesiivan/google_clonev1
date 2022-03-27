import Layout from "../components/Layout";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

// on pageProps => we also pass a session
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    // wrap the components with SessionProvider and pass session={session} as props
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
