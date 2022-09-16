// run with 'ts-node-esm index.ts'

const { BitGo } = require('@bitgo-beta/bitgo');
import {accessToken} from './secrets';

export enum Environment {
  TEST = 'test',
  CUSTOM = 'custom',
}

const rootURI = {
  test: 'https://app.bitgo-test.com',
}

export enum WalletVersion {
  TSS = 3,
}

export const enterprise = {
  [Environment.TEST]: ''
}

export const bitgo = new BitGo({
  accessToken: accessToken[Environment.TEST],
  env: Environment.TEST,
  customRootURI: rootURI.test,
});

export const walletVersion = WalletVersion.TSS;
export const multisigType = 'tss';
export const enterpriseId = enterprise[Environment.TEST];

export const walletId = '';
export const addressFromWallet = '';
// fee address:

export const COIN = 'tpolygon';
