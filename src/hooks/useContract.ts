import { useMemo } from 'react';

import { AddressZero } from '@ethersproject/constants';
import { Contract } from '@ethersproject/contracts';
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers';

import useActiveWeb3React from 'src/hooks/useActiveWeb3React';
import { isAddress } from 'src/utils/addressHelper';
import { MULTICALL_NETWORKS, MULTICALL_ABI } from 'src/constants';

// account is not optional
export const getSigner = (
  library: Web3Provider,
  account: string
): JsonRpcSigner => {
  return library.getSigner(account).connectUnchecked();
};

export const getProviderOrSigner = (
  library: Web3Provider,
  account?: string
): Web3Provider | JsonRpcSigner => {
  return account ? getSigner(library, account) : library;
};

export const getContract = (
  address: string,
  ABI: any,
  library: Web3Provider,
  account?: string
): Contract => {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }

  return new Contract(
    address,
    ABI,
    getProviderOrSigner(library, account) as any
  );
};

export function useMulticallContract(): Contract | null {
  const { chainId } = useActiveWeb3React();
  return useContract(
    chainId && MULTICALL_NETWORKS[chainId],
    MULTICALL_ABI,
    false
  );
}

// returns null on errors
const useContract = (
  address: string | undefined,
  ABI: any,
  withSignerIfPossible = true
): Contract | null => {
  const { library, account } = useActiveWeb3React();

  return useMemo(() => {
    if (!address || !ABI || !library) return null;
    try {
      return getContract(
        address,
        ABI,
        library,
        withSignerIfPossible && account ? account : undefined
      );
    } catch (error) {
      console.error('Failed to get contract', error);
      return null;
    }
  }, [address, ABI, library, withSignerIfPossible, account]);
};

export default useContract;
