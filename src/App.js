import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Nav from './components/Nav';
import Login from './components/Login';
import Announcements from './components/Announcements';
import Bio from './components/Bio';
import Calendar from './components/calendar/Calendar';
import Photos from './components/Photos';

import { watchAuth } from './assets/firebase';
import { colors } from './assets/constants';

const useStyles = makeStyles({
  root: {
    maxWidth: '1000px',
    margin: '50px auto',
    border: `2px solid ${colors.GOLD}`,
    padding: '5px',
  },
});

const App = () => {
  const classes = useStyles();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    watchAuth(setSignedIn);
  }, []);

  const setSignedIn = signedIn => {
    setIsSignedIn(signedIn);
  }

  return (
    <div className={`App ${classes.root}`}>
      <Nav isSignedIn={isSignedIn} setSignedIn={setSignedIn} />
      <Route exact path="/admin">
        <Login setIsSignedIn={setIsSignedIn} />
      </Route>
      <Route exact path="/">
        <Announcements isSignedIn={isSignedIn} />
      </Route>
      <Route exact path="/bio">
        <Bio isSignedIn={isSignedIn} />
      </Route>
      <Route exact path="/calendar">
        <Calendar isSignedIn={isSignedIn} />
      </Route>
      <Route exact path="/photos">
        <Photos isSignedIn={isSignedIn} />
      </Route>
    </div>
  );
}

export default App;
