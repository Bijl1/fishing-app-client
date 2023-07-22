import React, { useState } from 'react';
import { createLine } from '../api/api';

const LineForm = () => {
  const [formData, setFormData] = useState({
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
    try {
      await createLine(formData);
      // Handle success, reset form, etc.
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div>
      <h2>Add Line</h2>
      <form onSubmit={handleSubmit}>
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