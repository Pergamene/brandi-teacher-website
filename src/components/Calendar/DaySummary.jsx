import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Event from './Event';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const DaySummary = props => {
  const { data } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {data.map((event, index) => {
        return <Event data={event} key={index} />
      })}
    </div>
  );
};

export default DaySummary;
