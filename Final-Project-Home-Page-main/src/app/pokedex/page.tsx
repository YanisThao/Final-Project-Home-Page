'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'

const pokedex = [
  {
    name: 'Eevee',
    type: 'Normal',
    region: 'Kanto',
    image: 'https://img.pokemondb.net/artwork/large/eevee.jpg',
    description: 'A rare Pokémon with unstable genetics. It can evolve into multiple types depending on conditions.',
  },
  {
    name: 'Togepi',
    type: 'Fairy',
    region: 'Johto',
    image: 'https://img.pokemondb.net/artwork/large/togepi.jpg',
    description: 'Togepi stores happiness in its shell and shares it with those it trusts.',
  },
  {
    name: 'Snorlax',
    type: 'Normal',
    region: 'Kanto',
    image: 'https://img.pokemondb.net/artwork/large/snorlax.jpg',
    description: 'A sleepy giant that blocks roads. Eats over 800 pounds of food per day before napping.',
  },
  {
    name: 'Lucario',
    type: 'Fighting / Steel',
    region: 'Sinnoh',
    image: 'https://img.pokemondb.net/artwork/large/lucario.jpg',
    description: 'Lucario can sense aura and is a skilled fighter, making it a powerful ally.',
  },
  {
    name: 'Gardevoir',
    type: 'Psychic / Fairy',
    region: 'Hoenn',
    image: 'https://img.pokemondb.net/artwork/large/gardevoir.jpg',
    description: 'It will risk its life to protect its trainer. Known for elegance and powerful psychic abilities.',
  },
  {
    name: 'Garchomp',
    type: 'Dragon / Ground',
    region: 'Sinnoh',
    image: 'https://img.pokemondb.net/artwork/large/garchomp.jpg',
    description: 'Fast and fierce, Garchomp is known for its brutal attacks and jet-like speed.',
  },
  {
    name: 'Infernape',
    type: 'Fire / Fighting',
    region: 'Sinnoh',
    image: 'https://img.pokemondb.net/artwork/large/infernape.jpg',
    description: 'A nimble and fiery monkey Pokémon known for relentless battle technique.',
  },
  {
    name: 'Leafeon',
    type: 'Grass',
    region: 'Sinnoh',
    image: 'https://img.pokemondb.net/artwork/large/leafeon.jpg',
    description: 'Its leafy body purifies air, and it enjoys basking in the sun to store energy.',
  },
]

export default function PokedexPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('All')
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const regions = ['All', ...Array.from(new Set(pokedex.map((p) => p.region)))]

  const filtered = pokedex.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRegion = selectedRegion === 'All' || p.region === selectedRegion
    return matchesSearch && matchesRegion
  })

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-red-50 to-yellow-100 text-gray-800 p-6">
        <header className="text-center mb-6">
          <h1 className="text-4xl font-bold text-red-600">Pokédex Viewer</h1>
          <p className="text-gray-600 max-w-xl mx-auto">Explore and search through some well-known Pokémon with their regions, types, and lore.</p>
        </header>

        {/* Search + Filter Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Search by name..."
            className="px-4 py-2 rounded-full border border-gray-300 shadow-sm w-64 focus:outline-none focus:ring-2 focus:ring-red-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="px-4 py-2 rounded-full border border-gray-300 shadow-sm w-52 focus:outline-none focus:ring-2 focus:ring-red-300"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
          >
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        {/* Cards */}
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filtered.map((poke) => (
            <div
              key={poke.name}
              onClick={() => setExpandedCard(expandedCard === poke.name ? null : poke.name)}
              className="cursor-pointer bg-white rounded-xl shadow-lg p-4 border hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={poke.image}
                alt={poke.name}
                className="w-full h-48 object-contain mb-4 rounded"
              />
              <h2 className="text-xl font-bold text-center text-red-700">{poke.name}</h2>
              <p className="text-sm text-center text-gray-600">Type: {poke.type}</p>
              <p className="text-sm text-center text-gray-600 mb-2">Region: {poke.region}</p>
              {expandedCard === poke.name && (
                <p className="text-sm text-center text-gray-700">{poke.description}</p>
              )}
            </div>
          ))}
        </main>

        <footer className="bg-gray-900 text-white text-center p-4 mt-12 text-sm">
          &copy; 2025 Pokémon Fan Project. Not affiliated with Nintendo, Game Freak, or The Pokémon Company.
        </footer>
      </div>
    </>
  )
}
