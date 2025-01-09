'use client'

import { motion } from 'framer-motion'
import { Tv, Globe, Users, Shield } from 'lucide-react'

const features = [
  { 
    icon: Tv, 
    title: "Extensive Content Library", 
    description: "Access over 25,000 channels and a vast selection of movies and TV shows from around the world." 
  },
  { 
    icon: Globe, 
    title: "Global Coverage", 
    description: "Enjoy content from every corner of the globe, with channels from over 150 countries." 
  },
  { 
    icon: Users, 
    title: "Multi-Device Support", 
    description: "Watch on your TV, computer, tablet, or smartphone - anytime, anywhere." 
  },
  { 
    icon: Shield, 
    title: "Secure and Legal", 
    description: "We operate in full compliance with copyright laws, ensuring a worry-free viewing experience." 
  },
]

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white text-center mb-8">About Nestor IPTV</h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 text-center mb-12"
        >
          Nestor IPTV is a leading provider of high-quality streaming services, 
          offering an unparalleled selection of live TV channels, movies, and TV shows 
          to viewers around the world.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <feature.icon className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gray-800 p-6 rounded-lg mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-300">
            At Nestor IPTV, our mission is to revolutionize the way people consume television 
            and media content. We strive to provide a seamless, high-quality streaming experience 
            that brings the world's entertainment to your fingertips. Our commitment to innovation, 
            reliability, and customer satisfaction drives us to continually improve our services 
            and expand our offerings.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Join the Nestor IPTV Family</h2>
          <p className="text-gray-300 mb-6">
            Experience the future of television with Nestor IPTV. Join thousands of satisfied 
            customers who have made the switch to our premium streaming service.
          </p>
          <button className="bg-red-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
            Get Started Today
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}

