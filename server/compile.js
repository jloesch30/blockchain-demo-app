// Compiles the sol file and exports 

const path = require("path");
const fs = require("fs");
const solc = require("solc");

// Accessing the file on harddrive
const lotteryPath = path.resolve(__dirname, "contracts", "Lottery.sol");
const source = fs.readFileSync(lotteryPath, "utf8");

// Exporting Inbox Contract
module.exports = solc.compile(source, 1).contracts[ ":Lottery" ];
