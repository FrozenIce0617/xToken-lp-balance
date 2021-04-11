import { useCallback } from 'react';
import { Button, CircularProgress, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import { WalletInfo } from 'src/constants';
import useStyles from './WalletPending.style';

export type Props = {
  walletInfo: WalletInfo;
  error?: boolean;
  setError?: (error: boolean) => void;
  onConnectWallet: (walletInfo: WalletInfo) => void;
};

const WalletPendingView: React.FC<Props> = (props): JSX.Element => {
  const { walletInfo, error, setError, onConnectWallet } = props;
  const classes = useStyles();

  const onReconnect = useCallback(() => {
    setError(false);
    onConnectWallet(walletInfo);
  }, [walletInfo, setError, onConnectWallet]);

  return (
    <div className={classes.wrapper}>
      {error && (
        <div className={classes.alertWrapper}>
          <Alert severity="error">Error connecting.</Alert>
        </div>
      )}
      <img
        className={classes.walletLogo}
        src={walletInfo.logo}
        alt="Wallet Logo"
      />
      {!error && (
        <>
          <Typography className={classes.loaderText}>
            Connecting to {walletInfo.title}
          </Typography>
          <CircularProgress color="primary" />
        </>
      )}
      {error && (
        <Button variant="contained" color="secondary" onClick={onReconnect}>
          Try Again
        </Button>
      )}
    </div>
  );
};

export default WalletPendingView;
