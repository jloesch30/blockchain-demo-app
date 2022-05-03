import Nav from "../components/nav/Nav";
import { useState } from "react";

const ContractCode = () => {
  const [renderPageValue, setRenderPageValue] = useState(1);
  return (
    <Nav
      renderPageValue={renderPageValue}
      setRenderPageValue={setRenderPageValue}
    >
      <div>
        <p>Contract code on the way!</p>
      </div>
    </Nav>
  );
};
export default ContractCode;
