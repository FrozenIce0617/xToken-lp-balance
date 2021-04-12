import { useCallback, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Box, Button } from '@material-ui/core';

import WalletModal from 'src/components/WalletModal';
import { getShortAddress } from 'src/utils/addressHelper';
import MetaMaskImg from 'src/assets/images/metamask.svg';
import useStyles from './Account.style';

const Account = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { account, error } = useWeb3React();
  const classes = useStyles();

  const handleConnect = useCallback(() => {
    setModalOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setModalOpen(false);
  }, []);

  const renderAccountHandler = () => {
    if (account) {
      return (
        <Button
          className={classes.accountBalance}
          startIcon={
            <img
              className={classes.walletLogo}
              src={MetaMaskImg}
              alt="MetaMask"
            />
          }
        >
          {getShortAddress(account)}
        </Button>
      );
    }
    return (
      <Button color="secondary" variant="contained" onClick={handleConnect}>
        Connect Wallet
      </Button>
    );
  };

  return (
    <>
      <WalletModal isOpen={isModalOpen} onClose={handleClose} />
      <Box display="flex" alignItems="center">
        {renderAccountHandler()}
      </Box>
    </>
  );
};

export default Account;
