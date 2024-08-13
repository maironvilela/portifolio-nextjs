"use client"

import { SectionHeader } from "@/components/shared"
import { AnimationEase } from "@/lib/framer-motion/animations";
import { Education as EducationProps, QualificationItem } from "@/utils/data-fetch-home-page";





export const Education = ({ title, titleHeader, educationItems }: EducationProps) => {

    return (

        <section className="container bg-education-image bg-cover " >

            <SectionHeader title={title} subTitle={titleHeader} />

            <div className="space-y-6">
                {
                    educationItems.map((item, index) => {
                        return (
                            <AnimationEase key={index} transitionDuration={1}
                                className="flex flex-col items-center ">
                                <strong className="text-lg font-bold">
                                    {item.course}
                                </strong>
                                <strong className="text-gray-300 font-semibold">
                                    {item.school}
                                </strong>
                                <span className="text-gray-300">Conclusão: {item.yearOfCompletion}
                                </span>
                            </AnimationEase>
                        )
                    })
                }
            </div >



        </section >
    )
}