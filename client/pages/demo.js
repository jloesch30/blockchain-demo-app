import SimpleBottomNavigation from "../components/nav/BottomNavigation";
import React, { useState } from "react";
import Nav from "../components/nav/Nav";
import useWindowSize from "../hooks/useWindowSize";

const Demo = () => {
  const windowSize = useWindowSize();
  const [renderPageValue, setRenderPageValue] = useState(-1);
  return (
    <>
      {windowSize.width > 600 && (
        <Nav
          renderPageValue={renderPageValue}
          setRenderPageValue={setRenderPageValue}
        ></Nav>
      )}
      <div></div>
      {windowSize.width < 600 && (
        <SimpleBottomNavigation
          renderPageValue={renderPageValue}
          setRenderPageValue={setRenderPageValue}
        ></SimpleBottomNavigation>
      )}
    </>
  );
};

export default Demo;
