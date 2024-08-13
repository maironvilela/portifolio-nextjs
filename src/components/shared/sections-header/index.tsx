"use client"
import { AnimationEase } from '@/lib/framer-motion/animations';

type SectionHeaderProps = {
    title: string;
    subTitle: string;
}

export const SectionHeader = ({ title, subTitle }: SectionHeaderProps) => {
    return (
        <div className="w-full ">
            <div className="w-full lg:flex lg:justify-center">
                <AnimationEase transitionDuration={1} transitionDelay={1}>
                    <span className="text-emerald-500 font-mono shadow-teste  ">{subTitle}</span>
                </AnimationEase>
            </div>

            <AnimationEase transitionDuration={1} className="items-center flex flex-col justify-center">
                <h2 className="text-3xl font-bold font-mono text-center pb-8 w-[80%]" >
                    {title}
                </h2>
            </AnimationEase>

        </div >

    )
}