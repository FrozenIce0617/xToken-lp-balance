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
import CloseIcon from '@material-ui/icons/Close';

import { WALLETS } from 'src/constants';
import useStyles from './WalletModal.style';

export type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const WalletModal: React.FC<Props> = (props): JSX.Element => {
  const { isOpen, onClose } = props;
  const classes = useStyles();

  const getWalletOptions = () => {
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
          >
            <Typography>{walletInfo.title}</Typography>
          </Button>
        </Paper>
      );
    });
  };

  return (
    <Dialog
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
        <Typography variant="h5">Connect Wallet</Typography>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>{getWalletOptions()}</DialogContent>
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
