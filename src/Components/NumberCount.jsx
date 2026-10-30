import React from 'react';
import Count from './Count';

const NumberCount = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '20px',
        width: '100%',
      }}
    >
      <Count count={25} text="Projects Built" suffix="+" />
      <Count count={3} text="Years Experience" suffix="+" />
      <Count count={15} text="Tech & Tools" suffix="+" />
    </div>
  );
};

export default NumberCount;
