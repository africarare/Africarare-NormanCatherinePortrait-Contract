import * as fs from 'fs';
import { ethers } from "hardhat";
async function main() {
  console.log("deploying token contract");
  const Token = await ethers.getContractFactory("UbuntuToken");
  const token = await Token.deploy();
  await token.deployed();
  console.log(`token contract deployed to ${token.address}`)

  console.log('deploying vesting contract');
  const Vesting = await ethers.getContractFactory("UbuntuVesting");
  const vesting = await Vesting.deploy(token.address);
  await vesting.deployed();
  console.log(`vesting contract deployed to ${vesting.address}`)


  console.log('deploying allocation contract');
  const Allocation = await ethers.getContractFactory("UbuntuAllocation");
  const allocation = await Allocation.deploy(token.address);
  await allocation.deployed();
  console.log(`allocation contract deployed to ${allocation.address}`)


  console.log('saving contract addresses to cache/deploy.ts');
  let deployments = `
  export const tokenaddress = "${token.address}"
  export const vestingaddress = "${vesting.address}"
  export const allocationaddress = "${allocation.address}"
  `

  let data = JSON.stringify(deployments)
  fs.writeFileSync('cache/deploy.ts', JSON.parse(data))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
