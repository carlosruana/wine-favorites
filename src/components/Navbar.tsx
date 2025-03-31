import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { logout } from '../utils/api';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/login");
    } catch (error) {
      setError("Your session has already expired.");
      setTimeout(() => {
        setError(null);
        router.push("/");
      }, 2000);
    }
  };

  return (
    <nav className="bg-gray-800 w-full p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          Top Wines
        </Link>
        <div className="flex space-x-4 items-center">
          <Link href="/" className="text-white">
            Home
          </Link>
          <Link href="/history" className="text-white">
            History
          </Link>
          <Link href="/favorites" className="text-white">
            Favorites
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-200"
          >
            Logout
          </button>
        </div>
      </div>
      {error && (
        <div className="text-center text-red-500 text-sm mt-2">{error}</div>
      )}
    </nav>
  );
};

export default Navbar;
