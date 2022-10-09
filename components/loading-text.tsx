import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    isTextCompleted: boolean;
    loadingTextRefElement: React.MutableRefObject<HTMLParagraphElement>;
}

const subTextVariant = {
    display: { 
        opacity: 1, 
        transition: {
            delay: 0.3
        }
    },
    hidden: { opacity: 0 }
}

const LoadingText: (props: Props) => JSX.Element = (props: Props) => {
    
    return (
        <div className="text-center z-30 flex flex-col items-center justify-center 
            transition-all duration-500 ease-in-out">
                
            <div className="text-5xl small-xs:text-6xl medium-xs:text-7xl medium-sm:text-8xl font-seibold capitalize transition-all ease-in-out">
                <p className={`${!props?.isTextCompleted && 'animate-blinker'} transition-all ease-in-out`} ref={props?.loadingTextRefElement}></p>
            </div>

            <motion.div 
                variants={subTextVariant}
                initial="hidden"
                animate={props?.isTextCompleted ? "display" : "hidden" }
                className={`relative text-xs small-xs:text-base medium-xs:text-xl
                flex flex-col small-mid:flex-row items-center justify-center text-center font-inter font-medium space-x-0 small-mid:space-x-7
                small-mid:before:contents-[] small-mid:before:absolute small-mid:before:right-32 medium-xs:before:right-44 lg:before:right-0 small-mid:before:top-1/2 small-mid:before:h-4 small-mid:before:rounded-full
                small-mid:before:w-0.5 small-mid:before:bg-black small-mid:before:dark:bg-white small-mid:before:-translate-x-1/2 small-mid:before:-translate-y-1/2
                before:transition-all before:ease-in-out before:duration-500}
            `}>
                <p className="">Awesome Software Developer</p> <p>Product Designer</p>
            </motion.div>

        </div>
    )
}

export default LoadingText;