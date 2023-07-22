import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your backend server URL
});

export const getLures = () => api.get('/lures');
export const createLure = (lureData) => api.post('/lures', lureData);
export const deleteLure = (id) => api.delete(`/lures/${id}`);
export const getLureById = (id) => api.get(`/lures/${id}`);
export const updateLure = (id, lureData) => api.put(`/lures/${id}`, lureData);
