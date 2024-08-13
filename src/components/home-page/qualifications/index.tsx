"use client"

import { QualificationsItem } from "./qualifications-Item";
import { SectionHeader } from "@/components/shared";
import { QualificationSection } from "@/utils/data-fetch-home-page";
import { AnimationEase } from "@/lib/framer-motion/animations";



export const Qualifications = ({ title, titleHeader, qualificationItems }: QualificationSection) => {

    return (
        <section className="container flex flex-col">

            <SectionHeader title=" Qualificações e Atividades Complementares" subTitle="{ ...cursos }" />


            <div className="flex flex-col gap-8">

                {qualificationItems.map((qualification, index) => (
                    <div key={index}>

                        <AnimationEase transitionDuration={1.5}>
                            <QualificationsItem {...qualification} />
                        </AnimationEase>

                        <AnimationEase transitionDuration={8}

                            className="h-[1px] w-20 m-auto bg-gray-800 shadow-teste p-1" />
                    </div>


                ))}
            </div>



        </section >
    )
}