"use client"

import { FaMedal } from "react-icons/fa";
import { QualificationsItem } from "./qualifications-Item";
import { SectionHeader } from "@/components/shared";
import { motion } from 'framer-motion';
import { QualificationSection } from "@/utils/data-fetch-home-page";



export const Qualifications = ({ title, titleHeader, qualificationItems }: QualificationSection) => {

    return (
        <section className="container flex flex-col mt-6">

            <SectionHeader title=" Qualificações e Atividades Complementares" subTitle="{ ...cursos }" />


            <div className="flex flex-col gap-8">

                {qualificationItems.map((qualification, index) => (
                    <motion.div key={index}
                        initial={{ opacity: 0, scale: 0.1 }}
                        exit={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ ease: "easeOut", duration: 1.5 }}>
                        <QualificationsItem {...qualification} />
                        <div className="h-[1px] w-20 m-auto bg-gray-800 shadow-teste p-1" />
                    </motion.div>

                ))}
            </div>



        </section >
    )
}