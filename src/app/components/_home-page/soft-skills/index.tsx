import { SoftSkillCard } from './soft-skill-card'

export const SoftSkill = () => {
  const SOFT_SKILLS = [
    {
      description: 'empatia',
      imageUrl: '/assets/images/empatia.png',
    },
    {
      description: 'inteligencia-emocional',
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
    <section className="flex flex-col items-center">
      <span className="section-sub-title text-center px-4 shadow-teste ">
        ../soft-skills
      </span>
      <h2 className="container section-title text-center  ">
        Habilidades Interpessoais e Comportamentais
      </h2>

      {SOFT_SKILLS.map((skill, index) => (
        <>
          <SoftSkillCard {...skill} key={index} reverse={index % 2 == 0} />
        </>
      ))}
    </section>
  )
}
