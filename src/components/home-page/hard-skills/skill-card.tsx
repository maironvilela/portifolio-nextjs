import { CMSIcon } from '@/components/shared/cms-icon'
import { TbBrandHtml5, TbStar, TbStarFilled } from 'react-icons/tb'

export type SkillCardProps = {
  technology: string
  masteryOfTechnology: "iniciante" | 'basico' | 'intermediario' | 'avancado' | 'mestre'
  iconSvg: string
}
export const SkillCard = ({
  technology,
  masteryOfTechnology,
  iconSvg,
}: SkillCardProps) => {


  const proficiency = {
    iniciante: <> <TbStarFilled /> <TbStar /> <TbStar /> <TbStar /> <TbStar /></>,
    basico: <> <TbStarFilled /> <TbStarFilled /> <TbStar /> <TbStar /> <TbStar /></>,
    intermediario: <> <TbStarFilled /> <TbStarFilled /> <TbStarFilled /> <TbStar /> <TbStar /></>,
    avancado: <> <TbStarFilled /> <TbStarFilled /> <TbStarFilled /> <TbStarFilled /> <TbStar /></>,
    mestre: <> <TbStarFilled /> <TbStarFilled /> <TbStarFilled /> <TbStarFilled /> <TbStarFilled /></>,
  }

  const item = String(masteryOfTechnology).trim() as "iniciante" | 'basico' | 'intermediario' | 'avancado' | 'mestre'



  return (
    <div className="flex justify-between w-[250px] bg-gray-900 opacity-80 p-6 hover:shadow-teste ">
      <div className="space-y-2">
        <strong className="text-gray-500 hover:text-gray-100 ease-in duration-300">
          {technology}
        </strong>
        <div className="flex text-gray-600 hover:text-yellow-300 ease-in duration-300">
          {proficiency[item]}
        </div>
      </div>
      <div className="styles-icons"><CMSIcon icon={iconSvg} section='icon-svg-hard-skills' /></div>
    </div>
  )
}
