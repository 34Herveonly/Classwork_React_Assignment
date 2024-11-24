import React, { useState } from 'react';

const InputForm = () => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
