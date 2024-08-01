"use client"

import { SectionHeader } from '@/components/shared/sections-header'
import { SoftSkillCard } from './soft-skill-card'
import { motion } from 'framer-motion';

export const SoftSkill = () => {
  const SOFT_SKILLS = [
    {
      description: 'empatia',
      imageUrl: '/assets/images/empatia.png',
    },
    {
      description: 'Inteligencia Emocional',
      imageUrl: '/assets/images/inteligencia-emocional.png',
    },
    {
      description: 'Adaptabilidade',
      imageUrl: '/assets/images/adaptabilidade.png',
    },
    {
      description: 'Comprometimento',
      imageUrl: '/assets/images/comprometimento.png',
    },
    {
      description: 'Flexibilidade',
      imageUrl: '/assets/images/flexibilidade.png',
    },
    {
      description: 'Gestão do Tempo',
      imageUrl: '/assets/images/gestao-tempo.png',
    },
    {
      description: 'Resiliencia',
      imageUrl: '/assets/images/resiliencia.png',
    },
    {
      description: 'Trabalho em Equipe',
      imageUrl: '/assets/images/trabalho-em-equipe.png',
    },
  ]
  return (
    <section className="container flex flex-col">

      <SectionHeader title={'Habilidades Interpessoais e Comportamentais'} subTitle=' { ...soft-skills }' />



      <div className="flex flex-col items-center ">
        {SOFT_SKILLS.map((skill, index) => (
          <motion.div     
          key={index}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1, delay: index * 0.1 }}>
            <SoftSkillCard {...skill} key={index} reverse={index % 2 == 0} />
          </motion.div>
        ))}
      </div>


    </section>
  )
}
