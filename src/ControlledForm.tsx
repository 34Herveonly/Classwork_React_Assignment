import React, { useState } from 'react';

const ControlledForm = () => {
  const [input, setInput] = useState('');

  return (
    <form>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <p>Entered Value: {input}</p>
    </form>
  );
};

export default ControlledForm;
