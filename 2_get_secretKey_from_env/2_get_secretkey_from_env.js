import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import base58 from "bs58";

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);
console.log(keypair);
console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, base58.encode(keypair.secretKey));