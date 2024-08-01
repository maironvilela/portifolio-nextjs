"use client"

import { motion } from 'framer-motion';


type ExperienceItemProps = {
  icon: JSX.Element,
  company: string,
  position: string,
  description: string
  startDate: Date
  endDate: Date

}

export const ExperienceItem = ({ icon, company, position, description, startDate }: ExperienceItemProps) => {
  const formattedDate = "Jan/2022 a Abr/2023 - (13 meses)"


  return (
    <div className="flex gap-7" >

      <div className="w-10">
        <div className="rounded-lg">
          {icon}
        </div>
        <div className="h-full w-[1px] bg-gray-100 ml-6" />

      </div>

      <motion.div className=" flex flex-1 flex-col items-start gap-2"
         initial={{ opacity: 0, x: -100 }}
         whileInView={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: -100 }}
         transition={{ duration: 1, delay: 0.5 }}>
        <span className="text-gray-500">{`@ ${company}`}</span>
        <span className="text-gray-300">{position}</span>
        <span className="text-gray-500">{formattedDate}</span>
        <p className="text-gray-400">{description}</p>
      </motion.div>
    </div>
  )
}
