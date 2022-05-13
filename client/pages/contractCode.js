import Nav from "../components/nav/Nav";
import { useState } from "react";
import { Link } from "@mui/material";

const ContractCode = () => {
  const [renderPageValue, setRenderPageValue] = useState(1);
  return (
    <>
      <Nav
        renderPageValue={renderPageValue}
        setRenderPageValue={setRenderPageValue}
      ></Nav>
      <div className="grid place-items-center">
        <div
          className="
          mt-24 
          md:mt-36
          mx-10 
          max-w-3xl 
          "
        >
          <h1 className="font-bold text-2xl text-center self-center">
            To view the contract and client code, please use this link
          </h1>
          <div className="flex justify-center items-center">
            <Link
              href="https://github.com/jloesch30/blockchain-demo-app/blob/main/client/blockchain/contracts/VerifiedV3.sol"
              sx={{ marginTop: 2, fontSize: 20 }}
            >
              Git Hub
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContractCode;
