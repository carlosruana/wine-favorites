import axios from 'axios';

// Configura Axios globalmente para enviar cookies con cada solicitud
const axiosInstance = axios.create({
  baseURL: "https://wine-favorites-backend.onrender.com", // Cambia esta URL con la URL de tu backend
  withCredentials: true, // Esto asegura que las cookies se envíen en todas las solicitudes
});

export default axiosInstance;
