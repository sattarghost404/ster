'use client'

import { usePayment } from '@/contexts/PaymentContext'

interface OrderSummaryProps {
  onNext: () => void;
}

export default function OrderSummary({ onNext }: OrderSummaryProps) {
  const { cart, total } = usePayment()

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">Order Summary</h2>
      {cart.map((item, index) => (
        <div key={index} className="flex justify-between items-center mb-2">
          <span className="text-gray-300">{item.name} Plan</span>
          <span className="text-white font-bold">${item.price.toFixed(2)}</span>
        </div>
      ))}
      <div className="border-t border-gray-600 mt-4 pt-4">
        <div className="flex justify-between items-center">
          <span className="text-xl text-white font-bold">Total</span>
          <span className="text-xl text-red-500 font-bold">${total.toFixed(2)}</span>
        </div>
      </div>
      <button
        onClick={onNext}
        className="w-full mt-6 bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
      >
        Proceed to Payment
      </button>
    </div>
  )
}
