import { run } from "hardhat";
import { tokenaddress, vestingaddress, allocationaddress } from '../cache/deploy';



async function main() {
  console.log('verifying contracts...');

  console.log("verifying token contract on etherscan..");
  await run('verify:verify', {
    address: `${tokenaddress}`,
    contract: "contracts/UbuntuToken.sol:UbuntuToken",
    constructorArguments: [],
  })
  console.log('verified');


  console.log("verifying vesting contract on etherscan..");
  await run('verify:verify', {
    address: `${vestingaddress}`,
    contract: "contracts/UbuntuVesting.sol:UbuntuVesting",
    constructorArguments: [
      `${tokenaddress}`
    ],
  })
  console.log('verified');

  console.log("verifying allocation contract on etherscan..");
  await run('verify:verify', {
    address: `${allocationaddress}`,
    contract: "contracts/UbuntuAllocation.sol:UbuntuAllocation",
    constructorArguments: [
      `${tokenaddress}`
    ],
  })
  console.log('verified');

  console.log('done verifying contracts');

}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
