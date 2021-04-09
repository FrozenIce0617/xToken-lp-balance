import React from 'react';
import { makeStyles } from '@material-ui/core';

import LogoImg from 'src/assets/images/logo.png';

const useStyles = makeStyles({
  logo: {
    borderRadius: 24,
    width: 48,
    height: 48,
  },
});

const Logo = (props) => {
  const classes = useStyles();

  return <img className={classes.logo} src={LogoImg} alt="Logo" {...props} />;
};

export default Logo;
