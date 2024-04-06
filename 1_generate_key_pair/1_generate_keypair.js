import { Keypair } from "@solana/web3.js";
import base58 from "bs58";

const keypair = Keypair.generate();

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);
console.log(`The secret key is: `, base58.encode(keypair.secretKey));
console.log(`✅ Finished!`);