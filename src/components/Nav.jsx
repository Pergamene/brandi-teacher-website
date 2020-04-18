import React from 'react';
import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';

import { auth } from '../assets/firebase';

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

const Nav = props => {
  const classes = useStyles();
  const { isSignedIn, setSignedIn } = props;

  const logout = async () => {
    await auth.signOut();
    setSignedIn(false);
  };

  return (
    <div className={classes.root}>
      <div>
        Mrs. Hansen's 4th Grade Class
      </div>
      <div>
        {isSignedIn && <IconButton size="small" onClick={logout}>
          <PersonIcon />
        </IconButton>}
      </div>
    </div>
  );
}

export default Nav;
