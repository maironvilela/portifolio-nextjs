"use client"

import { SkillCard } from './skill-card';
import { SectionHeader } from '@/components/shared';
import { HardSkill } from '@/utils/data-fetch-home-page';
import { AnimationItems } from '@/lib/framer-motion/animations';



export const HardSkills = ({ title, titleHeader, hardSkillsItems }: HardSkill) => {


  return (
    <section className="container flex flex-col">

      <SectionHeader title={title} subTitle={titleHeader} />

      <div className="flex justify-center gap-3 flex-wrap ">


        {hardSkillsItems.map((skill, index) => {
          return (
            <AnimationItems key={index} index={index}>
              <SkillCard {...skill} />
            </AnimationItems>
          )
        })}
      </div>
    </section >
  )
}
