# Getting Started

Playing around with Solidity to build a lottery system.

**1. Dependencies Install**

```
npm i
```

**2. env Setup**

create a `.env` file and add the following on the current directory level

```
RINKEBY=https://rinkeby.infura.io/v3/0ef2fcd5e9bf41619f1e9d35f15c14bb
NUM={{your wallet security key - e.g. dog cat wolf mom ... }}
```

You can get your security key through the settings page in your metamask as below:

<img width="360" alt="image" src="https://user-images.githubusercontent.com/45672828/164567221-3d057d51-ce64-443b-a426-f5c24f267762.png">

**3. Compile**

Compiles the code and creates the ABI (interface) and the bytecode.

```
node compile.js
```

**4. Deploy**

Deploying to the eth network & creates the ABI.json file for FE to interact with the deployed contract

```
node compile.js
```

**5. Testing**

Testing interaction with the deployed - apparently this is the main way that developers interact with the contracts during development

```
npm run test
```

# Getting More Test Eth

Link: https://faucets.chain.link/rinkeby <img width="489" alt="image" src="https://user-images.githubusercontent.com/45672828/164566914-67b1e281-0c38-4ad1-9b74-2bf002d522f0.png">
