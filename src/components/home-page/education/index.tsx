"use client"

import { SectionHeader } from "@/components/shared"
import { Education as EducationProps, QualificationItem } from "@/utils/data-fetch-home-page";
import { motion } from 'framer-motion';





export const Education = ({ title, titleHeader, educationItems }: EducationProps) => { // precisa criar componente educationItem

    return (

        <section className="container bg-education-image bg-cover pb-40 space-y-8" >

            <SectionHeader title={title} subTitle={titleHeader} /> {/*  TODO: mudar subTitle para  titleHeader */}

            <div className="space-y-6">
                {educationItems.map((item, index) => {
                    return (
                        <motion.div key={index}
                            className="flex flex-col items-center "
                            initial={{ opacity: 0, scale: 0.1 }}
                            exit={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ ease: "easeOut", duration: 1 }}>
                            <strong className="text-lg">
                                {item.course}
                            </strong>
                            <strong>
                                {item.school}
                            </strong>
                            <span className="text-gray-400">Conclusão:{item.yearOfCompletion}
                            </span>
                        </motion.div>
                    )
                })}
            </div>



        </section >
    )
}