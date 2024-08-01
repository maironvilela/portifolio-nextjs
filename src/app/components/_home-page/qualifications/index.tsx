"use client"

import { FaMedal } from "react-icons/fa";
import { QualificationsItem } from "./qualifications-Item";
import { SectionHeader } from "@/components/shared/sections-header";
import { motion } from 'framer-motion';



export const Qualifications = () => {
    const QUALIFICATIONS = [
        {
            course: "ONE - Oracle Next Education",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, justo sed consectetur mattis, velit dolor condimentum lectus, non fermentum lorem est et enim.",
            status: "Em Andamento",
            workload: "8 horas"
        },
        {
            course: "Formação Node.js (Rocketset)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, justo sed consectetur mattis, velit dolor condimentum lectus, non fermentum lorem est et enim.",
            status: "Em Andamento",
            workload: "8 horas"
        },
        {
            course: "Formação ReactJS (Rocketset)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, justo sed consectetur mattis, velit dolor condimentum lectus, non fermentum lorem est et enim.",
            status: "Em Andamento",
            workload: "8 horas"
        },
        {
            course: "Bootcamp Arquiteto de Software (XPe)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, justo sed consectetur mattis, velit dolor condimentum lectus, non fermentum lorem est et enim.",
            status: "Em Andamento",
            workload: "8 horas"
        },
        {
            course: "Fundamentos do React (Rocketseat)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, justo sed consectetur mattis, velit dolor condimentum lectus, non fermentum lorem est et enim.",
            status: "Concluido em 16/07/2024",
            workload: "8 horas"
        },
        {
            course: "NLW Journey - Reactjs (Rocketseat)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, justo sed consectetur mattis, velit dolor condimentum lectus, non fermentum lorem est et enim.",
            status: "Concluido em 14/07/2024",
            workload: "4 horas"
        },
        {
            course: "Lógica de programação: mergulhe em programação com JavaScript (Alura + One - Oracle Next Education)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, justo sed consectetur mattis, velit dolor condimentum lectus, non fermentum lorem est et enim.",
            status: "Concluido em 23/06/2024",
            workload: "6 horas"
        },
        {
            course: "HTML e CSS: Classes, posicionamento e Flexbox (Alura + One - Oracle Next Education)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, justo sed consectetur mattis, velit dolor condimentum lectus, non fermentum lorem est et enim.",
            status: "Concluido em 21/07/2024",
            workload: "8 horas"
        },
        {
            course: "HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags (Alura + One - Oracle Next Education)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, justo sed consectetur mattis, velit dolor condimentum lectus, non fermentum lorem est et enim.",
            status: "Concluido em 21/07/2024",
            workload: "8 horas"
        },

        {
            course: "ChatGPT: otimizando a qualidade dos resultados (Alura + One - Oracle Next Education)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, justo sed consectetur mattis, velit dolor condimentum lectus, non fermentum lorem est et enim.",
            status: "Concluido em 21/07/2024",
            workload: "8 horas"
        },
        {
            course: "Aprender a aprender: técnicas para seu autodesenvolvimento (Alura + One - Oracle Next Education)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, justo sed consectetur mattis, velit dolor condimentum lectus, non fermentum lorem est et enim.",
            status: "Concluido em 21/07/2024",
            workload: "8 horas"
        },
        {
            course: "Fundamentos do Node.js (Rocketseat)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, justo sed consectetur mattis, velit dolor condimentum lectus, non fermentum lorem est et enim.",
            status: "Concluido em 21/07/2024",
            workload: "8 horas"
        },
        {
            course: "NodeJs, Typescript, TDD, DDD, Clean Architecture e SOLID (4dev - Rodrigo Manguinho) (Rocketseat)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, justo sed consectetur mattis, velit dolor condimentum lectus, non fermentum lorem est et enim.",
            status: "Concluido em 21/07/2024",
            workload: "8 horas"
        },
        {
            course: "GOStack (Rocketset)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, justo sed consectetur mattis, velit dolor condimentum lectus, non fermentum lorem est et enim.",
            status: "Concluido em 21/07/2024",
            workload: "8 horas"
        },
        {
            course: "Ignite ReactJS 2021 (Rocketset)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, justo sed consectetur mattis, velit dolor condimentum lectus, non fermentum lorem est et enim.",
            status: "Concluido em 21/07/2024",
            workload: "8 horas"
        },
        {
            course: "Ignite NodeJS 2022 (Rocketset)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, justo sed consectetur mattis, velit dolor condimentum lectus, non fermentum lorem est et enim.",
            status: "Concluido em 21/07/2024",
            workload: "8 horas"
        },

    ]
    return (
        <section className="container flex flex-col mt-6">

            <SectionHeader title=" Qualificações e Atividades Complementares" subTitle="{ ...cursos }" />


            <div className="flex flex-col gap-8">

                {QUALIFICATIONS.map((qualification, index) => (
                    <motion.div 
                    initial={{ opacity: 0, scale: 0.1 }}
                    exit={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeOut", duration: 2 }}>
                        <QualificationsItem {...qualification} key={index} />
                        <div className="h-[1px] w-20 m-auto bg-gray-800 shadow-teste p-1" />
                    </motion.div>

                ))}
            </div>



        </section >
    )
}