import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));  //mainnet-beta, testnet, devnet
const address = new PublicKey('DrwbtVMaxvvNisf4ZRtVUwHvbanRF3FuQNhEnU65wWWC');
// const address = new PublicKey('HWrVDR5YDF5ZXrvEuSNqPf6ofK1ApMkFxpDJ2fbTFGNb');
const balance = await connection.getBalance(address);

console.log(`The balance of the account at ${address} is ${balance} Lamports`); 
console.log(`The balance of the account at ${address} is ${balance/LAMPORTS_PER_SOL} solana`); 
console.log(`✅ Finished!`)