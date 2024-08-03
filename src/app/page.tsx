import Image from 'next/image'
import { Hero, HardSkills, SoftSkill , ProfessionalExperience, Education, Qualifications} from '@/components/home-page'
 

export default function Home() {
  return (
    <div className="flex flex-col">

      <Hero />
      <Education />
      <HardSkills />
      <SoftSkill />
      <Qualifications />
      <ProfessionalExperience />
    </div>
  )
}
