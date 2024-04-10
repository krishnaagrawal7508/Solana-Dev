import {
    Connection,
    Transaction,
    SystemProgram,
    sendAndConfirmTransaction,
    PublicKey,
} from "@solana/web3.js";
import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers";


const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const privateKey = getKeypairFromEnvironment("SECRET_KEY");
const recipientAddress = "DrwbtVMaxvvNisf4ZRtVUwHvbanRF3FuQNhEnU65wWWC";

if (!privateKey || !recipientAddress) {
    console.error('Missing PRIVATE_KEY or RECIPIENT_ADDRESS in the .env file');
    process.exit(1);
}

const toPubkey = new PublicKey(recipientAddress);

const sol = 1000000000;
const minSolana = 0.003;
const minSolanaLamports = minSolana * sol;

const getBalance = async (publicKey) => {
    const balance = await connection.getBalance(publicKey);
    return balance;
};

const transfer = async (lamports_to_send) => {
    const transaction = new Transaction();

    const sendSolInstruction = SystemProgram.transfer({
        fromPubkey: privateKey.publicKey,
        toPubkey,
        lamports: lamports_to_send,
    });

    transaction.add(sendSolInstruction);

    const signature = await sendAndConfirmTransaction(connection, transaction, [
        privateKey,
    ]);

    return signature;
};

const printInfo = (message) => {
    console.log(message);
};

const transferAllFund = async () => {
    while (true) {
        try {
            const balanceMainWallet = await getBalance(privateKey.publicKey);
            const balanceLeft = balanceMainWallet - minSolanaLamports;

            if (balanceLeft < 0) {
                console.log('Not enough balance to transfer');
            } else {
                console.log('Wallet A balance: ' + balanceMainWallet);

                const signature = await transfer(balanceLeft);

                const balanceOfWalletB = await getBalance(toPubkey);
                console.log(`Transaction signature is ${signature}!`);
                console.log('Wallet B balance', balanceOfWalletB);
            }

            // Add a delay before the next transfer (adjust as needed), {speed} :D
            await new Promise((resolve) => setTimeout(resolve, 10 * 10));
        } catch (error) {
            printInfo('Error during transfer: ' + error.message);
        }
    }
};

transferAllFund();