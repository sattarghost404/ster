'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Trash2 } from 'lucide-react'
import Link from 'next/link'

export default function Cart() {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCart(savedCart)
    calculateTotal(savedCart)
  }, [])

  const calculateTotal = (cartItems) => {
    const newTotal = cartItems.reduce((sum, item) => sum + item.price, 0)
    setTotal(newTotal)
  }

  const removeFromCart = (index) => {
    const newCart = [...cart]
    newCart.splice(index, 1)
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
    calculateTotal(newCart)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white text-center mb-8">Your Cart</h1>
        
        {cart.length === 0 ? (
          <div className="text-center text-gray-400">
            <ShoppingCart className="mx-auto h-16 w-16 mb-4" />
            <p className="text-xl">Your cart is empty</p>
            <Link href="/subscription" className="mt-4 inline-block bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
              Browse Subscriptions
            </Link>
          </div>
        ) : (
          <>
            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-4 pb-4 border-b border-gray-700 last:border-b-0 last:pb-0 last:mb-0">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.name} Plan</h3>
                    <p className="text-gray-400">${item.price.toFixed(2)} / month</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl text-white font-bold">Total</span>
                <span className="text-xl text-red-500 font-bold">${total.toFixed(2)}</span>
              </div>
              <Link href="/payment" className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition duration-300 text-center block">
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </motion.div>
    </div>
  )
}

