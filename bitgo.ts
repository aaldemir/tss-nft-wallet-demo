// run with 'npx ts-node <filename>.ts'

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

export const environment =  Environment.TEST;

export const bitgo = new BitGo({
  accessToken: accessToken[environment],
  env: environment,
  customRootURI: rootURI.test,
});

// TODO set enterprise ID here
export const enterprise = {
  [Environment.TEST]: '6351ac65400e890007ad91703096a880'
}
export const walletId = '';


export const walletVersion = WalletVersion.TSS;
export const multisigType = 'tss';
export const enterpriseId = enterprise[environment];

export const COIN = 'tpolygon';
