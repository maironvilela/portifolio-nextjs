import { motion } from 'framer-motion';
import React, { HTMLAttributes, ReactNode } from 'react';

//extends ButtonHTMLAttributes<HTMLButtonElement> 
interface AnimationEaseProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: ReactNode
    transitionDuration?: number
    transitionDelay?: number
}
export function AnimationEase({ transitionDuration = 2, transitionDelay = 0, children, className }: AnimationEaseProps) {
    return (
        <motion.div className={`${className}`}
            initial={{ opacity: 0, scale: 0.1 }}
            exit={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeOut", duration: transitionDuration, delay: transitionDelay }}>

            {children}

        </motion.div>
    )
}


type AnimationItemsProps = {
    children: ReactNode
    index: number
}
export function AnimationItems({ index, children }: AnimationItemsProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}>
            {children}
        </motion.div>
    )
}


interface AnimationLefToCenterProps {
    children: ReactNode
    transitionDuration?: number
}
export function AnimationLefToCenter({ transitionDuration = 2, children }: AnimationLefToCenterProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: transitionDuration }}
        >
            {children}
        </motion.div>
    )

}


