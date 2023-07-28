import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

// Lure API Calls

export const createLure = async (lureData) => {
  try {
    const response = await api.post('/lures', lureData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getLures = async () => {
  try {
    const response = await api.get('/lures');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getLureById = async (id) => {
  try {
    const response = await api.get(`/lures/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteLure = async (id) => {
  try {
    await api.delete(`/lures/${id}`);
  } catch (error) {
    throw error;
  }
};

export const updateLure = async (id, lureData) => {
  try {
    const response = await api.put(`/lures/${id}`, lureData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Line API Calls

export const createLine = async (lineData) => {
  try {
    const response = await api.post('/lines', lineData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getLines = async () => {
  try {
    const response = await api.get('/lines');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getLineById = async (id) => {
  try {
    const response = await api.get(`/lines/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteLine = async (id) => {
  try {
    await api.delete(`/lines/${id}`);
  } catch (error) {
    throw error;
  }
};

export const updateLine = async (id, lineData) => {
  try {
    const response = await api.put(`/lines/${id}`, lineData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Sinker API Calls

export const createSinker = async (sinkerData) => {
  try {
    const response = await api.post('/sinkers', sinkerData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSinkers = async () => {
  try {
    const response = await api.get('/sinkers');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSinkerById = async (id) => {
  try {
    const response = await api.get(`/sinkers/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteSinker = async (id) => {
  try {
    await api.delete(`/sinkers/${id}`);
  } catch (error) {
    throw error;
  }
};

export const updateSinker = async (id, sinkerData) => {
  try {
    const response = await api.put(`/sinkers/${id}`, sinkerData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// User API Calls

export const signUp = async (userData) => {
  try {
    const response = await api.post('/signup', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (userData) => {
  try {
    const response = await api.post('/signin', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
