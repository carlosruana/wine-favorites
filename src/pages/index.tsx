import React, { useState } from 'react';
import ImageUploader from '../components/ImageUploader';
import Navbar from '../components/Navbar';
import { analyzeImage, getWineDetails } from '../utils/api';

const Home: React.FC = () => {
  const [wineName, setWineName] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleImageUpload = async (file: File) => {
    const { wineName: detectedWineName } = await analyzeImage(file);
    setWineName(detectedWineName);
    setImageUrl(URL.createObjectURL(file)); // Mostrar la imagen subida

    // Obtener detalles del vino después de subir y analizar la imagen
    const results = await getWineDetails(detectedWineName);
    setSearchResults(results);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 bg-opacity-80">
      <Navbar />
      <div className="relative flex flex-col items-center justify-center p-8 w-full max-w-4xl">
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Upload a Wine Bottle Image</h2>
          <ImageUploader onImageUpload={handleImageUpload} />
          {imageUrl && (
            <div className="mt-8">
              <img src={imageUrl} alt="Uploaded Wine" className="w-full rounded-lg shadow-lg" />
            </div>
          )}
        </div>
      </div>
      {wineName && searchResults.length > 0 && (
        <div className="w-full max-w-4xl mt-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Search Results for "{wineName}"</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((result, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow-md">
                <img src={result.image} alt={result.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{result.name}</h3>
                  <p className="text-gray-600 mb-1">{result.origin}</p>
                  <p className="text-yellow-500 mb-1">{result.rating} ★</p>
                  <p className="text-green-600">{result.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
