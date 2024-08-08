import Image from 'next/image'
import { SoftSkillItem } from '@/utils/data-fetch-home-page'

type SoftSkillCardProps = SoftSkillItem & {
  reverse: boolean
}

export const SoftSkillCard = ({
  softSkill,
  image,
  reverse,
}: SoftSkillCardProps) => {
  return (
    <div
      className={`flex gap-2 w-[300px] md:w-[550px] lg:w-[600px] items-center h-28 rounded-lg   ${reverse ? 'flex-row-reverse' : 'flex-row '}`}
    >
      <Image src={image.url} width={100} height={100} alt="" />
      <span className="text-emerald-500 font-mono font-bold text-lg">{softSkill}</span>
    </div>
  )
}

{

}
