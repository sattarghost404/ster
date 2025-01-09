'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

const regions = [
  "North America",
  "South America",
  "Europe",
  "Asia",
  "Africa",
  "Oceania",
  "Middle East"
]

const categories = [
  "Entertainment",
  "Sports",
  "News",
  "Movies",
  "Kids",
  "Music",
  "Documentary",
  "Lifestyle"
]

const channels = [
  { name: "CNN", region: "North America", category: "News" },
  { name: "BBC World", region: "Europe", category: "News" },
  { name: "ESPN", region: "North America", category: "Sports" },
  { name: "Sky Sports", region: "Europe", category: "Sports" },
  { name: "HBO", region: "North America", category: "Entertainment" },
  { name: "Canal+", region: "Europe", category: "Entertainment" },
  { name: "Al Jazeera", region: "Middle East", category: "News" },
  { name: "Star Sports", region: "Asia", category: "Sports" },
  { name: "Discovery Channel", region: "North America", category: "Documentary" },
  { name: "Cartoon Network", region: "North America", category: "Kids" },
  { name: "MTV", region: "North America", category: "Music" },
  { name: "Food Network", region: "North America", category: "Lifestyle" },
  { name: "Globo", region: "South America", category: "Entertainment" },
  { name: "CCTV", region: "Asia", category: "News" },
  { name: "SuperSport", region: "Africa", category: "Sports" },
  { name: "Fox Sports Australia", region: "Oceania", category: "Sports" },
  { name: "Eurosport", region: "Europe", category: "Sports" },
  { name: "NHK World", region: "Asia", category: "News" },
  { name: "RAI", region: "Europe", category: "Entertainment" },
  { name: "TV5Monde", region: "Europe", category: "Entertainment" },
  { name: "France 24", region: "Europe", category: "News" },
  { name: "Zee TV", region: "Asia", category: "Entertainment" },
  { name: "beIN Sports", region: "Middle East", category: "Sports" },
  { name: "National Geographic", region: "North America", category: "Documentary" },
  { name: "TV Globo Internacional", region: "South America", category: "Entertainment" },
  { name: "Deutsche Welle", region: "Europe", category: "News" },
  { name: "CCTV-4", region: "Asia", category: "News" },
  { name: "MBC", region: "Middle East", category: "Entertainment" },
  { name: "RTÉ One", region: "Europe", category: "Entertainment" },
  { name: "ABC (Australian Broadcasting Corporation)", region: "Oceania", category: "News" },
  { name: "Nickelodeon", region: "North America", category: "Kids" },
  { name: "Disney Channel", region: "North America", category: "Kids" },
  { name: "Discovery+", region: "North America", category: "Documentary" },
  { name: "History Channel", region: "North America", category: "Documentary" },
  { name: "A&E", region: "North America", category: "Entertainment" },
  { name: "TNT", region: "North America", category: "Entertainment" },
  { name: "Comedy Central", region: "North America", category: "Entertainment" },
  { name: "Sony Max", region: "Asia", category: "Movies" },
  { name: "Boomerang", region: "Europe", category: "Kids" },
  { name: "VH1", region: "North America", category: "Music" },
  { name: "Nile TV", region: "Africa", category: "News" },
  { name: "DSTV", region: "Africa", category: "Lifestyle" },
  { name: "Animal Planet", region: "North America", category: "Documentary" },
  { name: "KBS World", region: "Asia", category: "Entertainment" },
  { name: "Dubai One", region: "Middle East", category: "Entertainment" },
  { name: "RT", region: "Europe", category: "News" },
  { name: "Press TV", region: "Middle East", category: "News" },
  { name: "ABC Kids", region: "Oceania", category: "Kids" },
  { name: "Fox News", region: "North America", category: "News" },
  { name: "Hallmark Channel", region: "North America", category: "Movies" },
  { name: "Lifetime", region: "North America", category: "Lifestyle" },
  { name: "TV Tokyo", region: "Asia", category: "Entertainment" },
  { name: "Telefe", region: "South America", category: "Entertainment" },
  { name: "Canal Sur", region: "Europe", category: "News" },
  { name: "SBS", region: "Oceania", category: "Entertainment" },
  { name: "Hunan TV", region: "Asia", category: "Entertainment" },
  { name: "IRIB TV3", region: "Middle East", category: "Sports" },
  { name: "Arirang", region: "Asia", category: "Lifestyle" },
  { name: "Colors", region: "Asia", category: "Entertainment" },
  { name: "Rai Sport", region: "Europe", category: "Sports" },
  { name: "Channel i", region: "Asia", category: "News" },
  { name: "Al Arabiya", region: "Middle East", category: "News" },
  { name: "Astro Ria", region: "Asia", category: "Entertainment" },
  { name: "CTV", region: "North America", category: "News" },
  { name: "Fox Cricket", region: "Oceania", category: "Sports" },
  { name: "YTV", region: "North America", category: "Kids" },
  { name: "Nine Network", region: "Oceania", category: "Entertainment" },
  { name: "RTP", region: "Europe", category: "News" },
  { name: "VTV", region: "Asia", category: "News" },
  { name: "Antena 3", region: "Europe", category: "Entertainment" },
]

export default function ChannelList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const filteredChannels = channels.filter(channel => 
    channel.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedRegion === '' || channel.region === selectedRegion) &&
    (selectedCategory === '' || channel.category === selectedCategory)
  )

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Channel List</h1>
        <p className="text-xl text-gray-300 mb-8">Browse our extensive library of over 25,000 channels from around the world.</p>
        
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search channels..."
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" />
          </div>
          <select
            className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
          >
            <option value="">All Regions</option>
            {regions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
          <select
            className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {filteredChannels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gray-800 p-4 rounded-md shadow-md"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{channel.name}</h3>
                <p className="text-sm text-gray-400">{channel.region}</p>
                <p className="text-sm text-gray-400">{channel.category}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 mt-8">No channels found matching your criteria. Try adjusting your filters.</p>
        )}
      </motion.div>
    </div>
  )
}

