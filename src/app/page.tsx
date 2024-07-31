import Image from 'next/image'
import { Hero } from '@/components/_home-page'
import { HardSkills } from '@/components/_home-page/hard-skills'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HardSkills />
    </div>
  )
}
