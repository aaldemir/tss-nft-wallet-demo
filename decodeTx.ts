import * as ethers from 'ethers';

const txHex = '0x02f90135830138818085108fb314cd8512e3bef8cd83030d4094a07e45a987f19e25176c877d98388878622623fa80b8c4f242432a000000000000000000000000ea4d6c34410bf6b604e349895bc0d9e36265f55700000000000000000000000025281016cb3dd8db8302cc6a61cf4afdffb8480f000000000000000000000000000000000000000000000000000000000000007b000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000c080a0ab31641301b64df2e0ad1cc1fd40b990992974bd6e5b60ee131f25bd35c4e068a02415fa0489306724b04793fe226a5f2e014392f1db1fa8bb906042c2011d1f4a';
console.log(ethers.utils.parseTransaction(txHex));