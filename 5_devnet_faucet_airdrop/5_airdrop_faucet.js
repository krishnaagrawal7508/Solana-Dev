import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import "dotenv/config"
import { getKeypairFromEnvironment, airdropIfRequired } from "@solana-developers/helpers";

const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const keypair = getKeypairFromEnvironment("SECRET_KEY");

const balance_before = await connection.getBalance(keypair.publicKey);
console.log(`The balance of the account *BEFORE AIRDROP* ${keypair.publicKey} is ${balance_before/LAMPORTS_PER_SOL} solana`); 

await airdropIfRequired(
    connection,
    keypair.publicKey,
    2 * LAMPORTS_PER_SOL,          // airdrop amount
    10 * LAMPORTS_PER_SOL,         // balance should be below this
);

const balance_after = await connection.getBalance(keypair.publicKey);
console.log(`The balance of the account *AFTER AIRDROP* ${keypair.publicKey} is ${balance_after/LAMPORTS_PER_SOL} solana`); 
