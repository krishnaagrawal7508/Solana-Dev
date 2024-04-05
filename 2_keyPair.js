import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`The keypair is: `, keypair);
console.log(`---------------------------------------------------------------`);


console.log(`The public key is: `, keypair.publicKey);
console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`---------------------------------------------------------------`);


console.log(`The secret key is: `, keypair.secretKey);
console.log(`---------------------------------------------------------------`);