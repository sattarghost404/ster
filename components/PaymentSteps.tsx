'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePayment } from '@/contexts/PaymentContext'
import OrderSummary from './OrderSummary'
import PaymentMethod from './PaymentMethod'
import BankSelection from './BankSelection'
import PaymentConfirmation from './PaymentConfirmation'

const steps = ['Order Summary', 'Payment Method', 'Bank Selection', 'Confirmation']

export default function PaymentSteps() {
  const [currentStep, setCurrentStep] = useState(0)
  const { paymentMethod } = usePayment()

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <OrderSummary onNext={nextStep} />
      case 1:
        return <PaymentMethod onNext={nextStep} onPrev={prevStep} />
      case 2:
        return paymentMethod === 'bank' ? (
          <BankSelection onNext={nextStep} onPrev={prevStep} />
        ) : (
          <PaymentConfirmation onPrev={prevStep} />
        )
      case 3:
        return <PaymentConfirmation onPrev={prevStep} />
      default:
        return null
    }
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex justify-between mb-8">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`flex flex-col items-center ${
              index <= currentStep ? 'text-red-500' : 'text-gray-500'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index <= currentStep ? 'bg-red-500 text-white' : 'bg-gray-700'
              }`}
            >
              {index + 1}
            </div>
            <span className="mt-2 text-sm">{step}</span>
          </div>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

