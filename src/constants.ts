import MetaMaskImg from './assets/images/metamask.svg';
import WalletConnectImg from './assets/images/walletconnect.svg';
import PortisImg from './assets/images/portis.png';
import FortmaticImg from './assets/images/fortmatic.png';
import AuthereumImg from './assets/images/authereum.png';
import MewImg from './assets/images/mew.png';

export const APP_VERSION = '1.0.0';

export const ENABLE_REDUX_DEV_TOOLS = true;

export const THEMES = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
  UNICORN: 'UNICORN',
};

export const WALLETS = [
  {
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
