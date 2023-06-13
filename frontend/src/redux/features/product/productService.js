import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/products/`;

const config = {
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
};

//Create new product
const createProduct = async (formData) => {
  const response = await axios.post(API_URL, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    withCredentials: true,
  });
  return response.data;
};

//Get all products
const getProducts = async () => {
  const response = await axios.get(API_URL, config);
  return response.data;
};

//Delete product
const deleteProduct = async (id) => {
  const response = await axios.delete(API_URL + id, config);
  return response.data;
};

//Get a product
const getProduct = async (id) => {
  const response = await axios.get(API_URL + id, config);
  return response.data;
};

//Update product
const updateProduct = async (id, formData) => {
  const response = await axios.patch(`${API_URL}${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    withCredentials: true,
  });
  return response.data;
};

const productService = {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};

export default productService;
