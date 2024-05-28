import { AccountLayout, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

//this shows address of token or minted nft with balance>0 and amount owned by wallet

(async () => {

    const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');

    const tokenAccounts = await connection.getTokenAccountsByOwner(
        new PublicKey('DrwbtVMaxvvNisf4ZRtVUwHvbanRF3FuQNhEnU65wWWC'),
        {
            programId: TOKEN_PROGRAM_ID,
        }
    );

    console.log("Token                                         Balance");
    console.log("------------------------------------------------------------");
    tokenAccounts.value.forEach((tokenAccount) => {
        const accountData = AccountLayout.decode(tokenAccount.account.data);
        if (accountData.amount > 0) {
            console.log(`${new PublicKey(accountData.mint)}   ${accountData.amount}`);
        }
    })

})();