import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSinkers, deleteSinker } from '../api/api';

const SinkerList = () => {
  const [sinkers, setSinkers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSinkers = async () => {
      try {
        const response = await getSinkers();
        console.log('API response:', response);
        /** @todo follow this example for lures and lines to display info. the response.data is already returned in the getSinkers method from /api/api file. no need to check for response.data only response*/ 
        if (!!response) {
          setSinkers(response);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching sinkers:', error);
        setLoading(false);
      }
    };

    fetchSinkers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteSinker(id);
      setSinkers((prevSinkers) => prevSinkers.filter((sinker) => sinker._id !== id));
    } catch (error) {
      console.error('Error deleting sinker:', error);
    }
  };

  return (
    <div>
      <h2>Sinker List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {sinkers.map((sinker) => (
            <li key={sinker._id}>
              Type: {sinker.type} - Shape: {sinker.shape}
              <button onClick={() => handleDelete(sinker._id)}>Delete</button>
              <Link to={`/sinkers/${sinker._id}/edit`}>Edit</Link>
            </li>
          ))}
        </ul>
      )}
      <Link to="/sinkers/add">Add Sinker</Link>
    </div>
  );
};

export default SinkerList;
