import React from 'react';
import Hobby  from './Hobby';

export const HobbyList = () => {
  const hobbies = ['Reading', 'Cycling', 'Gaming', 'Exercising'];

  return (
  <>
  <div>
      <h2>My Hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <Hobby key={index} hobby={hobby} />
        ))}
      </ul>
    </div>

  </>
  );
};