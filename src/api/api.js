import axios from 'axios';
import { getLocalStorageToken } from '../utils/localStorageUtils';

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL || 'http://localhost:4200',
  headers: {
    withCredentials: true,
    Authorization: `Bearer ${getLocalStorageToken()}`
  }
});

// Lure API

export const createLure = async (lureData) => {
  try {
    console.log({lureData})
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
    console.log({createLine: response})
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
    console.log({sinkerCreate: response})
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
  console.log({creatingUser: userData})
  try {
    const response = await api.post('auth/signup', userData);
    return response.data;
  } catch (error) {
    console.log({error});
    throw error;
  }
};

export const signIn = async (userData) => {
  console.log({signinUser: userData})
  try {
    const response = await api.post('auth/signin', userData);
    console.log({userSignInRes: response});
    return response.data;
  } catch (error) {
    console.log({errorFromApiCall: error, api})
    throw error;
  }
};


export const verifyToken = async () => {
  try {
    const response = await api.get('/auth/verify');
    console.log({verified: response});
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
                 