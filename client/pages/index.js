import { useSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Body from "../components/landing/Body";
import SignOutButton from "../components/auth/SignOutButton";
import useWeb3 from "../hooks/useWeb3";

export default function Index() {
  const { data: session } = useSession();
  const router = useRouter();
  const { web3, address } = useWeb3();

  if (session) {
    console.log(session);
  }

  const loginOrRedirect = () => {
    if (session) {
      router.push("/demo");
      return;
    }

    signIn();
  };
  return (
    <div>
      <Head>
        <title>blockchain-demo</title>
        <meta name="description" content="Blockchain demo application" />
      </Head>
      {session && <SignOutButton></SignOutButton>}
      <main>
        <Body linkOutOfHome={loginOrRedirect}></Body>
      </main>
    </div>
  );
}
