import Web3 from "web3";

window.ethereum.request({ method: "eth_requestAccount" });

const web3 = new Web3(window.ethereum);

module.exports = {
  web3,
};
