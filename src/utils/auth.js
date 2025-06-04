import axios from 'axios';

const api = axios.create({
  baseURL: 'https://crmxeno.up.railway.app',
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  }
});

export const checkAuth = async () => {
  try {
    console.log('Checking authentication...');
    const res = await api.get('/api/user');
    console.log('Auth check successful:', res.data);
    return res.data;
  } catch (err) {
    console.error('Auth check failed:', err.response?.status, err.response?.data);
    return null;
  }
};
