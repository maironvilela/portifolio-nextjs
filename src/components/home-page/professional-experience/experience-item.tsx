"use client"
import { ReckText } from '@/components/shared/rich-text';
import { AnimationEase, AnimationLefToCenter } from '@/lib/framer-motion/animations';
import { ProfessionalExperienceItems } from '@/utils/data-fetch-home-page';
import Image from 'next/image';


type ExperienceItemProps = ProfessionalExperienceItems

export const ExperienceItem = ({ company, companyImage, period, role, description }: ExperienceItemProps) => {

  return (
    <div className="flex gap-7" >
      <AnimationEase transitionDuration={0.5} className="w-10">
        <Image src={companyImage.url} alt='' width={100} height={100} className='rounded-full min-w-10 min-h-10' />
        <div className="h-full w-[1px] bg-gray-100 ml-5" />
      </AnimationEase>



      <AnimationLefToCenter transitionDuration={1}>
        <div className=" flex flex-1 flex-col items-start gap-2">
          <span className="text-gray-300">{role}</span>
          <span className="text-gray-500">{`${company}`}</span>
          <span className="text-gray-500">{period}</span>
          <div className="text-sm text-gray-500 pl-10">
            <ReckText content={description.raw} />
          </div>
        </div>
      </AnimationLefToCenter>


    </div>
  )
}
