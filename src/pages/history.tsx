import React, { useEffect, useState } from 'react';
import { getHistory, deleteHistoryEntry } from '../utils/api';
import Navbar from '../components/Navbar';

const History: React.FC = () => {
  const [history, setHistory] = useState<any[]>([]);
  //const SERVER_IP = '192.168.0.12'; // Sustituye esto con la IP de tu servidor
  //const SERVER_PORT = '5001'; // Sustituye esto con el puerto de tu servidor

  useEffect(() => {
    const fetchHistory = async () => {
      const data = await getHistory();
      setHistory(data);
    };

    fetchHistory();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteHistoryEntry(id);
    setHistory(history.filter(entry => entry._id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 bg-opacity-80">
      <Navbar />
      <div className="mt-8 w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Upload History</h2>
        <ul className="space-y-4">
          {history.map((entry, index) => (
            <li key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center relative">
              <button
                onClick={() => handleDelete(entry._id)}
                className="absolute top-2 right-2 text-red-600"
              >
                &#x2716;
              </button>
              <img
                src={entry.image}
                alt={entry.name}
                className="w-24 h-24 rounded-lg mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{entry.wineName}</h3>
                <p className="text-gray-600">{new Date(entry.uploadDate).toLocaleString()}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default History;
