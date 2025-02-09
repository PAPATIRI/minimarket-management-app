import axios from "axios";
import type {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import * as SecureStore from "expo-secure-store";

const apiBaseUrl = process.env.EXPO_PUBLIC_BASE_API_URL;
const api: AxiosInstance = axios.create({
  baseURL: `${apiBaseUrl}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async function (config: InternalAxiosRequestConfig) {
    const token = await SecureStore.getItemAsync("userToken");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async function (error: AxiosError) {
    if (error.response?.status === 401) {
      await SecureStore.deleteItemAsync("userToken");
    }
    return Promise.reject(error);
  }
);

export default api;
