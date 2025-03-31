import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

// Ensure cookies are sent with requests
axios.defaults.withCredentials = true;

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        email,
        password,
      });

      document.cookie = `token=${res.data.token}; path=/;`;

      // Redirect to intended page or homepage
      const redirectUrl = (router.query.redirect as string) || "/";
      router.push(redirectUrl);
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-center mb-4">Login</h1>

        {error && (
          <div className="bg-red-500 text-white p-2 mb-4 rounded-md text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Log In
          </button>
        </form>

        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">Don't have an account?</span>
          <Link href="/register" className="ml-1 text-indigo-600 hover:text-indigo-700 text-sm">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
