const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

//console.log(JSON.stringify(contract.abi));

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network = "goerli", API_KEY);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    // Read smart contract init message
    const message = await helloWorldContract.message();
    console.log("The message is: " + message);

    // Update smart contract message
    // NOTE: .wait() ensures the script waits for the transaction to be mined on the blockchain before proceeding.
    //       Without it, the script may not be able to see the updated message value in the contract
    console.log("Updating the message...");
    const tx = await helloWorldContract.update("This is the new message - lucky yas aren't ballbags any more.");
    await tx.wait();

    // Read updated message
    const newMessage = await helloWorldContract.message();
    console.log("The new message is: " + newMessage);
}

main();