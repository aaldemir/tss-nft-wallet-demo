import {bitgo, COIN, walletId} from './bitgo';

// Show wallet balances. Copied from https://developers.bitgo-dev.com/guides/wallets/view/balances
async function getWalletInstance(id: string) {
    if (!id.length) {
        throw new Error('AFTER YOU GENERATE A WALLET, YOU NEED TO SET VARIABLE `walletId` IN bitgo.ts');
    }
    return await bitgo.coin(COIN).wallets().get({ id, allTokens: true });
}

async function getWalletNFTBalances(id: string) {
    const walletInstance = await getWalletInstance(id);
    const walletJSON = walletInstance.toJSON();
    // check ERC20 balances with walletJSON.tokens
    return { ...walletJSON.nfts, ...walletJSON.unsupportedNfts };
}

getWalletInstance(walletId)
    .then(walletInstance => {
    console.log('Wallet ID:', walletInstance.id());
    console.log('Current Receive Address:', walletInstance.receiveAddress()); // equal to base address if no new addresses created
    console.log('Balance:', walletInstance.balanceString()); // base asset balance
    console.log('Confirmed Balance:', walletInstance.confirmedBalanceString()); // cumulative balance on the wallet (incl. receive addresses)
    console.log('Spendable Balance:', walletInstance.spendableBalanceString()); // balance on the base address that can be sent (not locked)
})
    .catch(e => console.log(e.message));

getWalletNFTBalances(walletId)
    .then(balances => {
   console.log('NFT balances: ', balances);
})
    .catch(e => console.log(e.message));

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
