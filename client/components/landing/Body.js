import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import demoLogo from "../../public/assets/demo_logo.png";

const Body = ({ linkOutOfHome }) => {
  return (
    <>
      <div className="bg-primaryFont fixed w-full top-0">
        <div className="grid place-content-start my-10 mx-10">
          <h1 className="text-white text-2xl md:text-3xl font-extrabold">
            About BlockedIn
          </h1>
        </div>
      </div>
      <div className="mt-40 mx-10 grid gap-5 grid-cols-1 md:grid-cols-2 max-w-5xl md:mx-auto place-items-center">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-mono font-bold text-primaryFont">
            How does it work?
          </h2>
          <p className="max-w-3xl">
            <br />
            Welcome to BlockedIn! <br />
            <br />
            Here at BlockedIn we strive to create a platform where our members
            can easily add and certify professional credentials. Our system runs
            on the ethereum test net and once you connect your wallet to our
            application, we automatically link your certification wallet with
            our service and that&rsquo;s it! No more background checks &
            certificate documents. Welcome to the future of professional social
            platforms!
          </p>
        </div>
        <div className="flex justify-center items-center my-5 md:my-10 text-2xl font-bold text-primaryFont font-mono">
          <p>Technologies Involved</p>
        </div>
        <div className="relative -z-10">
          <Image src={demoLogo}></Image>
        </div>
      </div>
      <div className="mx-10 my-10 grid grid-cols-1 place-items-center gap-5">
        <h1 className="text-2xl font-mono text-primaryFont font-bold underline-offset-8 underline">
          Try the Demo
        </h1>
        <Button
          className="bg-blue-400"
          onClick={linkOutOfHome}
          variant="contained"
        >
          Follow me!
        </Button>
      </div>
    </>
  );
};

export default Body;
