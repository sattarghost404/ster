'use client'

import { useState, useEffect } from 'react'
import { Check, Play, Users, Tv, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import SearchBar from './SearchBar'

const Hero = () => {
  const [liveCount, setLiveCount] = useState(15234)
  const [rating, setRating] = useState(4.9)
  const [activeUsers, setActiveUsers] = useState(98765)

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount(prev => prev + Math.floor(Math.random() * 10))
      setRating(prev => Math.min(5, prev + (Math.random() - 0.5) * 0.01))
      setActiveUsers(prev => prev + Math.floor(Math.random() * 5))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen pt-20 bg-cover bg-center" style={{backgroundImage: 'url("/hero-bg.jpg")'}}>
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid grid-cols-4 gap-1 opacity-20">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
            className="bg-cover bg-center transform hover:scale-105 transition-transform duration-500"
            style={{
              backgroundImage: `url(/placeholder.svg?height=400&width=300&text=Movie${i + 1})`,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />

      {/* Live Viewers Counter */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute top-24 right-4 bg-red-600/20 backdrop-blur-sm rounded-full px-6 py-2 flex items-center space-x-4"
      >
        <div className="flex items-center space-x-2">
          <Users className="h-5 w-5 text-red-500 animate-pulse" />
          <span className="text-white font-medium">{liveCount.toLocaleString()} Live</span>
        </div>
        <div className="flex items-center space-x-2">
          <Star className="h-5 w-5 text-yellow-500" />
          <span className="text-white font-medium">{rating.toFixed(1)} Rating</span>
        </div>
        <div className="flex items-center space-x-2">
          <Tv className="h-5 w-5 text-green-500" />
          <span className="text-white font-medium">{activeUsers.toLocaleString()} Active</span>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20 text-center">
        <motion.span 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="inline-block text-red-600 text-sm font-semibold tracking-wider uppercase mb-4 bg-red-600/10 px-4 py-2 rounded-full"
        >
          PREMIUM IPTV CONNECTION
        </motion.span>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Enjoy Top Quality Streaming
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
            With Nestor IPTV
          </span>
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 text-xl mb-8 max-w-3xl mx-auto"
        >
          Experience unlimited entertainment with over 25,000+ channels, premium sports,
          and exclusive content in crystal clear 4K quality
        </motion.p>

        {/* Search Bar */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <SearchBar />
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Tv, text: "Connect unlimited devices at once" },
            { icon: Play, text: "25,000+ worldwide channels in 4K" },
            { icon: Users, text: "500K+ movies and TV shows" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center justify-center space-x-3 bg-white/5 rounded-full px-6 py-3 backdrop-blur-sm"
            >
              <feature.icon className="h-5 w-5 text-red-500" />
              <span className="text-white">{feature.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero

