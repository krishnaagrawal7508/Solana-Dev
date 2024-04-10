import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));  //mainnet-beta, testnet, devnet
const address1 = new PublicKey('DrwbtVMaxvvNisf4ZRtVUwHvbanRF3FuQNhEnU65wWWC');
const address2 = new PublicKey('HWrVDR5YDF5ZXrvEuSNqPf6ofK1ApMkFxpDJ2fbTFGNb');
const balance1 = await connection.getBalance(address1);
const balance2 = await connection.getBalance(address2);

console.log(`The balance of the account at ${address1} is ${balance1} Lamports`); 
console.log(`The balance of the account at ${address1} is ${balance1/LAMPORTS_PER_SOL} solana`); 
console.log(`✅ Finished!`)

console.log(`The balance of the account at ${address2} is ${balance2} Lamports`); 
console.log(`The balance of the account at ${address2} is ${balance2/LAMPORTS_PER_SOL} solana`); 
console.log(`✅ Finished!`)