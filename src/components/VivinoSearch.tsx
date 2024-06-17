import React from 'react';

interface VivinoSearchProps {
  query: string;
}

const VivinoSearch: React.FC<VivinoSearchProps> = ({ query }) => {
  const vivinoUrl = `https://www.vivino.com/search/wines?q=${encodeURIComponent(query)}`;
  return (
    <div className="w-full h-screen">
      <iframe
        src={vivinoUrl}
        className="w-full h-full border-none"
        title="Vivino Search"
      />
    </div>
  );
};

export default VivinoSearch;
