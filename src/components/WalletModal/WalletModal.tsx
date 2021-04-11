import { useCallback, useEffect, useState } from 'react';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Typography,
} from '@material-ui/core';
import {
  ArrowBackIos as BackIcon,
  Close as CloseIcon,
} from '@material-ui/icons';

import { WALLETS, WalletInfo, WALLET_STATUS } from 'src/constants';
import WalletPendingView from 'src/components/WalletPending';
import useStyles from './WalletModal.style';

export type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const WalletModal: React.FC<Props> = (props): JSX.Element => {
  const { isOpen, onClose } = props;
  const [hasPendingError, setPendingError] = useState<boolean>(false);
  const [walletView, setWalletView] = useState(WALLET_STATUS.ACCOUNT);
  const [activeWallet, setActiveWallet] = useState(null);
  const { activate, account } = useWeb3React();
  const classes = useStyles();
  const isPendingView = walletView === WALLET_STATUS.PENDING;

  useEffect(() => {
    if (isOpen) {
      setPendingError(false);
      setWalletView(WALLET_STATUS.ACCOUNT);
    }
  }, [isOpen]);

  useEffect(() => {
    if (account && isOpen) onClose();
  }, [account, isOpen, onClose]);

  const onConnectWallet = useCallback(
    async (walletInfo: WalletInfo) => {
      const { connector } = walletInfo;

      setActiveWallet(walletInfo);
      setWalletView(WALLET_STATUS.PENDING);

      if (walletInfo.connector) {
        activate(connector, undefined, true).catch((error) => {
          if (error instanceof UnsupportedChainIdError) {
            activate(connector);
          } else {
            console.info('Connection Error - ', error);
            setPendingError(true);
          }
        });
      }
    },
    [activate]
  );

  const getWalletOptions = useCallback(() => {
    const hasInjectedProvider = window.web3 && window.ethereum;
    return WALLETS.map((walletInfo) => {
      if (!hasInjectedProvider && walletInfo.title === 'MetaMask') {
        return (
          <Paper className={classes.btnWrapper}>
            <Button
              fullWidth
              className={classes.btnWallet}
              disabled={!walletInfo.isAvailable}
              startIcon={
                <img
                  className={classes.walletLogo}
                  src={walletInfo.logo}
                  alt="MetaMask"
                />
              }
              target="_blank"
              href="https://metamask.io/"
            >
              <Typography>Install MetaMask</Typography>
            </Button>
          </Paper>
        );
      }
      return (
        <Paper className={classes.btnWrapper}>
          <Button
            fullWidth
            className={classes.btnWallet}
            disabled={!walletInfo.isAvailable}
            startIcon={
              <img
                className={classes.walletLogo}
                src={walletInfo.logo}
                alt="MetaMask"
              />
            }
            onClick={() => onConnectWallet(walletInfo)}
          >
            <Typography>{walletInfo.title}</Typography>
          </Button>
        </Paper>
      );
    });
  }, [classes, onConnectWallet]);

  const onBack = useCallback(() => {
    setWalletView(WALLET_STATUS.ACCOUNT);
  }, []);

  return (
    <Dialog
      className={classes.modalWrapper}
      open={isOpen}
      aria-labelledby="wallet-dialog-title"
      disableBackdropClick
      onClose={onClose}
    >
      <DialogTitle
        id="wallet-dialog-title"
        className={classes.modalHeader}
        disableTypography
      >
        {isPendingView ? (
          <Button aria-label="back" startIcon={<BackIcon />} onClick={onBack}>
            Back
          </Button>
        ) : (
          <Typography variant="h5">Connect Wallet</Typography>
        )}
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        {walletView === WALLET_STATUS.PENDING ? (
          <WalletPendingView
            walletInfo={activeWallet}
            error={hasPendingError}
            setError={setPendingError}
            onConnectWallet={onConnectWallet}
          />
        ) : (
          getWalletOptions()
        )}
      </DialogContent>
      <DialogActions className={classes.modalFooter}>
        <Typography>
          New to Ethereum?{' '}
          <Button
            variant="text"
            color="primary"
            href="https://ethereum.org/en/wallets/"
            target="_blank"
          >
            Learn more about wallets
          </Button>
        </Typography>
      </DialogActions>
    </Dialog>
  );
};

export default WalletModal;
