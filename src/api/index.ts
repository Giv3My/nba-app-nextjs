import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL,
});

api.interceptors.request.use((config) => {
  config.headers.set({
    'x-rapidapi-key': process.env.API_KEY!,
    'x-rapidapi-host': process.env.API_HOST!,
  });

  return config;
});

export default api;
