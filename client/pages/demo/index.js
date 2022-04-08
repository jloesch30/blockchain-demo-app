import BottomNavigation from "../../components/nav/BottomNavigation";
import React, { useState } from "react";
import Nav from "../../components/nav/Nav";
import useWindowSize from "../../hooks/useWindowSize";

const index = () => {
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
      <div>
        <div>{/*display profiles to view*/}</div>
        {renderPageValue == 0 && <p>Hello there</p>}
      </div>
      {windowSize.width < 600 && (
        <BottomNavigation
          renderPageValue={renderPageValue}
          setRenderPageValue={setRenderPageValue}
        ></BottomNavigation>
      )}
    </>
  );
};

export default index;
