# blockchain_lottery
Playing around with Solidity to build a lottery system. 

Dependencies Install
```
npm i 
```

**env Setup**

create a .env file and add the following on the current directory level
```
RINKEBY=https://rinkeby.infura.io/v3/0ef2fcd5e9bf41619f1e9d35f15c14bb
NUM={{your wallet security key - e.g. dog cat wolf mom ... }}
```

**Compile**
Compiles the code and creates the ABI (interface) and the bytecode. 
```
node compile.js
```

**Deploy**
Deploying to the eth network 
```
node compile.js
```

**Testing**
Testing interaction with the deployed - apparently this is the main way that developers interact with the contracts during development
```
npm run test 
```
