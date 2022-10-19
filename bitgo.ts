// run with 'ts-node-esm index.ts'

const { BitGo } = require('@bitgo-beta/bitgo');
import {accessToken} from './secrets';

export enum Environment {
  TEST = 'test',
  CUSTOM = 'custom',
}

const rootURI = {
  test: 'https://app.bitgo-test.com',
  custom: 'https://testnet-10-app.bitgo-dev.com',
}

export enum WalletVersion {
  TSS = 3,
}

export const environment =  Environment.CUSTOM;

export const bitgo = new BitGo({
  accessToken: accessToken[environment],
  env: environment,
  customRootURI: rootURI.custom,
});

// TODO set enterprise ID here
export const enterprise = {
  [Environment.CUSTOM]: '63502a2ede81e00007f33ebe5e39bb58'
}

export const walletVersion = WalletVersion.TSS;
export const multisigType = 'tss';
export const enterpriseId = enterprise[environment];

// TODO set walletId and baseAddress here after wallet generation
export const walletId = '';
export const addressFromWallet = '';
// fee address:

export const COIN = 'tpolygon';
