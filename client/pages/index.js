import { useSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Body from "../components/landing/Body";
import SignOutButton from "../components/auth/SignOutButton";

export default function Index() {
  const { data: session } = useSession();
  const router = useRouter();

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
