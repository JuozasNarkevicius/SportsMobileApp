import axios from 'axios';

// const BASE_URL = `https://${manifest.debuggerHost.split(':').shift()}:7025/api`;

// const BASE_URL = 'http://localhost:7025/api';

const BASE_URL = 'https://cc57-88-119-57-203.ngrok.io/api';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

const API = {
  get(path, body) {
    return axiosInstance.get(path, body);
  },
  post(path, body) {
    return axiosInstance.post(path, body);
  },
  put(path, body) {
    return axiosInstance.put(path, body);
  },
  delete(path) {
    return axiosInstance.delete(path);
  },
};

export default API;
