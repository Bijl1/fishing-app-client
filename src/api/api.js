import axios from 'axios';
import { getLocalStorageToken } from '../utils/localStorageUtils';

const api = axios.create({
  baseURL: 'http://localhost:4200',
  headers: {
    withCredentials: true,
    Authorization: `Bearer ${getLocalStorageToken()}`
  }
});


  //                      call the above created function that should return the token from local storage
  //    
// this should be done in Client side auth after signin to store token,
// on every api call to get and pass the token
// savy!? 

// @todo - get token  from storage function here to return token from localstorage.
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
  try {
    const response = await api.post('auth/signup', userData);
    return response.data;
  } catch (error) {
    console.log({error});
    throw error;
  }
};

export const signIn = async (userData) => {
  try {
    const response = await api.post('auth/signin', userData);
    return response.data;
  } catch (error) {
    console.log({error})
    throw error;
  }
};


export const verifyToken = async () => {
  try {
    const response = await api.get('/auth/verify');
    return response.data;
  } catch (error) {
    throw error;
  }
};
// const authenticateUser = () => {           //  <==  ADD  
//   // Get the stored token from the localStorage
//   const storedToken = localStorage.getItem('authToken');
  
//   // If the token exists in the localStorage
//   if (storedToken) {
//     // We must send the JWT token in the request's "Authorization" Headers
//     axios.get(
//       `${API_URL}/auth/verify`, 
//       { headers: { Authorization: `Bearer ${storedToken}`} }
//     )
//     .then((response) => {
//       // If the server verifies that the JWT token is valid  
//       const user = response.data;
//      // Update state variables        
//       setIsLoggedIn(true);
//       setIsLoading(false);
//       setUser(user);        
//     })
//     .catch((error) => {
//       // If the server sends an error response (invalid token) 
//       // Update state variables         

//       setUser(null);        
//     });      
//   } else {
//     // If the token is not available (or is removed)
//       setIsLoggedIn(false);
//       setIsLoading(false);
//       setUser(null);      
//   }   
// }

export default api;
                 