'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Mock data for search results
const mockSearchResults = [
  { title: "Game of Thrones", type: "TV Show" },
  { title: "Breaking Bad", type: "TV Show" },
  { title: "Inception", type: "Movie" },
  { title: "CNN", type: "Channel" },
  { title: "ESPN", type: "Channel" },
  { title: "Friends", type: "TV Show" },
  { title: "The Godfather", type: "Movie" },
  { title: "BBC News", type: "Channel" },
  { title: "Stranger Things", type: "TV Show" },
  { title: "Interstellar", type: "Movie" },
]

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500))

    // Filter mock results based on query
    const filteredResults = mockSearchResults.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5)

    setResults(filteredResults)
    setIsLoading(false)
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="flex shadow-lg shadow-red-500/20">
        <input
          type="text"
          placeholder="Search your favorite channels, movies, or shows..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-6 py-4 rounded-l-full bg-white/10 text-white border-2 border-r-0 border-red-500/20 focus:outline-none focus:border-red-600 transition-colors"
        />
        <button
          type="submit"
          className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-r-full hover:from-red-700 hover:to-red-800 transition-colors flex items-center space-x-2 group"
          disabled={isLoading}
        >
          <span>{isLoading ? 'Searching...' : 'Search Now'}</span>
          <Search className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </form>

      <AnimatePresence>
        {results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-10 mt-2 w-full bg-gray-800 rounded-md shadow-lg"
          >
            <ul className="py-2">
              {results.map((result, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                >
                  <span className="text-white font-medium">{result.title}</span>
                  <span className="text-gray-400 text-sm ml-2">({result.type})</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

