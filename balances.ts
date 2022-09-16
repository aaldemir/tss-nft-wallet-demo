import {bitgo, COIN, walletId} from './bitgo';

// Show wallet balances. Copied from https://developers.bitgo-dev.com/guides/wallets/view/balances
async function getWalletInstance(id: string) {
    return await bitgo.coin(COIN).wallets().get({ id });
}

async function getWalletNFTBalances(id: string) {
    const walletInstance = await bitgo.coin(COIN).wallets().get({ id, allTokens: true });
    return { ...walletInstance.toJSON().nfts, ...walletInstance.toJSON().unsupportedNfts };
}

async function getWalletTokenBalances(id: string) {
    const walletInstance = await bitgo.coin(COIN).wallets().get({ id, allTokens: true });
    return walletInstance.toJSON().tokens;
}

getWalletInstance(walletId).then(walletInstance => {
    console.log('Wallet ID:', walletInstance.id());
    console.log('Current Receive Address:', walletInstance.receiveAddress()); // equal to base address if no new addresses created
    console.log('Balance:', walletInstance.balanceString()); // base asset balance
    console.log('Confirmed Balance:', walletInstance.confirmedBalanceString()); // cumulative balance on the wallet (incl. receive addresses)
    console.log('Spendable Balance:', walletInstance.spendableBalanceString()); // balance on the base address that can be sent (not locked)
});

getWalletNFTBalances(walletId).then(balances => {
   console.log('NFT balances: ', balances);
});

getWalletTokenBalances(walletId).then(balances => {
    console.log('ERC20 balances: ', balances);
});

/*

Example NFT balance object

{
  '0xba4bfed386dac111866aa2369319f2c2daf454af': {
    type: 'ERC721',
    collections: { '2089': '1' },
    metadata: {
      name: 'tpolygon:name',
      tokenContractAddress: '0xba4bfed386dac111866aa2369319f2c2daf454af'
    },
    transferCount: 0
  }
}

 */
