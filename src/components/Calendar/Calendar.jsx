import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CalendarHeader from './CalendarHeader';
import Month from './Month';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '900px',
    margin: '20px auto',
    border: '2px solid #000',
  },
});

const Calendar = () => {
  const classes = useStyles();

  const [month, setMonth] = useState(1);

  const changeMonth = (changeBy) => {
    setMonth(month + changeBy);
  };

  const tempData = [
    {
      hasPrev: false,
      year: 2020,
      month: 'May',
      days: 31,
      offset: 3,
      events: {
        1: [
          {
            type: 'dueDate',
            title: 'Math HW 3.2',
            description: 'Pg. 32: 1-31 odd, 32, 35, 50-68 even',
          },
          {
            type: 'earlyOut',
            title: 'Early Out',
          },
        ],
        8: [
          {
            type: 'noSchool',
            title: 'Holiday',
          },
        ],
        13: [
          {
            type: 'fieldTrip',
            title: 'Lagoon',
            description: 'The class will be gone from 8 a.m. till 4 p.m.  Lunch will be surved.  Here is a list of what the kids should bring.',
          },
        ],
        21: [
          {
            type: 'dueDate',
            title: 'County Report',
            description: 'A 2 page report on the assigned county.  It must include a stats, history, and fun facts section.',
          },
          {
            type: 'dueDate',
            title: 'Reading Chart',
            description: 'A chart to track the students time reading.  Must be signed by a parent.',
          },
          {
            type: 'earlyOut',
            title: 'Early Out',
          },
        ],
        29: [
          {
            type: 'noSchool',
            title: 'Teacher Work Day',
          },
        ],
      },
      hasNext: true,
    },
    {
      hasPrev: true,
      year: 2020,
      month: 'June',
      days: 30,
      offset: 1,
      events: {
        19: [
          {
            type: 'dueDate',
            title: 'Math HW 3.2',
            description: 'Pg. 32: 1-31 odd, 32, 35, 50-68 even',
          },
          {
            type: 'earlyOut',
            title: 'Early Out',
          },
        ],
        22: [
          {
            type: 'noSchool',
            title: 'Holiday',
          },
        ],
        23: [
          {
            type: 'fieldTrip',
            title: 'Lagoon',
            description: 'The class will be gone from 8 a.m. till 4 p.m.  Lunch will be surved.  Here is a list of what the kids should bring.',
          },
        ],
        25: [
          {
            type: 'dueDate',
            title: 'County Report',
            description: 'A 2 page report on the assigned county.  It must include a stats, history, and fun facts section.',
          },
          {
            type: 'dueDate',
            title: 'Reading Chart',
            description: 'A chart to track the students time reading.  Must be signed by a parent.',
          },
          {
            type: 'earlyOut',
            title: 'Early Out',
          },
        ],
        26: [
          {
            type: 'noSchool',
            title: 'Teacher Work Day',
          },
        ],
      },
      hasNext: true,
    },
    {
      hasPrev: true,
      year: 2020,
      month: 'July',
      days: 31,
      offset: 3,
      events: {
        3: [
          {
            type: 'noSchool',
            title: '4th of July',
          },
        ],
        9: [
          {
            type: 'dueDate',
            title: 'Math HW 7.8',
            description: 'Pg. 124: 12-28 even, 31, 35, 72',
          },
          {
            type: 'earlyOut',
            title: 'Early Out',
          },
        ],
        15: [
          {
            type: 'dueDate',
            title: 'County Report',
            description: 'A 2 page report on the assigned county.  It must include a stats, history, and fun facts section.',
          },
          {
            type: 'dueDate',
            title: 'Reading Chart',
            description: 'A chart to track the students time reading.  Must be signed by a parent.',
          },
          {
            type: 'earlyOut',
            title: 'Early Out',
          },
        ],
        23: [
          {
            type: 'fieldTrip',
            title: 'Nature Center',
            description: 'The class will be gone from 8 a.m. till 4 p.m.  Lunch will be surved.  Here is a list of what the kids should bring.',
          },
        ],
        31: [
          {
            type: 'noSchool',
            title: 'Holiday',
          },
        ],
      },
      hasNext: false,
    },
  ]

  return (
    <div className={classes.root}>
      <CalendarHeader 
        month={tempData[month].month} 
        year={tempData[month].year} 
        changeMonth={changeMonth}
        hasPrev={tempData[month].hasPrev}
        hasNext={tempData[month].hasNext} 
      />
      <Month data={tempData[month]} />
    </div>
  );
};

export default Calendar;
