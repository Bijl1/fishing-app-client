import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getLines, deleteLine } from '../api/api';

const LineList = () => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const fetchLines = async () => {
      try {
        const response = await getLines();
        setLines(response.data);
      } catch (error) {
        console.error('Error fetching lines:', error);
      }
    };

    fetchLines();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteLine(id);
      setLines(lines.filter((line) => line._id !== id));
    } catch (error) {
      console.error('Error deleting line:', error);
    }
  };

  return (
    <div>
      <h2>Line List</h2>
      <ul>
        {lines.map((line) => (
          <li key={line._id}>
            {line.tencelStr} - {line.gauge} - {line.knotType}
            <button onClick={() => handleDelete(line._id)}>Delete</button>
            <Link to={`/lines/${line._id}/edit`}>Edit</Link>
          </li>
        ))}
      </ul>
      <Link to="/lines/add">Add Line</Link>
    </div>
  );
};

export default LineList;