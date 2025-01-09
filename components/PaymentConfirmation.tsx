'use client'

import { usePayment } from '@/contexts/PaymentContext'

interface PaymentConfirmationProps {
  onPrev: () => void;
}

export default function PaymentConfirmation({ onPrev }: PaymentConfirmationProps) {
  const { paymentMethod, selectedBank, total, completePayment } = usePayment()

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">Confirm Your Payment</h2>
      <div className="mb-4">
        <p className="text-gray-300">Payment Method: <span className="text-white font-semibold">{paymentMethod === 'paypal' ? 'PayPal' : 'Bank Transfer'}</span></p>
        {paymentMethod === 'bank' && (
          <p className="text-gray-300">Selected Bank: <span className="text-white font-semibold">{selectedBank}</span></p>
        )}
        <p className="text-gray-300 mt-2">Total Amount: <span className="text-red-500 font-semibold">${total.toFixed(2)}</span></p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={onPrev}
          className="bg-gray-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-700 transition duration-300"
        >
          Back
        </button>
        <button
          onClick={completePayment}
          className="bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
        >
          Complete Payment
        </button>
      </div>
    </div>
  )
}
