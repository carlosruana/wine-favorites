import axios from 'axios';
import { Wine } from '../types/wine';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const getAuthHeaders = () => {
  // Only add the Authorization header if an API_KEY is provided
  return API_KEY ? { 'Authorization': `Bearer ${API_KEY}` } : {};
};
  
export const getWineDetails = async (name: string): Promise<any[]> => {
	const response = await axios.get(`${API_URL}/wine-details/${name}`);
	return response.data;
  };

export const getFavorites = async (): Promise<Wine[]> => {
  const response = await axios.get(`${API_URL}/wine-favorites`, {
    headers: getAuthHeaders()
  });
  return response.data;
};

export const toggleFavorite = async (wine: Wine): Promise<void> => {
  await axios.post(`${API_URL}/wine-favorites`, wine, {
    headers: getAuthHeaders()
  });
};

export const analyzeImage = async (file: File): Promise<{ wineName: string }> => {
	const formData = new FormData();
	formData.append('image', file);

	const response = await axios.post(`${API_URL}/image-analysis`, formData, {
	  headers: {
		'Content-Type': 'multipart/form-data',
	  },
	});
	return response.data;
  };
  
  export const getHistory = async (): Promise<any[]> => {
	const response = await axios.get(`${API_URL}/history`);
	return response.data;
  };

  export const deleteHistoryEntry = async (id: string): Promise<void> => {
	await axios.delete(`${API_URL}/history/${id}`);
  };