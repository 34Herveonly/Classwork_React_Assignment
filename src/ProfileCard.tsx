import React from 'react';

interface ProfileCardProps {
  name: string;
  age: number;
  email: string;
}

export const ProfileCard = ({ name, age, email }: ProfileCardProps) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '300px' }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}