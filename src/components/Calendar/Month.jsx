import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CalendarHelpers from '../../utils/Calendar';

import Week from './Week';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const Month = props => {
  const { data } = props;
  const classes = useStyles();
  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    const weeksArr = CalendarHelpers.getWeeks(data.offset, data.days);
    setWeeks(weeksArr);
  }, [data]);


  return (
    <div className={classes.root}>
      {weeks && weeks.map((week, index) => {
        return <Week days={week} data={data} key={index} />
      })}
    </div>
  );
}

export default Month;
