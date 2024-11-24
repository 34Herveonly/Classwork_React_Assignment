import React, { useState } from 'react';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', address: '', payment: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form>
      {step === 1 && <input name="name" placeholder="Name" onChange={handleChange} />}
      {step === 2 && <input name="address" placeholder="Address" onChange={handleChange} />}
      {step === 3 && <input name="payment" placeholder="Payment Info" onChange={handleChange} />}
      <button type="button" onClick={() => setStep(step + 1)} disabled={step === 3}>
        Next
      </button>
      {step === 3 && <button type="submit">Submit</button>}
    </form>
  );
};

export default MultiStepForm;
