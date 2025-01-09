'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What is Nestor IPTV?",
    answer: "Nestor IPTV is a premium streaming service that offers thousands of live TV channels, movies, and TV shows from around the world. We provide high-quality streams with 4K and HD options, accessible on multiple devices."
  },
  {
    question: "How many channels does Nestor IPTV offer?",
    answer: "We offer over 25,000 live channels from various countries and categories, including sports, news, entertainment, kids' programming, and more. Our library is constantly updated to ensure you have access to the latest content."
  },
  {
    question: "Can I watch Nestor IPTV on multiple devices?",
    answer: "Yes, Nestor IPTV supports multiple devices. You can watch on smart TVs, smartphones, tablets, computers, and streaming devices like Amazon Fire Stick and Android TV boxes. We offer plans that allow simultaneous streaming on multiple devices."
  },
  {
    question: "Do you offer a trial period?",
    answer: "Yes, we offer a 24-hour free trial so you can experience our service before committing to a subscription. This allows you to test the stream quality and explore our channel lineup."
  },
  {
    question: "Is Nestor IPTV legal?",
    answer: "Nestor IPTV operates in compliance with all relevant laws and regulations. We work directly with content providers to ensure all our streams are properly licensed and authorized."
  }
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-red-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-red-500" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="p-4 bg-gray-800 rounded-b-lg text-gray-300">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

