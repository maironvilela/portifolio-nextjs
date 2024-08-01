"use client"
import { motion } from 'framer-motion';

type SectionHeaderProps = {
    title: string;
    subTitle: string;
}

export const SectionHeader = ({ title, subTitle }: SectionHeaderProps) => {
    return (
        <div className="py-10">
            <div>
                <motion.div className="w-full flex lg:justify-center p-2"
                    initial={{ opacity: 0, scale: 0.1 }}
                    exit={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeOut", duration: 1, delay: 1 }}>
                    <span className="text-emerald-500 font-mono shadow-teste ">{subTitle}</span>
                </motion.div>

                <motion.h2 className="text-3xl font-bold font-mono text-center "
                    initial={{ opacity: 0, scale: 0.1 }}
                    exit={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}> {title} </motion.h2>
            </div >

        </div>
    )
}