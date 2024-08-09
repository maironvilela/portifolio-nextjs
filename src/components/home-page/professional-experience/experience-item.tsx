"use client"
import { ReckText } from '@/components/shared/rich-text';
import { ProfessionalExperienceItems } from '@/utils/data-fetch-home-page';
import { motion } from 'framer-motion';
import Image from 'next/image';


type ExperienceItemProps = ProfessionalExperienceItems

export const ExperienceItem = ({ company, companyImage, period, role, description }: ExperienceItemProps) => {
  const formattedDate = "Jan/2022 a Abr/2023 - (13 meses)"


  return (
    <div className="flex gap-7" >

      <motion.div className="w-10"
        initial={{ opacity: 0, scale: 0.1 }}
        exit={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}

      >
        <Image src={companyImage.url} alt='' width={50} height={50} className='rounded-full' />
        <motion.div className="h-full w-[1px] bg-gray-100 ml-5" />

      </motion.div>

      <motion.div className=" flex flex-1 flex-col items-start gap-2"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 1, delay: 0.5 }}>
        <span className="text-gray-300">{role}</span>
        <span className="text-gray-500">{`${company}`}</span>
        <span className="text-gray-500">{period}</span>
        <div className="text-sm text-gray-500 pl-10">
          <ReckText content={description.raw} />
        </div>


      </motion.div>
    </div>
  )
}
