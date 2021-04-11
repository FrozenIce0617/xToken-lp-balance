import { InjectedConnector } from '@web3-react/injected-connector';

export const injected = new InjectedConnector({
  // Supported Chain IDs: https://docs.metamask.io/guide/ethereum-provider.html#chain-ids
  supportedChainIds: [
    1, // Mainnet
    3, // Ropsten
    4, // Rinkeby
    5, // Goerli
    42, // Kovan
  ],
});
