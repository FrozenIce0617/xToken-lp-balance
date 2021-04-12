import { AbstractConnector } from '@web3-react/abstract-connector';

import { injected } from 'src/connectors';
import MetaMaskImg from 'src/assets/images/metamask.svg';
import WalletConnectImg from 'src/assets/images/walletconnect.svg';
import PortisImg from 'src/assets/images/portis.png';
import FortmaticImg from 'src/assets/images/fortmatic.png';
import AuthereumImg from 'src/assets/images/authereum.png';
import MewImg from 'src/assets/images/mew.png';
import MT_ABI from './abi.json';

export const THEMES = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
  UNICORN: 'UNICORN',
};

export type WalletInfo = {
  connector?: AbstractConnector;
  title: string;
  logo: string;
  isAvailable: boolean;
};

export const WALLET_STATUS = {
  ACCOUNT: 'account',
  OPTIONS: 'options',
  OPTIONS_SECONDARY: 'options_secondary',
  PENDING: 'pending',
};

export const WALLETS: WalletInfo[] = [
  {
    connector: injected,
    title: 'MetaMask',
    logo: MetaMaskImg,
    isAvailable: true,
  },
  {
    title: 'WalletConnect',
    logo: WalletConnectImg,
    isAvailable: false,
  },
  {
    title: 'Portis',
    logo: PortisImg,
    isAvailable: false,
  },
  {
    title: 'Fortmatic',
    logo: FortmaticImg,
    isAvailable: false,
  },
  {
    title: 'Authereum',
    logo: AuthereumImg,
    isAvailable: false,
  },
  {
    title: 'MEW Wallet',
    logo: MewImg,
    isAvailable: false,
  },
];

export declare enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GORLI = 5,
  KOVAN = 42,
}

export const MULTICALL_ABI = MT_ABI;

export const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  '1': '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  '3': '0x53C43764255c17BD724F74c4eF150724AC50a3ed',
  '4': '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821',
  '5': '0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e',
  '42': '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
};
