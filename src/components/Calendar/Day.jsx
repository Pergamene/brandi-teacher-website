import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CalendarService from '../../services/CalendarService';

import DayDate from './DayDate';
import DayStatusBar from './DayStatusBar';
import DaySummary from './DaySummary';

const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    width: '14.2857%',
    height: '100px',
    borderRight: '2px solid #000',
    '&:last-child': {
      borderRight: 'none',
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const Day = props => {
  const { date, data } = props;
  const classes = useStyles();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const statusSet = CalendarService.getStatus(data);
    setStatus(statusSet);
  }, [data]);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <DayDate date={date} />
        <DayStatusBar data={status} />
      </div>
      {data && <div>
        <DaySummary data={data} />
      </div>}
    </div>
  );
};

export default Day;
