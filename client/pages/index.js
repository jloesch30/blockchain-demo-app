import { useSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Body from "../components/landing/Body";
import SignOutButton from "../components/auth/SignOutButton";
import useWeb3 from "../hooks/useWeb3";
import axios from "axios";
import { useState } from "react";

export default function Index() {
  const { web3, address } = useWeb3(); // initialize web3 and make sure it is running
  const { data: session } = useSession();
  const router = useRouter();

  const loginOrRedirect = async () => {
    if (!address) {
      alert("Please login to Metamask to continue to the demo");
      return;
    }

    if (session) {
      await axios
        .get("/api/profile/getOrCreate")
        .then((res) => {
          console.log(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
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
