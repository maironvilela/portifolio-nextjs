"use client"

import { SectionHeader } from "@/components/shared"
import { ExperienceItem } from "./experience-item"
import { ProfessionalExperienceSection as ProfessionalExperienceProps, } from "@/utils/data-fetch-home-page";
import { AnimationEase } from "@/lib/framer-motion/animations";


export const ProfessionalExperience = ({ title, titleHeader, message, professionalExperienceItems }: ProfessionalExperienceProps) => {

    return (
        <section className="container flex flex-col gap-5 ">

            <SectionHeader title={title} subTitle={titleHeader} />

            <AnimationEase transitionDuration={2}>
                <p className="p-4 text-center text-lg" >
                    {message}
                </p>
            </AnimationEase>

            <div className="flex flex-col gap-10 pt-8 ">

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
