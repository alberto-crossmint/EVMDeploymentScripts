# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

```
npx hardhat console --network sepolia 
const Token = await ethers.getContractFactory("Evm721Starter")
const token = await Token.attach("0x20CD6791425dE8f0530f69981768fF663eAc76A0")
resp = await token.mint("0xAF3aC30f94dc04Be2915862BD014B789196B623e", 3, {value: "3000000000000000"})
```

```
npx hardhat deploy-zksync --script deploy_zksync.ts --network zkSyncSepolia
```
