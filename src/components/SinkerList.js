import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSinkers, deleteSinker } from '../api/api';

const SinkerList = () => {
  const [sinkers, setSinkers] = useState([]);

  useEffect(() => {
    const fetchSinkers = async () => {
      try {
        const response = await getSinkers();
        setSinkers(response.data);
      } catch (error) {
        console.error('Error fetching sinkers:', error);
      }
    };

    fetchSinkers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteSinker(id);
      setSinkers(sinkers.filter((sinker) => sinker._id !== id));
    } catch (error) {
      console.error('Error deleting sinker:', error);
    }
  };

  return (
    <div>
      <h2>Sinker List</h2>
      <ul>
        {sinkers.map((sinker) => (
          <li key={sinker._id}>
            Type: {sinker.type} - Shape: {sinker.shape}
            <button onClick={() => handleDelete(sinker._id)}>Delete</button>
            <Link to={`/sinkers/${sinker._id}/edit`}>Edit</Link>
          </li>
        ))}
      </ul>
      <Link to="/sinkers/add">Add Sinker</Link>
    </div>
  );
};

export default SinkerList;
