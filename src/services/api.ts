import axios from 'axios';

const api = axios.create({
  baseURL: 'https://602ed0334410730017c51564.mockapi.io/api/'
});

export default api;
