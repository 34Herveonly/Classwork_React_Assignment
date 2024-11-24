import React, { useState } from 'react';

const CheckboxForm = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelected(selected.includes(value) ? selected.filter((v) => v !== value) : [...selected, value]);
  };

  return (
    <div>
      <label>
        <input type="checkbox" value="Option 1" onChange={handleChange} />
        Option 1
      </label>
      <label>
        <input type="checkbox" value="Option 2" onChange={handleChange} />
        Option 2
      </label>
      <p>Selected: {selected.join(', ')}</p>
    </div>
  );
};

export default CheckboxForm;
