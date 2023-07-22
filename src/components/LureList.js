import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getLures, deleteLure } from '../api';

const LureList = () => {
  const [lures, setLures] = useState([]);

  useEffect(() => {
    const fetchLures = async () => {
      try {
        const response = await getLures();
        setLures(response.data);
      } catch (error) {
        console.error('Error fetching lures:', error);
      }
    };

    fetchLures();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteLure(id);
      setLures(lures.filter((lure) => lure._id !== id));
    } catch (error) {
      console.error('Error deleting lure:', error);
    }
  };

  return (
    <div>
      <h2>Lure List</h2>
      <ul>
        {lures.map((lure) => (
          <li key={lure._id}>
            {lure.name} - {lure.lureType} - {lure.bestUsedFor}
            <button onClick={() => handleDelete(lure._id)}>Delete</button>
            <Link to={`/lures/${lure._id}/edit`}>Edit</Link>
          </li>
        ))}
      </ul>
      <Link to="/lures/add">Add Lure</Link>
    </div>
  );
};

export default LureList;
