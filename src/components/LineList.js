import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getLines, deleteLine } from '../api/api';

const LineList = () => {
  const [lines, setLines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLines = async () => {
      try {
        const response = await getLines();
        console.log('API response:', response);
        if (!!response)
        setLines(response);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching lines:', error);
        setIsLoading(false);
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
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {lines && lines.length > 0 ? (
            <ul>
              {lines.map((line) => (
                <li key={line._id}>
                  {line.name} - {line.tencelStr} - {line.gauge} - {line.knotType}
                  <button onClick={() => handleDelete(line._id)}>Delete</button>
                  <Link to={`/lines/${line._id}/edit`}>Edit</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No lines available.</p>
          )}
          <Link to="/lines/add">Add Line</Link>
        </>
      )}
    </div>
  );
};

export default LineList;