import React, { useState } from 'react';
import { signIn, verifyToken } from '../api/api'; // Import the verifyToken function
import { saveTokenToLocal } from '../utils/localStorageUtils';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [user, setUser] = useState(null); // State to store user data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log({ formData });
      const res = await signIn(formData);
      if (res.token) {
        saveTokenToLocal(res.token);

      /** @todo add a call to the verify route to get the user dat and set the user in the state with that response yes.*/ 
      const userData = await verifyToken();
      console.log({userData});
        setUser(userData);
      }

      console.log({ res });
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <button type="submit">Sign In</button>
      </form>

      {user && (
        <div>
          <h3>Welcome, {user.email}!</h3>
          {/* Render user data */}
        </div>
      )}
    </div>
  );
};

export default SignIn;
