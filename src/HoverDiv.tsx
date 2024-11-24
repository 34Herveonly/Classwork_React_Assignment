import React, { useState } from 'react';

const HoverDiv = () => {
  const [bgColor, setBgColor] = useState('lightgray');

  return (
    <div
      onMouseEnter={() => setBgColor('lightblue')}
      onMouseLeave={() => setBgColor('lightgray')}
      style={{ backgroundColor: bgColor, width: '200px', height: '200px' }}
    >
      Hover over me!
    </div>
  );
};

export default HoverDiv;
