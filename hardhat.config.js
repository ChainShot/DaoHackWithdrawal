require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.4.25",
  networks: {
    hardhat: {
      forking: {
        url: process.env.FORKING_URL,
        blockNumber: 11236709
      }
    }
  }
};
