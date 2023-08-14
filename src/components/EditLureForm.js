import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getLureById, updateLure } from '../api/api';

const EditLureForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    lureType: '',
    bestUsedFor: '',
  });

  useEffect(() => {
    const fetchLure = async () => {
      try {
        const response = await getLureById(id);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching lure:', error);
      }
    };

    fetchLure();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateLure(id, formData);
      // Handle success, redirect, etc.
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error, show error message, etc.
    }
  }; 

  return (
    <div>
      <h2>Edit Lure</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>Lure Type:</label>
        <input type="text" name="lureType" value={formData.lureType} onChange={handleChange} />
        <label>Best Used For:</label>
        <input type="text" name="bestUsedFor" value={formData.bestUsedFor} onChange={handleChange} />
        <button type="submit">Update Lure</button>
      </form>
    </div>
  );
};
 
export default EditLureForm;
