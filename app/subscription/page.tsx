'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

const plans = [
  {
    name: "Basic",
    price: 9.99,
    features: [
      { name: "5,000+ Live TV Channels", included: true },
      { name: "10,000+ Movies & TV Shows", included: true },
      { name: "7-day Catch-up", included: true },
      { name: "HD Quality", included: true },
      { name: "2 Devices Simultaneously", included: true },
      { name: "Premium Sports Channels", included: false },
      { name: "4K Quality", included: false },
      { name: "Adult Channels", included: false },
      { name: "Priority Support", included: false },
    ]
  },
  {
    name: "Standard",
    price: 19.99,
    popular: true,
    features: [
      { name: "10,000+ Live TV Channels", included: true },
      { name: "20,000+ Movies & TV Shows", included: true },
      { name: "14-day Catch-up", included: true },
      { name: "HD & 4K Quality", included: true },
      { name: "4 Devices Simultaneously", included: true },
      { name: "Premium Sports Channels", included: true },
      { name: "Adult Channels", included: false },
      { name: "Priority Support", included: false },
    ]
  },
  {
    name: "Premium",
    price: 29.99,
    features: [
      { name: "25,000+ Live TV Channels", included: true },
      { name: "50,000+ Movies & TV Shows", included: true },
      { name: "30-day Catch-up", included: true },
      { name: "HD & 4K Quality", included: true },
      { name: "Unlimited Devices", included: true },
      { name: "Premium Sports Channels", included: true },
      { name: "Adult Channels", included: true },
      { name: "Priority Support", included: true },
    ]
  }
]

const FeatureRow = ({ feature, included }) => (
  <li className="flex items-center space-x-3">
    {included ? (
      <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
    ) : (
      <X className="flex-shrink-0 w-5 h-5 text-red-500" />
    )}
    <span className={`text-base ${included ? 'text-gray-200' : 'text-gray-400'}`}>{feature}</span>
  </li>
)

export default function Subscription() {
  const [hoveredPlan, setHoveredPlan] = useState(null)
  const router = useRouter()

  const addToCart = (plan) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    cart.push(plan)
    localStorage.setItem('cart', JSON.stringify(cart))
    router.push('/cart')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Choose Your Perfect Plan</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Unlock a world of entertainment with our flexible subscription options.
            Find the perfect plan that suits your viewing needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 ${
                hoveredPlan === index ? 'scale-105 z-10' : 'scale-100 z-0'
              }`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              <div className="px-6 py-8">
                <h2 className="text-3xl font-bold text-white mb-2">{plan.name}</h2>
                <p className="text-5xl font-bold text-red-500 mb-6">
                  ${plan.price}
                  <span className="text-lg text-gray-400">/month</span>
                </p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <FeatureRow key={featureIndex} feature={feature.name} included={feature.included} />
                  ))}
                </ul>
                <button 
                  className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition duration-300 transform hover:scale-105"
                  onClick={() => addToCart(plan)}
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Not sure which plan to choose?</h3>
          <p className="text-gray-300 mb-6">
            Try our 7-day free trial and experience the full Premium package. No commitment, cancel anytime.
          </p>
          <button className="bg-white text-gray-900 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            Start Free Trial
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}

