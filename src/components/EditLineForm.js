import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getLineById, updateLine } from '../api/api';

const EditLineForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    tencelStr: '',
    gauge: '',
    knotType: '',
  });

  useEffect(() => {
    const fetchLine = async () => {
      try {
        const response = await getLineById(id);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching line:', error);
      }
    };

    fetchLine();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateLine(id, formData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <h2>Edit Line</h2>
      <form onSubmit={handleSubmit}>
        <label>Tencel Strength:</label>
        <input type="text" name="tencelStr" value={formData.tencelStr} onChange={handleChange} />
        <label>Gauge:</label>
        <input type="number" name="gauge" value={formData.gauge} onChange={handleChange} />
        <label>Knot Type:</label>
        <input type="text" name="knotType" value={formData.knotType} onChange={handleChange} />
        <button type="submit">Update Line</button>
      </form>
    </div>
  );
};

export default EditLineForm;
