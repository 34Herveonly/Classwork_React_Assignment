import React from 'react';

interface ItemListProps {
  items: string[];
}

export const ItemList = ({ items }: ItemListProps) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};