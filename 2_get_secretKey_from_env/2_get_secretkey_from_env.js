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

// console.log(`The secret key is: `, base58.decode("3yRgLUG4ShSJhMqamdWTonGosZKAinm88NDobHDV3hQKJweLgCSKUkBzara6ADcwJu5Dy47VUq74zKuy87H824MF"));
// console.log(`The secret key is: `, base58.decode("4ywec7dSTQ9DuRoAiUVgZXkhdn6X4L9oiPxkLMnVReHtko7VEmhP58oCCRmXU8zJTPSeNrJFiKSGW4YAzzaSsqe7"));

