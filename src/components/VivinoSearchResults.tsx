import React from 'react';

interface VivinoSearchResultsProps {
  results: Array<{
    name: string;
    link: string;
    image: string;
    origin: string;
    rating: string;
    price: string;
  }>;
}

const VivinoSearchResults: React.FC<VivinoSearchResultsProps> = ({ results }) => {
  return (
    <div className="mt-8 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Search Results</h2>
      <ul className="space-y-4">
        {results.map((result, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <img src={result.image} alt={result.name} className="w-24 h-24 rounded-lg mr-4" />
            <div className="flex-grow">
              <a href={result.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg font-semibold">
                {result.name}
              </a>
              <p className="text-gray-600">{result.origin}</p>
              <div className="flex items-center">
                <span className="text-yellow-500">{result.rating} ★</span>
                <span className="ml-2 text-gray-800">{result.price}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VivinoSearchResults;
