'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type PaymentContextType = {
  cart: any[]
  total: number
  paymentMethod: string
  selectedBank: string
  setPaymentMethod: (method: string) => void
  setSelectedBank: (bank: string) => void
  completePayment: () => void
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined)

export const PaymentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [selectedBank, setSelectedBank] = useState('')

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCart(savedCart)
    setTotal(savedCart.reduce((sum, item) => sum + item.price, 0))
  }, [])

  const completePayment = () => {
    // Handle payment completion logic here
    localStorage.removeItem('cart')
    alert('Payment successful! Thank you for your purchase.')
    // Reset state
    setCart([])
    setTotal(0)
    setPaymentMethod('')
    setSelectedBank('')
  }

  return (
    <PaymentContext.Provider
      value={{
        cart,
        total,
        paymentMethod,
        selectedBank,
        setPaymentMethod,
        setSelectedBank,
        completePayment
      }}
    >
      {children}
    </PaymentContext.Provider>
  )
}

export const usePayment = () => {
  const context = useContext(PaymentContext)
  if (context === undefined) {
    throw new Error('usePayment must be used within a PaymentProvider')
  }
  return context
}

