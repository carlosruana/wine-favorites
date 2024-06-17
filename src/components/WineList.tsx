import React from 'react';
import { Wine } from '../types/wine';

const WineList: React.FC<{ wines: Wine[]; onFavorite: (wine: Wine) => void }> = ({ wines, onFavorite }) => {
  return (
    <div className="space-y-4">
      {wines.map((wine) => (
        <div key={wine.id} className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold">{wine.name}</h3>
          <button 
            onClick={() => onFavorite(wine)} 
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Favorite
          </button>
        </div>
      ))}
    </div>
  );
};

export default WineList;
