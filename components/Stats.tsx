'use client'

import { motion } from 'framer-motion'
import { Users, Tv, Film, Globe } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: "100K+",
    label: "Active Users",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Tv,
    value: "25,000+",
    label: "Live Channels",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Film,
    value: "500K+",
    label: "Movies & Shows",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Globe,
    value: "150+",
    label: "Countries",
    color: "from-green-500 to-green-600"
  }
]

const Stats = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-20 blur-2xl rounded-full`} />
                <div className="relative">
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-white" />
                  <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

