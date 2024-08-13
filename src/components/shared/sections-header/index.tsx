"use client"
import { AnimationEase } from '@/lib/framer-motion/animations';

type SectionHeaderProps = {
    title: string;
    subTitle: string;
}

export const SectionHeader = ({ title, subTitle = "FRONT_END" }: SectionHeaderProps) => {
    return (
        <div className="w-full ">

            <AnimationEase className="w-full flex md:justify-center" transitionDuration={1} transitionDelay={1}>
                <span className="text-emerald-500 font-mono shadow-teste ml-4  ">{subTitle || '{...FRONT_END}'}</span>
            </AnimationEase>


            <AnimationEase transitionDuration={1}>
                <h2 className="text-3xl font-bold font-mono text-center pb-8 px-12 " >
                    {title}
                </h2>
            </AnimationEase>

        </div >

    )
}