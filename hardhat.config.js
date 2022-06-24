/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const { API_URL, PRIVATE_KEY, ETHERSCAN_KEY } = process.env;

module.exports = {
    solidity: "0.7.3",
    defaultNetwork: "goerli",
    networks: {
        hardhat: {},
        goerli: {
            url: API_URL,
            accounts: [`0x${PRIVATE_KEY}`]
        }
    },
    etherscan: {
        apiKey: "JDSQTUSJ95RUVBCV8QI5GWWQ7GVGSSNGBV"
    }
};
