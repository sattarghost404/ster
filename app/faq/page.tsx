'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What is Nestor IPTV?",
    answer: "Nestor IPTV is a premium streaming service that offers access to over 25,000 live TV channels, movies, and TV shows from around the world. We provide high-quality streams with 4K and HD options, accessible on multiple devices."
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
    answer: "Yes, we offer a 7-day free trial so you can experience our service before committing to a subscription. This allows you to test the stream quality and explore our channel lineup."
  },
  {
    question: "Is Nestor IPTV legal?",
    answer: "Nestor IPTV operates in compliance with all relevant laws and regulations. We work directly with content providers to ensure all our streams are properly licensed and authorized."
  },
  {
    question: "What kind of internet speed do I need?",
    answer: "For the best streaming experience, we recommend a minimum internet speed of 10 Mbps for HD content and 25 Mbps for 4K content. However, our adaptive streaming technology allows for smooth playback even on slower connections."
  },
  {
    question: "How often is the content updated?",
    answer: "Our content is updated daily. We constantly add new channels, movies, and TV shows to keep our library fresh and exciting for our subscribers."
  },
  {
    question: "Can I record live TV or use time-shift?",
    answer: "Yes, our service includes a cloud DVR feature that allows you to record live TV. We also offer a catch-up feature that lets you watch programs that aired in the last 7-30 days, depending on your subscription plan."
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-4"
          >
            <button
              className="flex justify-between items-center w-full text-left p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <span className="font-semibold text-white">{faq.question}</span>
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
      </motion.div>
    </div>
  )
}
