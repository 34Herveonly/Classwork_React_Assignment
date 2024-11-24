import React from 'react';

interface ButtonProps {
  text: string;
  color?: string; // Optional prop with a default value
}

export const Button = ({ text, color = 'blue' }: ButtonProps) => {
  return (
    <button style={{ backgroundColor: color, color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
      {text}
    </button>
  );
};