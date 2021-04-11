import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  walletLogo: {
    marginBottom: theme.spacing(2),
    width: 48,
    height: 48,
  },
  loaderText: {
    marginBottom: theme.spacing(2),
  },
  alertWrapper: {
    marginBottom: theme.spacing(2),
    width: '100%',
  },
}));

export default useStyles;
