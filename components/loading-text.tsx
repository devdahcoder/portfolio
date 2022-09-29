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
        <div className="text-center z-50 flex flex-col items-center justify-center text-dark-bg dark:text-white 
            transition-all duration-500 ease-in-out">
                
            <div className="text-4xl small-xs:text-6xl small-large:text-8xl font-seibold capitalize transition-all ease-in-out">
                <p className={`${!props?.isTextCompleted && 'animate-blinker'} transition-all ease-in-out`} ref={props?.loadingTextRefElement}></p>
            </div>

            <motion.div 
                variants={subTextVariant}
                initial="hidden"
                animate={props?.isTextCompleted ? "display" : "hidden" }
                className={`relative text-xs small-large:text-xl
                flex flex-col small-xs:flex-row items-center justify-center text-center font-inter font-medium space-x-7 
                small-xs:before:contents-[] small-xs:before:absolute small-xs:before:right-28 small-large:before:right-44 lg:before:right-0 small-xs:before:top-1/2 small-xs:before:h-4 small-xs:before:rounded-full
                small-xs:before:w-0.5 small-xs:before:bg-black small-xs:before:dark:bg-white small-xs:before:-translate-x-1/2 small-xs:before:-translate-y-1/2
                before:transition-all before:ease-in-out before:duration-500}
            `}>
                <p className="">Junior Software Developer</p> <p>Product Designer</p>
            </motion.div>

        </div>
    )
}

export default LoadingText;