import { motion } from 'framer-motion'
import React from 'react';
import { useMainContainer } from '../state/main';

type Props = {}

const spanVariant = {
    hidden: (index: number) => ({ 
        y: "-100%", 
        transition: {
            delay: index * 0.4,
            duration: 0.9,
            ease: "circOut",
        }
    }),
    visible: (index: number) => ({ 
        y: 0, 
        transition: {
            delay: index * 0.3,
            duration: 0.7,
            ease: "circOut",
        }
    })
}


const NavigationGrid = (props: Props) => {

    const { navigationModal } = useMainContainer();
    
    return (
        <div className="grid grid-cols-4 absolute left-0 top-0 w-full h-full">
            {[1, 2, 3, 4].map((index: number) => {
                return (
                    <motion.span 
                        key={index}
                        custom={index}
                        variants={spanVariant}
                        initial="hidden"
                        animate={ navigationModal ? "visible" : "hidden"}
                        className="bg-white dark:bg-dark-bg relative 
                    ">
                    </motion.span>
                )
            })}
        </div>
    )
}

export default NavigationGrid