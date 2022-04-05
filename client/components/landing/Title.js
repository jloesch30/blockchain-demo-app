import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import placeholderJpeg from "../../public/assets/placeholder.jpeg";

const Title = () => {
  const linkToDemo = () => {
    alert("I dont go anywhere yet ;)");
  };
  return (
    <>
      <div className="bg-primaryFont fixed w-full top-0">
        <div className="grid place-content-start my-10 mx-10">
          <h1 className="text-white text-2xl md:text-3xl font-extrabold">
            About BlockedIn
          </h1>
        </div>
      </div>
      <div className="mt-40 mx-10 grid gap-5 grid-cols-2">
        <div className="col-span-2">
          <h2 className="text-2xl font-mono font-bold text-primaryFont">
            How does it work?
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ullam
            repellat dicta corrupti natus dignissimos est, provident at aut
            atque ea iste architecto sequi, suscipit, molestias id maiores odit
            quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            quod commodi eaque assumenda nemo eius laboriosam numquam sed
            repudiandae sint molestiae molestias, obcaecati beatae voluptates
            sit! Quibusdam debitis dignissimos dolorem? Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Vero, quisquam exercitationem
            veritatis qui tenetur distinctio commodi esse facere est aspernatur!
            Libero ad illum aliquid suscipit incidunt. Consequatur dolor
            accusantium dignissimos!
          </p>
        </div>
        <div className="flex justify-center items-center my-20 text-2xl font-bold text-primaryFont font-mono">
          <p>Technologies Involved</p>
        </div>
        <div>
          <Image src={placeholderJpeg}></Image>
        </div>
      </div>
      <div className="mx-10 my-10 grid grid-cols-1 place-items-center gap-5">
        <h1 className="text-2xl font-mono text-primaryFont font-bold underline-offset-8 underline">
          Try the Demo
        </h1>
        <Button onClick={linkToDemo} variant="contained">
          Follow me!
        </Button>
      </div>
    </>
  );
};

export default Title;
