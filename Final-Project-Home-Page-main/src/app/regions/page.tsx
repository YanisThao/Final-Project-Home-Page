'use client'

import Link from 'next/link'


const regions = [
  {
    name: 'Kanto',
    description: 'The original region, home of Pikachu and the first 151 Pokémon.',
  },
  {
    name: 'Johto',
    description: 'Introduced in Generation II, known for Lugia, Ho-Oh, and new evolutions.',
  },
  {
    name: 'Hoenn',
    description: 'A tropical region with vast oceans and powerful Pokémon like Kyogre and Groudon.',
  },
  {
    name: 'Sinnoh',
    description: 'A snowy, mountainous region with deep legends and Pokémon like Dialga and Palkia.',
  },
  {
    name: 'Unova',
    description: 'Inspired by New York, this region introduces a completely new Pokédex.',
  },
  {
    name: 'Kalos',
    description: 'French-inspired region that introduced mega-evolutions and Greninja.',
  },
  {
    name: 'Alola',
    description: 'Hawaiian-style islands with regional Pokémon forms and island challenges.',
  },
  {
    name: 'Galar',
    description: 'A UK-inspired region with Dynamax battles and a strong league system.',
  },
  {
    name: 'Paldea',
    description: 'The newest region (Gen 9), a fully open-world experience from Scarlet & Violet.',
  },
]

export default function RegionsPage() {
  return (
    <>
      {/* <Navbar /> */}

      <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-blue-50 text-gray-800">
        {/* Header */}
        <header className="bg-green-300 p-6">
          <h1 className="text-4xl font-extrabold text-center text-green-900 drop-shadow-md">
            Pokémon Regions
          </h1>
          <p className="text-center text-gray-700 mt-2">
            Explore the iconic regions of the Pokémon world
          </p>
          <div className="text-center mt-4">
            <Link
              href="/"
              className="inline-block bg-blue-500 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-yellow-400 hover:text-black hover:scale-105 transform transition duration-300"
            >
              ← Back to Home
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow p-8">
          <section className="max-w-4xl mx-auto mb-10 text-center">
            <h2 className="text-2xl font-semibold mb-4">The World of Pokémon</h2>
            <p className="text-gray-700 leading-relaxed">
              Every region has its own unique Pokémon species, cities, and lore. Trainers explore these lands,
              conquer gyms, and aim to become Pokémon Champions. Discover the history of each region below!
            </p>
          </section>

          {/* Pokémon World Map */}
          <section className="max-w-4xl mx-auto mb-10 text-center">
            <h2 className="text-xl font-semibold mb-4">Pokémon World Map</h2>
            <img
              src="https://archives.bulbagarden.net/media/upload/archive/8/8d/20200520213210%21Pok%C3%A9mon_world_map.png"
              alt="Pokémon World Map"
              className="w-full max-w-3xl mx-auto rounded-xl border border-gray-200 shadow-xl hover:scale-105 transition-transform duration-300"
            />
            <p className="text-sm text-gray-600 mt-3">
              A fan-made visual map of the Pokémon regions across generations.
            </p>
          </section>

          {/* Region Cards */}
          <section className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {regions.map((region) => (
                <div
                  key={region.name}
                  className="bg-white rounded-xl shadow-md p-6 border hover:shadow-2xl hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-xl font-bold text-center text-green-800">{region.name}</h3>
                  <p className="text-sm text-gray-600 mt-3 text-center">{region.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center p-4 mt-12 text-sm">
          &copy; 2025 Pokémon Fan Project. This website is a fan-made educational
          project and is not affiliated with Nintendo, Game Freak, or The Pokémon Company.
        </footer>
      </div>
    </>
  )
}
