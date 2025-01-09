import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nestor IPTV - Premium Streaming Service',
  description: 'Experience top quality streaming with Nestor IPTV',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <Header />
        {children}
      </body>
    </html>
  )
}