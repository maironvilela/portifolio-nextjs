"use client"

import { SectionHeader } from "@/components/shared/sections-header"
import { motion } from 'framer-motion';

export const Education = () => { // precisa criar componente educationItem
    const TITLE = 'Formação Acadêmica'
    const SUBTITLE = '{ ...formação }'

    return (

        <section className="container bg-education-image bg-cover pb-40" >

            <SectionHeader title={TITLE} subTitle={SUBTITLE} />


            <motion.div className="flex flex-col items-center py-6"
                initial={{ opacity: 0, scale: 0.1 }}
                exit={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ ease: "easeOut", duration: 2 }}>
                <strong className="text-lg">
                    Bacharelado em Sistema de Informação
                </strong>
                <strong>
                    Faculdade Cotemig
                </strong>
                <span className="text-gray-400">Conclusão: 2018</span>
            </motion.div>

            <motion.div className="flex flex-col items-center py-6"
                initial={{ opacity: 0, scale: 0.1 }}
                exit={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ ease: "easeOut", duration: 2 }}>
                <strong className="text-lg">
                    Técnico em Informática </strong>
                <strong> Senai / Contagem</strong>
                <span className="text-gray-400">Conclusão: 2011</span>
            </motion.div>
        </section >
    )
}