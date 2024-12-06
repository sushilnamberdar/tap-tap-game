import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
});

export const incrementCoins = async (userId, coins) => {
  const response = await api.post('/game/increment-coins', { userId, coins });
  return response.data;
};

export default api;
