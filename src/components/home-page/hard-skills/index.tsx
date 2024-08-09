"use client"
import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandNodejs,
  TbCodeDots,
} from 'react-icons/tb'
import {
  SiDocker,
  SiExpress,
  SiFastify,
  SiJest,
  SiKnexdotjs,
  SiNestjs,
  SiNextdotjs,
  SiPayloadcms,
  SiPrisma,
  SiPrismic,
  SiReact,
  SiVitest,
} from 'react-icons/si'
import { SkillCard } from './skill-card';
import { SectionHeader } from '@/components/shared';
import { motion } from 'framer-motion';
import { HardSkill } from '@/utils/data-fetch-home-page';



export const HardSkills = ({ title, titleHeader, hardSkillsItems }: HardSkill) => {


  return (
    <section className="container flex flex-col">

      <SectionHeader title={title} subTitle={titleHeader} />

      <div className="flex justify-center gap-3 flex-wrap   ">
        {hardSkillsItems.map((skill, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <SkillCard {...skill} />
            </motion.div>
          )
        })}
      </div>
    </section >
  )
}
