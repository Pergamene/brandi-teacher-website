import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Day from './Day';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    borderBottom: '2px solid #000',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
});

const Week = props => {
  const { days, data } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {days.map((day, index) => {
        return <Day date={day} data={data.events[day]} key={index} />;
      })}
    </div>
  );
}

export default Week;
