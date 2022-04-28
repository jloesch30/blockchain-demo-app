import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../components/loading/Loading";
import { AppWrapper, AuthContextProvider } from "../store/auth-context";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("finished");
      setLoading(false);
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <AuthContextProvider>
      <SessionProvider session={session}>
        {loading ? (
          <div className="flex flex-col justify-center items-center">
            <Loading type={"bars"} color={"#0274B3"}></Loading>
          </div>
        ) : (
          <>
            <Component {...pageProps} />
          </>
        )}
      </SessionProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
