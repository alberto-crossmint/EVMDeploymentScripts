import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import 'dotenv/config'

const TEST_ACCOUNT_PRIVKEY = process.env.TEST_ACCOUNT_PRIVKEY!;

const zkSyncTestnet =
  process.env.NODE_ENV === "test"
    ? {
        url: "http://localhost:3050",
        ethNetwork: "http://localhost:8545",
        zksync: true,
      }
    : {
        url: "https://sepolia.era.zksync.dev",
        ethNetwork: "sepolia",
        zksync: true,
      };


const config: HardhatUserConfig = {
  solidity: "0.8.22",
  networks: {
    sepolia: {
      url: "https://blue-cold-film.ethereum-sepolia.quiknode.pro/" + process.env.SEPOLIA_API_KEY!,
      accounts: [TEST_ACCOUNT_PRIVKEY],
    },
    "chaos-staging-v3": {
      url: "https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix",
      accounts: [TEST_ACCOUNT_PRIVKEY],
    },
    zkSyncSepolia: zkSyncTestnet ,
  },
  etherscan:{
    apiKey: process.env.ETHERSCAN_API_KEY!,
    customChains: [
      {
        network: "chaos-staging-v3",
        chainId: 1351057110,
        urls: {
          apiURL: "https://staging-fast-active-bellatrix.explorer.staging-v3.skalenodes.com/api",
          browserURL: "https://staging-fast-active-bellatrix.explorer.staging-v3.skalenodes.com"
        }
      },
    ]
  },
  zksolc: {
    version: "latest", // Uses latest available in https://github.com/matter-labs/zksolc-bin/
    settings: {},
  },

};


module.exports = config;


export default config;
