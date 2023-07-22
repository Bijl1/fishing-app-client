import React, { useState } from 'react';
import { signUp } from '../api/api';

const SignUp = () => {
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
      await signUp(formData);
      // Handle success, redirect to the appropriate page, etc.
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
