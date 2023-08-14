import React, { useState } from 'react';
import { createLure } from '../api/api';

// ... (import statements)

const LureForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      lureType: 'TopWater',
      bestUsedFor: '',
    });

    const lureTypes = ['TopWater', 'fly', 'silver'];
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await createLure(formData);
        // Handle success, reset form, etc.
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error, show error message, etc.
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
          {/* make this input a select with options. The options are set above  lureTypes */}
          {/* <input type="text" name="lureType" value={formData.lureType} onChange={handleChange} /> */}
          <label>Best Used For:</label>
          <input type="text" name="bestUsedFor" value={formData.bestUsedFor} onChange={handleChange} />
          <button type="submit">Add Lure</button>
        </form>
      </div>
    );
  };
  
  export default LureForm;
        