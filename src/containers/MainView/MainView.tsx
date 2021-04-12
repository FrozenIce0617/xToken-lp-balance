import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import useStyles from './MainView.style';

const MainView: React.FC = () => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.mainWrapper} component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <caption>Token List</caption>
        <TableHead>
          <TableRow>
            <TableCell>Token Name</TableCell>
            <TableCell align="right">Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
};

export default MainView;
