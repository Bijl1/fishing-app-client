import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate function
import { createLure } from '../api/api';

const LureForm = () => {
  const navigate = useNavigate(); // Initialize the useNavigate function
  const [formData, setFormData] = useState({
    name: '',
    lureType: 'Topwater',
    bestUsedFor: '',
  });

  const lureTypes = ['Topwater', 'Middle', 'Bottom'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createLure(formData);
      // After successful submission, navigate to the homepage
      navigate('/lures');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <h2>Add Lure</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>Lure Type:</label>
        <select name="lureType" id="lures" value={formData.lureType} onChange={(e) => handleChange(e)}>
          {lureTypes.map((lure, i) => <option key={i} value={lure}>{lure}</option>)}
        </select>
        <label>Best Used For:</label>
        <input type="text" name="bestUsedFor" value={formData.bestUsedFor} onChange={handleChange} />
        <button type="submit">Add Lure</button>
      </form>
    </div>
  );
};

export default LureForm;
