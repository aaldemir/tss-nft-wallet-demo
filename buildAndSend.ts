import {bitgo, COIN, Environment, walletId} from './bitgo';
import {accessToken, walletPassphrase} from './secrets';

const environment =  Environment.CUSTOM;

interface PrebuildAndSignResponse {
    txRequestId: string, // id of internal document consisting of tx data
    txHash?: string, // on chain tx hash
}

async function auth(): Promise<void> {
    bitgo.authenticateWithAccessToken({ accessToken: accessToken[environment]});
    await bitgo.unlock({ otp: '000000', duration: 3600 });
}

async function send(walletId: string, recipient: string, baseUnitQuantity: string): Promise<PrebuildAndSignResponse> {

    const walletInstance = await bitgo.coin(COIN).wallets().get({ id: walletId });

    const res = await walletInstance.prebuildAndSignTransaction({
        isTss: true,
        recipients: [
            {
                amount: baseUnitQuantity,
                address: recipient,
                tokenData: {
                    tokenContractAddress: '0x252b4f5b517057db563e14cf7274b4467289fea8',
                    tokenType: 'ERC721',
                    tokenId: '3',
                    tokenQuantity: '1',
                }
            },
        ],
        type: 'transfertoken',
        walletPassphrase: walletPassphrase,
        feeOptions: {
            maxFeePerGas: '81130354893',
            maxPriorityFeePerGas: '71130354893',
        },
    });
    console.dir('Send response' + JSON.stringify(res, null, 2));
    return res;
}

async function main() {
    await auth();
    await send(walletId, '0xE514EE5028934565C3f839429Ea3c091EFE4C701','0');
}

main();
