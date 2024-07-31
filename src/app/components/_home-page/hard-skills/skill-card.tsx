import { TbBrandHtml5, TbStar, TbStarFilled } from 'react-icons/tb'

export type SkillCardProps = {
  description: string
  icon: JSX.Element
  masteryIndex: boolean[]
}
export const SkillCard = ({
  description,
  icon,
  masteryIndex,
}: SkillCardProps) => {
  const check = true
  return (
    <div className="flex justify-between w-[250px] bg-gray-900 opacity-80 p-6">
      <div className="space-y-2">
        <strong className="text-gray-500 hover:text-gray-100 ease-in duration-300">
          {description}
        </strong>
        <div className="flex text-gray-600 hover:text-yellow-300 ease-in duration-300">
          {masteryIndex.map((mastery) => {
            return mastery ? <TbStarFilled /> : <TbStar />
          })}
        </div>
      </div>
      <div className="styles-icons">{icon}</div>
    </div>
  )
}
