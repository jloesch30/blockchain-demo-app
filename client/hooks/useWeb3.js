import { useEffect, useState } from "react";
import Web3 from "web3";
import verifiedContract from "../blockchain/verified";

const useWeb3 = () => {
  const [web3, setWeb3] = useState();
  const [address, setAddress] = useState();
  const [vContract, setVContract] = useState();

  useEffect(() => {
    window.ethereum
      ? ethereum
          .request({ method: "eth_requestAccounts" })
          .then((accounts) => {
            setAddress(accounts[0]);
            let w3 = new Web3(ethereum);
            setWeb3(w3);
            const c = verifiedContract(w3);
            setVContract(c);
          })
          .catch((err) => {
            console.log(err);
          })
      : console.log("Please install metamask");
  }, []);
  return { web3, address, vContract };
};

export default useWeb3;
