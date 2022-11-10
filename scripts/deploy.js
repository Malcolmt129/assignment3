// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
async function main() {
  const [owner, randomPerson1, randomPerson2, randomPerson3, randomPerson4, randomPerson5] = await hre.ethers.getSigners();
  const assignment = await hre.ethers.getContractFactory("careerfair");
  const assignmentContract = await assignment.deploy();
  await assignmentContract.deployed();
  console.log("Contract deployed to: ", assignmentContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

