import { createMint } from '@solana/spl-token';
import "dotenv/config"
import { getKeypairFromEnvironment,airdropIfRequired } from "@solana-developers/helpers";
import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';

const payer = getKeypairFromEnvironment("SECRET_KEY"); //pay for the transaction to create the token
const mintAuthority = Keypair.generate();  //has power to increase the mint, create new tokens
const freezeAuthority = Keypair.generate(); //has power to freeze these tokens

const connection = new Connection(
    clusterApiUrl('devnet'),
    'confirmed'
);

await airdropIfRequired(
    connection,
    payer.publicKey,
    1 * LAMPORTS_PER_SOL,          // airdrop amount
    10 * LAMPORTS_PER_SOL,         // balance should be below this
);

const balance_after = await connection.getBalance(payer.publicKey);

const mint = await createMint(
    connection,
    payer,
    mintAuthority.publicKey,
    freezeAuthority.publicKey,
    9 // We are using 9 to match the CLI decimal default exactly
);

console.log(mint.toBase58());
