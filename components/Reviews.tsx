'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    comment: "Best IPTV service I've ever used! The streaming quality is exceptional, and the channel selection is incredible. Customer support is also top-notch.",
    date: "2 days ago",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQEXtF8OTXdqTQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517078996533?e=2147483647&v=beta&t=SUPFfpfQz9acntX7jX0YFFuJfdtLrjoW1PZ1hXHot-s"
  },
  {
    name: "Mohammed Ali",
    location: "Dubai, UAE",
    rating: 5,
    comment: "Amazing service with great Arabic channels. The 4K quality is fantastic, and I never experience any buffering. Highly recommended!",
    date: "1 week ago",
    image: "https://media.licdn.com/dms/image/D4E03AQFXmEzkn5gtOg/profile-displayphoto-shrink_200_200/0/1696640351154?e=2147483647&v=beta&t=426m4rgf8iv0Nvqfq3pio7SNYX-l8YruJE8FWLm4cRA"
  },
  {
    name: "Jean Pierre",
    location: "Paris, France",
    rating: 5,
    comment: "Excellent selection of French channels and international sports. The multi-device support works perfectly for my family.",
    date: "3 days ago",
    image: "https://media.licdn.com/dms/image/v2/C5603AQE0ufz815ptng/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1584998976026?e=2147483647&v=beta&t=MaffsuYRWj1raRm7dYC8ub50NIfMQogYrzj_HxPcW5c"
  }
]

const Reviews = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <img 
              src="https://cdn-icons-png.flaticon.com/128/300/300221.png" 
              alt="Google" 
              className="h-8 w-8 mr-2"
            />
            <h2 className="text-4xl md:text-5xl font-bold">
              Google Reviews
            </h2>
          </div>
          <div className="flex items-center justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
            ))}
            <span className="ml-2 text-2xl font-bold">4.9</span>
            <span className="ml-2 text-gray-400">(1,234+ reviews)</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 relative group hover:bg-gray-800/70 transition-colors"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-red-500/20" />
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold">{review.name}</h3>
                  <p className="text-gray-400 text-sm">{review.location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">{review.comment}</p>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>{review.date}</span>
                <div className="flex items-center">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/128/300/300221.png" 
                    alt="Google" 
                    className="h-4 w-4 mr-1"
                  />
                  <span>Google Review</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center space-x-2 text-red-500 hover:text-red-400 transition-colors"
          >
            <span>View all Google Reviews</span>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Reviews

