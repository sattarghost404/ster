'use client'

import { motion } from 'framer-motion'

const channels = [
  {
    name: "Sports Premium",
    category: "Sports",
    image: "https://www.reviews.org/app/uploads/2019/12/Friends-watching-football.jpg"
  },
  {
    name: "Movies Ultra",
    category: "Entertainment",
    image: "https://www.cnet.com/a/img/resize/53019346ac4a4962cf676b1ace0dde45bec13b15/hub/2021/04/22/decf3f44-6b03-4093-bcef-35d2892be761/004-how-to-watch-netflix-on-your-tv-2021.jpg?auto=webp&fit=crop&height=675&width=1200"
  },
  {
    name: "News 24/7",
    category: "News",
    image: "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/rseL48eTitd99qgp/videoblocks-family-couple-watching-tv-news-sitting-on-couch-in-living-room-together_shemslxpgk_thumbnail-360_06.jpg"
  },
  {
    name: "Kids Zone",
    category: "Children",
    image: "https://t3.ftcdn.net/jpg/02/94/94/78/360_F_294947844_akUXUJ4eiylpWhjJ1cP63Gq0iMrEOHno.jpg"
  },
  {
    name: "Documentary Plus",
    category: "Education",
    image: "https://demmelearning.com/wp-content/uploads/2024/09/history-documentaries-for-kids.jpg"
  },
  {
    name: "Music Hits",
    category: "Music",
    image: "https://photos5.appleinsider.com/gallery/59505-121472-45682-88883-000-lead-Apple-Music-on-LG-xl-xl.jpg"
  }
]

const ChannelPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Popular Live Channels
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Discover thousands of live channels streaming right now. Join millions of viewers
            watching their favorite content in HD quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm"
            >
              <div className="aspect-video relative">
                <img
                  src={channel.image}
                  alt={channel.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-2 right-2 bg-red-600 rounded-full px-2 py-1 text-xs font-bold">
                  LIVE
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{channel.name}</h3>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">{channel.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChannelPreview
