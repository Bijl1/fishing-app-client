import React, { useState } from 'react';
import { createSinker } from '../api/api';

const SinkerForm = () => {
  const [formData, setFormData] = useState({
    type: '',
    shape: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('adding sinker');
    try {
      const newlyCreatedSinker = await createSinker(formData);
      console.log({newlyCreatedSinker});

      /** @todo navigate user back to sinker list after success, do same for lures and lines*/ 
      if(!!newlyCreatedSinker._id) {
        // navigate back to sinkers
      }
      // Handle success, reset form, etc.
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div>
      <h2>Add Sinker</h2> 
      <form onSubmit={handleSubmit}>
        <label>Type:</label>
        <input type="text" name="type" value={formData.type} onChange={handleChange} />
        <label>Shape:</label>
        <input type="text" name="shape" value={formData.shape} onChange={handleChange} />
        <button type="submit">Add Sinker</button>
      </form>
    </div>
  );
};

export default SinkerForm;
