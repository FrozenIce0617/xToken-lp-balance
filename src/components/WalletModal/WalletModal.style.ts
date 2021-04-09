import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalFooter: {
    justifyContent: 'center',
  },
  btnWrapper: {
    marginBottom: 12,
  },
  btnWallet: {
    padding: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minWidth: 384,
    '&:disabled': {
      '& img': {
        filter: 'grayscale(1)',
      },
    },
  },
  cardWrapper: {
    marginBottom: 8,
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minWidth: 384,
  },
  walletLogo: {
    marginRight: 16,
    width: 36,
    height: 36,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

export default useStyles;
