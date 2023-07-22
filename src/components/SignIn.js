import React, { useState } from 'react';
import { signIn } from '../api/api';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(formData);
      // Handle success, redirect to the appropriate page, etc.
    } catch (error) {
      console.error('Error signing in:', error);
      // Handle error, show error message, etc.
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
    </div>
  );
};

export default SignIn;
