import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon  from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    borderBottom: '2px solid #000',
  },
  arrows: {
    color: '#000',
    '&:disabled': {
      color: '#AAA',
    },
  },
  days: {
    display: 'flex',
    height: '100%',
    borderBottom: '2px solid #000',
  },
  h2: {
    margin: 0,
    alignSelf: 'center',
    fontSize: '30px',
  },
  day: {
    boxSizing: 'border-box',
    width: '14.2857%',
    height: '100%',
    borderRight: '2px solid #000',
    padding: '10px 0',
    textAlign: 'center',
    fontWeight: 'bold',
    '&:last-child': {
      borderRight: 'none',
    },
  },
});

const CalendarHeader = props => {
  const { year, month, changeMonth, hasPrev, hasNext } = props;
  const classes = useStyles();

  const handleClick = (changeBy) => {
    changeMonth(changeBy);
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <IconButton className={classes.arrows} onClick={() => handleClick(-1)} disabled={!hasPrev}>
          <ArrowBackIosIcon />
        </IconButton>
        <h2 className={classes.h2}>{month} {year}</h2>
        <IconButton className={classes.arrows} onClick={() => handleClick(1)} disabled={!hasNext}>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
      <div className={classes.days}>
        <span className={classes.day}>Sunday</span>
        <span className={classes.day}>Monday</span>
        <span className={classes.day}>Tuesday</span>
        <span className={classes.day}>Wednesday</span>
        <span className={classes.day}>Thursday</span>
        <span className={classes.day}>Friday</span>
        <span className={classes.day}>Saturday</span>
      </div>
    </div>
  );
};

export default CalendarHeader;
