"use client"

import { SectionHeader } from "@/components/shared/"
import { ExperienceItem } from "./experience-item"
import { motion } from 'framer-motion';
import { ProfessionalExperienceSection as ProfessionalExperienceProps, } from "@/utils/data-fetch-home-page";


export const ProfessionalExperience = ({ title, titleHeader, message, professionalExperienceItems }: ProfessionalExperienceProps) => {

    return (
        <section className="container flex flex-col gap-5 ">

            <SectionHeader title={title} subTitle={titleHeader} />
            <motion.p className="p-4 text-center text-lg"
                initial={{ opacity: 0, scale: 0.1 }}
                exit={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ ease: "easeOut", duration: 2 }}>
                {message}
            </motion.p>

            <div className="flex flex-col gap-10 p-8  ">

                {professionalExperienceItems.map((item, index) => (
                    <ExperienceItem key={index}
                        company={item.company}
                        companyImage={item.companyImage}
                        description={item.description}
                        period={item.period}
                        role={item.role} />
                ))}
            </div>
        </section >
    )
}
