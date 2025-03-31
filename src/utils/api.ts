import axiosInstance from './axios';
import { Wine } from '../types/wine';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const logout = async (): Promise<void> => {
  await axiosInstance.post(`${API_URL}/logout`, {});
}
  
export const getWineDetails = async (name: string): Promise<any[]> => {
	const response = await axiosInstance.get(`${API_URL}/wine-details/${name}`);
	return response.data;
  };

export const getFavorites = async (): Promise<Wine[]> => {
  const response = await axiosInstance.get(`${API_URL}/wine-favorites`);
  return response.data;
};

export const toggleFavorite = async (wine: Wine): Promise<void> => {
  await axiosInstance.post(`${API_URL}/wine-favorites`, wine);
};

export const analyzeImage = async (file: File): Promise<{ wineName: string }> => {
	const formData = new FormData();
	formData.append('image', file);

	const response = await axiosInstance.post(`${API_URL}/image-analysis`, formData, {
	  headers: {
		'Content-Type': 'multipart/form-data',
	  },
	});
	return response.data;
  };
  
  export const getHistory = async (): Promise<any[]> => {
	const response = await axiosInstance.get(`${API_URL}/history`);
	return response.data;
  };

  export const deleteHistoryEntry = async (id: string): Promise<void> => {
	await axiosInstance.delete(`${API_URL}/history/${id}`);
  };