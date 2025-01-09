'use client'

import { useState, useEffect } from 'react'
import { usePayment } from '@/contexts/PaymentContext'
import { CreditCard } from 'lucide-react'
import Image from 'next/image'

export default function PaymentMethod({ onNext, onPrev }) {
  const { setPaymentMethod } = usePayment()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleMethodSelection = (method) => {
    setPaymentMethod(method)
    onNext()
  }

  if (!isClient) {
    return null // or a loading placeholder
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">Choose Payment Method</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={() => handleMethodSelection('paypal')}
          className="p-4 rounded-lg flex items-center justify-center bg-gray-700 hover:bg-blue-600 transition-colors"
        >
          <Image 
            src="/images/paypal-logo.png"
            alt="PayPal" 
            width={40} 
            height={40} 
          />
        </button>
        <button
          onClick={() => handleMethodSelection('bank')}
          className="p-4 rounded-lg flex items-center justify-center bg-gray-700 hover:bg-green-600 transition-colors"
        >
          <CreditCard className="h-8 w-8 mr-2" />
          <span className="text-white font-semibold">Bank Transfer</span>
        </button>
      </div>
      <div className="flex justify-between">
        <button
          onClick={onPrev}
          className="bg-gray-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-700 transition duration-300"
        >
          Back
        </button>
      </div>
    </div>
  )
}

