'use client'


import Navbar from './components/Navbar'

type Pokemon = {
  name: string
  image: string
  type: string
  region: string
  description: string
}

const pokemons: Pokemon[] = [
  {
    name: 'Pikachu',
    image: 'https://img.pokemondb.net/artwork/large/pikachu.jpg',
    type: 'Electric',
    region: 'Kanto',
    description:
      'Pikachu is the iconic Electric-type Pokémon, known for its adorable appearance and powerful Thunderbolt. It’s the loyal companion of Ash Ketchum in the anime series.',
  },
  {
    name: 'Charizard',
    image: 'https://img.pokemondb.net/artwork/large/charizard.jpg',
    type: 'Fire / Flying',
    region: 'Kanto',
    description:
      'Charizard is the final evolution of Charmander. With its fiery breath and dragon-like wings, it is one of the most popular and powerful Pokémon in the franchise.',
  },
  {
    name: 'Bulbasaur',
    image: 'https://img.pokemondb.net/artwork/large/bulbasaur.jpg',
    type: 'Grass / Poison',
    region: 'Kanto',
    description:
      'Bulbasaur is a dual-type Pokémon known for the plant bulb on its back. As it grows, the bulb blossoms into a large flower, evolving into Ivysaur and then Venusaur.',
  },
  {
    name: 'Lucario',
    image: 'https://img.pokemondb.net/artwork/large/lucario.jpg',
    type: 'Fighting / Steel',
    region: 'Sinnoh',
    description:
      'Lucario can sense and manipulate aura, making it a mystical and powerful fighter. It has appeared in many games and anime episodes as a fan favorite.',
  },
  {
    name: 'Gengar',
    image: 'https://img.pokemondb.net/artwork/large/gengar.jpg',
    type: 'Ghost / Poison',
    region: 'Kanto',
    description:
      'Gengar is a mischievous Ghost-type Pokémon that thrives in shadows and tricks. Its eerie grin and ghostly powers make it a spooky yet beloved team member.',
  },
  {
    name: 'Greninja',
    image: 'https://img.pokemondb.net/artwork/large/greninja.jpg',
    type: 'Water / Dark',
    region: 'Kalos',
    description:
      'Greninja is a stealthy ninja-like Pokémon known for its agility and Water Shuriken attack. It’s one of the few Pokémon with a unique Ash-Greninja form.',
  },
]

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-yellow-50 text-gray-800">
        {/* Main Content */}
        <main className="flex-grow p-8">
          <section className="max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl font-semibold mb-4">About Pokémon</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Pokémon, short for “Pocket Monsters,” is a Japanese franchise created by Satoshi Tajiri in 1996. It started
              as a Game Boy game developed by Game Freak and published by Nintendo. Since then, it has become one of the
              most successful franchises globally, spanning video games, trading card games, animated series, movies, and
              merchandise.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Trainers from different regions capture and train Pokémon for battles, competitions, and companionship.
              Each Pokémon belongs to one or more elemental types such as Water, Fire, Grass, Electric, and Ghost, which
              define their strengths and weaknesses in battles.
            </p>
          </section>

          {/* Pokémon Cards */}
          <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-center">Featured Pokémon</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {pokemons.map((pokemon) => (
                <div
                  key={pokemon.name}
                  className="bg-white rounded-xl shadow-lg p-4 border hover:shadow-2xl transition duration-300"
                >
                  <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className="w-full h-48 object-contain mb-4 rounded"
                  />
                  <h3 className="text-xl font-bold text-center text-indigo-700">{pokemon.name}</h3>
                  <p className="text-center text-sm text-gray-600 mb-1">Type: {pokemon.type}</p>
                  <p className="text-center text-sm text-gray-600 mb-3">Region: {pokemon.region}</p>
                  <p className="text-sm text-gray-700 text-center">{pokemon.description}</p>
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
