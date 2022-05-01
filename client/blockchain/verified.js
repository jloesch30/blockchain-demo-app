// TODO: We are not going to use the infura node to sign this transaction (it cant)
// const provider = new Web3.providers.HttpProvider(
//   "https://rinkeby.infura.io/v3/0f860b9581664e3d915dade53555159f"
// );

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
      { internalType: "bool", name: "_valid", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_to", type: "address" }],
    name: "getUserCerts",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "address", name: "issuer", type: "address" },
          { internalType: "string", name: "itemName", type: "string" },
          { internalType: "string", name: "itemDescription", type: "string" },
          { internalType: "uint256", name: "valid_start", type: "uint256" },
          { internalType: "uint256", name: "valid_end", type: "uint256" },
          { internalType: "bool", name: "valid", type: "bool" },
        ],
        internalType: "struct VerifiedV2.Cert[]",
        name: "",
        type: "tuple[]",
      },
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

const verifiedContract = (web3) =>
  new web3.eth.Contract(abi, "0x4678B6fa8ad385322AF8aD91fbf4103f071D3c20");

export default verifiedContract;
