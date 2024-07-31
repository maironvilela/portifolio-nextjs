import Image from 'next/image'
import { Hero } from '@/components/_home-page'
import { HardSkills } from '@/components/_home-page/hard-skills'
import { SoftSkill } from './components/_home-page/soft-skills'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HardSkills />
      <SoftSkill />
    </div>
  )
}
