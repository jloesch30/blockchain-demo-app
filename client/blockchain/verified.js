import Web3 from "web3";

const provider = new Web3.providers.HttpProvider(
  "https://rinkeby.infura.io/v3/0f860b9581664e3d915dade53555159f"
);

const web3 = new Web3(provider);

const abi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "id", type: "uint256" },
      {
        indexed: false,
        internalType: "string",
        name: "itemName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "itemDescription",
        type: "string",
      },
    ],
    name: "certCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "certCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_id", type: "uint256" }],
    name: "getCertInfo",
    outputs: [
      { internalType: "address", name: "_issuer", type: "address" },
      { internalType: "address", name: "_owner", type: "address" },
      { internalType: "string", name: "_itemName", type: "string" },
      { internalType: "string", name: "_itemDescription", type: "string" },
      { internalType: "uint256", name: "_valid_start", type: "uint256" },
      { internalType: "uint256", name: "_valid_end", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_certId", type: "uint256" }],
    name: "isValid",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_certId", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "_itemName", type: "string" },
      { internalType: "string", name: "_itemDescription", type: "string" },
      { internalType: "address", name: "_to", type: "address" },
    ],
    name: "requestACert",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const vmcontract = new Web3.eth.Contract(
  abi,
  "0xb482A023e8B7f91b049a3c414839597AD095b53E"
);

export default vmcontract;
