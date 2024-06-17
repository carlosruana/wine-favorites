import React, { useState, useEffect } from 'react';
import WineList from '../components/WineList';
import Navbar from '../components/Navbar';
import { Wine } from '../types/wine';
import { getFavorites, toggleFavorite } from '../utils/api';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Wine[]>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const favs = await getFavorites();
      setFavorites(favs);
    };
    fetchFavorites();
  }, []);

  const handleFavoriteToggle = async (wine: Wine) => {
    await toggleFavorite(wine);
    setFavorites((prev) => prev.filter((w) => w.id !== wine.id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Favorite Wines</h1>
        <WineList wines={favorites} onFavorite={handleFavoriteToggle} />
      </div>
    </div>
  );
};

export default Favorites;
