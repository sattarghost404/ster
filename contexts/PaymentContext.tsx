'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

// Define a type for the cart item, including the `name` property
type CartItem = {
  name: string // Add the `name` property here
  price: number
  // You can add other properties here if necessary
}

type PaymentContextType = {
  cart: CartItem[]
  total: number
  paymentMethod: string
  selectedBank: string
  setPaymentMethod: (method: string) => void
  setSelectedBank: (bank: string) => void
  completePayment: () => void
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined)

export const PaymentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([])
  const [total, setTotal] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [selectedBank, setSelectedBank] = useState('')

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCart(savedCart)
    setTotal(
      savedCart.reduce((sum: number, item: CartItem) => sum + item.price, 0)
    )
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
