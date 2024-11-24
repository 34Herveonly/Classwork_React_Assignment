import React from 'react';

interface HobbyProps {
  hobby: string;
}

const Hobby = ({ hobby }: HobbyProps) => {
  return <li>{hobby}</li>;
};
export default Hobby