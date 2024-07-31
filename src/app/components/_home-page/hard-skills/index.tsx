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
import { SkillCard } from './skill-card'

export const HardSkills = () => {
  const HARD_SKILLS = [
    {
      description: 'HTML 5',
      icon: <TbBrandHtml5 size={30} />,
      masteryIndex: [true, true, true, true, false],
    },
    {
      description: 'CSS',
      icon: <TbBrandCss3 size={30} />,
      masteryIndex: [true, true, true, false, false],
    },
    {
      description: 'Javascript',
      icon: <TbBrandJavascript size={30} />,
      masteryIndex: [true, true, true, false, false],
    },

    {
      description: 'Typescript',
      icon: <TbBrandTypescript size={30} />,
      masteryIndex: [true, true, true, false, false],
    },
    {
      description: 'NodeJS',
      icon: <TbBrandNodejs size={30} />,
      masteryIndex: [true, true, true, false, false],
    },
    {
      description: 'Jest',
      icon: <SiJest size={30} />,
      masteryIndex: [true, true, true, false, false],
    },
    {
      description: 'Vitest',
      icon: <SiVitest size={30} />,
      masteryIndex: [true, true, true, false, false],
    },
    {
      description: 'Express',
      icon: <SiExpress size={30} />,
      masteryIndex: [true, true, true, false, false],
    },
    {
      description: 'Fastify',
      icon: <SiFastify size={30} />,
      masteryIndex: [true, true, true, false, false],
    },
    {
      description: 'NestJS',
      icon: <SiNestjs size={30} />,
      masteryIndex: [true, true, false, false, false],
    },
    {
      description: 'Knex',
      icon: <SiKnexdotjs size={30} />,
      masteryIndex: [true, true, true, false, false],
    },
    {
      description: 'Prisma',
      icon: <SiPrisma size={30} />,
      masteryIndex: [true, true, true, false, false],
    },
    {
      description: 'Typeorm',
      icon: <TbCodeDots size={30} />,
      masteryIndex: [true, true, true, false, false],
    },
    {
      description: 'Docker',
      icon: <SiDocker size={30} />,
      masteryIndex: [true, true, false, false, false],
    },
    {
      description: 'React',
      icon: <SiReact size={30} />,
      masteryIndex: [true, true, true, false, false],
    },
    {
      description: 'Next',
      icon: <SiNextdotjs size={30} />,
      masteryIndex: [true, true, true, false, false],
    },
    {
      description: 'Prismic',
      icon: <SiPrismic size={30} />,
      masteryIndex: [true, true, true, false, false],
    },

    {
      description: 'hygraph',
      icon: <SiPayloadcms size={30} />,
      masteryIndex: [true, true, false, false, false],
    },
  ]
  return (
    <section>
      <span className="text-emerald-500 font-mono">../competencia</span>
      <h2 className="text-3xl font-bold font-mono">Conhecimentos</h2>
      <div className="flex justify-center gap-3 flex-wrap py-16 ">
        {HARD_SKILLS.map((skill, index) => (
          <SkillCard {...skill} key={index} />
        ))}
      </div>
    </section>
  )
}
