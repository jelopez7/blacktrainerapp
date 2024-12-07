import axios from "axios";
import { getToken } from "../utils/token";
import { BASE_PATH } from "../utils/constant";

const baseURL = BASE_PATH;

const httpSinToken = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

const httpConToken = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

httpConToken.interceptors.request.use(
  async (config) => {
    try {
      // Obtener el token de forma asincrónica
      const token = await getToken(); // Asegúrate de que `getToken` devuelva una Promesa
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error obteniendo el token:", error);
    }
    return config;
  },
  (error) => {
    // Manejar errores antes de enviar la solicitud
    return Promise.reject(error);
  }
);

export { httpSinToken, httpConToken };
