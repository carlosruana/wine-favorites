import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 w-full p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">Wine App</Link>
        <div className="flex space-x-4">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/history" className="text-white">History</Link>
          <Link href="/favorites" className="text-white">Favorites</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
