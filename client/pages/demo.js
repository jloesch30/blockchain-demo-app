import SimpleBottomNavigation from "../components/nav/BottomNavigation";
import React, { useState } from "react";
import Nav from "../components/nav/Nav";
import useWindowSize from "../hooks/useWindowSize";
import Header from "../components/nav/Header";
import Home from "../components/demo/Home";

const Demo = () => {
  const windowSize = useWindowSize();
  const [renderPageValue, setRenderPageValue] = useState(0);
  return (
    <>
      <Nav
        renderPageValue={renderPageValue}
        setRenderPageValue={setRenderPageValue}
      ></Nav>
      {/* Content of the page here */}
      <Home></Home>
    </>
  );
};

export default Demo;
