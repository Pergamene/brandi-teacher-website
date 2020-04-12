import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    paddingLeft: '7px',
  },
  date: {
    fontFamily: `'Oswald', sans-serif`,
    fontSize: '22px',
  }
});

const DayDate = props => {
  const { date } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.date}>{date ? date : ''}</span>
    </div>
  );
};

export default DayDate;
