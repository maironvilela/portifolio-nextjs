import Image from 'next/image'
import { SoftSkill } from './index'

type SoftSkillCardProps = {
  description: string
  imageUrl: string
  reverse: boolean
}

export const SoftSkillCard = ({
  description,
  imageUrl,
  reverse,
}: SoftSkillCardProps) => {
  return (
    <div
      className={`flex items-center g-2 w-72 h-28  rounded-lg  ${
        reverse ? 'flex-row-reverse' : 'flex-row '
      }`}
    >
      <Image src={imageUrl} width={100} height={100} alt="" />
      <span>{description}</span>
    </div>
  )
}

{
  /*    <div className="flex items-center g-2 w-72 h-28  rounded-lg bg-gradient-to-r from-gray-800 to-transparent  shadow-teste {{ reverse ?   'flex-row-reverse' : 'flex-row '}}}">
   */
}
