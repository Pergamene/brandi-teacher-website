import React from 'react';

import Day from './Day';

const Offset = props => {
  const { offset } = props;

  const makeOffsetArr = () => {
    const blankDays = [];
    for (let i = 0; i < offset; i++) {
      blankDays.push(i);
    }
    return blankDays;
  };

  return (
    <>
      {makeOffsetArr().map(day => {
        return <Day key={day}/>;
      })}
    </>
  );
};

export default Offset;
