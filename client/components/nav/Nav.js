import { useRouter } from "next/router";
import Header from "./Header";
import SimpleBottomNavigation from "./BottomNavigation";
import React, { useContext, useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import AuthContext from "../../store/auth-context";

const Nav = ({ renderPageValue, setRenderPageValue }) => {
  const router = useRouter();
  const windowSize = useWindowSize();
  const ctx = useContext(AuthContext);

  const redirectToLanding = () => {
    router.push("/");
  };

  const handleHomeClick = () => {
    router.push("/demo");
  };

  const handleContractCodeClick = () => {
    router.push("/contractCode");
  };

  return (
    <>
      {windowSize.width > 768 && (
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
              onClick={() => {
                handleHomeClick();
              }}
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
              onClick={() => {
                handleContractCodeClick();
              }}
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
      )}
      {windowSize.width < 768 && (
        <>
          <Header></Header>
          <SimpleBottomNavigation
            handleContractCodeClick={handleContractCodeClick}
            handleHomeClick={handleHomeClick}
            renderPageValue={renderPageValue}
            setRenderPageValue={setRenderPageValue}
          ></SimpleBottomNavigation>
        </>
      )}
    </>
  );
};

export default Nav;
