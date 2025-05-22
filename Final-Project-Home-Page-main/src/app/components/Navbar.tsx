"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white py-4 px-6 mb-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600">Pokémon World</h1>
        <div className="space-x-4">
          <Link
            href="/"
            className="text-blue-600 hover:text-yellow-500 font-medium transition"
          >
            Home
          </Link>
          <Link
            href="/regions"
            className="text-blue-600 hover:text-yellow-500 font-medium transition"
          >
            Regions
          </Link>
          <Link
            href="/legendaries"
            className="text-blue-600 hover:text-yellow-500 font-medium transition"
          >
            Legendaries
          </Link>
          <Link
            href="/pokedex"
            className="text-blue-600 hover:text-yellow-500 font-medium transition"
          >
            Pokédex
          </Link>
        </div>
      </div>
    </nav>
  );
}
