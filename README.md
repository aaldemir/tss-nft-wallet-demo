# Demo: NFTs with TSS Wallets

This project contains scripts which leverage the BitGoJS SDK (sdk-core) to create a wallet, view balances on the wallet,
and transfer NFTs to and from the wallet.

### Demo Overview

1. We will create a BitGo wallet for the Polygon Testnet (named Mumbai Testnet).
2. A browser extension wallet is needed to interact with Polygonscan. Within Polygonscan (linked in Additional Resources below),
we will mint (transfer) an NFT to the BitGo wallet's address.
3. Once the NFT is minted to the BitGo wallet, we can view balances and transfer the NFT.

A browser extension wallet (like Metamask) will be used to mint an NFT through Polygonscan to a BitGo multi-sig (TSS) wallet.
BitGo wallets can not directly connect to "dApps", therefore we use metamask to connect to a dApp in this case.
If you are curious how BitGo wallets can connect to dApps, check out BitGo's integration
with Metamask Institutional (MMI)!

### Demo Prerequisites

1. nvm 14.17.5 installed
   ```
   // install nvm
   curl -sL https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh -o install_nvm.sh
   // install v 14.17.5
   nvm install 14.17.5
   ```
2. Have a browser extension wallet like Metamask installed
   1. You can install metamask for Chrome at https://metamask.io/download/
3. After Metamask is installed you will need to add Polygon's Mumbai Testnet to the wallet
   1. 1 minute set up following instructions from [Connect Metamask to Polygon Testnet using Chainlist](https://medium.com/stakingbits/how-to-connect-polygon-mumbai-testnet-to-metamask-fc3487a3871f#:~:text=Head%20over%20to%20Chainlist%20and,the%20Mumbai%20Testnet%20in%20Metamask.)
   2. Make sure the Metamask wallet is funded (to pay for gas). Use the [MATIC faucet](https://faucet.polygon.technology/) to deposit testnet MATIC into your Metamask wallet.

### Project Setup and Scripts

```
// clone repo
git clone https://github.com/aaldemir/tss-nft-wallet-demo.git
cd tss-nft-wallet-demo

// use the proper nvm version
nvm use 14.17.5

// install necessary node packages
npm install

// execute script to generate a wallet
// once you generate a wallet, copy the `walletId` into bitgo.ts
npx ts-node generateWallet.ts

// after you mint an NFT to the wallet you can view balances by executing the balances.ts script
npx ts-node balances.ts

// execute script to transfer the NFT
npx ts-node buildAndSend.ts
```

### Additional resources:
- Create an account & enterprise with [BitGo Developer Portal](https://developers.bitgo.com/sign-up)
  - THIS IS NOT NEEDED IF YOU ARE FOLLOWING THE DEMO AND USING THIS REPO - you will need to add the remaining portion of the accessToken

    1. sign up for an account (test account)
    2. sign in after account creation
    3. in the app (app.bitgo-test.com) retrieve an API token
       1. click on "Settings" on the left panel
       2. click on "Developer Options" on the left panel
       3. fill out information and check all boxes for "Permission"
       4. click "Add Access Token"
       5. copy access token and paste it into `secrets.ts` (create file secret.ts if needed)
    4. retrieve Enterprise Id and paste it into `bitgo.ts` within the `enterprise` object
       1. click on "Settings" on the left panel
       2. on the "Accounts and Preferences" tab, you will see "Enterprise ID:"

- NFT Faucet: https://mumbai.polygonscan.com/address/0x252b4f5b517057db563e14cf7274b4467289fea8#writeContract
  - You will need an extension wallet to interact with the polygonscan app
- MATIC Faucet: https://faucet.polygon.technology/
  - Deposit some MATIC into your new TSS wallet so that you can pay for gas
