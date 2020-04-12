import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { makeStyles } from '@material-ui/core/styles';

import { statusCodes } from '../../assets/constants';

const useStyles = makeStyles({
  root: {

  },
  event: {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
  },
  title: {
    fontSize: '16px',
  },
  dueDate: {
    color: `${statusCodes.dueDate}`,
  },
  earlyOut: {
    color: `${statusCodes.earlyOut}`,
  },
  noSchool: {
    color: `${statusCodes.noSchool}`,
  },
  fieldTrip: {
    color: `${statusCodes.fieldTrip}`,
  },
});

const Event = props => {
  const { data } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.event}>
        <FiberManualRecordIcon fontSize='small' className={`${classes.status} ${classes[data.type]}`} />
        <span className={classes.title}>{data.title}</span>
      </span>
    </div>
  );
};

export default Event;
