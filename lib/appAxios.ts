import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
