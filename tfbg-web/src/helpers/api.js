import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9000",
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers["Authorization"] = "Bearer " + token;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

const errorHandling = (error) => {
  console.log(error);
  return Promise.reject(error);
};

const get = (endpoint) => {
  return axiosInstance
    .get(endpoint)
    .then((resp) => resp.data)
    .catch(errorHandling);
};

const post = (endpoint, body, options) => {
  return axiosInstance
    .post(endpoint, body, options)
    .then((resp) => resp.data)
    .catch(errorHandling);
};

const put = (endpoint, body) => {
  return axiosInstance
    .put(endpoint, body)
    .then((resp) => resp.data)
    .catch(errorHandling);
};

const del = (endpoint) => {
  return axiosInstance
    .delete(endpoint)
    .then((resp) => resp.data)
    .catch(errorHandling);
};

const API = {
  get,
  post,
  put,
  del,
};

export default API;
