import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createSinker } from '../api/api';

const SinkerForm = () => {
  const navigate = useNavigate();
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

      if (newlyCreatedSinker._id) {
        navigate('/sinkers');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
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
