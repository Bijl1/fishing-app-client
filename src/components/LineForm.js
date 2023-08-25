import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createLine } from '../api/api';

const LineForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',         
    tencelStr: '',
    gauge: '',
    knotType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('adding line');
    try {
      const newlyCreatedLine = await createLine(formData);
      console.log({newlyCreatedLine});
      if (newlyCreatedLine._id) {
        navigate('/lines');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <h2>Add Line</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>Tencel Strength:</label>
        <input type="text" name="tencelStr" value={formData.tencelStr} onChange={handleChange} />
        <label>Gauge:</label>
        <input type="number" name="gauge" value={formData.gauge} onChange={handleChange} />
        <label>Knot Type:</label>
        <input type="text" name="knotType" value={formData.knotType} onChange={handleChange} />
        <button type="submit">Add Line</button>
      </form>
    </div>
  );
};

export default LineForm;
