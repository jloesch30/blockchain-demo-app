import SimpleBottomNavigation from "../components/nav/BottomNavigation";
import React, { useState } from "react";
import Nav from "../components/nav/Nav";
import useWindowSize from "../hooks/useWindowSize";
import Header from "../components/nav/Header";

const Demo = () => {
  const windowSize = useWindowSize();
  const [renderPageValue, setRenderPageValue] = useState(0);
  return (
    <>
      {windowSize.width > 600 && (
        <Nav
          renderPageValue={renderPageValue}
          setRenderPageValue={setRenderPageValue}
        ></Nav>
      )}
      {windowSize.width < 600 && (
        <>
          <Header></Header>
          <SimpleBottomNavigation
            renderPageValue={renderPageValue}
            setRenderPageValue={setRenderPageValue}
          ></SimpleBottomNavigation>
        </>
      )}
      <div></div>
    </>
  );
};

export default Demo;
