import Image from 'next/image'
import { Hero } from '@/components/_home-page'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
    </div>
  )
}
