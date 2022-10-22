import {bitgo, COIN, environment, walletId} from './bitgo';
import {accessToken, walletPassphrase} from './secrets';

interface PrebuildAndSignResponse {
    txRequestId: string, // id of internal document consisting of tx data
    txHash?: string, // on chain tx hash
}

async function auth(): Promise<void> {
    bitgo.authenticateWithAccessToken({ accessToken: accessToken[environment]});
    await bitgo.unlock({ otp: '000000', duration: 3600 });
}

async function sendToken(params): Promise<PrebuildAndSignResponse> {
    const { walletId, baseUnitQuantity, recipient, tokenContractAddress, tokenType, tokenId, tokenQuantity, nonce } = params;

    const walletInstance = await bitgo.coin(COIN).wallets().get({ id: walletId });
    return await walletInstance.sendMany({
        isTss: true,
        recipients: [
            {
                amount: baseUnitQuantity,
                address: recipient,
                tokenData: {
                    tokenContractAddress,
                    tokenType,
                    tokenId,
                    tokenQuantity,
                }
            },
        ],
        type: 'transfertoken',
        walletPassphrase: walletPassphrase,
        feeOptions: {
            maxFeePerGas: '81130354893',
            maxPriorityFeePerGas: '71130354893',
        },
        nonce,
    });
}

async function send(params): Promise<PrebuildAndSignResponse> {
    if (params.tokenType) {
        return sendToken(params);
    }
    const { walletId, recipient, nonce, baseUnitQuantity } = params;
    const walletInstance = await bitgo.coin(COIN).wallets().get({ id: walletId });
    return await walletInstance.sendMany({
        isTss: true,
        recipients: [
            {
                amount: baseUnitQuantity,
                address: recipient,
            },
        ],
        type: 'transfer',
        walletPassphrase: walletPassphrase,
        feeOptions: {
            maxFeePerGas: '81130354893',
            maxPriorityFeePerGas: '71130354893',
        },
        nonce,
    });
}

async function main() {
    await auth();
    const res = await send(
        {
            walletId,
            //nonce: '0',
            recipient: '0xE514EE5028934565C3f839429Ea3c091EFE4C701',
            baseUnitQuantity: '0',
            tokenContractAddress: '0x252B4F5B517057dB563E14CF7274b4467289feA8',
            tokenId: '17',
            tokenType: 'ERC721', // ERC721, ERC1155, ERC20
            tokenQuantity: '1'
        });
    console.dir('Send response' + JSON.stringify(res, null, 2));
}

main();
