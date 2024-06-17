import React from 'react';

interface WineDetailsProps {
  name: string;
  imageUrl: string;
}

const WineDetails: React.FC<WineDetailsProps> = ({ name, imageUrl }) => {
  return (
    <div className="relative mt-8 max-w-md mx-auto">
      <img src={imageUrl} alt={name} className="w-full h-auto rounded-lg shadow-lg" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 rounded-b-lg">
        <h2 className="text-2xl font-bold text-center">{name}</h2>
      </div>
    </div>
  );
};

export default WineDetails;
