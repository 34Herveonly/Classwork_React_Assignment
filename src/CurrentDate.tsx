import React from 'react';

export const CurrentDate = () => {
  const today = new Date().toLocaleDateString();
  return <p>Today's Date: {today}</p>;
};