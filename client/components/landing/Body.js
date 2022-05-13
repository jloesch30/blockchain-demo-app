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
            Why was it designed?
          </h2>
          <p className="max-w-3xl">
            <br />
            BlockedIn is a{" "}
            <span className="font-medium text-primaryFont">
              proof of concept
            </span>{" "}
            when thinking about{" "}
            <span className="font-medium text-primaryFont">
              credential management.{" "}
            </span>{" "}
            This project was created to demonstrate the ease of use and possible
            functionalities available in this line of technology. In addition,
            many people are not familiar with the implications of blockchain
            outside of crypto currency or NFTs such as digital art; Not only did
            we want to demonstrate the vast usability of blockchain technology,
            but we hope that this demonstration allows individuals to feel
            conformable in this emerging ecosystem. <br />
            <br />
            The subject matter of this application is to demonstrate the use of
            credential verification in a distributed manner. In a world were
            certifications are essential in pursuing careers and other
            opportunities we wanted to create a technology that allows users to
            own their credentials. In doing so, regardless of what system or
            technology the user consumes, their certifications follow them and
            can be validated by interested parties. Resumes will no longer just
            be plain text that recruiters have to track down validations, they
            will be living documents that contain data regarding each
            credential.
          </p>
          <h2 className="text-2xl font-mono font-bold text-primaryFont mt-8">
            How does it work?
          </h2>
          <p className="max-w-3xl">
            <br />
            Surprisingly, building Web3 applications utilizes a lot of the same
            skills and techniques that are used when making that applications we
            know and love. In this case, the application you are looking at now
            was built on top of Next.js, a framework utilizing React that has
            built in server side rendering methods. This is particularly useful
            for dynamic applications that interact with APIs, databases, or
            other behind the scenes logic that power a user experience. The
            Next.js application is utilizing the Web3.js library, essential to
            connecting with wallets such as MetaMask or Coinbase. This is why
            you were asked to install Metamask on your computer when first
            visiting the site, or why the Metamask wallet opened in a separate
            window prompting you to connect to the domain. Once connected, you
            are ready to use the app as intended by sending transactions to a
            smart contract deployed to the Rinkeby test network to receive
            certifications for your user items. The only central database used
            to power this app is for inital login (to prevent bots) and to store
            users and their associated non-verified information such as name,
            bio, etc.
          </p>
          <h2 className="text-2xl font-mono font-bold text-primaryFont mt-8">
            Why do we request that you login to Github?
          </h2>
          <p className="max-w-3xl">
            <br />
            Due to this application being a demo, we use Github to track the
            amount of users submitted to our smart contract as to correctly show
            the flow of interaction. Github is used only to store off-chain
            information such as non-verified skills and resume items, as well as
            the total number of created users.
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
