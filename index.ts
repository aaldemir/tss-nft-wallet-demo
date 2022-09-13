const { BitGo } = require('bitgo');
import {accessToken, walletPassphrase} from './secrets';

/*
Using the Wallet Kit
wallet type: hot wallet, on-chain multi-sig (not TSS)

*/

const bitgo = new BitGo({
    accessToken,
    env: 'custom',
    customRootURI: 'https://app.bitgo-test.com',
});
// goerli eth
const COIN = 'gteth'

// Generate hot wallet. Copied from https://developers.bitgo-dev.com/guides/wallets/create/wallets
async function createHotWalletSimple() {
    const newWallet = await bitgo.coin(COIN).wallets().generateWallet({
        // use nft-demo-1
        label: 'nft-demo-2',
        passphrase: walletPassphrase,
    });

    console.log(JSON.stringify(newWallet, undefined, 2));

    // return wallet baseAddress/rootAddress (as opposed to generating a receive address)
    // TODO is baseAddress right?
    return newWallet.wallet.coinSpecific().baseAddress;
}

// deposit NFTs of type ERC721 or ERC1155 (>= 2) to base address

// list NFTs

// ERC721 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// build tx to send NFT from base address https://developers.bitgo-dev.com/api/v2.wallet.tx.build
// check request/payload from UI when sending ERC721

// send NFT from base address https://developers.bitgo-dev.com/api/v2.wallet.tx.send

// PUNK - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
