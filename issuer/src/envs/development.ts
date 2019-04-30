/*
 * Used when running ganache:
 *
 * Run with:
 *   ganache-cli --port 9545 --deterministic
 */

import { JsonRpcProvider, Provider } from 'ethers/providers';
import { Wallet } from 'ethers/wallet';
import { EnvVariables } from '.';

/**
 * Accounts:
 * (0) addr: 0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1 pk: 0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d
 * (1) addr: 0xffcf8fdee72ac11b5c542428b35eef5769c409f0 pk: 0x6cbed15c793ce57650b9877cf6fa156fbef513c4e6134f022a85b1ffdd59b2a1
 * (2) addr: 0x22d491bde2303f2f43325b2108d26f1eaba1e32b pk: 0x6370fd033278c143179d81c5526140625662b8daa446c22ee2d73db3707e620c
 * (3) addr: 0xe11ba2b4d45eaed5996cd0823791e0c93114882d pk: 0x646f1ce2fdad0e6deeeb5c7e8e5543bdde65e86029e2fd9fc169899c440a7913
 * (4) addr: 0xd03ea8624c8c5987235048901fb614fdca89b117 pk: 0xadd53f9a7e588d003326d1cbf9e4a43c061aadd9bc938c843a79e7b4fd2ad743
 * (5) addr: 0x95ced938f7991cd0dfcb48f0a06a40fa1af46ebc pk: 0x395df67f0c2d2d9fe1ad08d1bc8b6627011959b79c53d7dd6a3536a33ab8a4fd
 * (6) addr: 0x3e5e9111ae8eb78fe1cc3bb8915d5d461f3ef9a9 pk: 0xe485d098507f54e7733a205420dfddbe58db035fa577fc294ebd14db90767a52
 * (7) addr: 0x28a8746e75304c0780e011bed21c72cd78cd535e pk: 0xa453611d9419d0e56f499079478fd72c37b251a94bfde4d19872c44cf65386e3
 * (8) addr: 0xaca94ef8bd5ffee41947b4585a84bda5a3d3da6e pk: 0x829e924fdf021ba3dbbc4225edfece9aca04b929d6e75613329ca6f1d31c0bb4
 * (9) addr: 0x1df62f291b2e969fb0849d99d9ce41e2f137006e pk: 0xb0057716d5917badaf911b193b12b910811c1497b5bada8d7711f758981c3773
 */

const provider: Provider = new JsonRpcProvider('http://localhost:9545');

const poapAdmin = new Wallet('0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d');

const poapAddress = '0xBe0B0f08A599F07699E98A9D001084e97b9a900A';

const testAccounts = [
  new Wallet('0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d'),
  new Wallet('0x6cbed15c793ce57650b9877cf6fa156fbef513c4e6134f022a85b1ffdd59b2a1'),
  new Wallet('0x6370fd033278c143179d81c5526140625662b8daa446c22ee2d73db3707e620c'),
  new Wallet('0x646f1ce2fdad0e6deeeb5c7e8e5543bdde65e86029e2fd9fc169899c440a7913'),
  new Wallet('0xadd53f9a7e588d003326d1cbf9e4a43c061aadd9bc938c843a79e7b4fd2ad743'),
  new Wallet('0x395df67f0c2d2d9fe1ad08d1bc8b6627011959b79c53d7dd6a3536a33ab8a4fd'),
  new Wallet('0xe485d098507f54e7733a205420dfddbe58db035fa577fc294ebd14db90767a52'),
  new Wallet('0xa453611d9419d0e56f499079478fd72c37b251a94bfde4d19872c44cf65386e3'),
  new Wallet('0x829e924fdf021ba3dbbc4225edfece9aca04b929d6e75613329ca6f1d31c0bb4'),
  new Wallet('0xb0057716d5917badaf911b193b12b910811c1497b5bada8d7711f758981c3773'),
];

const envVariables: EnvVariables = {
  provider,
  poapAddress,
  poapAdmin,
  testAccounts,
};

export default envVariables;
