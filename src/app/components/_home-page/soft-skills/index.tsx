import { SectionHeader } from '@/components/shared/sections-header'
import { SoftSkillCard } from './soft-skill-card'

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
          <>
            <SoftSkillCard {...skill} key={index} reverse={index % 2 == 0} />
          </>
        ))}
      </div>


    </section>
  )
}
