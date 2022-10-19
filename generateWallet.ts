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
    return newWallet.wallet;
}

createHotWallet().then(newWallet => {
    console.log('wallet base address: ', newWallet.coinSpecific().baseAddress);
    console.log('walletId: ', newWallet.id());
    console.log('wallet fee address: ', newWallet.coinSpecific().feeAddress);
});
