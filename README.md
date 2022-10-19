# Demo: NFTs with TSS Wallets

This project contains scripts which leverage the BitGoJS SDK (sdk-core) to create a wallet, view balances on the wallet,
and transfer NFTs from the wallet.

### Additional resources:
- BitGo Developer Portal (create an account/enterprise): https://developers.bitgo.com/sign-up
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
