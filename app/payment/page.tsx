'use client'

import { PaymentProvider } from '@/contexts/PaymentContext'
import PaymentSteps from '@/components/PaymentSteps'

export default function Payment() {
  return (
    <PaymentProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Complete Your Payment</h1>
          <PaymentSteps />
        </div>
      </div>
    </PaymentProvider>
  )
}

