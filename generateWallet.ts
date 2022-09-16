import {bitgo, COIN, enterpriseId, walletVersion, multisigType} from './bitgo';
import {walletPassphrase} from './secrets';

async function createHotWallet() {
    const walletCreationParams = {
        label: 'tss-polygon-nft-wallet',
        walletVersion,
        enterprise: enterpriseId,
        multisigType,
        passphrase: walletPassphrase,
    };
    const newWallet = await bitgo.coin(COIN).wallets().generateWallet(walletCreationParams);

    console.log(JSON.stringify(newWallet, undefined, 2));

    return newWallet.wallet;
}

let newWallet;
createHotWallet().then(wallet => {
    newWallet = wallet
    console.log('wallet base address: ', newWallet.coinSpecific().baseAddress);
    console.log('wallet fee address: ', newWallet.coinSpecific().feeAddress);
});
