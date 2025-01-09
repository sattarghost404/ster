'use client'

import { usePayment } from '@/contexts/PaymentContext'
import Image from 'next/image'

const moroccanBanks = [
  { name: 'Attijariwafa Bank', logo: '/images/attijariwafa-bank.png' },
  { name: 'Banque Populaire', logo: '/images/banque-populaire.png' },
  { name: 'Bank Of Africa', logo: '/images/bmce-bank.png' },
  { name: 'Société Générale Maroc', logo: '/images/societe-generale.png' },
  { name: 'CIH Bank', logo: '/images/cih-bank.png' },
  { name: 'Crédit Agricole du Maroc', logo: '/images/credit-agricole.png' },
]

export default function BankSelection({ onNext, onPrev }) {
  const { selectedBank, setSelectedBank } = usePayment()

  const handleBankSelection = (bank) => {
    setSelectedBank(bank)
    onNext()
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">Select Your Bank</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        {moroccanBanks.map((bank) => (
          <button
            key={bank.name}
            onClick={() => handleBankSelection(bank.name)}
            className="p-2 rounded-lg flex flex-col items-center justify-center bg-gray-700 hover:bg-green-600 transition-colors"
          >
            <Image src={bank.logo} alt={bank.name} width={80} height={40} className="mb-2" />
            <span className="text-white text-sm">{bank.name}</span>
          </button>
        ))}
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

