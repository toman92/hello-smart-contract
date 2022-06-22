# Etherium Blockchain smart contract

## Getting started
Pull down project, cd into project and run ```npm i``` to install dependencies 

## Environment setup
Rename `.env-sample` to `.env`  
1. Create Alchemy account and create an app. 
2. Add Alchemy app API key to `API_URL` variable  
3. Create Metamask account
    1. switch network to Goerli (testnet)
    2. Export private key (heed warnings!) 
4. Add metamask wallet private key to `PRIVATE_KEY` variable

## Compile Contract  
`npx hardhat compile`  

## Deploy Contract
`npx hardhat run scripts/deploy.js --network goerli`  
The contract address should be outputted to the console. Copy this

## Check deployment successful
Go to [Goerli etherscan](https://goerli.etherscan.io/) and search for the contract address.  
You should see the From address (Metamask account address) and To address (Contract Creation). If we click into Contract creation on the To address them we will see the Contract address.

## First smart contract now compiled and deployed :D
