import { AbstractConnector } from '@web3-react/abstract-connector';

import { injected } from 'src/connectors';
import MetaMaskImg from 'src/assets/images/metamask.svg';
import WalletConnectImg from 'src/assets/images/walletconnect.svg';
import PortisImg from 'src/assets/images/portis.png';
import FortmaticImg from 'src/assets/images/fortmatic.png';
import AuthereumImg from 'src/assets/images/authereum.png';
import MewImg from 'src/assets/images/mew.png';

export const APP_VERSION = '1.0.0';

export const ENABLE_REDUX_DEV_TOOLS = true;

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
