import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSinkerById, updateSinker } from '../api/api';

const EditSinkerForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    type: '',
    shape: '',
  });

  useEffect(() => {
    const fetchSinker = async () => {
      try {
        const response = await getSinkerById(id);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching sinker:', error);
      }
    };

    fetchSinker();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateSinker(id, formData);
      // Handle success, redirect, etc.
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div>
      <h2>Edit Sinker</h2>
      <form onSubmit={handleSubmit}>
        <label>Type:</label>
        <input type="text" name="type" value={formData.type} onChange={handleChange} />
        <label>Shape:</label>
        <input type="text" name="shape" value={formData.shape} onChange={handleChange} />
        <button type="submit">Update Sinker</button>
      </form>
    </div>
  );
};

export default EditSinkerForm;
