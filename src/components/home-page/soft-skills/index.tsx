"use client"

import { SectionHeader } from '@/components/shared'
import { SoftSkillCard } from './soft-skill-card'
import { SoftSkillSection } from '@/utils/data-fetch-home-page';
import { AnimationItems } from '@/lib/framer-motion/animations';

export const SoftSkill = ({ title, titleHeader, softSkillItems }: SoftSkillSection) => {

  return (
    <section className="container flex flex-col">

      <SectionHeader title={title} subTitle={titleHeader} />



      <div className="flex flex-col items-center ">
        {softSkillItems.map((skill, index) => (
          <AnimationItems index={index}
            key={index}>
            <SoftSkillCard {...skill} reverse={index % 2 == 0} />
          </AnimationItems>
        ))}
      </div>


    </section>
  )
}
