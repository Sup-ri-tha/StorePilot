import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const getServerHealth = async () => {
  const response = await API.get("/products/health");
  return response.data;
};

export const getProducts = async () => {
  const response = await API.get("/products");
  return response.data;
};

export default API;