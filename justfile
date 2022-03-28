default:
	echo 'Hello, world!'
compile:
	npx hardhat compile
deploy-localhost:
	npx hardhat run --network localhost scripts/deploy.ts
start:
	npx hardhat node
deploy-testnet:
	npx hardhat run scripts/deploy.ts --network ropsten
verify:
	npx hardhat run scripts/verify.ts --network ropsten
verify-quick:
	echo npx hardhat verify "0xC42a11402F56bB5f3d97Ee6980F5F078E7D306Fd" --network ropsten --contract contracts/Ubuntu.sol:Ubuntu
test:
	npx hardhat test

