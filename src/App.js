import React from 'react';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Nav from './components/Nav';
import Bio from './components/Bio';
import Calendar from './components/Calendar/Calendar';
 
const useStyles = makeStyles({
  root: {
    maxWidth: '1000px',
    margin: '50px auto',
    border: '2px solid #cfb53b',
    padding: '5px',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={`App ${classes.root}`}>
      <Nav />
      <Route exact path="/bio">
        <Bio />
      </Route>
      <Route exact path="/calendar">
        <Calendar />
      </Route>
    </div>
  );
}

export default App;
