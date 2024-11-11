import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: baseURL,
  timeout: 10000000000,
  headers: {
    "Content-Type": "application/json",
  }
});

export default api;
