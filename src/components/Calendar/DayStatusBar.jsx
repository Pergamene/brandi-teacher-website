import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { makeStyles } from '@material-ui/core/styles';

import { statusCodes } from '../../assets/constants';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  status: {
    '&:last-child': {
      paddingRight: '5px',
    },
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

const DayStatusBar = props => {
  const { data } = props;
  const classes = useStyles();

  return(
    <div className={classes.root}>
      {data && data.map((type, index) => {
        return <FiberManualRecordIcon fontSize='small' className={`${classes.status} ${classes[type]}`} key={index} />;
      })}
    </div>
  );
};

export default DayStatusBar;
