import { useRouter } from "next/router";
import React from "react";

const Nav = ({ renderPageValue, setRenderPageValue }) => {
  const router = useRouter();
  const redirectToLanding = () => {
    router.push("/");
  };
  return (
    <div className="fixed top-0 w-full bg-primaryFont py-10 shadow-lg">
      <ul className="grid grid-cols-4 gap-1 place-items-center">
        <li onClick={redirectToLanding}>
          <h1
            className="
            text-white 
            text-2xl 
            md:text-3xl 
            font-extrabold 
            cursor-pointer"
          >
            BlockedIn
          </h1>
        </li>
        <li></li>
        <li
          onClick={() => setRenderPageValue(0)}
          className={`
          ${renderPageValue == 0 && "underline"}
          py-2
          px-2
          transition-all 
          hover:-translate-y-0.5 
          hover:underline 
          font-sans
          font-bold
          text-white 
          cursor-pointer
          text-lg`}
        >
          Home
        </li>
        <li
          onClick={() => setRenderPageValue(1)}
          className={`
          ${renderPageValue == 1 && "underline"}
          py-2
          px-2
          transition-all 
          hover:-translate-y-0.5 
          hover:underline 
          font-sans
          font-bold
          text-white 
          cursor-pointer
          text-lg
          `}
        >
          Contract Code
        </li>
      </ul>
    </div>
  );
};

export default Nav;
