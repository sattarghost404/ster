import Hero from '@/components/Hero'
import ChannelPreview from '@/components/ChannelPreview'
import Reviews from '@/components/Reviews'
import Stats from '@/components/Stats'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Stats />
      <ChannelPreview />
      <Reviews />
      <FAQ />
    </main>
  )
}

