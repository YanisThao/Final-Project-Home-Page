'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'

const legendaries = [
  {
    name: 'Mewtwo',
    type: 'Psychic',
    region: 'Kanto',
    image: 'https://img.pokemondb.net/artwork/large/mewtwo.jpg',
    description:
      'A genetically-engineered Pokémon created from Mew’s DNA. Known for its immense psychic power and intelligence.',
  },
  {
    name: 'Lugia',
    type: 'Psychic / Flying',
    region: 'Johto',
    image: 'https://img.pokemondb.net/artwork/large/lugia.jpg',
    description:
      'Known as the Guardian of the Seas, Lugia can calm storms with a flap of its wings. It dwells deep in the ocean.',
  },
  {
    name: 'Rayquaza',
    type: 'Dragon / Flying',
    region: 'Hoenn',
    image: 'https://img.pokemondb.net/artwork/large/rayquaza.jpg',
    description:
      'A powerful sky serpent that lives in the ozone layer. Rayquaza ends the destructive clashes between Kyogre and Groudon.',
  },
  {
    name: 'Dialga',
    type: 'Steel / Dragon',
    region: 'Sinnoh',
    image: 'https://img.pokemondb.net/artwork/large/dialga.jpg',
    description:
      'Dialga is said to govern time itself. Its roar is believed to distort the flow of time.',
  },
  {
    name: 'Palkia',
    type: 'Water / Dragon',
    region: 'Sinnoh',
    image: 'https://img.pokemondb.net/artwork/large/palkia.jpg',
    description:
      'Palkia controls space. It is said to live in a spatial rift and can warp space at will.',
  },
  {
    name: 'Zacian',
    type: 'Fairy / Steel',
    region: 'Galar',
    image: 'https://img.pokemondb.net/artwork/large/zacian.jpg',
    description:
      'A graceful yet formidable sword-wielding wolf. It becomes more powerful in its Crowned Sword form.',
  },
  {
    name: 'Zamazenta',
    type: 'Fighting / Steel',
    region: 'Galar',
    image: 'https://img.pokemondb.net/artwork/large/zamazenta.jpg',
    description:
      'Zamazenta defends with a regal shield. It has protected the Galar region from ancient threats.',
  },
  {
    name: 'Koraidon',
    type: 'Fighting / Dragon',
    region: 'Paldea',
    image: 'https://img.pokemondb.net/artwork/large/koraidon.jpg',
    description:
      'A legendary Pokémon from ancient Paldea. It uses its powerful legs and primal strength in battle.',
  },
]

export default function LegendariesPage() {
  const [selectedRegion, setSelectedRegion] = useState('All')
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const regions = ['All', ...Array.from(new Set(legendaries.map((p) => p.region)))]

  const filteredLegendaries =
    selectedRegion === 'All'
      ? legendaries
      : legendaries.filter((p) => p.region === selectedRegion)

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 text-gray-800 p-6">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-indigo-700">Legendary Pokémon</h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Click a region to filter legendary Pokémon. Tap a card to read more!
          </p>
        </header>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 rounded-full font-semibold transition shadow-md ${
                selectedRegion === region
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-indigo-700 hover:bg-indigo-200'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Pokémon Cards */}
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredLegendaries.map((legend) => (
            <div
              key={legend.name}
              onClick={() =>
                setExpandedCard(expandedCard === legend.name ? null : legend.name)
              }
              className="cursor-pointer bg-white rounded-xl shadow-md p-6 border hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={legend.image}
                alt={legend.name}
                className="w-full h-48 object-contain mb-4 rounded"
              />
              <h2 className="text-xl font-bold text-center text-purple-800">{legend.name}</h2>
              <p className="text-sm text-center text-gray-600">Type: {legend.type}</p>
              <p className="text-sm text-center text-gray-600 mb-2">Region: {legend.region}</p>
              {expandedCard === legend.name && (
                <p className="text-sm text-center text-gray-700 mt-2">{legend.description}</p>
              )}
            </div>
          ))}
        </main>

        <footer className="bg-gray-900 text-white text-center p-4 mt-12 text-sm">
          &copy; 2025 Pokémon Fan Project. This is a fan-made project and not affiliated with Nintendo.
        </footer>
      </div>
    </>
  )
}
