import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '100px',
    margin: '0 auto',
    backgroundColor: '#fff',
    border: '2px solid #cfb53b',
    borderBottom: 'none',
    padding: '20px 20px 0',
  },
});

const Nav = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        Mrs. Hansen's 4th Grade Class
      </div>
    </div>
  );
}

export default Nav;
