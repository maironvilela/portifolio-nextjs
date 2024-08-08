"use client"

import { SectionHeader } from '@/components/shared'
import { SoftSkillCard } from './soft-skill-card'
import { motion } from 'framer-motion';
import { SoftSkillSection } from '@/utils/data-fetch-home-page';

export const SoftSkill = ({ title, titleHeader, softSkillItems }: SoftSkillSection) => {

  return (
    <section className="container flex flex-col">

      <SectionHeader title={title} subTitle={titleHeader} />



      <div className="flex flex-col items-center ">
        {softSkillItems.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 1, delay: index * 0.1 }}>
            <SoftSkillCard {...skill} reverse={index % 2 == 0} />
          </motion.div>
        ))}
      </div>


    </section>
  )
}
